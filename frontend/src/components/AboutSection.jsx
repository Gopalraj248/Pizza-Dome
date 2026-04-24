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
