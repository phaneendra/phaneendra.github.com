import { useTheme } from "@/hooks/use-theme";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-panel group-[.toaster]:text-fg group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-fgsubtle",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-contrast",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-fgsubtle",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
