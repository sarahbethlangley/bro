import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import "./Login.css"


export const Login = () => {
    const [email, set] = useState("savage@sales.myauto.com")
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
    
        return fetch(`http://localhost:8088/users?email=${email}`)
            .then(response => response.json())
            .then(foundUsers => {
                if (foundUsers.length === 1) {
                    const user = foundUsers[0]
                    localStorage.setItem("bro_user", JSON.stringify({
                        id: user.id,
                        sales: user.isSales
                    }))


                    navigate("/")
                }
                else {
                    window.alert("Invalid login")
                }
            })
    }

    return (
        <main className="container--login">
            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <h1>Bro</h1>
                    <h2>Please sign in</h2>
                    <fieldset>
                        <label htmlFor="inputEmail"> Email: </label>
                        <input type="email"
                            value={email}
                            onChange={event => set(event.target.value)}
                            className="form-control"
                            placeholder="Email address"
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <button type="submit">
                            Sign in
                        </button>
                    </fieldset>
                </form>
            </section>
            <section className="link--register">
                <Link to="/register">Not a Bro yet?</Link>
            </section>
        </main>
    )
}