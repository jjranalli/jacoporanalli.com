import Link from "next/link"
import ActiveLink from "./active-link"

import Container from "./container"
import Nightwind from "../components/nightwind"
import JJLogo from "../components/jj-logo"

export default function Navbar() {
  return (
    <header>
      <Container size="max-w-screen-md">
        <nav className="py-5 px-2 items-center mx-auto flex justify-between">
          <div className="flex flex-grow text-sm items-center">
            <Link href="/">
              <a className="group flex-shrink-0 text-base w-3.5">
                <JJLogo />
              </a>
            </Link>
            <div
              className="text-sm w-full mx-10 flex justify-between space-x-2"
              style={{ maxWidth: "230px" }}
            >
              <ActiveLink href="/projects">
                <a>
                  <p>Builds</p>
                </a>
              </ActiveLink>
              <ActiveLink href="/blog">
                <a>
                  <p>Writes</p>
                </a>
              </ActiveLink>
              <ActiveLink href="/music">
                <a>
                  <p>Composes</p>
                </a>
              </ActiveLink>
            </div>
          </div>
          <div>
            <Nightwind size="h-7" />
          </div>
        </nav>
      </Container>
    </header>
  )
}
