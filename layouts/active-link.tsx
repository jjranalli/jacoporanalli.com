import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"

export default function ActiveLink({ href, children }) {
  const router = useRouter()

  let className = children.props.className || ""
  if (router.pathname === href) {
    className = `${className} text-blue-600`
  }

  return <Link href={href}>{React.cloneElement(children, { className })}</Link>
}
