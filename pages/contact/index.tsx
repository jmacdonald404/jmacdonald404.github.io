import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function ContactPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Contact Me</h1>
          <br />
          <h2 className={title({ class: "mt-4" })}></h2>
          <p className="text-lg text-default-500">
            <a href="mailto:jmacdonald404@gmail.com">jmacdonald404@gmail.com</a>
          </p>
        </div>
      </section>
    </DefaultLayout>
  );
}
