import { useState } from 'react'
import '../../App.css'

function NotFound() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-rose-600">
        <h1 className="text-3xl font-bold underline">
        Pagina no encontrada
        </h1>
      </div>
    </>
  )
}

export default NotFound
