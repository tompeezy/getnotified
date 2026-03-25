"use client";

import { useState } from "react";

const PRODUCTS = [
  {
    id: "rentiq",
    name: "RentIQ — Rental Market Intelligence",
    desc: "Enter any zip code and instantly see real rental market data. Find out if you're leaving money on the table. Powered by live market data.",
    price: 29,
    priceId: "price_rentiq",
    emoji: "🏘️",
    color: "#f59e0b",
    badge: "🔥 New",
    features: ["Live rental market data by zip code", "Property rent estimator", "Portfolio analyzer vs market rate", "6-month rent trend charts", "\"You're leaving $X/month\" calculator", "Unlimited property tracking"],
    file: "RentIQ-Dashboard.html"
  },
  {
    id: "fairway-hammered",
    name: "Fairway Hammered",
    desc: "Golf scorecard + beer tracker app. Track scores, beers, and find out if Jim is still standing. Because someone had to build this. 🍺⛳",
    price: 8,
    priceId: "price_fairway_hammered",
    emoji: "⛳",
    color: "#16a34a",
    badge: "🍺 New",
    features: ["18-hole scorecard", "Beer counter per player", "Auto penalty rules (water, red tees, whiff)", "Beer classifications (Cart Path Only → Legendary)", "Jim fall tracker 😂", "End of round awards & sharing"],
    file: "Fairway-Hammered.html"
  },
  {
    id: "tcpa-tracker",
    name: "TCPA Violation Tracker",
    desc: "That spam text you just got? Worth $500. This tool logs violations, calculates your damages, and generates a demand letter in one click.",
    price: 8,
    priceId: "price_tcpa_tracker",
    emoji: "⚖️",
    color: "#dc2626",
    badge: "🔥 New",
    features: ["Log every spam text violation", "Auto-calculates damages ($500-$1,500)", "Generates demand letter instantly", "Tracks settlement status", "Small claims filing guide (NC)", "Works on any device"],
    file: "TCPA-Violation-Tracker.html"
  },
  {
    id: "home-security-dashboard",
    name: "Home Security Dashboard",
    desc: "Interactive security command center. Track threats, audit your network, protect every device. Saves progress between sessions.",
    price: 29,
    priceId: "price_security_dashboard",
    emoji: "🔐",
    color: "#3b82f6",
    badge: "Most Popular",
    features: ["Live security score (0-100)", "Network threat tracker", "Device inventory", "Monthly audit checklist", "Privacy score by category", "Quick action links"],
    file: "Home-Security-Dashboard.html"
  },
  {
    id: "home-privacy-guide",
    name: "The Home Privacy Guide",
    desc: "25-page plain-English guide to taking back control of your network, data, and digital life. Real steps, no jargon.",
    price: 17,
    priceId: "price_privacy_guide",
    emoji: "🔒",
    color: "#f59e0b",
    badge: null,
    features: ["What Big Tech collects on you", "Home network protection", "Ad blocking every device", "Private cloud storage", "Smart home privacy", "Printable checklist"],
    file: "Home-Privacy-Guide.html"
  },
  {
    id: "landlord-tracker",
    name: "Landlord Property Tracker",
    desc: "Manage every property, tenant, lease, maintenance issue, and expense in one place. Built for landlords with 1-10 properties.",
    price: 27,
    priceId: "price_landlord_tracker",
    emoji: "🏠",
    color: "#60a5fa",
    badge: null,
    features: ["Property overview cards", "Maintenance issue tracker", "Financial summary & expenses", "Lease expiration calendar", "Sensor alert log", "Document checklist per property"],
    file: "Landlord-Property-Tracker.html"
  },
  {
    id: "family-safety-kit",
    name: "Family Digital Safety Kit",
    desc: "Protect your kids online. Internet rules, app approvals, parental controls setup, and safety guides all in one interactive toolkit.",
    price: 37,
    priceId: "price_family_safety",
    emoji: "👨‍👩‍👧",
    color: "#34d399",
    badge: "Best Value",
    features: ["Family internet rules agreement", "Per-child device tracker", "App approval checklist", "Parental controls guide", "Emergency contacts card", "Monthly family check-in"],
    file: "Family-Digital-Safety-Kit.html"
  },
  {
    id: "smart-home-planner",
    name: "Smart Home Setup Planner",
    desc: "Room-by-room device planner, 50+ automation ideas, budget calculator, and shopping list generator.",
    price: 19,
    priceId: "price_smart_home",
    emoji: "🏡",
    color: "#c084fc",
    badge: null,
    features: ["Room-by-room device planner", "50+ automation ideas library", "Budget calculator", "Compatibility checker", "Shopping list generator", "Setup priority guide"],
    file: "Smart-Home-Setup-Planner.html"
  },
  {
    id: "network-audit",
    name: "Network Security Audit Tool",
    desc: "20-question guided audit that gives you a personalized security score and action plan. Know exactly what to fix.",
    price: 22,
    priceId: "price_network_audit",
    emoji: "🛡️",
    color: "#f87171",
    badge: null,
    features: ["20-question guided audit", "Live security score", "Plain-English risk explanations", "Personalized action plan", "Router settings guide (5 brands)", "Threat level visualization"],
    file: "Network-Security-Audit.html"
  },
  {
    id: "water-damage-kit",
    name: "Water Damage Prevention Kit",
    desc: "50-point inspection checklist, seasonal maintenance calendar, contractor tracker, and cost calculator for landlords.",
    price: 17,
    priceId: "price_water_damage",
    emoji: "💧",
    color: "#38bdf8",
    badge: null,
    features: ["50-point inspection checklist", "Seasonal maintenance calendar", "Contractor contact tracker", "Insurance claim template", "Damage cost calculator", "Sensor placement guide"],
    file: "Water-Damage-Prevention-Kit.html"
  }
];

