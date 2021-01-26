import Head from "next/head"

export default function Music() {
  return (
    <>
      <Head>
        <title>Jacopo's music</title>
      </Head>

      <section className="pt-2">
        <div className="py-6 sm:pt-10">
          <h1 className="text-3xl pb-2">Music</h1>
          <h2 className="text-base font-normal">My lifelong passion.</h2>
        </div>
        <div className="description">
          <p>
            Graduated at music college, perfect pitch, I can play piano,
            clarinet, guitar and everything else through my laptop.
          </p>
          <p>
            I hope one day to compose for movies, anime or videogames. Sometimes
            I write/arrange songs with friends.
          </p>
        </div>
      </section>
    </>
  )
}
