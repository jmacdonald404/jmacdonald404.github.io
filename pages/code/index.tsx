import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { ProjectCard } from "@/components/article/ProjectCard";
import fs from "fs";
import path from "path";
import { useRouter } from 'next/router'

interface Post {
  id: string;
  name: string;
  tags: string;
  description: string;
  headerImage: {
    src: string;
    alt: string;
  };
  liveURL?: string;
  githubURL?: string;
}

interface CodePageProps {
  posts: Post[];
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "public", "code.json");
  const posts = JSON.parse(fs.readFileSync(filePath, "utf8"));

  return {
    props: {
      posts,
    },
  };
}

export default function DocsPage({posts}: CodePageProps) {
  const router = useRouter()

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>
  }
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="flex text-center justify-between pb-5 flex-row w-[930px]">
          <h1 className={title()} onClick={() => router.back()}>&lt;-</h1>
          <h1 className={title()}>Code Projects</h1>
          <h1 style={{opacity:"0"}}>null</h1>
        </div>
        <ul>
          {posts.map((post) => (
            <li key={post.id} className="py-5">
              <ProjectCard
                title={post.name}
                tags={post.tags}
                description={post.description}
                headerImage={post.headerImage}
                liveURL={post.liveURL}
                githubURL={post.githubURL}
                articleURL={`/code/${post.name}`}
              />
            </li>
          ))}
        </ul>

      </section>

    </DefaultLayout>
  );
}
