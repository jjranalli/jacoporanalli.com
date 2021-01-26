import Head from "next/head"
import Link from "next/link"

import Card from "../components/card"

export default function Projects() {
  return (
    <>
      <Head>
        <title>Jacopo's projects</title>
      </Head>

      <section className="pt-2">
        <div className="py-6 sm:pt-10">
          <h1 className="text-3xl pb-2">Projects</h1>
          <h2 className="text-base font-normal">Driven by pure curiosity.</h2>
        </div>
        <div className="description pb-1">
          <p>
            Materials engineer, startup founder, generalist. I love learning new
            stuff and experimenting. Expert at throwing myself into the unknown.
          </p>
        </div>
        <main>
          <Card
            href="https://exosarmor.com"
            srcImg="/card-exos.jpg"
            srcImgHover="/cardhover-exos.jpg"
            name="Exos"
            descr="3D printed biomedical devices"
          />
          <Card
            href="https://iconos.design"
            srcImg="/card-iconos.png"
            srcImgHover="/cardhover-iconos.png"
            name="iconOS"
            descr="Marketplace of custom icons for iOS"
          />
          <Card
            href="https://nightwindcss.com"
            srcImg="/card-nightwind.png"
            srcImgHover="/cardhover-nightwind.png"
            name="Nightwind"
            descr="Dark mode plugin for Tailwind CSS"
          />
        </main>
        {/* <div className="description">
          <p>
            You can also explore my{" "}
            <Link href="/">
              <a className="">old projects</a>
            </Link>
            , and some{" "}
            <Link href="/">
              <a className="">ideas for the future</a>
            </Link>{" "}
            (open to collaborations).
          </p>
        </div> */}
      </section>
    </>
  )
}
