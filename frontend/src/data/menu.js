export const MENU = {
  veg: [
    { id: 1, name: "Classic Margherita", price: 185, emoji: "🍕", desc: "The timeless classic: San Marzano tomato sauce, fresh mozzarella, and aromatic basil.", tag: "Bestseller" },
    { id: 2, name: "Farm Fresca", price: 265, emoji: "🥦", desc: "Loaded with garden-fresh bell peppers, onions, sweet corn, and mushrooms.", tag: "Healthy" },
    { id: 3, name: "Paneer Pepprika", price: 395, emoji: "🧱", desc: "Spiced paneer cubes with red paprika and capsicum for a desi zing.", tag: "Chef's Pick" },
    { id: 4, name: "Paneer Pesto", price: 395, emoji: "🍃", desc: "Rich paneer tossed in creamy basil pesto sauce with sundried tomatoes.", tag: "Signature" },
    { id: 5, name: "Fiamma 🌶", price: 215, emoji: "🔥", desc: "A spicy treat featuring red chilies, jalapenos, and a dash of chili oil.", tag: "Spicy" },
    { id: 6, name: "Verdure", price: 315, emoji: "🥬", desc: "A colorful medley of seasonal grilled vegetables and balsamic glaze.", tag: "Premium" },
    { id: 7, name: "Burrata", price: 355, emoji: "🥛", desc: "Topped with a whole creamy Burrata cheese and a drizzle of extra virgin olive oil.", tag: "Luxury" },
    { id: 8, name: "Buffalo Margherita", price: 375, emoji: "🐄", desc: "Elevated Margherita featuring authentic Buffalo Mozzarella and cherry tomatoes.", tag: "Exotic" },
    { id: 9, name: "Make Your Own Pizza", price: 495, emoji: "🎨", desc: "Be the chef! Choose your toppings and craft your own masterpiece.", tag: "Custom" },
  ],
  nonveg: [
    { id: 10, name: "Chicken Diavola 🌶", price: 285, emoji: "🌋", desc: "Spicy peri-peri chicken, jalapenos, and red paprika for a fiery kick.", tag: "Hot" },
    { id: 11, name: "Chicken Supremo", price: 345, emoji: "🍗", desc: "Loaded with grilled chicken, chicken sausages, and smoked chicken ham.", tag: "Loaded" },
    { id: 12, name: "BBQ Chicken", price: 375, emoji: "🍖", desc: "Succulent chicken chunks tossed in tangy hickory-smoked BBQ sauce.", tag: "Popular" },
    { id: 13, name: "Chicken Pesto", price: 395, emoji: "🌿", desc: "Grilled chicken strips in our signature creamy basil pesto sauce.", tag: "Gourmet" },
  ],
  starters: [
    { id: 14, name: "Dough Balls", price: 225, emoji: "🥯", desc: "Freshly baked dough balls served with our signature garlic butter dip.", tag: "Classic" },
    { id: 15, name: "Cheese Garlic Pull Apart", price: 215, emoji: "🥖", desc: "Warm bread loaf stuffed with melted mozzarella and garlic herbs.", tag: "Cheesy" },
    { id: 16, name: "Peri Peri Dough Balls", price: 245, emoji: "💥", desc: "Spicy dough balls tossed in peri-peri seasoning with a cheesy core.", tag: "Spicy" },
  ],
  drinks: [
    { id: 17, name: "Bisleri", price: 20, emoji: "💧", image: "/images/bisleri.png", desc: "Chilled mineral water (500ml).", tag: "Original", isDrink: true },
    { id: 18, name: "Coke", price: 20, emoji: "🥤", image: "/images/coke.png", desc: "Classic Coca-Cola (250ml).", tag: "Classic", isDrink: true },
    { id: 19, name: "Thumbs Up", price: 20, emoji: "🥤", image: "/images/thumbsup.png", desc: "Strong Indian cola (250ml).", tag: "Strong", isDrink: true },
    { id: 20, name: "Sprite", price: 20, emoji: "🥤", image: "/images/sprite.png", desc: "Refreshing lemon-lime soda (250ml).", tag: "Fresh", isDrink: true },
  ],
};

export const SIZES = [
  { label: '8"', name: "Regular", extra: 0 },
  { label: '12"', name: "Large", extra: 100 },
];

export const ADDONS = [
  { id: "toppings", label: "Extra Toppings", price: 30, emoji: "🫑" },
  { id: "cheese", label: "Extra Cheese", price: 45, emoji: "🧀" },
  { id: "paneer", label: "Paneer Add On", price: 55, emoji: "🧱" },
  { id: "chicken", label: "Chicken Add On", price: 75, emoji: "🍗" },
];
