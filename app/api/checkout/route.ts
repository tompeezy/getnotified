import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-02-25.clover",
});

const PRODUCT_PRICES: Record<string, { name: string; price: number }> = {
  "rentiq": { name: "RentIQ — Landlord Rental Market Intelligence", price: 2900 },
  "fairway-hammered": { name: "Fairway Hammered — Golf Score & Beer Tracker", price: 800 },
  "tcpa-tracker": { name: "TCPA Violation Tracker", price: 800 },
  "home-security-dashboard": { name: "Home Security Dashboard", price: 2900 },
  "home-privacy-guide": { name: "The Home Privacy Guide", price: 1700 },
  "landlord-tracker": { name: "Landlord Property Tracker", price: 2700 },
  "family-safety-kit": { name: "Family Digital Safety Kit", price: 3700 },
  "smart-home-planner": { name: "Smart Home Setup Planner", price: 1900 },
  "network-audit": { name: "Network Security Audit Tool", price: 2200 },
  "water-damage-kit": { name: "Water Damage Prevention Kit", price: 1700 },
  "bundle-all": { name: "All 7 Tools Bundle", price: 9700 },
};

export async function POST(req: NextRequest) {
  try {
    const { productId, productName, price } = await req.json();

    const product = PRODUCT_PRICES[productId];
    if (!product) {
      return NextResponse.json({ error: "Invalid product" }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: product.name,
              description: "Instant digital download — Get Notified LLC",
            },
            unit_amount: product.price,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_URL}/store/success?product=${productId}`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL}/store`,
      metadata: { productId },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe error:", error);
    return NextResponse.json({ error: "Checkout failed" }, { status: 500 });
  }
}
