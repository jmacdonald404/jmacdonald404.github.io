import { Link } from "@heroui/link";
// import { Snippet } from "@heroui/snippet";
// import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title } from "@/components/primitives";
import { GithubIcon, ResumeIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-10 py-8 md:py-10">
        <div className="inline-block w-xl text-center justify-center">
          <span className={title()}>Hey, I am Jeff!</span>
          <br />
          <span className={title()}>Welcome to my&nbsp;</span>
          <span className={title({ color: "violet" })}>code&nbsp;</span>
          <span className={title()}>portfolio!</span>
        </div>

        <div className="flex gap-3">
          <Link
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href="/code"
          >
            Projects
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.resume}
          >
            <ResumeIcon size={20} />
            Resume
          </Link>
        </div>

        <div className="mt-8 text-center max-w-lg">
          Contained within these pages are a selection of projects that I have worked on over the past decade, along with the code and a writeup detailing some of the process of creating each one. I have dabbled in many languages and frameworks over the years, but these days I tend to keep Rails, Node, and Python handy.
        </div>
        {/*<div className="mt-20">*/}
        {/*  maybe I will put a link to art portfolio here as an aside*/}
        {/*</div>*/}
      </section>
    </DefaultLayout>
  );
}
