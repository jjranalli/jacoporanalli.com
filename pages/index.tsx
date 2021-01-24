import Head from "next/head"
import Link from "next/link"

import Layout from "../layouts/layout"
import Container from "../layouts/container"

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>next-template - Homepage</title>
      </Head>

      <Container size="max-w-screen-md">
        <main className="pt-2">
          <div className="py-6 ">
            <h1 className="text-3xl pb-2">Jacopo Ranalli</h1>
            <h2 className="text-lg">Full stack maker and engineer.</h2>
          </div>
          <div className="description">
            <p>
              <Link href="/">
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
              , while giving life to projects in the back of my mind.
            </p>
            <p>
              <Link href="/">
                <a>Writing</a>
              </Link>{" "}
              about programming, entrepreneurship, and whatever piques my
              curiosity.
            </p>
            <p>
              <Link href="/">
                <a>Composing</a>
              </Link>{" "}
              music, as that's something I cannot ever stop doing.
            </p>
          </div>
        </main>
      </Container>
    </Layout>
  )
}
