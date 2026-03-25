"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Types & data ─────────────────────────────────────────────────────────

type Category = "all" | "sports" | "entertainment" | "movies" | "news" | "kids" | "international";
type Quality  = "4K" | "HD" | "SD";

interface Channel {
  id: string;
  name: string;
  category: Exclude<Category, "all">;
  quality: Quality;
}

const CHANNELS: Channel[] = [
  // Sports
  { id: "s1",  name: "Sky Sports Premier League", category: "sports",        quality: "HD" },
  { id: "s2",  name: "Sky Sports Football",        category: "sports",        quality: "HD" },
  { id: "s3",  name: "Sky Sports Cricket",         category: "sports",        quality: "HD" },
  { id: "s4",  name: "Sky Sports Golf",            category: "sports",        quality: "HD" },
  { id: "s5",  name: "Sky Sports F1",              category: "sports",        quality: "4K" },
  { id: "s6",  name: "Sky Sports Arena",           category: "sports",        quality: "HD" },
  { id: "s7",  name: "Sky Sports Main Event",      category: "sports",        quality: "HD" },
  { id: "s8",  name: "Sky Sports Racing",          category: "sports",        quality: "HD" },
  { id: "s9",  name: "TNT Sports 1",               category: "sports",        quality: "HD" },
  { id: "s10", name: "TNT Sports 2",               category: "sports",        quality: "HD" },
  { id: "s11", name: "TNT Sports 3",               category: "sports",        quality: "HD" },
  { id: "s12", name: "TNT Sports 4",               category: "sports",        quality: "HD" },
  { id: "s13", name: "Eurosport 1",                category: "sports",        quality: "HD" },
  { id: "s14", name: "Eurosport 2",                category: "sports",        quality: "HD" },
  { id: "s15", name: "Premier Sports 1",           category: "sports",        quality: "HD" },
  { id: "s16", name: "Premier Sports 2",           category: "sports",        quality: "HD" },
  { id: "s17", name: "Sky Sports Mix",             category: "sports",        quality: "HD" },
  { id: "s18", name: "beIN Sports",                category: "sports",        quality: "HD" },
  // Entertainment
  { id: "e1",  name: "BBC One HD",                 category: "entertainment", quality: "HD" },
  { id: "e2",  name: "BBC Two HD",                 category: "entertainment", quality: "HD" },
  { id: "e3",  name: "ITV HD",                     category: "entertainment", quality: "HD" },
  { id: "e4",  name: "ITV2",                       category: "entertainment", quality: "HD" },
  { id: "e5",  name: "ITV3",                       category: "entertainment", quality: "HD" },
  { id: "e6",  name: "ITV4",                       category: "entertainment", quality: "HD" },
  { id: "e7",  name: "Channel 4 HD",               category: "entertainment", quality: "HD" },
  { id: "e8",  name: "E4",                         category: "entertainment", quality: "HD" },
  { id: "e9",  name: "Channel 5 HD",               category: "entertainment", quality: "HD" },
  { id: "e10", name: "5Star",                      category: "entertainment", quality: "HD" },
  { id: "e11", name: "5USA",                       category: "entertainment", quality: "HD" },
  { id: "e12", name: "Dave",                       category: "entertainment", quality: "HD" },
  { id: "e13", name: "Gold",                       category: "entertainment", quality: "HD" },
  { id: "e14", name: "Drama",                      category: "entertainment", quality: "HD" },
  { id: "e15", name: "Alibi",                      category: "entertainment", quality: "HD" },
  { id: "e16", name: "Yesterday",                  category: "entertainment", quality: "HD" },
  { id: "e17", name: "W Channel",                  category: "entertainment", quality: "HD" },
  { id: "e18", name: "Sky One",                    category: "entertainment", quality: "HD" },
  { id: "e19", name: "Sky Atlantic",               category: "entertainment", quality: "HD" },
  { id: "e20", name: "Sky Witness",                category: "entertainment", quality: "HD" },
  // Movies
  { id: "m1",  name: "Sky Cinema Premiere",        category: "movies",        quality: "4K" },
  { id: "m2",  name: "Sky Cinema Select",          category: "movies",        quality: "HD" },
  { id: "m3",  name: "Sky Cinema Hits",            category: "movies",        quality: "HD" },
  { id: "m4",  name: "Sky Cinema Action",          category: "movies",        quality: "HD" },
  { id: "m5",  name: "Sky Cinema Thriller",        category: "movies",        quality: "HD" },
  { id: "m6",  name: "Sky Cinema Drama",           category: "movies",        quality: "HD" },
  { id: "m7",  name: "Sky Cinema Family",          category: "movies",        quality: "HD" },
  { id: "m8",  name: "Sky Cinema Greats",          category: "movies",        quality: "HD" },
  { id: "m9",  name: "Film4 HD",                   category: "movies",        quality: "HD" },
  { id: "m10", name: "Sony Movies",                category: "movies",        quality: "HD" },
  // News
  { id: "n1",  name: "BBC News",                   category: "news",          quality: "HD" },
  { id: "n2",  name: "Sky News",                   category: "news",          quality: "HD" },
  { id: "n3",  name: "GB News",                    category: "news",          quality: "HD" },
  { id: "n4",  name: "TalkTV",                     category: "news",          quality: "HD" },
  { id: "n5",  name: "CNN International",          category: "news",          quality: "HD" },
  { id: "n6",  name: "Fox News",                   category: "news",          quality: "HD" },
  { id: "n7",  name: "Al Jazeera English",         category: "news",          quality: "HD" },
  { id: "n8",  name: "Euronews",                   category: "news",          quality: "HD" },
  { id: "n9",  name: "Bloomberg TV",               category: "news",          quality: "HD" },
  { id: "n10", name: "CNBC Europe",                category: "news",          quality: "HD" },
  // Kids
  { id: "k1",  name: "CBeebies",                   category: "kids",          quality: "HD" },
  { id: "k2",  name: "CBBC",                       category: "kids",          quality: "HD" },
  { id: "k3",  name: "Cartoon Network",            category: "kids",          quality: "HD" },
  { id: "k4",  name: "Nickelodeon",                category: "kids",          quality: "HD" },
  { id: "k5",  name: "Nick Jr.",                   category: "kids",          quality: "HD" },
  { id: "k6",  name: "Disney Channel",             category: "kids",          quality: "HD" },
  { id: "k7",  name: "Disney Junior",              category: "kids",          quality: "HD" },
  { id: "k8",  name: "Baby TV",                    category: "kids",          quality: "SD" },
  { id: "k9",  name: "Tiny Pop",                   category: "kids",          quality: "HD" },
  { id: "k10", name: "Boomerang",                  category: "kids",          quality: "HD" },
  // International
  { id: "i1",  name: "TF1 (France)",               category: "international", quality: "HD" },
  { id: "i2",  name: "M6 (France)",                category: "international", quality: "HD" },
  { id: "i3",  name: "RTL (Germany)",              category: "international", quality: "HD" },
  { id: "i4",  name: "ARD (Germany)",              category: "international", quality: "HD" },
  { id: "i5",  name: "RAI Uno (Italy)",            category: "international", quality: "HD" },
  { id: "i6",  name: "Antena 3 (Spain)",           category: "international", quality: "HD" },
  { id: "i7",  name: "MBC1 (Arabic)",              category: "international", quality: "HD" },
  { id: "i8",  name: "Zee TV (India)",             category: "international", quality: "HD" },
  { id: "i9",  name: "Star Plus (India)",          category: "international", quality: "HD" },
  { id: "i10", name: "TV5Monde (International)",   category: "international", quality: "HD" },
];

