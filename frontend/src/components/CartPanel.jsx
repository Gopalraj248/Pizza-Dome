import { useState } from "react";
import { useIsMobile } from "../hooks/useIsMobile";

export function CartPanel({ cart, onClose, onRemove, onCheckout, darkMode }) {
  const isMobile = useIsMobile();
  const [checkoutStep, setCheckoutStep] = useState(1); // 1: Cart, 2: Details
  const [customer, setCustomer] = useState({ name: "", phone: "", table: "" });
  const [error, setError] = useState("");

  const total = cart.reduce((s, i) => s + i.total, 0);
  const bg = darkMode ? "rgba(6,14,26,0.98)" : "rgba(248,252,255,0.98)";

  const handleNext = () => {
    if (checkoutStep === 1) {
      if (cart.length === 0) return;
      setCheckoutStep(2);
    } else {
      if (!customer.name || !customer.phone) {
        setError("Please fill all details");
        return;
      }
      onCheckout(customer);
    }
  };

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 600, display: "flex", justifyContent: isMobile ? "center" : "flex-end", alignItems: isMobile ? "flex-end" : "stretch", background: "rgba(2,9,18,0.34)", backdropFilter: "blur(6px)" }} onClick={onClose}>
      <div onClick={e => e.stopPropagation()} style={{ width: "100%", maxWidth: isMobile ? "100%" : 420, height: isMobile ? "min(82vh, 720px)" : "100%", background: bg, borderLeft: isMobile ? "none" : `1px solid ${darkMode ? "rgba(87,184,248,0.15)" : "rgba(26,143,209,0.12)"}`, borderTop: isMobile ? `1px solid ${darkMode ? "rgba(87,184,248,0.15)" : "rgba(26,143,209,0.12)"}` : "none", borderRadius: isMobile ? "26px 26px 0 0" : 0, backdropFilter: "blur(20px)", display: "flex", flexDirection: "column", animation: `${isMobile ? "slideUp" : "slideRight"} 0.35s cubic-bezier(.22,.61,.36,1)`, boxShadow: isMobile ? "0 -24px 80px rgba(26,143,209,0.18)" : "-20px 0 80px rgba(26,143,209,0.1)" }}>
        
        {/* Header */}
        <div style={{ padding: isMobile ? "18px 18px 16px" : "28px 24px 20px", borderBottom: `1px solid ${darkMode ? "rgba(87,184,248,0.1)" : "rgba(26,143,209,0.08)"}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 900, fontSize: 22, color: darkMode ? "#e8f4fd" : "#0a3d62", margin: 0 }}>
            {checkoutStep === 1 ? "Your Cart 🛒" : "Enter Details ✍️"}
          </h2>
          <button onClick={onClose} style={{ background: darkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)", border: "none", borderRadius: "50%", width: 36, height: 36, cursor: "pointer", fontSize: 18, color: darkMode ? "#e8f4fd" : "#0a3d62", display: "flex", alignItems: "center", justifyContent: "center" }}>×</button>
        </div>

        {/* Content */}
        <div style={{ flex: 1, overflowY: "auto", padding: isMobile ? "16px 18px" : "20px 24px" }}>
          {checkoutStep === 1 ? (
            cart.length === 0 ? (
              <div style={{ textAlign: "center", paddingTop: 60 }}>
                <div style={{ fontSize: 64, marginBottom: 16 }}>🍕</div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: darkMode ? "#5a8aaa" : "#8aaac0" }}>Your cart is empty.<br />Go pick something delicious!</p>
              </div>
            ) : cart.map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 0", borderBottom: `1px solid ${darkMode ? "rgba(87,184,248,0.07)" : "rgba(26,143,209,0.07)"}` }}>
                <span style={{ fontSize: 32 }}>{item.emoji}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 14, color: darkMode ? "#e8f4fd" : "#0a3d62" }}>{item.name}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: darkMode ? "#5a8aaa" : "#8aaac0", marginTop: 2 }}>{item.size} · Qty: {item.qty}{item.addons?.length ? ` · ${item.addons.join(", ")}` : ""}</div>
                </div>
                <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 15, color: "#1a8fd1" }}>₹{item.total}</div>
                <button onClick={() => onRemove(i)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 16, opacity: 0.5 }}>🗑️</button>
              </div>
            ))
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
               <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: darkMode ? "#7aaecf" : "#5a8aaa" }}>We need your details to track your order.</div>
               
               <div>
                  <label style={{ display: "block", fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 13, color: darkMode ? "#e8f4fd" : "#0a3d62", marginBottom: 8 }}>FULL NAME</label>
                  <input type="text" placeholder="e.g. Rahul Sharma" value={customer.name} onChange={e => setCustomer({...customer, name: e.target.value})} style={{ width: "100%", background: darkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)", border: "1px solid rgba(26,143,209,0.15)", borderRadius: 12, padding: "14px", color: darkMode ? "#fff" : "#000", outline: "none", fontFamily: "'DM Sans', sans-serif" }} />
               </div>

               <div>
                  <label style={{ display: "block", fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 13, color: darkMode ? "#e8f4fd" : "#0a3d62", marginBottom: 8 }}>MOBILE NUMBER</label>
                  <input type="tel" placeholder="e.g. 9876543210" value={customer.phone} onChange={e => setCustomer({...customer, phone: e.target.value})} style={{ width: "100%", background: darkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)", border: "1px solid rgba(26,143,209,0.15)", borderRadius: 12, padding: "14px", color: darkMode ? "#fff" : "#000", outline: "none", fontFamily: "'DM Sans', sans-serif" }} />
               </div>

               {error && <div style={{ color: "#ff4757", fontSize: 12, fontFamily: "'DM Sans', sans-serif" }}>{error}</div>}
               
               <button onClick={() => setCheckoutStep(1)} style={{ background: "none", border: "none", color: "#1a8fd1", fontFamily: "'Syne', sans-serif", fontWeight: 700, cursor: "pointer", textAlign: "left", fontSize: 13 }}>← Back to Cart</button>
            </div>
          )}
        </div>

        {/* Footer Bar */}
        {cart.length > 0 && (
          <div style={{ padding: isMobile ? "18px 18px calc(18px + env(safe-area-inset-bottom, 0px))" : "20px 24px 32px", borderTop: `1px solid ${darkMode ? "rgba(87,184,248,0.1)" : "rgba(26,143,209,0.08)"}` }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
              <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 900, fontSize: 18, color: darkMode ? "#e8f4fd" : "#0a3d62" }}>Total</span>
              <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 900, fontSize: 22, color: "#1a8fd1" }}>₹{total}</span>
            </div>
            <button onClick={handleNext} style={{ width: "100%", background: "linear-gradient(135deg,#1a8fd1,#0d6eac)", color: "#fff", border: "none", borderRadius: 14, padding: "16px", fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 16, cursor: "pointer", boxShadow: "0 8px 32px rgba(26,143,209,0.4)", transition: "all 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.transform = "scale(1.02)"}
              onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
            >
              {checkoutStep === 1 ? "Next: Enter Details →" : "Proceed to Payment 💳"}
            </button>
          </div>
        )}
      </div>
      <style>{`
        @keyframes slideRight { from { transform: translateX(100%); } to { transform: translateX(0); } }
        @keyframes slideUp { from { transform: translateY(100%); } to { transform: translateY(0); } }
      `}</style>
    </div>
  );
}
