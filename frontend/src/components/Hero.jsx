import { useInView } from "../hooks/useInView";
import { useIsMobile } from "../hooks/useIsMobile";

export function Hero({ darkMode, onOrderNow, onExplore }) {
  const [ref, inView] = useInView();
  const isMobile = useIsMobile();
  
  return (
    <section ref={ref} style={{ 
      minHeight: isMobile ? "80vh" : "100vh", 
      display: "flex", 
      flexDirection: isMobile ? "column" : "row", 
      alignItems: "center", 
      justifyContent: "center",
      padding: isMobile ? "80px 20px 40px" : "80px 40px",
      gap: isMobile ? 30 : 60,
      background: darkMode ? "#060e1a" : "#f8fbff",
      overflow: "hidden",
      position: "relative"
    }}>
      <div style={{ 
        flex: 1.2, 
        textAlign: isMobile ? "center" : "left",
        opacity: inView ? 1 : 0, 
        transform: inView ? "translateY(0)" : "translateY(30px)", 
        transition: "all 0.8s ease-out",
        zIndex: 2
      }}>
        <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: isMobile ? 12 : 14, color: "#1a8fd1", letterSpacing: 3, marginBottom: 16, textTransform: "uppercase" }}>The Original Taste</div>
        <h1 style={{ 
          fontFamily: "'Syne', sans-serif", 
          fontWeight: 900, 
          fontSize: "clamp(36px, 7vw, 72px)", 
          lineHeight: 1.1, 
          color: darkMode ? "#e8f4fd" : "#0a3d62",
          marginBottom: 20,
          maxWidth: isMobile ? "100%" : "700px"
        }}>
          Handcrafted <br />
          <span style={{ color: "#1a8fd1" }}>Pizza Dome.</span>
        </h1>
        <p style={{ 
          fontFamily: "'DM Sans', sans-serif", 
          fontSize: isMobile ? 15 : 18, 
          color: darkMode ? "#7aaecf" : "#3a6d94", 
          lineHeight: 1.6, 
          maxWidth: 500, 
          margin: isMobile ? "0 auto 32px" : "0 0 32px" 
        }}>
          Experience authentic Neapolitan flavors made with fresh ingredients and a whole lot of love. Veg & Non-Veg options.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: isMobile ? "center" : "flex-start", flexWrap: "wrap" }}>
          <button onClick={onOrderNow} style={{ 
            background: "linear-gradient(135deg,#1a8fd1,#0d6eac)", 
            color: "#fff", border: "none", borderRadius: 12, 
            padding: isMobile ? "14px 28px" : "16px 36px", fontFamily: "'Syne', sans-serif", 
            fontWeight: 800, fontSize: 15, cursor: "pointer", 
            boxShadow: "0 10px 25px rgba(26,143,209,0.3)" 
          }}>Order Now</button>
          <button onClick={onExplore} style={{ 
            background: "transparent", 
            color: "#1a8fd1", border: "2px solid #1a8fd1", borderRadius: 12, 
            padding: isMobile ? "12px 26px" : "14px 34px", fontFamily: "'Syne', sans-serif", 
            fontWeight: 800, fontSize: 15, cursor: "pointer" 
          }}>Explore Menu</button>
        </div>
      </div>
      
      <div style={{ 
        flex: 0.8, 
        display: "flex", 
        justifyContent: "center",
        opacity: inView ? 1 : 0, 
        transform: inView ? "scale(1)" : "scale(0.9)", 
        transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)" 
      }}>
        <div style={{ 
          position: "relative",
          width: isMobile ? "220px" : "380px",
          height: isMobile ? "220px" : "380px",
          borderRadius: "50%",
          background: "linear-gradient(135deg,rgba(26,143,209,0.1),rgba(87,184,248,0.05))",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <span style={{ fontSize: isMobile ? 140 : 240, animation: "float 4s ease-in-out infinite" }}>🍕</span>
        </div>
      </div>
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
        }
      `}</style>
    </section>
  );
}