export default function StorePage() {
  const [loading, setLoading] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const handleBuy = async (product: typeof PRODUCTS[0]) => {
    setLoading(product.id);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: product.id, productName: product.name, price: product.price }),
      });
      const { url } = await res.json();
      if (url) window.location.href = url;
    } catch (e) {
      alert("Something went wrong. Please try again or call 704-239-7532.");
    } finally {
      setLoading(null);
    }
  };

  return (
    <div style={{ background: "#f8fafc", minHeight: "100vh", fontFamily: "'Segoe UI', Arial, sans-serif" }}>

      {/* HERO */}
      <div style={{ background: "linear-gradient(135deg, #1e3a5f 0%, #0f2140 100%)", color: "white", padding: "60px 24px", textAlign: "center" }}>
        <div style={{ display: "inline-block", background: "rgba(245,158,11,0.15)", border: "1px solid rgba(245,158,11,0.4)", color: "#f59e0b", padding: "4px 16px", borderRadius: "99px", fontSize: "12px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "20px" }}>
          Digital Tools — Instant Download
        </div>
        <h1 style={{ fontSize: "clamp(28px,5vw,48px)", fontWeight: 900, marginBottom: "16px", lineHeight: 1.2 }}>
          Home Privacy & Safety Tools
        </h1>
        <p style={{ fontSize: "18px", opacity: 0.75, maxWidth: "600px", margin: "0 auto 32px", lineHeight: 1.6 }}>
          Interactive tools built by Get Notified LLC. Buy once, use forever. No subscription, no login required.
        </p>
        <div style={{ display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
          {["Instant download", "Works offline", "No subscription", "Privacy-first"].map(f => (
            <div key={f} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "14px", opacity: 0.8 }}>
              <span style={{ color: "#f59e0b" }}>✓</span> {f}
            </div>
          ))}
        </div>
      </div>

      {/* PRODUCTS */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "48px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "24px" }}>
          {PRODUCTS.map(p => (
            <div
              key={p.id}
              onMouseEnter={() => setHoveredId(p.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                background: "white",
                borderRadius: "16px",
                border: `2px solid ${hoveredId === p.id ? p.color : "#e5e7eb"}`,
                padding: "28px",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.2s",
                boxShadow: hoveredId === p.id ? `0 8px 24px ${p.color}25` : "0 1px 3px rgba(0,0,0,0.06)",
                position: "relative"
              }}
            >
              {p.badge && (
                <div style={{ position: "absolute", top: "-12px", left: "24px", background: p.color, color: "white", padding: "3px 12px", borderRadius: "99px", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px" }}>
                  {p.badge}
                </div>
              )}

              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "14px" }}>
                <div style={{ fontSize: "40px" }}>{p.emoji}</div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: "32px", fontWeight: 900, color: p.color }}>${p.price}</div>
                  <div style={{ fontSize: "11px", color: "#9ca3af" }}>one-time</div>
                </div>
              </div>

              <h3 style={{ fontSize: "18px", fontWeight: 800, color: "#111827", marginBottom: "8px" }}>{p.name}</h3>
              <p style={{ fontSize: "14px", color: "#6b7280", lineHeight: 1.6, marginBottom: "16px", flex: 1 }}>{p.desc}</p>

              <ul style={{ listStyle: "none", padding: 0, marginBottom: "20px" }}>
                {p.features.map(f => (
                  <li key={f} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#374151", padding: "4px 0" }}>
                    <span style={{ color: p.color, fontWeight: 700, flexShrink: 0 }}>✓</span> {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleBuy(p)}
                disabled={loading === p.id}
                style={{
                  width: "100%",
                  padding: "12px",
                  background: loading === p.id ? "#9ca3af" : p.color,
                  color: "white",
                  border: "none",
                  borderRadius: "10px",
                  fontSize: "15px",
                  fontWeight: 700,
                  cursor: loading === p.id ? "not-allowed" : "pointer",
                  transition: "all 0.2s"
                }}
              >
                {loading === p.id ? "Loading..." : `Buy Now — $${p.price}`}
              </button>
            </div>
          ))}
        </div>

        {/* BUNDLE */}
        <div style={{ background: "linear-gradient(135deg, #1e3a5f, #0f2140)", color: "white", borderRadius: "16px", padding: "40px", marginTop: "32px", textAlign: "center" }}>
          <div style={{ fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase", color: "#f59e0b", marginBottom: "12px" }}>Best Value</div>
          <h2 style={{ fontSize: "28px", fontWeight: 900, marginBottom: "12px" }}>All 7 Tools Bundle</h2>
          <p style={{ opacity: 0.75, marginBottom: "24px", fontSize: "16px" }}>Every tool in the store. Save $30 vs buying individually.</p>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "16px", marginBottom: "24px", flexWrap: "wrap" }}>
            <div style={{ fontSize: "20px", opacity: 0.5, textDecoration: "line-through" }}>$168</div>
            <div style={{ fontSize: "48px", fontWeight: 900, color: "#f59e0b" }}>$97</div>
          </div>
          <button
            onClick={() => handleBuy({ id: "bundle-all", name: "All 7 Tools Bundle", price: 97, priceId: "price_bundle", emoji: "📦", color: "#f59e0b", badge: null, features: [], desc: "", file: "" })}
            style={{ background: "#f59e0b", color: "#111", border: "none", padding: "14px 40px", borderRadius: "10px", fontSize: "16px", fontWeight: 800, cursor: "pointer" }}
          >
            Get All 7 Tools — $97
          </button>
        </div>

        {/* TRUST */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "16px", marginTop: "32px" }}>
          {[
            { icon: "⚡", title: "Instant Download", text: "Files delivered immediately after payment" },
            { icon: "🔒", title: "Secure Checkout", text: "Powered by Stripe — bank-level security" },
            { icon: "📱", title: "Works Everywhere", text: "Desktop, tablet, and mobile friendly" },
            { icon: "♾️", title: "Yours Forever", text: "No subscription, no expiry, no login" }
          ].map(t => (
            <div key={t.title} style={{ background: "white", borderRadius: "10px", padding: "16px", border: "1px solid #e5e7eb", textAlign: "center" }}>
              <div style={{ fontSize: "28px", marginBottom: "8px" }}>{t.icon}</div>
              <div style={{ fontWeight: 700, fontSize: "14px", marginBottom: "4px" }}>{t.title}</div>
              <div style={{ fontSize: "12px", color: "#6b7280" }}>{t.text}</div>
            </div>
          ))}
        </div>

        <p style={{ textAlign: "center", marginTop: "32px", color: "#9ca3af", fontSize: "13px" }}>
          Questions? Call <a href="tel:7042397532" style={{ color: "#1e3a5f", fontWeight: 700 }}>704-239-7532</a> or email <a href="mailto:gettompoai@gmail.com" style={{ color: "#1e3a5f", fontWeight: 700 }}>gettompoai@gmail.com</a>
        </p>
      </div>
    </div>
  );
}
