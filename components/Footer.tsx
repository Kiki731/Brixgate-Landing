const programs = [
  "General AI",
  "AI in Data Analytic Intelligence",
  "AI in Cyber Security",
  "AI in Software Engineering",
  "AI in Product Management",
];

const company = ["The Story", "Founder", "Contact"];

const resources = [
  "Browse Brixers",
  "Employer Dashboard",
  "Brixer Emblem",
  "For Employers",
];

function TwitterIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M17.316 3.04H14.73l-3.554 4.672L7.74 3.04H2.716l5.87 8.206L2.716 17.96H5.3l3.938-5.18 3.86 5.18h5.026l-6.214-8.694 5.406-6.226z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M4.98 3.5C4.98 4.605 4.085 5.5 2.98 5.5S.98 4.605.98 3.5 1.875 1.5 2.98 1.5s2 .895 2 2zM1 7h4v12H1V7zm6.5 0H11v1.7c.6-1.1 2-1.7 3.2-1.7C17 7 18 9 18 11.5V19h-4v-6.5c0-1.4-.5-2.5-1.8-2.5-1 0-1.7.7-2 1.4-.1.3-.1.6-.1.9V19H7.5V7z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M10 1.8C7.566 1.8 7.257 1.81 6.344 1.852c-.91.042-1.532.186-2.076.397a4.17 4.17 0 00-1.508.98A4.175 4.175 0 001.75 4.74c-.21.544-.355 1.166-.397 2.076C1.31 7.73 1.3 8.04 1.3 10.47s.01 2.74.053 3.654c.042.91.186 1.532.397 2.076.218.56.509 1.034.98 1.508.474.471.948.762 1.508.98.544.21 1.166.355 2.076.397.913.042 1.222.053 3.654.053s2.74-.01 3.654-.053c.91-.042 1.532-.186 2.076-.397a4.37 4.37 0 001.508-.98 4.37 4.37 0 00.98-1.508c.21-.544.355-1.166.397-2.076.042-.914.053-1.223.053-3.654s-.01-2.74-.053-3.654c-.042-.91-.186-1.532-.397-2.076a4.175 4.175 0 00-.98-1.508 4.17 4.17 0 00-1.508-.98c-.544-.21-1.166-.355-2.076-.397C12.74 1.81 12.43 1.8 10 1.8zm0 1.622c2.39 0 2.674.009 3.62.052.874.04 1.348.186 1.664.309.418.162.716.356 1.03.668.312.314.506.612.668 1.03.123.316.269.79.309 1.664.043.946.052 1.23.052 3.625s-.009 2.679-.052 3.625c-.04.874-.186 1.348-.309 1.664a2.774 2.774 0 01-.668 1.03 2.774 2.774 0 01-1.03.668c-.316.123-.79.269-1.664.309-.946.043-1.23.052-3.62.052s-2.675-.009-3.62-.052c-.875-.04-1.349-.186-1.665-.309a2.774 2.774 0 01-1.03-.668 2.774 2.774 0 01-.668-1.03c-.123-.316-.269-.79-.309-1.664-.043-.946-.052-1.23-.052-3.625s.009-2.679.052-3.625c.04-.875.186-1.348.309-1.664.162-.418.356-.716.668-1.03.314-.312.612-.506 1.03-.668.316-.123.79-.269 1.664-.309.946-.043 1.23-.052 3.62-.052zM10 6.865a3.605 3.605 0 100 7.21 3.605 3.605 0 000-7.21zm0 5.943a2.337 2.337 0 110-4.675 2.337 2.337 0 010 4.675zm4.59-6.842a.843.843 0 100 1.686.843.843 0 000-1.686z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#222]">
      <div className="max-w-[1280px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#" className="inline-block mb-3">
              <span className="text-white font-bold text-2xl font-[family-name:var(--font-inter)] tracking-tight">
                BRIX<span className="font-light">GATE</span>
              </span>
            </a>
            <p className="text-white text-[14px] lg:text-base leading-relaxed mb-6">
              The global standard for talent excellence. Building and certifying professionals who
              deliver with capability, character, and conviction.
            </p>
            <div className="flex items-center gap-3">
              {[TwitterIcon, LinkedInIcon, InstagramIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white text-[#222] flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">AI in My Field</h4>
            <ul className="flex flex-col gap-4">
              {programs.map((p) => (
                <li key={p}>
                  <a href="#" className="text-white text-sm hover:text-gray-300 transition-colors">
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Company</h4>
            <ul className="flex flex-col gap-4">
              {company.map((c) => (
                <li key={c}>
                  <a href="#" className="text-white text-sm hover:text-gray-300 transition-colors">
                    {c}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Resources</h4>
            <ul className="flex flex-col gap-4">
              {resources.map((r) => (
                <li key={r}>
                  <a href="#" className="text-white text-sm hover:text-gray-300 transition-colors">
                    {r}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white text-sm">© 2026 BrixGate. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white text-sm hover:text-gray-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white text-sm hover:text-gray-300 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
