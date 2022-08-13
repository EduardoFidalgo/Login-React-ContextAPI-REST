import React, { useEffect } from "react"
import { useAuth } from "../../context/authProvider/useAuth"
import { useHistory } from "react-router-dom";
import { getUserLocalStorage } from "../../context/authProvider/util";

export const Profile = () => {

    const history = useHistory();
    const auth = useAuth();

    async function logoutSys() {
        await auth.logout()
        history.push("/login")
        window.location.reload();
    }

    const user = getUserLocalStorage();

    return (
        <div className="App--Test">
            <h2>Hi {user.email}!</h2>
            <button onClick={logoutSys}>Logout</button>
        </div>
    )
}