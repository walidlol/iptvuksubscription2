import Link from "next/link";
import Image from "next/image";

// ─── Link columns ─────────────────────────────────────────────────────────

const SERVICE_LINKS = [
  { label: "IPTV UK Channels",        href: "/iptv-uk-channels/"      },
  { label: "Features & Benefits",     href: "/iptv-subscription-uk/"  },
  { label: "Pricing Plans",           href: "/pricing/"               },
  { label: "Setup Guide",             href: "/setup-guide/"           },
];

const SUPPORT_LINKS = [
  { label: "About Us",    href: "/about/"   },
  { label: "Blog",        href: "/blog/"    },
  { label: "Contact",     href: "/contact/" },
  { label: "FAQ",         href: "/faq/"     },
];

const LEGAL_LINKS = [
  { label: "Terms of Service", href: "/terms/"         },
  { label: "Privacy Policy",   href: "/privacy/"       },
  { label: "Refund Policy",    href: "/refund-policy/" },
];

// ─── Payment badges (inline SVG icons, no external deps) ──────────────────

function VisaIcon(): React.ReactElement {
  return (
    <svg
      width="38"
      height="24"
      viewBox="0 0 38 24"
      fill="none"
      aria-label="Visa"
      role="img"
      className="h-6 w-auto rounded opacity-60"
    >
      <rect width="38" height="24" rx="4" fill="#1A1A2E" />
      <text
        x="50%"
        y="50%"
        dominantBaseline="central"
        textAnchor="middle"
        fill="#EEEEF5"
        fontFamily="Arial, sans-serif"
        fontWeight="700"
        fontSize="11"
        letterSpacing="1"
      >
        VISA
      </text>
    </svg>
  );
}

function MastercardIcon(): React.ReactElement {
  return (
    <svg
      width="38"
      height="24"
      viewBox="0 0 38 24"
      fill="none"
      aria-label="Mastercard"
      role="img"
      className="h-6 w-auto rounded opacity-60"
    >
      <rect width="38" height="24" rx="4" fill="#1A1A2E" />
      <circle cx="15" cy="12" r="6" fill="#EB001B" fillOpacity="0.85" />
      <circle cx="23" cy="12" r="6" fill="#F79E1B" fillOpacity="0.85" />
    </svg>
  );
}

function PaypalIcon(): React.ReactElement {
  return (
    <svg
      width="38"
      height="24"
      viewBox="0 0 38 24"
      fill="none"
      aria-label="PayPal"
      role="img"
      className="h-6 w-auto rounded opacity-60"
    >
      <rect width="38" height="24" rx="4" fill="#1A1A2E" />
      <text
        x="50%"
        y="50%"
        dominantBaseline="central"
        textAnchor="middle"
        fill="#009CDE"
        fontFamily="Arial, sans-serif"
        fontWeight="700"
        fontSize="9"
        letterSpacing="0.3"
      >
        PayPal
      </text>
    </svg>
  );
}

function CryptoIcon(): React.ReactElement {
  return (
    <svg
      width="38"
      height="24"
      viewBox="0 0 38 24"
      fill="none"
      aria-label="Crypto"
      role="img"
      className="h-6 w-auto rounded opacity-60"
    >
      <rect width="38" height="24" rx="4" fill="#1A1A2E" />
      {/* Bitcoin symbol */}
      <text
        x="50%"
        y="50%"
        dominantBaseline="central"
        textAnchor="middle"
        fill="#F7931A"
        fontFamily="Arial, sans-serif"
        fontWeight="700"
        fontSize="13"
      >
        ₿
      </text>
    </svg>
  );
}

// ─── Social icons ─────────────────────────────────────────────────────────

function TwitterXIcon(): React.ReactElement {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
    </svg>
  );
}

