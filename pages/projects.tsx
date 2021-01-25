import Head from "next/head"

export default function Projects() {
  return (
    <>
      <Head>
        <title>Jacopo's projects</title>
      </Head>

      <main className="pt-2">
        <div className="py-6">
          <h1 className="text-3xl pb-2">Projects</h1>
          <h2 className="text-base font-normal">Driven by pure curiosity.</h2>
        </div>
        <div className="description">
          <p>
            Materials engineer, startup founder, generalist. I love learning new
            stuff and experimenting. Expert at throwing myself into the unknown.
          </p>
          <p>Here you can find the projects I'm currently working on.</p>
        </div>
        <div className="description">
          <p>
            You can also explore my old projects, and some ideas I plan to
            develop in the future (open to collaborations).
          </p>
        </div>
      </main>
    </>
  )
}
