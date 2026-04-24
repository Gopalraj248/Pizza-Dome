import { useState, useEffect } from "react";
import { useIsMobile } from "../hooks/useIsMobile";
import { PizzaLogo } from "./ui/PizzaLogo";

// --- Icons ---
const MoonIcon = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
);

const SunIcon = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
);

const CartIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="8" cy="21" r="1" />
    <circle cx="19" cy="21" r="1" />
    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.71a2 2 0 0 0 2-1.61l1.71-9.55H5.05" />
  </svg>
);

export function Navbar({ cartCount, onCartOpen, darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const navBg = darkMode 
    ? (scrolled ? "rgba(6,14,26,0.9)" : "transparent") 
    : (scrolled ? "rgba(255,255,255,0.9)" : "transparent");

  const textColor = darkMode ? "#e8f4fd" : "#0a3d62";

  return (
    <nav style={{ 
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 400, 
      background: navBg, 
      backdropFilter: scrolled ? "blur(20px)" : "none", 
      borderBottom: scrolled ? `1px solid ${darkMode ? "rgba(87,184,248,0.15)" : "rgba(26,143,209,0.1)"}` : "none", 
      padding: isMobile ? "10px 16px" : "14px 40px", 
      display: "flex", justifyContent: "space-between", alignItems: "center", 
      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.08)" : "none"
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: isMobile ? 8 : 12, cursor: "pointer", flexShrink: 1, minWidth: 0 }} onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
        <div style={{ width: isMobile ? 28 : 36, height: isMobile ? 28 : 36, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <PizzaLogo size={isMobile ? 28 : 36} />
        </div>
        <span style={{ 
          fontFamily: "'Syne', sans-serif", fontWeight: 900, 
          fontSize: isMobile ? 18 : 24, letterSpacing: "-0.8px", 
          background: darkMode ? "linear-gradient(135deg, #e8f4fd, #1a8fd1)" : "linear-gradient(135deg, #0a3d62, #1a8fd1)", 
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          whiteSpace: "nowrap"
        }}>PIZZA DOME</span>
      </div>
      
      <div style={{ display: "flex", alignItems: "center", gap: isMobile ? 16 : 24 }}>
        {!isMobile && (
          <div style={{ display: "flex", gap: 28, marginRight: 8 }}>
            {["About", "Menu", "Contact"].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} style={{ 
                textDecoration: "none", color: textColor, 
                fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 14,
                opacity: 0.85, transition: "opacity 0.2s"
              }} onMouseEnter={e => e.currentTarget.style.opacity = 1} onMouseLeave={e => e.currentTarget.style.opacity = 0.85}>{item}</a>
            ))}
          </div>
        )}
        
        <button onClick={() => setDarkMode(!darkMode)} style={{ 
          background: "none", border: "none", cursor: "pointer", 
          color: textColor, padding: 4, display: "flex", alignItems: "center", justifyContent: "center",
          transition: "transform 0.2s"
        }} onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1)"} onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}>
          {darkMode ? <SunIcon /> : <MoonIcon />}
        </button>
        
        <button onClick={onCartOpen} style={{ 
          position: "relative", background: "none", border: "none", 
          cursor: "pointer", color: textColor, display: "flex", alignItems: "center", justifyContent: "center",
          transition: "transform 0.2s"
        }} onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1)"} onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}>
          <CartIcon />
          {cartCount > 0 && (
            <span style={{ 
              position: "absolute", top: -6, right: -10, 
              background: "#ff4757", color: "#fff", fontSize: 10, 
              fontWeight: 900, width: 18, height: 18, borderRadius: "50%", 
              display: "flex", alignItems: "center", justifyContent: "center", 
              border: `2px solid ${darkMode ? "#060e1a" : "#fff"}`,
              boxShadow: "0 2px 8px rgba(255,71,87,0.4)"
            }}>{cartCount}</span>
          )}
        </button>
      </div>
    </nav>
  );
}
