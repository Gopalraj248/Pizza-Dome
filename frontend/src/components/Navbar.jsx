import { useState, useEffect } from "react";
import { useIsMobile } from "../hooks/useIsMobile";

export function Navbar({ cartCount, onCartOpen, darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const navBg = darkMode 
    ? (scrolled ? "rgba(6,14,26,0.85)" : "transparent") 
    : (scrolled ? "rgba(255,255,255,0.85)" : "transparent");

  return (
    <nav style={{ 
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 400, 
      background: navBg, 
      backdropFilter: scrolled ? "blur(12px)" : "none", 
      borderBottom: scrolled ? `1px solid ${darkMode ? "rgba(87,184,248,0.1)" : "rgba(26,143,209,0.08)"}` : "none", 
      padding: isMobile ? "12px 16px" : "18px 40px", 
      display: "flex", justifyContent: "space-between", alignItems: "center", 
      transition: "all 0.3s",
      boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.05)" : "none"
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: isMobile ? 6 : 12, cursor: "pointer", flexShrink: 1, minWidth: 0 }} onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
        <span style={{ fontSize: isMobile ? 22 : 32, flexShrink: 0 }}>🍕</span>
        <span style={{ 
          fontFamily: "'Syne', sans-serif", fontWeight: 900, 
          fontSize: isMobile ? 16 : 22, letterSpacing: "-0.5px", 
          background: "linear-gradient(135deg,#1a8fd1,#57b8f8)", 
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"
        }}>PIZZA DOME</span>
      </div>
      
      <div style={{ display: "flex", alignItems: "center", gap: isMobile ? 12 : 20 }}>
        {!isMobile && (
          <div style={{ display: "flex", gap: 20, marginRight: 20 }}>
            {["About", "Menu", "Contact"].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} style={{ 
                textDecoration: "none", color: darkMode ? "#e8f4fd" : "#0a3d62", 
                fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 14,
                opacity: 0.8
              }}>{item}</a>
            ))}
          </div>
        )}
        <button onClick={() => setDarkMode(!darkMode)} style={{ 
          background: "none", border: "none", cursor: "pointer", 
          fontSize: isMobile ? 20 : 22, padding: 4, display: "flex" 
        }}>{darkMode ? "☀️" : "🌙"}</button>
        
        <button onClick={onCartOpen} style={{ 
          position: "relative", background: "none", border: "none", 
          cursor: "pointer", fontSize: isMobile ? 22 : 26, display: "flex" 
        }}>
          🛒
          {cartCount > 0 && (
            <span style={{ 
              position: "absolute", top: -5, right: -8, 
              background: "#1a8fd1", color: "#fff", fontSize: 11, 
              fontWeight: 800, width: 20, height: 20, borderRadius: "50%", 
              display: "flex", alignItems: "center", justifyContent: "center", 
              border: `2px solid ${darkMode ? "#060e1a" : "#fff"}` 
            }}>{cartCount}</span>
          )}
        </button>
      </div>
    </nav>
  );
}
