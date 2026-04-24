import { useState, useEffect } from "react";

export function Loader({ onDone }) {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    let v = 0;
    const t = setInterval(() => {
      v += Math.random() * 14 + 4;
      if (v >= 100) { v = 100; clearInterval(t); setTimeout(onDone, 400); }
      setPct(Math.min(v, 100));
    }, 80);
    return () => clearInterval(t);
  }, [onDone]);

  return (
    <div style={{ position: "fixed", inset: 0, background: "#e8f4fd", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", zIndex: 9999, fontFamily: "'Syne', sans-serif" }}>
      <div style={{ fontSize: 80, animation: "spinPizza 1.2s linear infinite", display: "inline-block", filter: "drop-shadow(0 0 24px #57b8f8)" }}>🍕</div>
      <div style={{ marginTop: 24, fontSize: 28, fontWeight: 800, letterSpacing: "-1px", color: "#0a3d62", background: "linear-gradient(135deg,#0a3d62,#1a8fd1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>PIZZA DOME</div>
      <div style={{ marginTop: 20, width: 220, height: 4, background: "#cce7fa", borderRadius: 99, overflow: "hidden" }}>
        <div style={{ height: "100%", width: `${pct}%`, background: "linear-gradient(90deg,#1a8fd1,#57b8f8)", borderRadius: 99, transition: "width 0.1s" }} />
      </div>
      <div style={{ marginTop: 10, fontSize: 13, color: "#1a8fd1", fontWeight: 600, letterSpacing: 2 }}>LOADING… {Math.round(pct)}%</div>
      <style>{`@keyframes spinPizza { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
