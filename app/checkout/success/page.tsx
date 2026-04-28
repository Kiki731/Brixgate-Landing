"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { Loader2 } from "lucide-react";

const dmSans = { fontFamily: "'DM Sans', sans-serif" } as const;
const segoeUi = { fontFamily: "'Segoe UI', system-ui, sans-serif" } as const;
const inter = { fontFamily: "'Inter', sans-serif" } as const;

const PORTAL_URL = "https://portal.brixgate.com";
const REDIRECT_COUNTDOWN = 3;
const VERIFY_TIMEOUT = 10;   // seconds to keep trying before giving up
const RETRY_INTERVAL = 2000; // ms between retries
const PROXY = "/api/brixgate";

function SuccessContent() {
  const searchParams = useSearchParams();
  const reference = searchParams.get("reference") ?? searchParams.get("trxref") ?? "";

  type Phase = "verifying" | "success" | "failed";
  const [phase, setPhase] = useState<Phase>("verifying");
  const [verifyCountdown, setVerifyCountdown] = useState(VERIFY_TIMEOUT);
  const [redirectCountdown, setRedirectCountdown] = useState(REDIRECT_COUNTDOWN);

  // ── Verification with retries ──────────────────────────────────────────────
  useEffect(() => {
    if (!reference) { setPhase("failed"); return; }

    const token = sessionStorage.getItem("brix_token") ?? "";
    let cancelled = false;
    let attempts = 0;
    const maxAttempts = Math.ceil((VERIFY_TIMEOUT * 1000) / RETRY_INTERVAL);

    const tryVerify = async () => {
      try {
        const path = `payments/requery/${encodeURIComponent(reference)}`;
        const headers: Record<string, string> = {};
        if (token) headers["Authorization"] = `Bearer ${token}`;
        const res = await fetch(`${PROXY}?path=${encodeURIComponent(path)}`, { headers });
        if (!res.ok) throw new Error(`${res.status}`);
        if (!cancelled) {
          setPhase("success");
        }
      } catch {
        attempts++;
        if (!cancelled && attempts < maxAttempts) {
          setTimeout(tryVerify, RETRY_INTERVAL);
        } else if (!cancelled) {
          setPhase("failed");
        }
      }
    };

    tryVerify();
    return () => { cancelled = true; };
  }, [reference]);

  // ── Verifying countdown (visual only) ─────────────────────────────────────
  useEffect(() => {
    if (phase !== "verifying") return;
    const t = setInterval(() => {
      setVerifyCountdown((c) => (c > 0 ? c - 1 : 0));
    }, 1000);
    return () => clearInterval(t);
  }, [phase]);

  // ── Redirect countdown after success ──────────────────────────────────────
  useEffect(() => {
    if (phase !== "success") return;
    const t = setInterval(() => {
      setRedirectCountdown((c) => {
        if (c <= 1) {
          clearInterval(t);
          const token = sessionStorage.getItem("brix_token") ?? "";
          sessionStorage.removeItem("brix_token");
          const dest = token
            ? `${PORTAL_URL}/auth/callback?token=${encodeURIComponent(token)}`
            : PORTAL_URL;
          window.location.href = dest;
          return 0;
        }
        return c - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, [phase]);

  return (
    <div
      className="min-h-screen p-4 lg:p-[38px]"
      style={{ backgroundColor: "#0D1724" }}
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-[38px] items-stretch">

        {/* ── LEFT PANEL — hidden on mobile ── */}
        <div
          className="relative rounded-[20px] overflow-hidden hidden lg:block"
          style={{ backgroundColor: "#172435", minHeight: "720px" }}
        >
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
                dashboard and student profile—just check your mail for your login details.
              </p>
            </div>
          </div>

          {/* Bag lady */}
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

          {/* Flags */}
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

            {/* ── Verifying state ── */}
            {phase === "verifying" && (
              <div className="flex flex-col items-center gap-6 text-center w-full max-w-[490px]">
                <Image src="/images/logo2.png" alt="Brixgate" width={54} height={54} className="object-contain flex-shrink-0" />
                <div className="flex flex-col gap-[10px] items-center">
                  <Loader2 className="w-10 h-10 animate-spin text-[#d51715]" />
                  <h2 className="font-bold text-[#111827]" style={{ ...dmSans, fontSize: "clamp(22px, 4vw, 28px)", lineHeight: 1.2 }}>
                    Verifying your payment…
                  </h2>
                  <p className="text-[#475569] text-sm" style={segoeUi}>
                    Please hold on while we confirm your payment. This usually takes a few seconds.
                  </p>
                </div>
                <div className="bg-[#f9f9f9] rounded-[12px] p-[20px] w-full flex flex-col gap-3">
                  {reference && (
                    <div className="flex items-center justify-between text-sm" style={segoeUi}>
                      <span className="text-[#727272]">Reference</span>
                      <span className="text-[#222] font-medium font-mono tracking-wide">{reference}</span>
                    </div>
                  )}
                  <div className="flex items-center justify-between text-sm" style={segoeUi}>
                    <span className="text-[#727272]">Status</span>
                    <span className="text-[#f59e0b] font-semibold">Verifying…</span>
                  </div>
                </div>
                <p className="text-[#9ca3af] text-sm" style={inter}>
                  Timing out in {verifyCountdown}s
                </p>
              </div>
            )}

            {/* ── Payment failed state ── */}
            {phase === "failed" && (
              <div className="flex flex-col items-center gap-5 text-center w-full max-w-[490px]">
                <Image src="/images/logo2.png" alt="Brixgate" width={54} height={54} className="object-contain flex-shrink-0" />
                <div className="flex flex-col gap-[10px] items-center">
                  <h2 className="font-bold text-[#111827]" style={{ ...dmSans, fontSize: "clamp(22px, 4vw, 30px)", lineHeight: 1.2 }}>
                    Payment Not Confirmed
                  </h2>
                  <p className="text-[#475569] text-sm" style={segoeUi}>
                    We were unable to confirm your payment. If you were charged, please contact our support team with your reference number below and we&apos;ll sort it out immediately.
                  </p>
                </div>
                {reference && (
                  <div className="bg-[#f9f9f9] rounded-[12px] p-[20px] w-full">
                    <div className="flex items-center justify-between text-sm" style={segoeUi}>
                      <span className="text-[#727272]">Reference</span>
                      <span className="text-[#222] font-medium font-mono tracking-wide">{reference}</span>
                    </div>
                  </div>
                )}
                <a
                  href="mailto:we@brixgate.com"
                  className="w-full h-[44px] bg-[#d51715] hover:bg-[#b8111e] transition-colors rounded-[8px] flex items-center justify-center"
                >
                  <span className="text-white text-sm font-semibold" style={{ ...dmSans, fontVariationSettings: "'opsz' 14" }}>
                    Contact Support
                  </span>
                </a>
              </div>
            )}

            {/* ── Success state ── */}
            {phase === "success" && (
              <div className="flex flex-col items-center gap-5 lg:gap-[24px] w-full max-w-[490px]">
                <Image src="/images/logo2.png" alt="Brixgate" width={54} height={54} className="object-contain flex-shrink-0" />
                <div className="flex flex-col gap-[10px] items-center text-center w-full">
                  <h2
                    className="font-bold text-[#111827] w-full"
                    style={{ ...dmSans, fontSize: "clamp(26px, 4vw, 36px)", lineHeight: 1.2, fontVariationSettings: "'opsz' 14" }}
                  >
                    Payment Successful
                  </h2>
                  <p className="text-[#222] leading-normal w-full" style={{ ...segoeUi, fontSize: "16px" }}>
                    You&apos;ve taken the most important step toward mastery. Your seat is reserved, the curriculum is
                    unlocked, and your journey starts right now.
                  </p>
                </div>
                <div className="bg-[#f9f9f9] rounded-[12px] p-[20px] w-full flex flex-col gap-3">
                  {reference && (
                    <div className="flex items-center justify-between text-sm" style={segoeUi}>
                      <span className="text-[#727272]">Reference</span>
                      <span className="text-[#222] font-medium font-mono tracking-wide">{reference}</span>
                    </div>
                  )}
                  <div className="flex items-center justify-between text-sm" style={segoeUi}>
                    <span className="text-[#727272]">Status</span>
                    <span className="text-[#16a34a] font-semibold">Confirmed</span>
                  </div>
                </div>
                <div className="flex flex-col gap-[10px] w-full">
                  <button
                    onClick={() => {
                      const token = sessionStorage.getItem("brix_token") ?? "";
                      sessionStorage.removeItem("brix_token");
                      const dest = token
                        ? `${PORTAL_URL}/auth/callback?token=${encodeURIComponent(token)}`
                        : PORTAL_URL;
                      window.location.href = dest;
                    }}
                    className="w-full h-[44px] bg-[#d51715] hover:bg-[#b8111e] transition-colors rounded-[8px] flex items-center justify-center"
                  >
                    <span className="text-white text-sm font-semibold" style={{ ...dmSans, fontVariationSettings: "'opsz' 14" }}>
                      Go to My Dashboard
                    </span>
                  </button>
                  <p className="text-center text-[#9ca3af] text-sm" style={inter}>
                    Redirecting you in {redirectCountdown}s…
                  </p>
                </div>
              </div>
            )}

          </div>

          <p className="text-center text-[#9ca3af] py-5 flex-shrink-0" style={{ ...inter, fontSize: "13px" }}>
            Brixgate 2024
          </p>
        </div>

      </div>
    </div>
  );
}

export default function CheckoutSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#0D1724" }}>
          <Loader2 className="w-8 h-8 animate-spin text-[#d51715]" />
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}
