import Head from "next/head"
import { useEffect } from "react"

import Navbar from "./navbar"
import Footer from "./footer"
import nightwind from "nightwind/helper"

export default function Layout({ children }) {
  const title = "Next-template"
  const subtitle = " - My new next project"
  const description = "An interesting project."
  const websiteUrl = ""
  const ogImagePath = "/og_image.jpg"
  const twitterImgUrl = websiteUrl + "/twitter_card.jpg"

  return (
    <>
      <Head>
        {/* <title>{title}</title> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>

        <script dangerouslySetInnerHTML={{ __html: nightwind.init() }} />

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={description} />

        <meta property="og:title" content={title} />
        <meta property="og:image" content={ogImagePath} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={websiteUrl} />

        <meta name="twitter:title" content={title + subtitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={twitterImgUrl} />
        <meta name="twitter:card" content="summary_large_image" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>
      <div id="layout">
        <div>
          <Navbar />
          {children}
        </div>
        <Footer />
      </div>
    </>
  )
}
