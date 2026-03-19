"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const DOWNLOAD_FILES: Record<string, { name: string; file: string; emoji: string }> = {
  "home-security-dashboard": { name: "Home Security Dashboard", file: "/downloads/Home-Security-Dashboard.html", emoji: "🔐" },
  "home-privacy-guide": { name: "The Home Privacy Guide", file: "/downloads/Home-Privacy-Guide.html", emoji: "🔒" },
  "landlord-tracker": { name: "Landlord Property Tracker", file: "/downloads/Landlord-Property-Tracker.html", emoji: "🏠" },
  "family-safety-kit": { name: "Family Digital Safety Kit", file: "/downloads/Family-Digital-Safety-Kit.html", emoji: "👨‍👩‍👧" },
  "smart-home-planner": { name: "Smart Home Setup Planner", file: "/downloads/Smart-Home-Setup-Planner.html", emoji: "🏡" },
  "network-audit": { name: "Network Security Audit Tool", file: "/downloads/Network-Security-Audit.html", emoji: "🛡️" },
  "water-damage-kit": { name: "Water Damage Prevention Kit", file: "/downloads/Water-Damage-Prevention-Kit.html", emoji: "💧" },
  "bundle-all": { name: "All 7 Tools Bundle", file: "/downloads/bundle", emoji: "📦" },
};

function SuccessContent() {
  const params = useSearchParams();
  const productId = params.get("product") || "";
  const product = DOWNLOAD_FILES[productId];

  return (
    <div style={{ background: "#f8fafc", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px", fontFamily: "'Segoe UI', Arial, sans-serif" }}>
      <div style={{ background: "white", borderRadius: "20px", padding: "48px", maxWidth: "520px", width: "100%", textAlign: "center", boxShadow: "0 8px 32px rgba(0,0,0,0.08)", border: "1px solid #e5e7eb" }}>
        <div style={{ fontSize: "60px", marginBottom: "16px" }}>🎉</div>
        <h1 style={{ fontSize: "28px", fontWeight: 900, color: "#111827", marginBottom: "8px" }}>Thank You!</h1>
        <p style={{ color: "#6b7280", fontSize: "16px", marginBottom: "32px", lineHeight: 1.6 }}>
          Your purchase is confirmed. Click below to download your product.
        </p>

        {product && (
          <div style={{ background: "#f0f9ff", border: "2px solid #3b82f6", borderRadius: "12px", padding: "20px", marginBottom: "24px" }}>
            <div style={{ fontSize: "40px", marginBottom: "8px" }}>{product.emoji}</div>
            <div style={{ fontWeight: 700, fontSize: "16px", color: "#111827", marginBottom: "16px" }}>{product.name}</div>
            <a
              href={product.file}
              download
              style={{ display: "block", background: "#1e3a5f", color: "white", padding: "12px 24px", borderRadius: "8px", fontWeight: 700, textDecoration: "none", fontSize: "15px" }}
            >
              ⬇️ Download Now
            </a>
          </div>
        )}

        <p style={{ color: "#9ca3af", fontSize: "13px", lineHeight: 1.6 }}>
          A receipt has been sent to your email.<br />
          Questions? Call <a href="tel:7042397532" style={{ color: "#1e3a5f", fontWeight: 700 }}>704-239-7532</a> or email <a href="mailto:gettompoai@gmail.com" style={{ color: "#1e3a5f", fontWeight: 700 }}>gettompoai@gmail.com</a>
        </p>

        <a href="/store" style={{ display: "inline-block", marginTop: "20px", color: "#1e3a5f", fontWeight: 700, fontSize: "14px", textDecoration: "none" }}>
          ← Back to Store
        </a>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>Loading...</div>}>
      <SuccessContent />
    </Suspense>
  );
}
