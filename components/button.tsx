export default function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className={`px-6 py-2 border-2 rounded-md focus:outline-none 
        ${props.primary && "border-blue-600 hover:border-blue-400"} 
        ${props.secondary && "border-yellow-600 hover:border-yellow-300"} 
        ${props.className}`}
    >
      {props.label}
    </button>
  )
}
