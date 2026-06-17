import { ReactNode } from "react";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

type SiteLayoutProps = {
  children: ReactNode;
};

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div id="top" className="min-h-screen bg-white text-anvil-navy">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}