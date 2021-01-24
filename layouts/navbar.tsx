import Link from "next/link"

import Container from "./container"
import Nightwind from "../components/nightwind"
import JJLogo from "../components/jj-logo"

export default function Navbar() {
  return (
    <header>
      <Container size="max-w-screen-md">
        <nav className="py-6 px-2 items-center mx-auto flex justify-between">
          <div className="flex flex-grow text-sm items-center">
            <Link href="/">
              <a className="group flex-shrink-0 text-base w-3.5">
                <JJLogo />
              </a>
            </Link>
            <div
              className="w-full mx-8 flex justify-between space-x-2"
              style={{ maxWidth: "250px" }}
            >
              <p>Builds</p>
              <p>Writes</p>
              <p>Composes</p>
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
