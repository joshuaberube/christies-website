import Head from "next/head"
import {useState} from 'react'

const Contact = () => {
    const [name, setName] = useState("")

    return (
        <div>
            <Head>
                <title>Contact Me</title>
            </Head>
            <main>
                <form>
                    <fieldset>
                        <legend>Contact me</legend>
                        <label>
                            First Name
                            <input type="text" value={name} onChange={e => setName(e.target.value)} required autoComplete="name" placeholder="Full Name"/>
                        </label>
                    </fieldset>
                </form>
            </main>

        </div>
    )
}

export default Contact
