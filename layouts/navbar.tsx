import Container from "./container"
import Nightwind from "../components/nightwind"

export default function Navbar() {
  return (
    <header>
      <Container size="max-w-screen-lg">
        <nav className="p-6 items-center mx-auto flex justify-between">
          <p>A nice logo</p>
          <div>
            <Nightwind size="h-7" />
          </div>
        </nav>
      </Container>
    </header>
  )
}
