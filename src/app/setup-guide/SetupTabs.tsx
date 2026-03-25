"use client";

import { useState } from "react";
import { Flame, Tv, Smartphone, Monitor, Radio } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Types & data ─────────────────────────────────────────────────────────

interface DeviceGuide {
  id: string;
  icon: LucideIcon;
  name: string;
  app: string;
  steps: string[];
  tips: string[];
}

const GUIDES: DeviceGuide[] = [
  {
    id: "firestick",
    icon: Flame,
    name: "Amazon Fire Stick",
    app: "IPTV Smarters Pro / TiviMate",
    steps: [
      "Go to Settings → My Fire TV → Developer Options and enable \"Apps from Unknown Sources\".",
      "Install the Downloader app from the Amazon App Store (free — search \"Downloader\").",
      "Open Downloader and enter the IPTV Smarters Pro APK download URL provided in your welcome email.",
      "Download and install the APK. When prompted, tap Install and then Open.",
      "In IPTV Smarters, choose \"Add User via Xtream Codes\" or \"Add via M3U URL\" and paste your M3U playlist link.",
      "Enter your username and password from your welcome email, then tap Add User.",
      "Wait 1–3 minutes for your 35,000+ channels to load — then start streaming.",
    ],
    tips: [
      "TiviMate is our recommended app for Fire Stick — it has the best EPG and catch-up TV support.",
      "Use a Fire Stick 4K Max for the best 4K streaming performance.",
      "Connect via ethernet using a Fire Stick ethernet adapter for the most stable streams during live sport.",
      "Clear the Downloader cache after installation to free up storage space.",
    ],
  },
  {
    id: "androidtv",
    icon: Tv,
    name: "Android TV / Box",
    app: "TiviMate",
    steps: [
      "Open the Google Play Store on your Android TV or box.",
      "Search for \"TiviMate IPTV Player\" and install it (free with optional premium upgrade).",
      "Open TiviMate and tap \"Add Playlist\" on the home screen.",
      "Select \"M3U Playlist\" and paste the M3U URL from your welcome email.",
      "Tap \"Next\" and let TiviMate fetch and sort your channels (usually under 2 minutes).",
      "Configure EPG by going to Settings → EPG → Add EPG Source and entering your EPG URL.",
      "Your channels are ready — use the guide button to browse the 7-day programme schedule.",
    ],
    tips: [
      "TiviMate Premium unlocks multi-screen view, recordings, and advanced catch-up — worth the one-off cost.",
      "For boxes not supporting Google Play, sideload TiviMate via the APK method in the Downloader app.",
      "Enable background EPG refresh in TiviMate settings so your programme guide is always up to date.",
      "If channels buffer, check your box's DNS settings — use Google DNS (8.8.8.8) for best results.",
    ],
  },
  {
    id: "smarttv",
    icon: Monitor,
    name: "Smart TV (Samsung / LG)",
    app: "Smart IPTV / SS IPTV",
    steps: [
      "On Samsung: Open Smart Hub, search for \"Smart IPTV\" and install. On LG: Open LG Content Store and install \"SS IPTV\".",
      "Open the app — note your device MAC address displayed on the welcome screen.",
      "On Samsung (Smart IPTV): Visit siptv.eu on a computer and enter your MAC address to load your M3U URL.",
      "On LG (SS IPTV): Go to Settings within the app and enter your M3U URL directly.",
      "Save the settings and restart the app — channels load automatically within 2 minutes.",
      "Use the app's built-in EPG to browse current and upcoming programmes.",
    ],
    tips: [
      "Samsung TVs from 2016+ support Smart IPTV. LG WebOS 3.0+ works best with SS IPTV.",
      "Smart IPTV has a small one-time activation fee on some TV models — this is paid to the app developer, not us.",
      "For best results on Smart TVs, connect via wired ethernet rather than Wi-Fi.",
      "If the app doesn't appear in your regional store, use a VPN on your router to change the store region.",
    ],
  },
  {
    id: "windows",
    icon: Monitor,
    name: "Windows & Mac",
    app: "VLC / IPTV Smarters Web",
    steps: [
      "Download VLC Media Player from videolan.org (free, no account needed).",
      "Open VLC and go to Media → Open Network Stream (Ctrl+N on Windows, Cmd+N on Mac).",
      "Paste your M3U playlist URL into the URL field and click Play.",
      "VLC will load your channels — use View → Playlist to browse and select channels.",
      "Alternatively, open IPTV Smarters in your browser at app.iptvsmarters.com for a full guide with EPG.",
    ],
    tips: [
      "For a better EPG experience on desktop, IPTV Smarters Web is more feature-rich than VLC.",
      "Bookmark your M3U URL in VLC's playlist for quick daily access.",
      "On Mac, Infuse (App Store) is an excellent alternative with a beautiful interface and 4K support.",
      "If streams buffer in VLC, increase the cache size in Preferences → Input/Codecs → Network caching.",
    ],
  },
  {
    id: "ios",
    icon: Smartphone,
    name: "iPhone & iPad",
    app: "GSE Smart IPTV / IPTV Smarters",
    steps: [
      "Open the App Store and search for \"GSE Smart IPTV\" — install it (free with in-app purchase for full features).",
      "Open GSE Smart IPTV and tap the menu icon (top left), then \"Remote Playlists\".",
      "Tap the \"+\" icon, select \"Add M3U URL\", and enter a name for your playlist.",
      "Paste your M3U playlist URL and tap \"Add\".",
      "The app will fetch and sort your channels automatically — tap any channel to start streaming.",
      "Enable EPG by going to Settings → EPG Settings and entering your EPG source URL.",
    ],
    tips: [
      "GSE Smart IPTV is our top pick for iOS — it handles 4K streams, EPG, and catch-up reliably.",
      "Enable AirPlay to stream from your iPhone to an Apple TV or AirPlay-compatible TV.",
      "Background refresh in iOS Settings keeps your EPG updated automatically.",
      "On iPad, use the split-view EPG mode in GSE for a proper TV guide experience.",
    ],
  },
  {
    id: "magbox",
    icon: Radio,
    name: "MAG Box",
    app: "Built-in Stalker Portal",
    steps: [
      "Connect your MAG box to your TV via HDMI and ensure it is connected to the internet via ethernet or Wi-Fi.",
      "Power on the MAG box and wait for the home screen to load.",
      "Navigate to Settings → System Settings → Servers → Portals.",
      "Enter your Portal URL (provided in your welcome email) in the Portal 1 URL field.",
      "Save the settings and reboot your MAG box using the Settings → Reboot option.",
      "On restart, the MAG box will load your channels directly from the portal — no further setup needed.",
    ],
    tips: [
      "Always use a wired ethernet connection for MAG boxes — Wi-Fi can cause instability during live events.",
      "Update your MAG firmware to the latest version before setting up — older firmware can cause portal issues.",
      "If the portal fails to load, check that your MAG box MAC address has been registered — contact support.",
      "MAG 520/521/524/525 models support 4K — older MAG 322/324 boxes are limited to Full HD.",
    ],
  },
];

