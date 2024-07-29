import * as React from "react";
import { type DialogProps } from "@radix-ui/react-dialog";
import IconSun from "virtual:icons/tabler/sun";
import IconMoon from "virtual:icons/tabler/moon";
import IconLaptop from "virtual:icons/tabler/device-desktop";
import IconFile from "virtual:icons/tabler/file";
import { useTheme } from "@/hooks/use-theme";

import { siteMetadata } from "@/config/siteMetadata";
import { cn } from "@/lib/utils/cn";
import { Button } from "@components/ui/elements/Button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@components/ui/panels/Command";
import type { SidebarNavItem } from "@/types";

export function SearchDialog({ ...props }: DialogProps) {
  const [open, setOpen] = React.useState(false);
  const { setTheme } = useTheme();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return;
        }

        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  return (
    <>
      <Button
        variant="outline"
        className={cn(
          "relative h-8 w-full justify-start rounded-[0.5rem] bg-muted/50 text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64"
        )}
        onClick={() => setOpen(true)}
        {...props}
      >
        <span className="hidden lg:inline-flex">Search documentation...</span>
        <span className="inline-flex lg:hidden">Search...</span>
        <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Links">
            {siteMetadata.navbar
              ?.filter((navitem) => !navitem.external)
              .map((navItem: SidebarNavItem) => (
                <CommandItem
                  key={navItem.url}
                  value={navItem.label}
                  onSelect={() => {
                    runCommand(
                      () => (window.location.href = navItem.url as string)
                    );
                  }}
                >
                  <IconFile className="mr-2 h-4 w-4" />
                  {navItem.label}
                </CommandItem>
              ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Theme">
            <CommandItem onSelect={() => runCommand(() => setTheme("light"))}>
              <IconSun className="mr-2 h-4 w-4" />
              Light
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme("dark"))}>
              <IconMoon className="mr-2 h-4 w-4" />
              Dark
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme("system"))}>
              <IconLaptop className="mr-2 h-4 w-4" />
              System
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
