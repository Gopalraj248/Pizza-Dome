import { useInView } from "../hooks/useInView";
import { useIsMobile } from "../hooks/useIsMobile";

export function LiveSection({ darkMode }) {
  const [ref, inView] = useInView();
  const isMobile = useIsMobile();
  const isTablet = useIsMobile(1024);
  const bg = darkMode ? "linear-gradient(160deg,#060e1a,#0a1f35)" : "linear-gradient(160deg,#f0f8ff,#e0f2fe)";
  return (
    <section ref={ref} style={{ background: bg, padding: isMobile ? "72px 16px" : isTablet ? "88px 20px" : "100px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: "center", gap: isMobile ? 36 : isTablet ? 48 : 60, flexWrap: "wrap" }}>
        {/* Oven animation */}
        <div style={{ flex: "1 1 320px", display: "flex", justifyContent: "center", width: "100%" }}>
          <div style={{ position: "relative", width: isMobile ? 260 : isTablet ? 280 : 300, height: isMobile ? 260 : isTablet ? 280 : 300 }}>
            <div style={{ position: "absolute", inset: 0, borderRadius: 24, background: darkMode ? "rgba(0,0,0,0.2)" : "rgba(255,255,255,0.1)", border: `2px solid rgba(26,143,209,0.25)`, backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", boxShadow: "0 20px 50px rgba(0,0,0,0.15)" }}>
              <video autoPlay loop muted playsInline style={{ width: "100%", height: "100%", objectFit: "cover" }}>
                <source src="/video/PizaadomeV.mp4" type="video/mp4" />
              </video>
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 40%)" }} />
            </div>
            {/* Glow ring */}
            <div style={{ position: "absolute", inset: -2, borderRadius: 26, border: "2px solid rgba(255,120,0,0.15)", animation: "pulseRing 2s ease-in-out infinite" }} />
            {/* Live badge */}
            <div style={{ position: "absolute", top: isMobile ? -10 : -14, right: isMobile ? 6 : -14, background: "#ff4757", color: "#fff", borderRadius: 99, padding: isMobile ? "4px 10px" : "4px 12px", fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 12, letterSpacing: 1, display: "flex", alignItems: "center", gap: 5, boxShadow: "0 4px 16px rgba(255,71,87,0.4)" }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#fff", animation: "pulse 1s infinite" }} />LIVE
            </div>
          </div>
        </div>
        {/* Text */}
        <div style={{ flex: "1 1 360px", maxWidth: isMobile ? 420 : 520, textAlign: isMobile ? "center" : "left", opacity: inView ? 1 : 0, transform: inView ? "translateX(0)" : "translateX(40px)", transition: "all 0.8s ease" }}>
          <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 13, color: "#1a8fd1", letterSpacing: 3, marginBottom: 12, textTransform: "uppercase" }}>Open Kitchen</div>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 900, fontSize: "clamp(32px,4vw,52px)", lineHeight: 1.1, letterSpacing: "-1.5px", color: darkMode ? "#e8f4fd" : "#0a3d62", marginBottom: 20 }}>
            Freshly Made<br />
            <span style={{ background: "linear-gradient(135deg,#ff6b35,#ff4757)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>In Front of You</span>
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: isMobile ? 16 : 17, color: darkMode ? "#7aaecf" : "#3a6d94", lineHeight: 1.75, marginBottom: isMobile ? 26 : 32, maxWidth: isMobile ? 340 : 400, marginInline: isMobile ? "auto" : undefined }}>
            Watch your pizza come alive — from dough to dome. Our open kitchen is a show of mastery, speed, and passion.
          </p>
          {[
            { emoji: "🌡️", text: "Wood-fire oven at 450°C for perfect char" },
            { emoji: "⏱️", text: "Prepped and ready in under 12 minutes" },
            { emoji: "📹", text: "Live feed available at our counters" },
          ].map((f, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16, maxWidth: isMobile ? 340 : "none", marginInline: isMobile ? "auto" : undefined, opacity: inView ? 1 : 0, transform: inView ? "translateX(0)" : "translateX(30px)", transition: `all 0.7s ease ${0.2 + i * 0.1}s` }}>
              <div style={{ width: 40, height: 40, borderRadius: 12, background: darkMode ? "rgba(26,143,209,0.1)" : "rgba(26,143,209,0.08)", border: "1px solid rgba(26,143,209,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>{f.emoji}</div>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: darkMode ? "#a0c8f0" : "#1a4a6e", flex: 1, lineHeight: 1.4, textAlign: "left" }}>{f.text}</span>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes flame { from { transform: scaleY(1) translateY(0); } to { transform: scaleY(1.3) translateY(-8px); } }
        @keyframes pulseRing { 0%,100% { opacity:0.6; } 50% { opacity:1; } }
      `}</style>
    </section>
  );
}
