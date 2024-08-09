import { useState } from "react"

const GreetState = () => {
    const [n, setName] = useState<string>("おはよう☀️")

    const greet = (): void => {
        setName(n === "おはよう☀️" ? "こんにちは🌞" : "おはよう☀️");
    }

  return (
    <div>
        <p>{n}</p>
        <button onClick={greet}>挨拶</button>
    </div>
  )
}

export default GreetState