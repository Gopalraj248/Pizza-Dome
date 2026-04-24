import { useInView } from "../hooks/useInView";
import { useIsMobile } from "../hooks/useIsMobile";

export function AboutSection({ darkMode }) {
  const [ref, inView] = useInView();
  const isMobile = useIsMobile();
  
  const cardBg = darkMode ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.7)";
  const borderColor = darkMode ? "rgba(26,143,209,0.2)" : "rgba(26,143,209,0.1)";

  return (
    <section id="about" ref={ref} style={{ padding: isMobile ? "70px 20px" : "100px 40px", background: darkMode ? "#0a1f35" : "#eef7ff" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        
        {/* Main Bio */}
        <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: 50, alignItems: "center", marginBottom: 80 }}>
          <div style={{ flex: 1, textAlign: isMobile ? "center" : "left" }}>
            <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 13, color: "#1a8fd1", letterSpacing: 3, marginBottom: 16, textTransform: "uppercase" }}>Our Story</div>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 900, fontSize: "clamp(32px,5vw,52px)", color: darkMode ? "#e8f4fd" : "#0a3d62", marginBottom: 24 }}>Welcome to <br /><span style={{ color: "#1a8fd1" }}>Pizza Dome</span></h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, color: darkMode ? "#7aaecf" : "#3a6d94", lineHeight: 1.8, marginBottom: 20 }}>
              Welcome to Pizza Dome, where every slice tells a story of passion, flavor, and tradition. 
              We believe in crafting pizzas that not only taste delicious but also bring people together. 
              From our signature Margherita to our spicy Diavola, each pizza is a masterpiece made with 
              love and the freshest ingredients.
            </p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, color: darkMode ? "#7aaecf" : "#3a6d94", lineHeight: 1.8 }}>
              At Pizza Dome, we are not just about serving food; we are about creating memorable experiences, 
              one slice at a time. Come join us on this journey of flavors and discover the art of authentic Italian pizza.
            </p>
          </div>
          <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
             <div style={{ width: isMobile ? 240 : 320, height: isMobile ? 240 : 320, borderRadius: 40, border: `2px solid ${borderColor}`, padding: 20, position: "relative" }}>
                <div style={{ width: "100%", height: "100%", borderRadius: 24, background: "linear-gradient(135deg,#1a8fd1,#0a3d62)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 100 }}>🍕</div>
                <div style={{ position: "absolute", bottom: -20, right: -20, background: "#1a8fd1", color: "#fff", padding: "15px 25px", borderRadius: 20, fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 18, boxShadow: "0 10px 30px rgba(26,143,209,0.3)" }}>Since 2025</div>
             </div>
          </div>
        </div>

        {/* Chef & Highlights */}
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(300px, 1fr))", gap: isMobile ? 20 : 40, marginBottom: 80 }}>
          <div style={{ background: cardBg, border: `1px solid ${borderColor}`, padding: 40, borderRadius: 32 }}>
            <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 24, color: "#1a8fd1", marginBottom: 20 }}>Meet Our Chef</h3>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: darkMode ? "#7aaecf" : "#3a6d94", lineHeight: 1.7 }}>
              Our head chef is a master of the art of pizza making. In crafting the perfect crust 
              and blending fresh ingredients, he ensures every pizza at Pizza Dome is a slice of perfection.
            </p>
          </div>
          <div style={{ background: cardBg, border: `1px solid ${borderColor}`, padding: 40, borderRadius: 32 }}>
            <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 24, color: "#1a8fd1", marginBottom: 20 }}>Our Highlights</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
              {[
                { emoji: "🍕", text: "Veg & Non-Veg Options" },
                { emoji: "😊", text: "50+ Happy Customers Every Day" },
                { emoji: "🇮🇹", text: "Authentic Italian Recipes" }
              ].map((h, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 15 }}>
                  <span style={{ fontSize: 24 }}>{h.emoji}</span>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, color: darkMode ? "#e8f4fd" : "#0a3d62" }}>{h.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hours & Reservation */}
        <div style={{ background: "linear-gradient(135deg,#0a3d62,#1a8fd1)", borderRadius: 40, padding: isMobile ? "40px 20px" : "60px", color: "#fff", textAlign: "center" }}>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)", gap: 40, alignItems: "center" }}>
            <div>
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 28, marginBottom: 10 }}>WE ARE Open</h3>
              <p style={{ fontFamily: "'Syne', sans-serif", fontSize: 22, fontWeight: 700, opacity: 0.9 }}>7:00 pm - 11:30 pm</p>
            </div>
            <div>
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 28, marginBottom: 15 }}>MAKE A Reservation</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 5, fontFamily: "'DM Sans', sans-serif", fontSize: 18, fontWeight: 600 }}>
                <span>+91 7977347872</span>
                <span>+91 8652395305</span>
                <span>+91 8879362543</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
