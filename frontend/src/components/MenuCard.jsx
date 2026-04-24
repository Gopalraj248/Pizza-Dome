import { useState } from "react";
import { useIsMobile } from "../hooks/useIsMobile";

export function MenuCard({ item, onCustomize, onDirectAdd, darkMode }) {
  const [hover, setHover] = useState(false);
  const isMobile = useIsMobile();
  const isGlass = darkMode
    ? { background: hover ? "rgba(26,50,80,0.95)" : "rgba(15,30,55,0.85)", border: `1px solid ${hover ? "rgba(87,184,248,0.4)" : "rgba(87,184,248,0.15)"}` }
    : { background: hover ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.75)", border: `1px solid ${hover ? "rgba(26,143,209,0.3)" : "rgba(26,143,209,0.12)"}` };

  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ ...isGlass, borderRadius: 20, padding: isMobile ? "22px 18px" : "24px 20px", backdropFilter: "blur(16px)", boxShadow: hover && !isMobile ? "0 20px 60px rgba(26,143,209,0.18)" : "0 4px 24px rgba(26,143,209,0.07)", transition: "all 0.3s cubic-bezier(.22,.61,.36,1)", transform: hover && !isMobile ? "translateY(-6px)" : "translateY(0)", cursor: "pointer" }}>
      {/* Media (Image or Emoji) */}
      <div style={{ textAlign: "center", marginBottom: 14 }}>
        {item.image ? (
          <img src={item.image} alt={item.name} style={{ width: isMobile ? 80 : 100, height: isMobile ? 80 : 100, objectFit: "contain", borderRadius: 12, transition: "transform 0.3s", transform: hover && !isMobile ? "scale(1.1) rotate(2deg)" : "scale(1)" }} />
        ) : (
          <span style={{ fontSize: isMobile ? 56 : 64, display: "inline-block", transition: "transform 0.3s", transform: hover && !isMobile ? "scale(1.15) rotate(-5deg)" : "scale(1)" }}>{item.emoji}</span>
        )}
      </div>
      {/* Tag */}
      {item.tag && <div style={{ display: "inline-block", background: "linear-gradient(135deg,#1a8fd1,#57b8f8)", color: "#fff", fontSize: 10, fontWeight: 800, letterSpacing: 1.5, padding: "3px 10px", borderRadius: 99, marginBottom: 8, fontFamily: "'Syne', sans-serif", textTransform: "uppercase" }}>{item.tag}</div>}
      <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: isMobile ? 16 : 17, color: darkMode ? "#e8f4fd" : "#0a3d62", marginBottom: 6, lineHeight: 1.3 }}>{item.name}</h3>
      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: isMobile ? 12.5 : 13, color: darkMode ? "#7aaecf" : "#5a8aaa", lineHeight: 1.6, marginBottom: 16 }}>{item.desc}</p>
      <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "stretch" : "center", justifyContent: "space-between", gap: isMobile ? 12 : 16 }}>
        <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 900, fontSize: 20, color: "#1a8fd1" }}>₹{item.price}</span>
        <button onClick={() => item.isDrink ? onDirectAdd(item) : onCustomize(item)}
          style={{ background: "linear-gradient(135deg,#1a8fd1,#0d6eac)", color: "#fff", border: "none", borderRadius: 99, padding: isMobile ? "10px 16px" : "8px 18px", width: isMobile ? "100%" : "auto", fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 13, cursor: "pointer", boxShadow: "0 4px 16px rgba(26,143,209,0.3)", transition: "all 0.2s" }}
          onMouseEnter={e => e.currentTarget.style.transform = "scale(1.06)"}
          onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
        >+ Add</button>
      </div>
    </div>
  );
}
