import Head from "next/head"
import Link from "next/link"

import Article from "../../layouts/article"

export default function Blog() {
  return (
    <>
      <Article
        title="Introducing Nightwind"
        subtitle="A Tailwind CSS plugin to enhance dark mode"
      >
        <p>Nice</p>
      </Article>
    </>
  )
}
