import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-primary transition-colors duration-200 dark:bg-zinc-950">
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}
