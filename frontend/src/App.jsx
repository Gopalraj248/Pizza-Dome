import { useState, useRef } from "react";
import { Loader } from "./components/Loader";
import { Navbar } from "./components/Navbar";
import { GraphicHero } from "./components/GraphicHero";
import { AboutSection } from "./components/AboutSection";
import { LiveSection } from "./components/LiveSection";
import { MenuSection } from "./components/MenuSection";
import { CartPanel } from "./components/CartPanel";
import { CustomizeModal } from "./components/CustomizeModal";
import { PaymentModal } from "./components/PaymentModal";
import { Footer } from "./components/Footer";
import { AdminOrders } from "./components/AdminOrders";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [customizeItem, setCustomizeItem] = useState(null);
  const [paymentData, setPaymentData] = useState(null); // { total, items, customer }
  const [adminOpen, setAdminOpen] = useState(false);

  const addToCart = item => {
    setCart(c => [...c, item]);
  };

  const directAdd = item => {
    setCart(c => [...c, { ...item, size: "—", addons: [], qty: 1, total: item.price }]);
  };

  const removeFromCart = idx => setCart(c => c.filter((_, i) => i !== idx));
  const cartTotal = cart.reduce((s, i) => s + i.total, 0);

  const handleCheckout = (customer) => {
    setPaymentData({
      total: cartTotal,
      items: cart,
      customer: customer
    });
    setCartOpen(false);
  };

  const onSuccess = () => {
    setCart([]);
    setPaymentData(null);
    alert("Payment Successful! Your order is being prepared. 🍕");
  };

  if (!loaded) return <Loader onDone={() => setLoaded(true)} />;

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: darkMode ? "#060e1a" : "#f8fbff", minHeight: "100vh", width: "100%", overflowX: "hidden", position: "relative" }}>
      {/* Global Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800;900&family=DM+Sans:wght@300;400;500;600&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html, body { scroll-behavior: smooth; overflow-x: hidden; width: 100vw; position: relative; -webkit-tap-highlight-color: transparent; }
        #root { overflow-x: hidden; width: 100%; position: relative; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-thumb { background: rgba(26,143,209,0.3); border-radius: 3px; }
      `}</style>

      <Navbar cartCount={cart.length} onCartOpen={() => setCartOpen(true)} darkMode={darkMode} setDarkMode={setDarkMode} />
      <GraphicHero darkMode={darkMode} />
      <AboutSection darkMode={darkMode} />
      <LiveSection darkMode={darkMode} />
      <MenuSection darkMode={darkMode} onCustomize={setCustomizeItem} onDirectAdd={directAdd} />
      <Footer darkMode={darkMode} onAdminOpen={() => setAdminOpen(true)} />

      {/* Floating mobile cart button */}
      {cart.length > 0 && !cartOpen && !paymentData && (
        <button onClick={() => setCartOpen(true)} style={{ position: "fixed", bottom: "calc(16px + env(safe-area-inset-bottom, 0px))", left: "50%", transform: "translateX(-50%)", width: "min(calc(100% - 24px), 360px)", background: "linear-gradient(135deg,#1a8fd1,#0d6eac)", color: "#fff", border: "none", borderRadius: 99, padding: "14px 22px", fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 15, cursor: "pointer", zIndex: 200, boxShadow: "0 8px 40px rgba(26,143,209,0.5)", display: "flex", alignItems: "center", justifyContent: "center", gap: 10, animation: "slideUpBtn 0.3s ease", whiteSpace: "nowrap" }}>
          🛒 {cart.length} item{cart.length > 1 ? "s" : ""} · ₹{cartTotal}
        </button>
      )}

      {cartOpen && <CartPanel cart={cart} onClose={() => setCartOpen(false)} onRemove={removeFromCart} onCheckout={handleCheckout} darkMode={darkMode} />}
      {customizeItem && <CustomizeModal item={customizeItem} onClose={() => setCustomizeItem(null)} onAddToCart={addToCart} darkMode={darkMode} />}
      {paymentData && <PaymentModal total={paymentData.total} items={paymentData.items} customer={paymentData.customer} onClose={() => setPaymentData(null)} onSuccess={onSuccess} darkMode={darkMode} />}
      {adminOpen && <AdminOrders darkMode={darkMode} onClose={() => setAdminOpen(false)} />}
    </div>
  );
}
