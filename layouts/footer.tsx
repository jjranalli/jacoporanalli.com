import { Mail, Twitter, Github } from "../components/social"
import Container from "./container"

export default function Footer() {
  return (
    <footer className="py-4">
      <Container>
        <div className="flex space-x-10 justify-center">
          <a className="w-6" href="mailto:jj@jacoporanalli.com">
            <Mail />
          </a>
          <a
            className="w-6"
            rel="noopener"
            target="_blank"
            href="https://twitter.com/jj_ranalli"
          >
            <Twitter />
          </a>
          <a
            className="w-6"
            rel="noopener"
            target="_blank"
            href="https://github.com/jjranalli"
          >
            <Github />
          </a>
        </div>
      </Container>
    </footer>
  )
}
