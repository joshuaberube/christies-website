import Head from "next/head"
import {useState} from 'react'

const Contact = () => {
    const [contactMe, setContactMe] = useState({fullName: "", email: "", phoneNumber: "", weddingDate: "", location: "", budget: ""})

    const changeHandler = e => {
        setContactMe({...contactMe, [e.target.name]: e.target.value})
    }

    const contactMeInputs = [
        {label: "Full Name", type: "text", value: contactMe.fullName, autoComplete: "name", placeholder: "Full Name", name: "fullName"},
    ]

    const contactMeInputsMapped = contactMeInputs.map(({label, type, value, autoComplete, placeholder}) => (
        <label>
            {label}
            <input 
                type={type} 
                value={value} 
                name={fullName} 
                onChange={changeHandler} 
                autoComplete={autoComplete} 
                placeholder={placeholder}
                required
            />
        </label>
    ))

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
                            <input type="text" value={} onChange={e => setName(e.target.value)} required autoComplete="name" placeholder="Full Name"/>
                        </label>
                    </fieldset>
                </form>
            </main>
        </div>
    )
}

export default Contact
