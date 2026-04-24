import { useState } from "react";
import { SIZES, ADDONS } from "../data/menu";
import { Label } from "./ui/Label";

export function CustomizeModal({ item, onClose, onAddToCart, darkMode }) {
  const [size, setSize] = useState(0);
  const [addons, setAddons] = useState({});
  const [qty, setQty] = useState(1);

  const addonTotal = Object.entries(addons).filter(([, v]) => v).reduce((s, [k]) => s + (ADDONS.find(a => a.id === k)?.price || 0), 0);
  const total = (item.price + SIZES[size].extra + addonTotal) * qty;

  const toggleAddon = id => setAddons(a => ({ ...a, [id]: !a[id] }));

  const bg = darkMode ? "rgba(6,14,26,0.97)" : "rgba(255,255,255,0.97)";
  const borderC = darkMode ? "rgba(87,184,248,0.2)" : "rgba(26,143,209,0.15)";

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 500, display: "flex", alignItems: "flex-end", justifyContent: "center", background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)" }} onClick={onClose}>
      <div onClick={e => e.stopPropagation()} style={{ background: bg, border: `1px solid ${borderC}`, borderRadius: "28px 28px 0 0", padding: "32px 28px 40px", width: "100%", maxWidth: 520, maxHeight: "90vh", overflowY: "auto", animation: "slideUp 0.35s cubic-bezier(.22,.61,.36,1)", boxShadow: "0 -20px 80px rgba(26,143,209,0.18)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontSize: 44 }}>{item.emoji}</span>
              <div>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 900, fontSize: 20, color: darkMode ? "#e8f4fd" : "#0a3d62", margin: 0 }}>{item.name}</h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: darkMode ? "#7aaecf" : "#5a8aaa", margin: "4px 0 0" }}>{item.desc}</p>
              </div>
            </div>
          </div>
          <button onClick={onClose} style={{ background: darkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)", border: "none", borderRadius: "50%", width: 36, height: 36, cursor: "pointer", fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center", color: darkMode ? "#e8f4fd" : "#0a3d62" }}>×</button>
        </div>

        {/* Size */}
        <Label dark={darkMode}>Choose Size</Label>
        <div style={{ display: "flex", gap: 10, marginBottom: 24 }}>
          {SIZES.map((s, i) => (
            <button key={i} onClick={() => setSize(i)} style={{ flex: 1, padding: "14px 8px", borderRadius: 14, border: `2px solid ${size === i ? "#1a8fd1" : darkMode ? "rgba(87,184,248,0.15)" : "rgba(26,143,209,0.15)"}`, background: size === i ? "linear-gradient(135deg,rgba(26,143,209,0.15),rgba(87,184,248,0.08))" : "transparent", cursor: "pointer", transition: "all 0.2s" }}>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 900, fontSize: 22, color: size === i ? "#1a8fd1" : darkMode ? "#7aaecf" : "#3a6d94" }}>{s.label}</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: darkMode ? "#5a8aaa" : "#8aaac0" }}>{s.name}</div>
              {s.extra > 0 && <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 12, color: "#1a8fd1", fontWeight: 700, marginTop: 2 }}>+₹{s.extra}</div>}
            </button>
          ))}
        </div>

        {/* Add-ons */}
        <Label dark={darkMode}>Add-ons</Label>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}>
          {ADDONS.map(a => (
            <button key={a.id} onClick={() => toggleAddon(a.id)} style={{ padding: "8px 14px", borderRadius: 99, border: `1.5px solid ${addons[a.id] ? "#1a8fd1" : darkMode ? "rgba(87,184,248,0.2)" : "rgba(26,143,209,0.2)"}`, background: addons[a.id] ? "linear-gradient(135deg,rgba(26,143,209,0.18),rgba(87,184,248,0.1))" : "transparent", cursor: "pointer", fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 600, color: addons[a.id] ? "#1a8fd1" : darkMode ? "#7aaecf" : "#3a6d94", transition: "all 0.2s", display: "flex", alignItems: "center", gap: 6 }}>
              {a.emoji} {a.label} <span style={{ opacity: 0.7 }}>+₹{a.price}</span>
            </button>
          ))}
        </div>

        {/* Qty */}
        <Label dark={darkMode}>Quantity</Label>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28 }}>
          {[-1, qty, 1].map((v, i) => i === 1 ? (
            <span key="qty" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 900, fontSize: 26, color: darkMode ? "#e8f4fd" : "#0a3d62", minWidth: 32, textAlign: "center" }}>{qty}</span>
          ) : (
            <button key={i} onClick={() => setQty(q => Math.max(1, q + v))} style={{ width: 40, height: 40, borderRadius: "50%", border: `1.5px solid rgba(26,143,209,0.3)`, background: "transparent", cursor: "pointer", fontSize: 20, color: "#1a8fd1", fontWeight: 900, display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.15s" }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(26,143,209,0.1)"}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}
            >{v === -1 ? "−" : "+"}</button>
          ))}
        </div>

        {/* Total + Add */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: darkMode ? "rgba(26,143,209,0.08)" : "rgba(26,143,209,0.05)", border: `1px solid rgba(26,143,209,0.12)`, borderRadius: 16, padding: "14px 18px", marginBottom: 16 }}>
          <div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: darkMode ? "#7aaecf" : "#5a8aaa" }}>Total Price</div>
            <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 900, fontSize: 26, color: "#1a8fd1" }}>₹{total}</div>
          </div>
          <button onClick={() => { onAddToCart({ ...item, size: SIZES[size].name, addons: Object.keys(addons).filter(k => addons[k]).map(k => ADDONS.find(a => a.id === k).label), qty, price: Math.round(total / qty), total }); onClose(); }}
            style={{ background: "linear-gradient(135deg,#1a8fd1,#0d6eac)", color: "#fff", border: "none", borderRadius: 14, padding: "14px 28px", fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 15, cursor: "pointer", boxShadow: "0 6px 24px rgba(26,143,209,0.4)", transition: "all 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.04)"}
            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
          >Add to Cart 🛒</button>
        </div>
      </div>
      <style>{`@keyframes slideUp { from { transform: translateY(100%); opacity:0; } to { transform: translateY(0); opacity:1; } }`}</style>
    </div>
  );
}
