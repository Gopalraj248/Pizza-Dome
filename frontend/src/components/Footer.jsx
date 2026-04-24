import { useIsMobile } from "../hooks/useIsMobile";

export function Footer({ darkMode, onAdminOpen }) {
  const isMobile = useIsMobile();
  const bg = darkMode ? "#04090f" : "#0a1f35";
  const textColor = "rgba(255,255,255,0.6)";
  
  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="contact" style={{ background: bg, padding: isMobile ? "60px 20px 30px" : "80px 60px 40px", color: "#e8f4fd" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ 
          display: "flex", 
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? 40 : 60, 
          justifyContent: "space-between", 
          marginBottom: 60 
        }}>
          
          {/* Logo & Info */}
          <div style={{ flex: 1.5, maxWidth: isMobile ? "100%" : "400px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <span style={{ fontSize: 28 }}>🍕</span>
              <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 900, fontSize: 22, letterSpacing: "-0.5px", background: "linear-gradient(135deg,#57b8f8,#1a8fd1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>PIZZA DOME</span>
            </div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: textColor, lineHeight: 1.8, marginBottom: 24 }}>
              Thakur Village, Near Vodafone gallery opp to Vasant sagar bldg, Kandivali-400101. 
              Bringing the authentic soul of Italy to the heart of Mumbai.
            </p>
            <div style={{ display: "flex", gap: 12 }}>
               <a href="https://instagram.com/pizzadome.in" target="_blank" rel="noreferrer" style={{ 
                 background: "rgba(255,255,255,0.05)", width: 44, height: 44, borderRadius: "50%", 
                 display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", 
                 transition: "all 0.3s", border: "1px solid rgba(255,255,255,0.1)", overflow: "hidden"
               }} onMouseEnter={e => e.currentTarget.style.background = "#1a8fd1"} onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.05)"}>
                 <img src="/images/instagram.png" alt="Instagram" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
               </a>
            </div>
          </div>

          {/* Quick Menu */}
          <div style={{ flex: 0.8 }}>
            <h4 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 13, color: "#1a8fd1", letterSpacing: 2, marginBottom: 24, textTransform: "uppercase" }}>Our Menu</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {["Veg Pizza", "Non-Veg Pizza", "Starters", "Drinks"].map(l => (
                <span key={l} onClick={scrollToMenu} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: textColor, cursor: "pointer", transition: "color 0.2s" }} onMouseEnter={e => e.currentTarget.style.color = "#fff"} onMouseLeave={e => e.currentTarget.style.color = textColor}>{l}</span>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div style={{ flex: 1.2 }}>
            <h4 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 13, color: "#1a8fd1", letterSpacing: 2, marginBottom: 24, textTransform: "uppercase" }}>Connect With Us</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
               <a href="https://www.google.com/maps/place/PIZZA+DOME/@19.2133582,72.8714053,17z/data=!4m6!3m5!1s0x3be7b70396b92f09:0x948f2603dc164ab4!8m2!3d19.2133582!4d72.8714053!16s%2Fg%2F11x7qfm6nh" target="_blank" rel="noreferrer" style={{ display: "flex", gap: 14, textDecoration: "none" }}>
                  <span style={{ opacity: 0.8, fontSize: 18 }}>📍</span>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: textColor, lineHeight: 1.5 }} onMouseEnter={e => e.currentTarget.style.color = "#fff"} onMouseLeave={e => e.currentTarget.style.color = textColor}>
                    Thakur Village, Kandivali, Mumbai
                  </span>
               </a>
               <div style={{ display: "flex", gap: 14 }}>
                  <span style={{ opacity: 0.8, fontSize: 18 }}>📞</span>
                  <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    <a href="tel:+917977347872" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: textColor, textDecoration: "none" }} onMouseEnter={e => e.currentTarget.style.color = "#fff"} onMouseLeave={e => e.currentTarget.style.color = textColor}>+91 79773 47872</a>
                    <a href="tel:+917304760034" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: textColor, textDecoration: "none" }} onMouseEnter={e => e.currentTarget.style.color = "#fff"} onMouseLeave={e => e.currentTarget.style.color = textColor}>+91 73047 60034</a>
                  </div>
               </div>
               <a href="mailto:pizzadome04@gmail.com" style={{ display: "flex", gap: 14, textDecoration: "none" }}>
                  <span style={{ opacity: 0.8, fontSize: 18 }}>✉️</span>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: textColor }} onMouseEnter={e => e.currentTarget.style.color = "#fff"} onMouseLeave={e => e.currentTarget.style.color = textColor}>
                    pizzadome04@gmail.com
                  </span>
               </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 32, display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", alignItems: isMobile ? "center" : "flex-start", gap: 20, textAlign: isMobile ? "center" : "left" }}>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.3)" }}>© 2025 Pizza Dome · Crafted with Passion</div>
          <div onClick={onAdminOpen} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#1a8fd1", fontWeight: 600, cursor: "pointer" }}>Admin History 📋</div>
        </div>
      </div>
    </footer>
  );
}
