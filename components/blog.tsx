import Link from "next/link"
import Chevron from "./icons/chevron"

export function Posts({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/blog/${encodeURIComponent(post.slug)}`}>
            <a>{post.title}</a>
          </Link>
          : {post.subtitle}
        </li>
      ))}
    </ul>
  )
}

export function Back() {
  return (
    <Link href="/blog">
      <a className="text-sm">
        <div className="flex items-center">
          <div className="w-6 h-6 mr-1">
            <Chevron />
          </div>
          <p>Go back</p>
        </div>
      </a>
    </Link>
  )
}
