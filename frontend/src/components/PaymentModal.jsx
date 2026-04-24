import { useState, useEffect } from "react";

export function PaymentModal({ total, items, customer, onClose, onSuccess, darkMode }) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("init"); // init | success | error
  const [orderId, setOrderId] = useState("");
  
  const bg = darkMode ? "rgba(6,14,26,0.97)" : "rgba(255,255,255,0.97)";

  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    setLoading(true);
    const res = await loadRazorpay();

    if (!res) {
      alert("Razorpay SDK failed to load.");
      setLoading(false);
      return;
    }

    try {
      const backendUrl = `http://${window.location.hostname}:5000`;
      const response = await fetch(`${backendUrl}/api/payment/create-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: total,
          items: items,
          customerName: customer.name,
          customerPhone: customer.phone,
          tableNumber: customer.table
        })
      });

      const data = await response.json();

      if (!data.success) {
        alert("Server error: " + data.message);
        setLoading(false);
        return;
      }

      const options = {
        key: "rzp_test_ShEBCoo6KQSMXJ", 
        amount: data.order.amount,
        currency: data.order.currency,
        name: "Pizza Dome",
        description: "Order Confirmation",
        order_id: data.order.id,
        handler: async function (response) {
          const verifyRes = await fetch(`${backendUrl}/api/payment/verify`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature
            })
          });

          const verifyData = await verifyRes.json();
          if (verifyData.success) {
            setOrderId(response.razorpay_order_id);
            setStatus("success");
          } else {
            alert("Verification failed");
          }
        },
        prefill: { name: customer.name, contact: customer.phone },
        theme: { color: "#1a8fd1" }
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handlePayment();
  }, []);

  if (status === "success") {
    return (
      <div style={{ position: "fixed", inset: 0, zIndex: 700, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.8)", backdropFilter: "blur(12px)" }}>
        <div style={{ background: bg, borderRadius: 28, padding: "32px", textAlign: "center", maxWidth: 400, width: "90%", boxShadow: "0 24px 60px rgba(0,0,0,0.3)" }}>
          <div style={{ fontSize: 60, marginBottom: 16 }}>🍕</div>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 900, color: "#1a8fd1", margin: 0 }}>Order Confirmed!</h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: darkMode ? "#7aaecf" : "#5a8aaa", marginTop: 8 }}>Enjoy your meal at <strong>Pizza Dome</strong></p>
          
          <div style={{ margin: "24px 0", padding: "16px", background: darkMode ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)", borderRadius: 16, textAlign: "left" }}>
            <div style={{ fontSize: 11, fontWeight: 800, color: "#1a8fd1", letterSpacing: 1, marginBottom: 12, textTransform: "uppercase" }}>Receipt Summary</div>
            {items.map((item, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, fontSize: 14, color: darkMode ? "#e8f4fd" : "#0a3d62" }}>
                <span>{item.name} x{item.qty}</span>
                <span style={{ fontWeight: 700 }}>₹{item.total}</span>
              </div>
            ))}
            <div style={{ marginTop: 12, paddingTop: 12, borderTop: `1px dashed ${darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`, display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontWeight: 800, color: darkMode ? "#fff" : "#0a3d62" }}>Total Paid</span>
              <span style={{ fontWeight: 900, color: "#1a8fd1", fontSize: 18 }}>₹{total}</span>
            </div>
          </div>

          <div style={{ fontSize: 11, color: darkMode ? "#5a8aaa" : "#8aaac0", marginBottom: 24 }}>Order ID: {orderId}</div>
          
          <button onClick={onSuccess} style={{ width: "100%", background: "linear-gradient(135deg,#1a8fd1,#0d6eac)", color: "#fff", border: "none", borderRadius: 14, padding: "14px", fontFamily: "'Syne', sans-serif", fontWeight: 800, cursor: "pointer" }}>Close & Order More</button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 700, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.8)", backdropFilter: "blur(10px)" }}>
      <div style={{ textAlign: "center", color: "#fff" }}>
        <div style={{ fontSize: 72, animation: "spin 1.5s linear infinite" }}>🍕</div>
        <h3 style={{ fontFamily: "'Syne', sans-serif", marginTop: 24 }}>{loading ? "Initializing Razorpay..." : "Payment in Progress..."}</h3>
        <button onClick={onClose} style={{ marginTop: 24, background: "none", border: "1px solid rgba(255,255,255,0.3)", color: "#fff", padding: "8px 20px", borderRadius: 99, cursor: "pointer" }}>Cancel</button>
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