const TABS: { label: string; value: Category }[] = [
  { label: "All",            value: "all"           },
  { label: "Sports",         value: "sports"        },
  { label: "Entertainment",  value: "entertainment" },
  { label: "Movies",         value: "movies"        },
  { label: "News",           value: "news"          },
  { label: "Kids",           value: "kids"          },
  { label: "International",  value: "international" },
];

const QUALITY_COLOURS: Record<Quality, string> = {
  "4K": "text-[#FFB800] bg-[#FFB800]/10 border-[#FFB800]/25",
  "HD": "text-accent  bg-accent/10       border-accent/20",
  "SD": "text-subtle  bg-subtle/10       border-subtle/20",
};

// ─── Channel card ─────────────────────────────────────────────────────────

function ChannelCard({ channel }: { channel: Channel }): React.ReactElement {
  const initial = channel.name.charAt(0).toUpperCase();
  return (
    <div className="flex items-center gap-3 p-3.5 rounded-[12px] bg-card border border-line hover:border-accent/30 hover:bg-card-hover transition-all duration-200 group">
      {/* Avatar */}
      <div className="w-9 h-9 rounded-[8px] bg-accent-dim flex items-center justify-center shrink-0 font-display font-bold text-accent text-sm group-hover:scale-105 transition-transform duration-200">
        {initial}
      </div>
      {/* Name */}
      <span className="text-sm text-muted group-hover:text-body transition-colors duration-200 flex-1 leading-snug min-w-0 truncate">
        {channel.name}
      </span>
      {/* Quality badge */}
      <span className={cn("text-[9px] font-bold uppercase tracking-[0.1em] px-1.5 py-0.5 rounded border shrink-0", QUALITY_COLOURS[channel.quality])}>
        {channel.quality}
      </span>
    </div>
  );
}

// ─── ChannelBrowser ───────────────────────────────────────────────────────

export default function ChannelBrowser(): React.ReactElement {
  const [category, setCategory] = useState<Category>("all");
  const [query, setQuery]       = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return CHANNELS.filter((ch) => {
      const matchCat = category === "all" || ch.category === category;
      const matchQ   = !q || ch.name.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [category, query]);

  return (
    <div>
      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        {/* Category tabs */}
        <div className="no-scrollbar flex items-center gap-1.5 overflow-x-auto flex-1" role="tablist" aria-label="Channel categories">
          {TABS.map((tab) => (
            <button
              key={tab.value}
              role="tab"
              aria-selected={category === tab.value}
              onClick={() => setCategory(tab.value)}
              className={cn(
                "shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200",
                category === tab.value
                  ? "bg-accent text-deep shadow-[0_0_12px_var(--color-accent-glow)]"
                  : "bg-card border border-line text-muted hover:border-line-hover hover:text-body"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {/* Search */}
        <div className="relative shrink-0 sm:w-56">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-subtle pointer-events-none" />
          <input
            type="search"
            placeholder="Search channels…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full h-9 pl-8 pr-3 text-sm bg-card border border-line rounded-[10px] text-body placeholder:text-subtle focus:outline-none focus:border-accent/50 transition-colors"
          />
        </div>
      </div>

      {/* Count */}
      <p className="text-xs text-subtle mb-4 tabular-nums">
        Showing <strong className="text-muted">{filtered.length}</strong> of <strong className="text-muted">{CHANNELS.length}</strong> channels
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2" role="list" aria-label="Channels">
          {filtered.map((ch) => (
            <div key={ch.id} role="listitem">
              <ChannelCard channel={ch} />
            </div>
          ))}
        </div>
      ) : (
        <div className="py-16 text-center">
          <p className="text-muted text-sm">No channels match &ldquo;{query}&rdquo; in {category === "all" ? "any category" : category}.</p>
          <button onClick={() => { setQuery(""); setCategory("all"); }} className="mt-3 text-sm text-accent hover:text-body transition-colors">
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
