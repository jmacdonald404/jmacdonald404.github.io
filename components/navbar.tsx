import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "./theme-switch";
import {
  GithubIcon,
  EmailIcon
} from "./icons";

export const Navbar = () => {
  // const searchInput = (
  //   <Input
  //     aria-label="Search"
  //     classNames={{
  //       inputWrapper: "bg-default-100",
  //       input: "text-sm",
  //     }}
  //     endContent={
  //       <Kbd className="hidden lg:inline-block" keys={["command"]}>
  //         K
  //       </Kbd>
  //     }
  //     labelPlacement="outside"
  //     placeholder="Search..."
  //     startContent={
  //       <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
  //     }
  //     type="search"
  //   />
  // );

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <div className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex">
          <div className="flex gap-3">
            <Link isExternal href={siteConfig.links.email} title="Email" className="w-10 h-10 flex items-center justify-center">
              <EmailIcon className="text-default-500" />
            </Link>
            <Link isExternal href={siteConfig.links.github} title="GitHub" className="w-10 h-10 flex items-center justify-center">
              <GithubIcon className="text-default-500" />
            </Link>
            <ThemeSwitch className="w-10 h-10 flex items-center justify-center" />
          </div>
        </NavbarItem>

      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4 gap-3" justify="end">
        <Link isExternal href={siteConfig.links.email} className="w-10 h-10 flex items-center justify-center">
          <EmailIcon className="text-default-500" />
        </Link>
        <Link isExternal href={siteConfig.links.github} className="w-10 h-10 flex items-center justify-center">
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch className="w-10 h-10 flex items-center justify-center" />
        <NavbarMenuToggle className="w-10 h-10 flex items-center justify-center" />
      </NavbarContent>

      <NavbarMenu>
        {siteConfig.navItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`} className="flex justify-end py-[30px]">
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground" })
              )}
              color="foreground"
              href={item.href}
            >
              {item.label}
            </NextLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>

    </NextUINavbar>
  );
};
