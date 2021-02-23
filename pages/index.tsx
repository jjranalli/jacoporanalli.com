import Head from "next/head"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Head>
        <title>Hi, I'm Jacopo!</title>
      </Head>

      <section className="pt-2">
        <div className="py-6 sm:pt-10">
          <h1 className="text-3xl pb-2">Jacopo Ranalli</h1>
          <h2 className="text-base font-normal">
            Full stack maker and engineer.
          </h2>
        </div>
        <main className="description">
          <p>
            <Link href="/projects">
              <a>Building</a>
            </Link>{" "}
            startups, side-projects, ideas of all kinds.
          </p>
          {/* <p>
              <Link href="/projects">
                <a>Building</a>
              </Link>{" "}
              3D printed biomedical devices at{" "}
              <a
                className="secondary"
                href="https://exosarmor.com"
                rel="noopener"
                target="_blank"
              >
                Exos
              </a>
              , the{" "}
              <a
                className="secondary"
                href="https://nightwindcss.com"
                rel="noopener"
                target="_blank"
              >
                Nightwind
              </a>{" "}
              dark mode plugin for TailwindCSS, and the{" "}
              <a
                className="secondary"
                href="https://iconos.design"
                rel="noopener"
                target="_blank"
              >
                iconOS
              </a>{" "}
              platform. I also have lots of ideas I plan to work on.
            </p> */}
          <p>
            <Link href="/blog">
              <a>Writing</a>
            </Link>{" "}
            about entrepreneurship, programming, and whatever piques my
            curiosity.
          </p>
          <p>
            <Link href="/music">
              <a>Composing</a>
            </Link>{" "}
            music.
          </p>
          <p className="pt-6">
            <a
              href="https://twitter.com/jj_ranalli"
              rel="noopener"
              target="_blank"
              className="secondary"
            >
              Write me
            </a>{" "}
            if you want to do something cool together.
          </p>
        </main>
      </section>
    </>
  )
}
