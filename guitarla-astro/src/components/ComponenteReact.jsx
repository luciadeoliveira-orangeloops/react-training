import React, {useState} from "react"

export default function ComponenteReact() {
    const [cliente, setCliente] = useState('Juan')
  return (
    <div>
      {cliente}
    </div>
  )
}
