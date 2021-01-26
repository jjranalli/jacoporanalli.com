import Head from "next/head"
import Link from "next/link"

import { Back } from "../components/blog"

export default function Article(props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>

      <section className="pt-2">
        <Back />
        <div className="pt-6 pb-4">
          <h1 className="text-3xl pb-2">{props.title}</h1>
          <h2 className="text-base font-normal">{props.subtitle}</h2>
        </div>
        <main className="description">{props.children}</main>
      </section>
    </>
  )
}
