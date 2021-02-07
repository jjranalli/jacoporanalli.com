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
    <div className="inline-block">
      <Link href="/blog">
        <a className="group text-sm">
          <div className="flex items-center">
            <div className="transform group-hover:-translate-x-1 w-6 h-6 mr-1 transition-transform duration-200">
              <Chevron />
            </div>
            <p>Go back</p>
          </div>
        </a>
      </Link>
    </div>
  )
}
