import Head from "next/head"

export default function Blog() {
  return (
    <>
      <Head>
        <title>Jacopo's blog</title>
      </Head>

      <main className="pt-2">
        <div className="py-6">
          <h1 className="text-3xl pb-2">Blog</h1>
          <h2 className="text-base font-normal">
            Thoughts, ideas I stumble upon.
          </h2>
        </div>
        <div className="description"></div>
      </main>
    </>
  )
}
