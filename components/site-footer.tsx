const footerSections = [
  {
    title: "Products",
    links: ["Elevana", "AgroTrace", "Acava"],
  },
  {
    title: "Company",
    links: ["About", "Services", "Contact"],
  },
  {
    title: "Resources",
    links: [
      // "Blog", 
      "Case Studies", "Privacy Policy"],
  },
];

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-anvil-navy text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-14 lg:grid-cols-[1.4fr_2fr] lg:px-8">
        <div>
          <p className="font-display text-2xl font-bold">Anvil Digital Innovations</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-blue-100/90">
            Building practical software products and enterprise platforms that solve real
            operational problems.
          </p>
          <p className="mt-6 text-sm font-semibold text-blue-200">Forged by Anvil.</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-display text-base font-bold">{section.title}</h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link) => (
                  <li key={link} className="text-sm text-blue-100/90">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-blue-200/20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-5 text-xs text-blue-100/80 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© 2026 Anvil Digital Innovations Ltd</p>
          <p>Forged by Anvil.</p>
        </div>
      </div>
    </footer>
  );
}