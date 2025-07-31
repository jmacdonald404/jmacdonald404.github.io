import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function AboutPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>About Me</h1>
          <br />
          <h2 className={title({ class: "mt-4" })}></h2>
          <p className="text-lg text-default-500">
            My journey into software engineering began in childhood with a natural curiosity for how things work, fueled by tinkering with electronics and exploring digital art. This early fascination evolved through high school, where I delved into programming languages like Java and Python, alongside networking and web development. I quickly applied this knowledge to build game clones and deploy live websites, fostering a deep understanding of system architecture and security, including active participation in IRC and developing Perl scripts.
          </p>
          <p className="text-lg text-default-500 mt-4">
            Following high school, I explored diverse fields, including a carpentry program at BCIT, which provided a unique perspective on problem-solving and practical application. However, my enduring passion for technology persisted, leading me to continuously expand my expertise in areas such as asynchronous programming, high-performance networking, and modern web frameworks. I am a versatile and dedicated software engineer, driven by a desire to create robust, efficient, and meaningful solutions.
          </p>
        </div>
      </section>
    </DefaultLayout>
  );
}