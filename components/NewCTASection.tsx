"use client";
import { scrollToForm } from "@/lib/scrollToForm";

export default function NewCTASection() {
  return (
    <>
    <style>{`@media (max-width: 1024px) { .cta-body-para { line-height: 1.2 !important; max-height: 160px; overflow: hidden; } .cta-heading { max-width: 324px !important; } }`}</style>
    <section
      className="hidden lg:block"
      style={{
        backgroundColor: "#ffffff",
        padding: "120px 24px 60px",
      }}
    >
      {/* Wrapper so heading can sit behind the card */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>

        {/* "Join the next cohort" — tucked behind the card */}
        <div style={{ position: "relative", zIndex: 0, paddingBottom: "0px", marginBottom: "0px" }}>
          <h3
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontWeight: 600,
              fontSize: "clamp(24px, 2.5vw, 36px)",
              color: "#969595",
              paddingBottom: "20px",
              maxWidth: "233px",
              lineHeight: "0.8",
            }}
          >
            Join the next cohort
          </h3>
        </div>

        {/* Fix 2 — Inner card: pulled up over the heading via negative margin-top */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            marginTop: "-72px",
            width: "100%",
          /* aspect ratio matches combined-bg-boy-arrow.png: 2174 × 1094 */
          aspectRatio: "2174 / 1094",
          backgroundImage: "url('/images/combined-bg-boy-arrow.png')",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Fix 3 — Text box: locked to left 55% of the card, vertically centered */}
        <div
          style={{
            position: "absolute",
            top: "60%",
            left: 0,
            transform: "translateY(-50%)",
            width: "55%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: "8%",
          }}
        >
          {/* GET STARTED sub-label */}
          <p
            style={{
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#d9d9d9",
              marginBottom: "14px",
            }}
          >
            get started
          </p>

          {/* Main heading */}
          <h2
            className="cta-heading"
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontWeight: 500,
              fontSize: "clamp(20px, 2.8vw, 40px)",
              color: "#ffffff",
              lineHeight: 1.2,
              marginBottom: "12px",
              maxWidth: "347px",
            }}
          >
            Your Next Chapter Starts Here
          </h2>

          {/* Body paragraph */}
          <p
            className="cta-body-para"
            style={{
              fontSize: "14px",
              color: "#d9d9d9",
              lineHeight: 1.7,
              marginBottom: "16px",
              maxWidth: "467px",
            }}
          >
            BrixGate is for people who care deeply about how work is done, not
            just what gets done. If that resonates with you, we&apos;d like to
            hear from you.
          </p>

          {/* CTA buttons */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
            <button
              onClick={scrollToForm}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "#d51420",
                color: "#ffffff",
                fontWeight: 500,
                fontSize: "14px",
                padding: "12px 20px",
                borderRadius: "12px",
                border: "none",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#b8111e")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#d51420")}
            >
              Join the Waitlist
              
            </button>

          </div>
        </div>
        </div>
      </div>
    </section>
    </>
  );
}
