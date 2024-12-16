import { useState } from "react"

type Form = {
    name: string,
    age: number
}

const StateForm = () => {

    const [form, setForm] = useState<Form>({
        name: "山田太郎",
        age: 18
    })

    const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const show = () => {
        console.log(`こんにちは、${form.name} ${form.age}歳さん!`)
    }

    return (
        <div>
            <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleForm}
            />
            <input
                type="number"
                name="age"
                value={form.age}
                onChange={handleForm}
            />
            <button onClick={show}>Show Info</button>
        </div>
    )
}

export default StateForm