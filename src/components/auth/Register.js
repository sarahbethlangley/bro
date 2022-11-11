import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Login.css"


export const Register = (props) => {
    const [user, setUser] = useState({
        email: "",
        fullName: "",
        isSales: false
    })

    let navigate = useNavigate()

    const registerNewUser = () => {
        return fetch("http://localhost:8088/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(response => response.json())
            .then(theUser => {
                if (theUser.hasOwnProperty("id")) {
                    localStorage.setItem("bro_user", JSON.stringify({
                        id: theUser.id,
                        sales: theUser.isSales
                    }))


                    navigate("/")
                }
            })
    }

    const handleRegister = (e) => {
        e.preventDefault()
        return fetch(`http://localhost:8088/users?email=${user.email}`)
        .then(response => response.json())
        .then(response => {
            if (response.length > 0) {
             
                window.alert("Account with that email address already exists")
            }
            else {
          
                registerNewUser()
            }
        })
    }

    const updateUser = (event) => {
        const copy = {...user}
        copy[event.target.id] = event.target.value
        setUser(copy)
    }

    return (
        <main style={{ textAlign: "center" }}>
            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="register">Please Register</h1>
                <fieldset>
                    <label htmlFor="fullName"> Full Name </label>
                    <input onChange={updateUser}
                            type="text" id="fullName" className="form-control"
                            placeholder="Enter your name" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="email"> Email address </label>
                    <input onChange={updateUser}
                        type="email" id="email" className="form-control"
                        placeholder="Email address" required />
                </fieldset>
                <fieldset>
                    <input onChange={(evt) => {
                        const copy = {...user}
                        copy.isSales = evt.target.checked
                        setUser(copy)
                    }}
                        type="checkbox" id="isSales" />
                    <label htmlFor="email"> I am a Sales Representative </label>
                </fieldset>
                <fieldset>
                    <button type="submit"> Register </button>
                </fieldset>
            </form>
        </main>
    )
}