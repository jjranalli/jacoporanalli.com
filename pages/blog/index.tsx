import Head from "next/head"
import Link from "next/link"
import { Posts } from "../../components/blog"

export default function Blog() {
  const posts = [
    {
      id: 1,
      slug: "nightwind",
      title: "Introducing Nightwind",
      subtitle: "A Tailwind CSS plugin to enhance dark mode",
    },
  ]
  return (
    <>
      <Head>
        <title>Jacopo's blog</title>
      </Head>

      <section className="pt-2">
        <div className="py-6 sm:pt-10">
          <h1 className="text-3xl pb-2">Blog</h1>
          <h2 className="text-base font-normal">
            Thoughts, ideas I stumble upon.
          </h2>
        </div>
        <main className="description">
          <Posts posts={posts} />
        </main>
      </section>
    </>
  )
}
