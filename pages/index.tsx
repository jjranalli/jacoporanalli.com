import Head from "next/head"
import Layout from "../layouts/layout"
import Container from "../layouts/container"

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>next-template - Homepage</title>
      </Head>

      <Container>
        <main className="py-32">
          <h1>My new next project</h1>
        </main>
      </Container>
    </Layout>
  )
}
