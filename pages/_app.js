import "../styles/global/styles.scss"
import { ThemeProvider } from "next-themes"
import Layout from "../layouts/layout"
import Container from "../layouts/container"

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider
      attribute="class"
      storageKey="nightwind-mode"
      defaultTheme="system"
    >
      <Layout>
        <Container size="max-w-screen-md">
          <Component {...pageProps} />
        </Container>
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
