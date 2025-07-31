export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Jeff MacDonald - Portfolio",
  description: "Jeff MacDonald's Portfolio",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Projects",
      href: "/code",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    }
  ],
  links: {
    github: "https://github.com/jmacdonald404",
    email: "mailto:jmacdonald404@gmail.com",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};