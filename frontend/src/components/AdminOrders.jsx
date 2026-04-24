import { useState, useEffect } from "react";
import { useIsMobile } from "../hooks/useIsMobile";

export function AdminOrders({ darkMode, onClose }) {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const isMobile = useIsMobile();

  const fetchOrders = async () => {
    try {
      const backendUrl = `http://${window.location.hostname}:5000`;
      const res = await fetch(`${backendUrl}/api/orders`);
      const data = await res.json();
      setOrders(data);
    } catch (err) {
      console.error("Failed to fetch orders", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
    const interval = setInterval(fetchOrders, 30000); // Auto-refresh every 30s
    return () => clearInterval(interval);
  }, []);

  const bg = darkMode ? "#060e1a" : "#fff";

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 800, background: darkMode ? "rgba(0,0,0,0.85)" : "rgba(0,0,0,0.5)", backdropFilter: "blur(10px)", display: "flex", justifyContent: "center", alignItems: "center", padding: isMobile ? 0 : 20 }}>
      <div style={{ width: "100%", maxWidth: 1000, height: isMobile ? "100%" : "90vh", background: bg, borderRadius: isMobile ? 0 : 24, display: "flex", flexDirection: "column", overflow: "hidden", boxShadow: "0 24px 80px rgba(0,0,0,0.4)" }}>
        
        {/* Header */}
        <div style={{ padding: "24px", borderBottom: `1px solid ${darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 900, fontSize: 24, color: darkMode ? "#fff" : "#0a3d62", margin: 0 }}>📋 Live Order History</h2>
            <div style={{ fontSize: 13, color: "#1a8fd1", marginTop: 4 }}>Total Orders: {orders.length}</div>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <button onClick={() => window.open(`http://${window.location.hostname}:5000/api/orders/export`)} style={{ background: "#2ecc71", color: "#fff", border: "none", borderRadius: 12, padding: "10px 16px", fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>📥 Export Excel</button>
            <button onClick={onClose} style={{ background: darkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)", border: "none", borderRadius: "50%", width: 40, height: 40, cursor: "pointer", fontSize: 20, color: darkMode ? "#fff" : "#0a3d62" }}>×</button>
          </div>
        </div>

        {/* List */}
        <div style={{ flex: 1, overflowY: "auto", padding: "20px" }}>
          {loading ? (
            <div style={{ textAlign: "center", padding: 60, color: darkMode ? "#7aaecf" : "#5a8aaa" }}>Loading Orders...</div>
          ) : orders.length === 0 ? (
            <div style={{ textAlign: "center", padding: 60, color: darkMode ? "#7aaecf" : "#5a8aaa" }}>No orders yet. 🍕</div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {orders.map(o => (
                <div key={o._id} style={{ background: darkMode ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)", border: `1px solid ${darkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"}`, borderRadius: 16, padding: "18px", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr", gap: 16 }}>
                  <div>
                    <div style={{ fontSize: 12, color: "#1a8fd1", fontWeight: 800, textTransform: "uppercase", marginBottom: 6 }}>Customer</div>
                    <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, color: darkMode ? "#fff" : "#0a3d62" }}>{o.customerName}</div>
                    <div style={{ fontSize: 13, color: darkMode ? "#7aaecf" : "#5a8aaa" }}>{o.customerPhone}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 12, color: "#1a8fd1", fontWeight: 800, textTransform: "uppercase", marginBottom: 6 }}>Order Items</div>
                    <div style={{ fontSize: 14, color: darkMode ? "#e8f4fd" : "#0a3d62", lineHeight: 1.5 }}>
                      {o.items.map((i, idx) => (
                        <div key={idx}>{i.name} (x{i.quantity})</div>
                      ))}
                    </div>
                  </div>
                  <div style={{ textAlign: isMobile ? "left" : "right" }}>
                    <div style={{ fontSize: 12, color: "#1a8fd1", fontWeight: 800, textTransform: "uppercase", marginBottom: 6 }}>Status</div>
                    <div style={{ fontSize: 22, fontWeight: 900, color: darkMode ? "#fff" : "#0a3d62" }}>₹{o.totalAmount}</div>
                    <div style={{ fontSize: 12, color: darkMode ? "#5a8aaa" : "#8aaac0", marginTop: 4 }}>{new Date(o.createdAt).toLocaleString()}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
