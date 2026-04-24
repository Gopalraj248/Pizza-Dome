import React from "react";

export const PizzaLogo = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Slice Body */}
    <path d="M24.78 7.37L5.3 22.14C4.6 22.68 4.28 23.55 4.5 24.38C4.72 25.21 5.43 25.8 6.29 25.85L25.32 26.97C26.31 27.03 27.21 26.37 27.42 25.4C27.63 24.43 27.11 23.45 26.19 23.09L24.78 7.37Z" fill="#FFC107" stroke="#000" strokeWidth="1.5" strokeLinejoin="round"/>
    {/* Crust */}
    <path d="M24.78 7.37C25.4 6.9 26.24 6.95 26.8 7.51C27.36 8.07 27.41 8.91 26.94 9.53L24.78 7.37Z" fill="#F44336" stroke="#000" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M24.78 7.37L26.94 9.53" stroke="#000" strokeWidth="1.5" strokeLinecap="round"/>
    {/* Pepperoni */}
    <circle cx="12" cy="20" r="2.2" fill="#D32F2F" stroke="#000" strokeWidth="1"/>
    <circle cx="20" cy="23" r="1.8" fill="#D32F2F" stroke="#000" strokeWidth="1"/>
    <circle cx="18" cy="15" r="1.8" fill="#D32F2F" stroke="#000" strokeWidth="1"/>
  </svg>
);
