type Props = {
  size?: string
  children: any
}

export default function Container({ size = "", children }: Props) {
  return (
    <div className={`${size ? size : "max-w-screen-xl"} mx-auto px-4 sm:px-8`}>
      {children}
    </div>
  )
}
