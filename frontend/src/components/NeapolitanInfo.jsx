import { useInView } from "../hooks/useInView";
import { useIsMobile } from "../hooks/useIsMobile";

export function NeapolitanInfo({ darkMode }) {
  const [ref, inView] = useInView();
  const isMobile = useIsMobile();
  
  const bg = darkMode 
    ? "rgba(26,143,209,0.05)" 
    : "rgba(255,255,255,0.6)";

  return (
    <section ref={ref} style={{ padding: isMobile ? "60px 20px" : "100px 40px", background: darkMode ? "#060e1a" : "#f8fbff" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center", opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)", transition: "all 0.8s ease" }}>
        <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 13, color: "#1a8fd1", letterSpacing: 3, marginBottom: 16, textTransform: "uppercase" }}>Traditional Taste</div>
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 900, fontSize: "clamp(32px,5vw,52px)", color: darkMode ? "#e8f4fd" : "#0a3d62", marginBottom: 24 }}>What is <span style={{ color: "#1a8fd1" }}>Neapolitan Pizza?</span></h2>
        
        <div style={{ background: bg, border: `1px solid ${darkMode ? "rgba(26,143,209,0.2)" : "rgba(26,143,209,0.1)"}`, borderRadius: 24, padding: isMobile ? "30px 20px" : "50px", backdropFilter: "blur(10px)", boxShadow: "0 20px 40px rgba(0,0,0,0.05)" }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: isMobile ? 16 : 18, color: darkMode ? "#7aaecf" : "#3a6d94", lineHeight: 1.8, maxWidth: 800, margin: "0 auto" }}>
            Neapolitan pizza is a traditional Italian pizza made with simple and fresh ingredients: 
            a basic dough, raw tomatoes, fresh mozzarella cheese, fresh basil, and olive oil. 
            <br /><br />
            <strong style={{ color: "#1a8fd1" }}>No fancy toppings—just the true taste of Italy!</strong>
          </p>
          
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 30, marginTop: 40 }}>
            {[
              { emoji: "🌾", text: "Basic Dough" },
              { emoji: "🍅", text: "Raw Tomatoes" },
              { emoji: "🧀", text: "Fresh Mozzarella" },
              { emoji: "🍃", text: "Fresh Basil" },
              { emoji: "🫒", text: "Olive Oil" }
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 32 }}>{item.emoji}</span>
                <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 12, color: darkMode ? "#a0c8f0" : "#0a3d62" }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
