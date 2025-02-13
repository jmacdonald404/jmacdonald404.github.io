import { useRouter } from 'next/router'
import DefaultLayout from "@/layouts/default"
import fs from "fs"
import path from "path"
import { Article } from '@/components/article'
import { title } from "@/components/primitives";
import { Button } from "@heroui/button"

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), "public", "code.json");
  const posts = JSON.parse(fs.readFileSync(filePath, "utf8"));

  const paths = posts.map((post) => ({
    params: { name: post.name.toString() }, // Ensure id is a string
  }));

  return {
    paths,
    fallback: false, // or 'blocking' if you want fallback pages
  };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), "public", "code.json");
  const posts = JSON.parse(fs.readFileSync(filePath, "utf8"));

  const post = posts.find((post) => post.name === params.name);

  return { props: { post } };
}

function PostPage({ post }) {
  const router = useRouter()

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>
  }
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="flex text-center justify-between pb-10 flex-row w-[930px]">
          <h1 className={title()} onClick={() => router.back()}>&lt;-</h1>
          <h1 className={title()}>{post.name}</h1>
          <h1 style={{opacity:"0"}}>null</h1>
        </div>
        <Article
                img={post.img}
                name={post.name}
                tags={post.tags}
                articleURL={`/code/${post.name}`}
                description={post.description}
                liveURL={post.liveURL}
                >

        </Article>
      </section>
    </DefaultLayout>
  );
}

export default PostPage