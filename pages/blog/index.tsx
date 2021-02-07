import Head from "next/head"
import Link from "next/link"
import { Posts } from "../../components/blog"
import { getAllPosts } from "../api/getPosts"

export default function Blog({ allPosts }) {
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
          <ul>
            {allPosts.map((post, key) => {
              return (
                <li key={key}>
                  <p>
                    <Link href={`/blog/${encodeURIComponent(post.slug)}`}>
                      <a className="font-medium">{post.title}</a>
                    </Link>
                    : {post.subtitle}
                  </p>
                </li>
              )
            })}
          </ul>
        </main>
      </section>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts(["title", "subtitle", "slug"])

  return {
    props: { allPosts },
  }
}
