import { useInView } from "../hooks/useInView";
import { useIsMobile } from "../hooks/useIsMobile";

export function GraphicHero({ darkMode }) {
  const isMobile = useIsMobile();
  const [ref, inView] = useInView();
  
  const textColor = darkMode ? "#e8f4fd" : "#0a3d62";
  const subTextColor = darkMode ? "rgba(255,255,255,0.6)" : "rgba(10,61,98,0.7)";
  const cardBg = darkMode ? "rgba(255,255,255,0.05)" : "#ffffff";
  const cardBorder = darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)";

  const features = [
    { icon: "🔥", text: "Fresh Daily", pos: { top: "15%", left: isMobile ? "5%" : "15%" } },
    { icon: "🌶", text: "Craft Spice", pos: { top: "15%", right: isMobile ? "5%" : "15%" } },
    { icon: "⚡", text: "20 Min", pos: { bottom: "15%", left: isMobile ? "5%" : "15%" } },
    { icon: "🧀", text: "Real Cheese", pos: { bottom: "15%", right: isMobile ? "5%" : "15%" } }
  ];

  return (
    <section ref={ref} style={{ 
      minHeight: "100vh", 
      background: darkMode ? "#060e1a" : "#f0f8ff", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center",
      padding: "100px 20px",
      textAlign: "center",
      overflow: "hidden",
      position: "relative"
    }}>
      {/* Background Ripples */}
      <div style={{ position: "absolute", top: "40%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 0 }}>
        {[300, 450, 600].map((size, i) => (
          <div key={i} style={{ 
            width: size, height: size, border: `1px solid ${darkMode ? "rgba(26,143,209,0.1)" : "rgba(26,143,209,0.05)"}`, 
            borderRadius: "50%", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" 
          }} />
        ))}
      </div>

      {/* Main Pizza Graphic Container */}
      <div style={{ position: "relative", width: "100%", maxWidth: 600, height: isMobile ? 350 : 450, marginBottom: 40, zIndex: 1 }}>
        {/* Central Pizza */}
        <div style={{ 
          fontSize: isMobile ? 180 : 260, 
          animation: "heroFloat 4s ease-in-out infinite",
          display: "flex", alignItems: "center", justifyContent: "center", height: "100%"
        }}>🍕</div>

        {/* Floating Cards */}
        {features.map((f, i) => (
          <div key={i} style={{ 
            position: "absolute", ...f.pos, 
            background: cardBg, border: `1px solid ${cardBorder}`, 
            padding: "12px 20px", borderRadius: 16, 
            display: "flex", alignItems: "center", gap: 10,
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
            animation: `floatCard ${3 + i}s ease-in-out infinite`,
            zIndex: 2
          }}>
            <span style={{ fontSize: 20 }}>{f.icon}</span>
            <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 14, color: textColor, whiteSpace: "nowrap" }}>{f.text}</span>
          </div>
        ))}
      </div>

      {/* Content */}
      <div style={{ zIndex: 2, maxWidth: 800 }}>
        <div style={{ 
          display: "inline-flex", alignItems: "center", gap: 8, 
          background: darkMode ? "rgba(26,143,209,0.15)" : "rgba(26,143,209,0.08)", 
          padding: "8px 20px", borderRadius: 99, marginBottom: 24,
          border: `1px solid ${darkMode ? "rgba(26,143,209,0.3)" : "rgba(26,143,209,0.15)"}`
        }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#1a8fd1", animation: "pulse 2s infinite" }} />
          <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 12, color: "#1a8fd1", letterSpacing: 2, textTransform: "uppercase" }}>Now Open · Mumbai</span>
        </div>

        <h1 style={{ 
          fontFamily: "'Syne', sans-serif", fontWeight: 900, 
          fontSize: "clamp(48px, 10vw, 92px)", lineHeight: 1, 
          color: textColor, marginBottom: 32, letterSpacing: "-2px"
        }}>
          First Slice, <br />
          <span style={{ color: "#1a8fd1" }}>Forever Love 🍕</span>
        </h1>

        <p style={{ 
          fontFamily: "'DM Sans', sans-serif", fontSize: isMobile ? 16 : 19, 
          color: subTextColor, lineHeight: 1.6, maxWidth: 600, margin: "0 auto" 
        }}>
          Street-style artisan pizza with a premium twist. Crafted live, delivered fresh, and built to blow your mind.
        </p>
      </div>

      <style>{`
        @keyframes heroFloat {
          0%, 100% { transform: translateY(0) rotate(-5deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes floatCard {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse {
          0% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
}
