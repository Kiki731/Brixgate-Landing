"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { ChevronDown, CheckCircle2, Loader2 } from "lucide-react";

const SLUG_TO_TITLE: Record<string, string> = {
  "ai-in-cyber-security": "AI in Cyber Security & Intelligence",
  "ai-in-devops-cloud": "AI in DevOps & Cloud Computing",
  "ai-in-data-analytics": "AI in Data Analytics & Intelligence",
  "ai-in-product-management": "AI in Product Management",
  "ai-in-software-engineering": "AI in Software Engineering",
  "ai-in-product-design": "AI in Product Design",
};

// All API calls go through the Next.js proxy route to avoid CORS issues in the browser
const PROXY = "/api/brixgate";

const dmSans = { fontFamily: "'DM Sans', sans-serif" } as const;
const segoeUi = { fontFamily: "'Segoe UI', system-ui, sans-serif" } as const;
const inter = { fontFamily: "'Inter', sans-serif" } as const;

function CheckoutForm() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("program") || "";
  const programId = searchParams.get("id") ? Number(searchParams.get("id")) : null;
  const trackTitle = SLUG_TO_TITLE[slug] || (slug ? slug.replace(/-/g, " ") : "Select a program");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (!success) return;
    const interval = setInterval(() => {
      setCountdown((c) => {
        if (c <= 1) {
          clearInterval(interval);
          window.location.href = "https://www.brixgate.com/portal";
          return 0;
        }
        return c - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [success]);

  const handleProceed = async () => {
    if (!name.trim()) { setError("Please enter your full name."); return; }
    if (!email.trim() || !email.includes("@")) { setError("Please enter a valid email address."); return; }
    setError("");
    setLoading(true);
    try {
      // Step 1 — Create applicant account, get back an auth token
      const ar = await fetch(`${PROXY}?path=auth/applicants`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim() }),
      });
      if (!ar.ok) throw new Error("Failed to register. Please try again.");

      const applicantData = await ar.json();
      // Token lives at data.access_token (confirmed against live API)
      const token: string =
        applicantData?.data?.access_token ??
        applicantData?.data?.token ??
        applicantData?.data?.accessToken ??
        applicantData?.access_token ??
        applicantData?.token ??
        "";

      // Step 2 — Initiate payment (auth token required); API returns a checkout URL
      const pr = await fetch(`${PROXY}?path=payments/initiate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({
          payment_type: "ENROLLMENT",
          entity_id: programId ?? 1,
          payment_method: "PAYSTACK",
          callback_url: `${window.location.origin}/checkout/success`,
        }),
      });
      if (!pr.ok) throw new Error("Failed to initiate payment. Please try again.");

      const payData = await pr.json();
      // Checkout URL lives at data.checkout.authorization_url (confirmed against live API)
      const checkoutUrl: string =
        payData?.data?.checkout?.authorization_url ??
        payData?.data?.authorization_url ??
        payData?.data?.checkoutUrl ??
        payData?.authorization_url ??
        payData?.checkout_url ??
        payData?.checkoutUrl ??
        payData?.url ??
        "";

      if (!checkoutUrl) throw new Error("No checkout URL returned. Please contact support.");

      // Step 3 — Redirect to the Paystack-hosted checkout page
      window.location.href = checkoutUrl;
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen p-4 lg:p-[38px]"
      style={{ backgroundColor: "#0D1724" }}
    >
      {/* mobile: 1 col (left hidden), desktop: 5fr/7fr */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-[38px] items-stretch">
        {/* ── LEFT PANEL — hidden on mobile ── */}
        <div
          className="relative rounded-[20px] overflow-hidden hidden lg:block"
          style={{ backgroundColor: "#172435", minHeight: "720px", gridColumn: "1 / 2" }}
        >
          {/* In-flow content — gives panel its natural height */}
          <div className="relative z-10 px-[38px]">
            <div className="pt-[45px]">
              <Image
                src="/images/brixgate-logo.png"
                alt="Brixgate"
                width={110}
                height={44}
                className="brightness-0 invert"
                priority
              />
            </div>

            <div style={{ marginTop: "100px", paddingBottom: "160px" }}>
              <h1
                className="text-white font-semibold leading-[1.15] mb-[16px]"
                style={{ ...dmSans, fontSize: "32px", fontVariationSettings: "'opsz' 14" }}
              >
                We&apos;re Ready For You
              </h1>
              <p className="text-white/70 leading-[24px]" style={{ ...inter, fontSize: "14px" }}>
                You&apos;ve done the hard work of deciding to invest in your future. We&apos;ve set up your
                dashboard and student profile, check your mail to set your login details.
              </p>
            </div>
          </div>

          {/* Bag lady — flush against right wall */}
          <div
            className="absolute pointer-events-none select-none"
            style={{ bottom: 0, left: "5%", right: 0, top: "35%" }}
          >
            <Image
              src="/images/bag lady.png"
              alt=""
              fill
              sizes="(min-width: 1024px) 40vw, 0px"
              className="object-contain"
              style={{ objectPosition: "right bottom" }}
            />
          </div>

          {/* Flags container — absolute bottom left */}
          <div className="absolute left-[38px] bottom-[38px]">
            <Image
              src="/images/Flags Container.png"
              alt="Students from around the world"
              width={140}
              height={35}
              className="object-contain"
            />
          </div>
        </div>

        {/* ── RIGHT PANEL ── */}
        <div className="bg-white rounded-[20px] flex flex-col">
          <div className="flex-1 flex flex-col items-center justify-center px-5 py-8 lg:px-[48px] lg:py-[40px]">
            {success ? (
              /* Success state */
              <div className="flex flex-col items-center text-center w-full max-w-[520px]">
                <CheckCircle2 className="w-14 h-14 text-green-500 mb-4" />
                <h2
                  className="font-bold text-[#111827] mb-3"
                  style={{ ...dmSans, fontSize: "clamp(24px, 4vw, 36px)", lineHeight: 1.2 }}
                >
                  Payment Successful!
                </h2>
                <p className="text-[#222] mb-8" style={{ ...segoeUi, fontSize: "15px" }}>
                  Welcome to Brixgate! Your enrollment is confirmed.<br />
                  Check your inbox for your login details.
                </p>
                <div className="bg-[#f9f9f9] rounded-xl px-8 py-6 w-full">
                  <p className="text-[#475569] text-sm mb-2" style={inter}>Redirecting to your portal in</p>
                  <p className="text-[#d51715] font-bold text-4xl">{countdown}s</p>
                </div>
              </div>
            ) : (
              /* Form state */
              <div className="flex flex-col items-center gap-5 lg:gap-[24px] w-full max-w-[490px]">

                {/* Red logo icon */}
                <Image
                  src="/images/logo2.png"
                  alt="Brixgate"
                  width={54}
                  height={54}
                  className="object-contain flex-shrink-0"
                />

                {/* Heading + subtitle */}
                <div className="flex flex-col gap-[10px] items-center text-center w-full">
                  <h2
                    className="font-bold text-[#111827] w-full"
                    style={{ ...dmSans, fontSize: "clamp(22px, 4vw, 32px)", lineHeight: 1.2, fontVariationSettings: "'opsz' 14" }}
                  >
                    Your Transformation Starts Here
                  </h2>
                  <p className="text-[#222] leading-normal w-full" style={{ ...segoeUi, fontSize: "14px" }}>
                    The curriculum is ready and waiting. Complete these final details to unlock the modules
                    and start building your first project today.
                  </p>
                </div>

                {/* Billing card */}
                <div className="bg-[#f9f9f9] rounded-[12px] p-[14px] lg:p-[16px] flex flex-col gap-[14px] lg:gap-[16px] w-full">
                  <p
                    className="font-medium text-[#222]"
                    style={{ ...dmSans, fontSize: "18px", letterSpacing: "-0.06em", fontVariationSettings: "'opsz' 14" }}
                  >
                    Billing Information
                  </p>

                  <div className="bg-white border border-[#f4f4f4] rounded-[12px] p-[16px] lg:p-[24px] flex flex-col gap-[14px] lg:gap-[16px]">
                    {/* Full Name */}
                    <div className="flex flex-col gap-[6px]">
                      <label className="text-[#222]" style={{ ...segoeUi, fontSize: "14px" }}>Full Name *</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="h-[44px] lg:h-[48px] w-full border border-[#e2e8f0] rounded-[6px] px-4 text-sm text-[#0f172a] bg-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline-none focus:border-[#d51715] focus:ring-1 focus:ring-[#d51715] transition-colors"
                        style={segoeUi}
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-[6px]">
                      <label className="text-[#222]" style={{ ...segoeUi, fontSize: "14px" }}>Email *</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="h-[44px] lg:h-[48px] w-full border border-[#e2e8f0] rounded-[6px] px-4 text-sm text-[#0f172a] bg-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline-none focus:border-[#d51715] focus:ring-1 focus:ring-[#d51715] transition-colors"
                        style={segoeUi}
                      />
                    </div>

                    {/* Track — readonly, visually distinct */}
                    <div className="flex flex-col gap-[6px]">
                      <label className="text-[#222]" style={{ ...segoeUi, fontSize: "14px" }}>Track</label>
                      <div className="h-[44px] lg:h-[48px] w-full border border-[#e2e8f0] rounded-[6px] px-4 flex items-center justify-between bg-[#f4f4f4] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] cursor-not-allowed">
                        <span className="text-[#6b7280] text-sm truncate" style={segoeUi}>{trackTitle}</span>
                        <ChevronDown className="w-3.5 h-3.5 text-[#9ca3af] flex-shrink-0 ml-2" />
                      </div>
                    </div>

                    {error && <p className="text-[#d51715] text-xs" style={segoeUi}>{error}</p>}
                  </div>
                </div>

                {/* Proceed button */}
                <button
                  onClick={handleProceed}
                  disabled={loading}
                  className="w-full h-[44px] bg-[#d51715] hover:bg-[#b8111e] disabled:opacity-70 disabled:cursor-not-allowed transition-colors rounded-[8px] flex items-center justify-center gap-2"
                >
                  {loading
                    ? <><Loader2 className="w-4 h-4 animate-spin text-white" /><span className="text-white text-sm font-semibold" style={dmSans}>Processing…</span></>
                    : <span className="text-white text-sm font-semibold" style={{ ...dmSans, fontVariationSettings: "'opsz' 14" }}>Proceed to Payment</span>
                  }
                </button>
              </div>
            )}
          </div>

          {/* Copyright */}
          <p className="text-center text-[#9ca3af] py-5 flex-shrink-0" style={{ ...inter, fontSize: "13px" }}>
            Brixgate 2024
          </p>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#0D1724" }}>
          <Loader2 className="w-8 h-8 animate-spin text-[#d51715]" />
        </div>
      }
    >
      <CheckoutForm />
    </Suspense>
  );
}
