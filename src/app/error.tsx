"use client";

import { useEffect } from "react";
import { cn } from "@/lib/utils";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const btnClass = "inline-flex h-11 items-center justify-center gap-2 rounded-[12px] px-6 text-sm font-semibold transition-all duration-300";

export default function Error({ error, reset }: ErrorProps): React.ReactElement {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-deep px-6 text-center">
      <span className="label-tag">Something went wrong</span>
      <h1 className="font-display text-4xl font-bold tracking-[-0.04em] text-body">
        An unexpected error occurred
      </h1>
      <p className="max-w-md text-muted">
        We&apos;ve been notified. Please try again or contact support if the issue persists.
      </p>
      <div className="flex gap-3">
        <button
          onClick={reset}
          className={cn(btnClass, "bg-accent text-deep hover:bg-[#00cc6a]")}
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
