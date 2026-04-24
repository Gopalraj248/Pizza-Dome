import { useState } from "react";
import { useInView } from "../hooks/useInView";
import { useIsMobile } from "../hooks/useIsMobile";
import { MENU } from "../data/menu";
import { MenuCard } from "./MenuCard";

export function MenuSection({ darkMode, onCustomize, onDirectAdd }) {
  const [tab, setTab] = useState("veg");
  const [ref, inView] = useInView();
  const isMobile = useIsMobile();
  const isTablet = useIsMobile(1024);
  
  const bg = darkMode ? "linear-gradient(160deg,#07152b,#060e1a)" : "linear-gradient(160deg,#f8fbff,#eaf5ff)";
  
  const tabs = [
    { key: "veg", label: "🥦 Veg" }, 
    { key: "nonveg", label: "🍗 Non-Veg" }, 
    { key: "starters", label: "🥖 Starters" }, 
    { key: "drinks", label: "🥤 Drinks" }
  ];

  return (
    <section id="menu" ref={ref} style={{ background: bg, padding: isMobile ? "70px 16px" : "100px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        
        <div style={{ textAlign: "center", marginBottom: isMobile ? 32 : 50 }}>
          <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 13, color: "#1a8fd1", letterSpacing: 3, marginBottom: 12, textTransform: "uppercase" }}>Handcrafted Flavors</div>
          <h2 style={{ 
            fontFamily: "'Syne', sans-serif", 
            fontWeight: 900, 
            fontSize: "clamp(32px, 5vw, 48px)", 
            color: darkMode ? "#e8f4fd" : "#0a3d62", 
            marginBottom: 24 
          }}>Explore Our <span style={{ color: "#1a8fd1" }}>Menu</span></h2>
          
          <div style={{ 
            display: "flex", 
            justifyContent: isMobile ? "flex-start" : "center", 
            gap: 10, 
            overflowX: "auto", 
            paddingBottom: 15, 
            msOverflowStyle: "none", 
            scrollbarWidth: "none" 
          }}>
            {tabs.map(t => (
              <button 
                key={t.key} 
                onClick={() => setTab(t.key)} 
                style={{ 
                  padding: "12px 24px", 
                  borderRadius: 99, 
                  border: "none", 
                  background: tab === t.key ? "linear-gradient(135deg,#1a8fd1,#0d6eac)" : (darkMode ? "rgba(255,255,255,0.05)" : "rgba(26,143,209,0.05)"), 
                  color: tab === t.key ? "#fff" : (darkMode ? "#7aaecf" : "#3a6d94"), 
                  fontFamily: "'Syne', sans-serif", 
                  fontWeight: 700, 
                  fontSize: 14, 
                  cursor: "pointer", 
                  whiteSpace: "nowrap", 
                  transition: "all 0.2s", 
                  boxShadow: tab === t.key ? "0 8px 20px rgba(26,143,209,0.3)" : "none" 
                }}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div style={{ 
          display: "grid", 
          gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(3, 1fr)", 
          gap: isMobile ? 20 : 30,
          opacity: inView ? 1 : 0, 
          transform: inView ? "translateY(0)" : "translateY(20px)", 
          transition: "all 0.6s ease" 
        }}>
          {MENU[tab].map(item => (
            <MenuCard key={item.id} item={item} onCustomize={onCustomize} onDirectAdd={onDirectAdd} darkMode={darkMode} />
          ))}
        </div>
        
      </div>
    </section>
  );
}
