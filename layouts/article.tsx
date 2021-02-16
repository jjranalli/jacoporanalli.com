import Head from "next/head"
import Image from "next/image"
import { useEffect } from "react"

import { Back } from "../components/blog"

export default function Article(props) {
  useEffect(() => {
    const script = document.createElement("script")
    script.setAttribute("src", "https://platform.twitter.com/widgets.js")
    script.setAttribute("async", "")
    script.setAttribute("charset", "utf-8")
    document.body.appendChild(script)
  }, [])

  return (
    <>
      <Head>
        <title>{props.htmlTitle || props.title}</title>
        <meta name="description" content={props.subtitle} />
        <meta
          key="og:title"
          property="og:title"
          content={(props.htmlTitle || props.title) + " | Jacopo's blog"}
        />
        <meta
          key="og:description"
          property="og:description"
          content={props.subtitle}
        />
        <meta
          key="og:url"
          property="og:url"
          content={"https://jacoporanalli.com/blog/" + props.slug}
        />
        <meta
          key="og:image"
          property="og:image"
          content={"https://jacoporanalli.com" + props.coverImage}
        />
        <meta
          name="twitter:title"
          content={(props.htmlTitle || props.title) + " | Jacopo's blog"}
        />
        <meta name="twitter:description" content={props.subtitle} />
        <meta
          name="twitter:image"
          content={"https://jacoporanalli.com" + props.coverImage}
        />
      </Head>

      <section className="pt-2 pb-10">
        <Back />
        <div className="pt-6">
          <h1 className="text-3xl pb-2">{props.title}</h1>
          <h2 className="text-base font-normal">{props.subtitle}</h2>
        </div>
        {props.coverImage ? (
          <div className="blog-cover">
            <Image
              src={props.coverImage}
              alt={`Cover image of ${props.slug} post`}
              layout="fill"
              className="object-cover"
            />
          </div>
        ) : null}

        <article className="description prose lg:prose-lg">
          {props.children}
        </article>
      </section>
    </>
  )
}