function RedditIcon(): React.ReactElement {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M6.167 8a.831.831 0 0 0-.83.83c0 .459.372.84.83.831a.831.831 0 0 0 0-1.661zm1.843 3.647c.315 0 1.403-.038 1.976-.611a.232.232 0 0 0 0-.306.213.213 0 0 0-.306 0c-.353.363-1.126.487-1.67.487-.545 0-1.308-.124-1.671-.487a.213.213 0 0 0-.306 0 .213.213 0 0 0 0 .306c.564.563 1.652.61 1.977.61zm.992-2.807c0 .458.373.83.831.83.458 0 .83-.381.83-.83a.831.831 0 0 0-1.66 0z" />
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.828-1.165c-.315 0-.602.124-.812.325-.801-.573-1.9-.945-3.121-.993l.534-2.501 1.738.372a.83.83 0 1 0 .83-.83.83.83 0 0 0-.744.468l-1.938-.41a.075.075 0 0 0-.09.056l-.596 2.794c-1.225.038-2.334.405-3.144.98-.21-.2-.496-.324-.81-.324a1.163 1.163 0 0 0-.478 2.224c-.02.115-.029.23-.029.353 0 1.795 2.091 3.256 4.669 3.256 2.577 0 4.668-1.451 4.668-3.256 0-.114-.01-.238-.029-.353.401-.181.688-.592.688-1.069 0-.65-.525-1.165-1.165-1.165z" />
    </svg>
  );
}

// ─── Column link list ──────────────────────────────────────────────────────

function LinkColumn({
  title,
  links,
}: {
  title: string;
  links: Array<{ label: string; href: string }>;
}): React.ReactElement {
  return (
    <div>
      <h3 className="label-tag mb-4">{title}</h3>
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-muted hover:text-body transition-colors duration-200"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────

export default function Footer(): React.ReactElement {
  return (
    <footer className="border-t border-line bg-deep">
      <div className="mx-auto max-w-[1200px] px-6 pt-16 pb-10">

        {/* Main grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">

          {/* Brand column */}
          <div className="flex flex-col gap-5">
            <Link href="/" aria-label="IPTV UK Subscription — home">
              <Image
                src="/images/brand/logo.svg"
                alt="IPTV UK Subscription"
                width={148}
                height={34}
              />
            </Link>

            {/*
              SEO keyword paragraph — "iptv uk subscription" appears naturally.
              CLAUDE.md SEO rule: keyword in first 100 words, 2,500+ words on homepage.
            */}
            <p className="text-sm text-muted leading-relaxed max-w-[280px]">
              The UK&apos;s most reliable{" "}
              <strong className="text-subtle font-medium">IPTV UK subscription</strong>{" "}
              service. Stream 10,000+ live channels — Premier League, Sky Sports,
              BBC, ITV — on any device. Instant activation, no contracts.
            </p>

            {/* Payment badges */}
            <div>
              <p className="label-tag mb-2.5">Secure Payments</p>
              <div className="flex items-center gap-2">
                <VisaIcon />
                <MastercardIcon />
                <PaypalIcon />
                <CryptoIcon />
              </div>
            </div>
          </div>

          {/* Service links */}
          <LinkColumn title="Service" links={SERVICE_LINKS} />

          {/* Support links */}
          <LinkColumn title="Support" links={SUPPORT_LINKS} />

          {/* Legal links */}
          <LinkColumn title="Legal" links={LEGAL_LINKS} />
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-line pt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-subtle">
            &copy; {new Date().getFullYear()}{" "}
            <Link
              href="/"
              className="hover:text-muted transition-colors"
            >
              iptvuksubscription.uk
            </Link>
            . All rights reserved.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow IPTV UK on X (Twitter)"
              className="text-subtle hover:text-body transition-colors"
            >
              <TwitterXIcon />
            </a>
            <a
              href="https://reddit.com/r/iptvuk"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="IPTV UK on Reddit"
              className="text-subtle hover:text-body transition-colors"
            >
              <RedditIcon />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
