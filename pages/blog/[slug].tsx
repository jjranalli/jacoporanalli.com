import { getAllPosts, getPostBySlug } from "../api/getPosts"
import markdownToHtml from "../../lib/markdownToHtml"

import Article from "../../layouts/article"

export default function Doc({ post }) {
  return (
    <Article
      htmlTitle={post.htmlTitle}
      title={post.title}
      slug={post.slug}
      subtitle={post.subtitle}
      coverImage={post.coverImage}
    >
      <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
    </Article>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "htmlTitle",
    "title",
    "subtitle",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ])
  const content = await markdownToHtml(post.content)

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
