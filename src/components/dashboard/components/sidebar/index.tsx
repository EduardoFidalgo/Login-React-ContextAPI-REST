import React, { useEffect } from "react";
import { slide as Menu } from 'react-burger-menu'
import fox from '../../../../img/fox.png';
import { useAuth } from "../../../../context/authProvider/useAuth"
import { useHistory } from "react-router-dom";

export const Sidebar = () => {
    const history = useHistory();
    const auth = useAuth();

    async function logoutSys() {
        await auth.logout()
        history.push("/login")
        window.location.reload();
    }
    return (
        <Menu>
            <div className="sidebar--icon">
                <img src={fox} width={100} />
            </div>
            <a id="users" className="menu-item" href="/dashboard">Overview</a>
            <a id="products" className="menu-item" href="/dashboard/products">Products</a>
            <a id="chats" className="menu-item" href="/dashboard/chats">Chats</a>
            <a id="logoff" className="menu-item" onClick={logoutSys}>Logoff</a>
        </Menu>
    );
}