// ─── SetupTabs ────────────────────────────────────────────────────────────

export default function SetupTabs(): React.ReactElement {
  const [active, setActive] = useState("firestick");
  const guide = GUIDES.find((g) => g.id === active) ?? GUIDES[0];

  return (
    <div>
      {/* Tab buttons */}
      <div
        className="no-scrollbar flex gap-2 overflow-x-auto pb-1 mb-8"
        role="tablist"
        aria-label="Select device"
      >
        {GUIDES.map((g) => {
          const Icon = g.icon;
          return (
            <button
              key={g.id}
              role="tab"
              aria-selected={active === g.id}
              onClick={() => setActive(g.id)}
              className={cn(
                "shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-[10px] text-sm font-medium transition-all duration-200",
                active === g.id
                  ? "bg-accent text-deep shadow-[0_0_16px_var(--color-accent-glow)]"
                  : "bg-card border border-line text-muted hover:border-line-hover hover:text-body"
              )}
            >
              <Icon size={14} aria-hidden="true" strokeWidth={2} />
              {g.name}
            </button>
          );
        })}
      </div>

      {/* Guide panel */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" role="tabpanel">
        {/* Steps */}
        <div className="lg:col-span-2">
          <div className="p-2 rounded-[16px] border border-line bg-card">
            <div className="flex items-center gap-3 px-4 py-3 border-b border-line mb-2">
              <div className="w-8 h-8 rounded-[8px] bg-accent-dim flex items-center justify-center shrink-0">
                {(() => { const Icon = guide.icon; return <Icon size={16} className="text-accent" aria-hidden="true" strokeWidth={1.75} />; })()}
              </div>
              <div>
                <p className="text-sm font-body font-semibold text-body">{guide.name}</p>
                <p className="text-xs text-subtle">Recommended app: {guide.app}</p>
              </div>
            </div>
            <ol className="flex flex-col p-4 gap-4">
              {guide.steps.map((step, i) => (
                <li key={i} className="flex gap-3 text-sm text-muted leading-relaxed">
                  <span className="flex shrink-0 w-6 h-6 rounded-full bg-accent-dim text-accent text-xs font-bold items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Tips */}
        <div>
          <div className="p-5 rounded-[16px] border border-line bg-card/60">
            <p className="text-[11px] font-body font-bold uppercase tracking-[0.1em] text-accent mb-4">Pro Tips</p>
            <ul className="flex flex-col gap-3">
              {guide.tips.map((tip, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-muted leading-relaxed">
                  <span className="shrink-0 text-accent mt-0.5">→</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
