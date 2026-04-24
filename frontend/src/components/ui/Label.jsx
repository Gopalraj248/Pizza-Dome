export function Label({ children, dark }) {
  return <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 13, color: dark ? "#57b8f8" : "#1a8fd1", letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>{children}</div>;
}
