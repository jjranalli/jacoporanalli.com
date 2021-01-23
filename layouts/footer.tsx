import Link from "next/link"
import Container from "./container"

export default function Footer() {
  return (
    <footer className="py-6 text-center">
      <Container>
        <p>
          Made with 🌘 by{" "}
          <a
            href="https://twitter.com/jj_ranalli"
            className="text-indigo-700 hover:text-teal-600 dark:hover:text-yellow-200 font-medium duration-200"
          >
            Jacopo
          </a>
        </p>
      </Container>
    </footer>
  )
}
