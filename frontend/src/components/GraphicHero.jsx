import { useInView } from "../hooks/useInView";
import { useIsMobile } from "../hooks/useIsMobile";

export function GraphicHero({ darkMode }) {
  const isMobile = useIsMobile();
  const [ref, inView] = useInView();
  
  const textColor = darkMode ? "#e8f4fd" : "#0a3d62";
  const subTextColor = darkMode ? "rgba(255,255,255,0.6)" : "rgba(10,61,98,0.7)";
  const cardBg = darkMode ? "rgba(8, 20, 36, 0.85)" : "rgba(255, 255, 255, 0.9)";
  const cardBorder = darkMode ? "rgba(87, 184, 248, 0.2)" : "rgba(26, 143, 209, 0.15)";

  const features = [
    { icon: "🔥", text: "Fresh Daily", pos: { top: isMobile ? "2%" : "8%", left: isMobile ? "0%" : "5%" } },
    { icon: "🌶️", text: "Craft Spice", pos: { top: isMobile ? "2%" : "12%", right: isMobile ? "0%" : "5%" } },
    { icon: "⚡", text: "20 Min", pos: { bottom: isMobile ? "24%" : "25%", left: isMobile ? "0%" : "2%" } },
    { icon: "🧀", text: "Real Cheese", pos: { bottom: isMobile ? "24%" : "22%", right: isMobile ? "0%" : "4%" } }
  ];

  return (
    <section ref={ref} style={{ 
      minHeight: "100vh", 
      background: darkMode ? "linear-gradient(160deg, #060e1a 0%, #0a1f35 100%)" : "linear-gradient(160deg, #dff0fc 0%, #e8f6ff 100%)", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center",
      padding: isMobile ? "100px 16px 40px" : "120px 24px 80px",
      textAlign: "center",
      overflow: "hidden",
      position: "relative"
    }}>
      {/* Background Ripples / Concentric Circles */}
      <div style={{ position: "absolute", top: isMobile ? "32%" : "42%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 0, pointerEvents: "none" }}>
        {[320, 480, 640].map((size, i) => (
          <div key={i} style={{ 
            width: isMobile ? size * 0.7 : size, 
            height: isMobile ? size * 0.7 : size, 
            border: `1px solid ${darkMode ? "rgba(26,143,209,0.12)" : "rgba(26,143,209,0.08)"}`, 
            borderRadius: "50%", 
            position: "absolute", top: "50%", left: "50%", 
            transform: "translate(-50%, -50%)",
            animation: `spinSlow ${20 + i * 10}s linear infinite`
          }} />
        ))}
      </div>

      {/* Main Pizza Graphic Container */}
      <div style={{ position: "relative", width: "100%", maxWidth: 800, height: isMobile ? 320 : 480, marginBottom: isMobile ? 20 : 40, zIndex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
        {/* Central Pizza Sphere Background */}
        <div style={{ 
          width: isMobile ? 240 : 360, height: isMobile ? 240 : 360, 
          borderRadius: "50%", 
          background: darkMode ? "rgba(26,143,209,0.05)" : "rgba(26,143,209,0.04)", 
          border: `1px solid rgba(26,143,209,0.1)`, 
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 0 80px rgba(26,143,209,0.1)",
          animation: "heroFloat 4s ease-in-out infinite",
          position: "relative"
        }}>
           <span style={{ fontSize: isMobile ? 120 : 180, filter: "drop-shadow(0 12px 40px rgba(26,143,209,0.3))" }}>🍕</span>
        </div>

        {/* Floating Cards / Badges */}
        {features.map((f, i) => (
          <div key={i} style={{ 
            position: "absolute", ...f.pos, 
            background: cardBg, 
            backdropFilter: "blur(12px)",
            border: `1px solid ${cardBorder}`, 
            padding: isMobile ? "8px 12px" : "10px 20px", 
            borderRadius: 14, 
            display: "flex", alignItems: "center", gap: 8,
            boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
            animation: `floatBadge ${4 + i}s ease-in-out infinite alternate`,
            zIndex: 2
          }}>
            <span style={{ fontSize: isMobile ? 18 : 22 }}>{f.icon}</span>
            <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: isMobile ? 11 : 13, color: textColor, whiteSpace: "nowrap", letterSpacing: "0.2px" }}>{f.text}</span>
          </div>
        ))}
      </div>

      {/* Content */}
      <div style={{ zIndex: 2, maxWidth: 900, opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease-out" }}>
        <div style={{ 
          display: "inline-flex", alignItems: "center", gap: 8, 
          background: darkMode ? "rgba(26,143,209,0.12)" : "rgba(26,143,209,0.06)", 
          padding: "6px 18px", borderRadius: 99, marginBottom: 20,
          border: `1px solid ${darkMode ? "rgba(26,143,209,0.25)" : "rgba(26,143,209,0.15)"}`,
          backdropFilter: "blur(8px)"
        }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#1a8fd1", boxShadow: "0 0 10px #1a8fd1", animation: "pulse 1.5s infinite" }} />
          <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 12, color: "#1a8fd1", letterSpacing: 2, textTransform: "uppercase" }}>Now Open · Mumbai</span>
        </div>

        <h1 style={{ 
          fontFamily: "'Syne', sans-serif", fontWeight: 900, 
          fontSize: "clamp(42px, 9vw, 84px)", lineHeight: 1.05, 
          color: textColor, marginBottom: 24, letterSpacing: isMobile ? "-1px" : "-3px"
        }}>
          First Slice, <br />
          <span style={{ background: "linear-gradient(135deg,#1a8fd1,#57b8f8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Forever Love</span> 🍕
        </h1>

        <p style={{ 
          fontFamily: "'DM Sans', sans-serif", fontSize: isMobile ? 16 : 19, 
          color: subTextColor, lineHeight: 1.7, maxWidth: 580, margin: "0 auto",
          opacity: 0.9
        }}>
          Street-style artisan pizza with a premium twist. Crafted live, delivered fresh, and built to blow your mind.
        </p>
      </div>

      <style>{`
        @keyframes heroFloat {
          0%, 100% { transform: translateY(0) rotate(-2deg); }
          50% { transform: translateY(-15px) rotate(2deg); }
        }
        @keyframes floatBadge {
          from { transform: translateY(0) scale(1); }
          to { transform: translateY(-10px) scale(1.02); }
        }
        @keyframes spinSlow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.3); }
        }
      `}</style>
    </section>
  );
}
