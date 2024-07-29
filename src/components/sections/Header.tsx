import * as React from "react";

import { cn } from "@/lib/utils/cn";

export type ScrollState = "at-top" | "scrolling-up" | "scrolling-down";

interface SiteHeaderProps {
  children: React.ReactNode;
}

export function Header(props: SiteHeaderProps) {
  const [scrollState, setScrollState] = React.useState<ScrollState>("at-top");
  const { children } = props;

  React.useEffect(() => {
    let previousScrollY = window.scrollY;

    const handleScroll = () => {
      const direction =
        previousScrollY < window.scrollY ? "scrolling-down" : "scrolling-up";
      const state = window.scrollY < 30 ? "at-top" : direction;
      previousScrollY = window.scrollY;
      setScrollState(state);
    };

    addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => removeEventListener("scroll", handleScroll);
  }, []);

  const classes = cn(
    "fixed top-0 z-50 w-full",
    scrollState == "at-top"
      ? "bg-transparent border-transparent backdrop-blur-0 backdrop-saturate-100 shadow-none transition-[background-color,backdrop-filter,border-color,box-shadow] duration-300"
      : "bg-white/80 dark:bg-gray-800/75 shadow-md border-b shadow-gray-900/[0.05] dark:shadow-gray-900/50 border-gray-600/20 dark:border-gray-50/[0.06] backdrop-blur-md backdrop-saturate-150"
  );

  return (
    <header className={classes}>
      <div className="container flex h-14 items-center justify-between">
        {children}
      </div>
    </header>
  );
}
