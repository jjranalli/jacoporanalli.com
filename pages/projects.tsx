import Head from "next/head"
import Link from "next/link"

import { useState } from "react"

import Card from "../components/card"
import Button from "../components/button"

export default function Projects() {
  const [olderVisibility, setOlderVisibility] = useState(false)

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
            href="https://series.slice.so/playground"
            srcImg="/card-playground.jpg"
            srcImgHover="/cardhover-playground.jpg"
            name="Notion Playground"
            descr="Play with Notion API"
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
          <Card
            href="https://dogeconverter.com"
            srcImg="/card-doge.jpg"
            srcImgHover="/cardhover-doge.jpg"
            name="Dogeconverter"
            descr="Convert Dogecoin to your favorite Tesla"
          />
        </main>
        <section className={olderVisibility ? "" : "hidden"}>
          <div className="pt-10">
            <h1 className="text-2xl sm:text-3xl">Older Projects</h1>
          </div>

          <div>
            <Card
              href="https://covidguard.io/"
              srcImg="/card-covid.jpg"
              srcImgHover="/cardhover-covid.jpg"
              name="Covid Guard"
              descr="The global COVID-19 screening platform"
            />
          </div>
        </section>
        <div
          className={`py-4 flex justify-center flex-wrap ${
            olderVisibility && "hidden"
          }`}
        >
          <Button
            primary
            onClick={() => setOlderVisibility(true)}
            className="mx-6 my-3"
            label="See older projects"
          />
          {/* <Button
            secondary
            onClick={() => setOlderVisibility(true)}
            className={`mx-6 my-3 ${olderVisibility && "hidden"}`}
            label="See older projects"
          /> */}
        </div>
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
