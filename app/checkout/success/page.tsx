"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { Loader2 } from "lucide-react";

const dmSans = { fontFamily: "'DM Sans', sans-serif" } as const;
const segoeUi = { fontFamily: "'Segoe UI', system-ui, sans-serif" } as const;
const inter = { fontFamily: "'Inter', sans-serif" } as const;

const PORTAL_URL = "https://www.brixgate.com/portal";
const COUNTDOWN_START = 5;
const PROXY = "/api/brixgate";

function SuccessContent() {
  const searchParams = useSearchParams();
  const reference = searchParams.get("reference") ?? searchParams.get("trxref") ?? "";
  const [countdown, setCountdown] = useState(COUNTDOWN_START);
  const [verifying, setVerifying] = useState(true);
  const [verified, setVerified] = useState(false);
  const [verifyError, setVerifyError] = useState("");

  // Step 1 — verify the payment with the backend
  useEffect(() => {
    if (!reference) {
      setVerifying(false);
      setVerifyError("No payment reference found.");
      return;
    }
    const verify = async () => {
      try {
        const path = `payments/requery/${encodeURIComponent(reference)}`;
        const res = await fetch(`${PROXY}?path=${encodeURIComponent(path)}`);
        if (!res.ok) throw new Error(`Verification failed (${res.status})`);
        setVerified(true);
      } catch (err: any) {
        setVerifyError(err.message ?? "Verification failed.");
      } finally {
        setVerifying(false);
      }
    };
    verify();
  }, [reference]);

  // Step 2 — start countdown only after verified
  useEffect(() => {
    if (!verified) return;
    const interval = setInterval(() => {
      setCountdown((c) => {
        if (c <= 1) {
          clearInterval(interval);
          window.location.href = PORTAL_URL;
          return 0;
        }
        return c - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [verified]);

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
            {verifying && (
              <div className="flex flex-col items-center gap-4 text-center">
                <Loader2 className="w-10 h-10 animate-spin text-[#d51715]" />
                <p className="text-[#475569] text-sm" style={inter}>Verifying your payment…</p>
              </div>
            )}

            {/* ── Error state ── */}
            {!verifying && !verified && (
              <div className="flex flex-col items-center gap-4 text-center w-full max-w-[490px]">
                <Image src="/images/logo2.png" alt="Brixgate" width={54} height={54} className="object-contain flex-shrink-0" />
                <h2 className="font-bold text-[#111827]" style={{ ...dmSans, fontSize: "clamp(22px, 4vw, 30px)", lineHeight: 1.2 }}>
                  Verification Failed
                </h2>
                <p className="text-[#475569] text-sm" style={segoeUi}>
                  We couldn&apos;t confirm your payment automatically. Please contact support with your reference below.
                </p>
                {reference && (
                  <div className="bg-[#f9f9f9] rounded-[12px] p-[20px] w-full">
                    <div className="flex items-center justify-between text-sm" style={segoeUi}>
                      <span className="text-[#727272]">Reference</span>
                      <span className="text-[#222] font-medium font-mono tracking-wide">{reference}</span>
                    </div>
                  </div>
                )}
                {verifyError && <p className="text-[#d51715] text-xs" style={inter}>{verifyError}</p>}
              </div>
            )}

            {/* ── Verified / success state ── */}
            {!verifying && verified && (
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
                  <a
                    href={PORTAL_URL}
                    className="w-full h-[44px] bg-[#d51715] hover:bg-[#b8111e] transition-colors rounded-[8px] flex items-center justify-center"
                  >
                    <span className="text-white text-sm font-semibold" style={{ ...dmSans, fontVariationSettings: "'opsz' 14" }}>
                      Go to My Dashboard
                    </span>
                  </a>
                  <p className="text-center text-[#9ca3af] text-sm" style={inter}>
                    You will be redirected in…{countdown}s
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
