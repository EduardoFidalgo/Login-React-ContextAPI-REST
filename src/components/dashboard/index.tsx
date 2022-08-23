import React, { useEffect } from "react";
import './dashboard.css';
import { Sidebar } from "./components/sidebar";
import { Graphic } from "./components/graphic";
import { List } from "./components/list";


export const data = [
    ["Year", "Users", "Sales", "Products"],
    ["2019", 1000, 400, 200],
    ["2020", 1170, 460, 250],
    ["2021", 660, 1120, 300],
    ["2022", 1030, 540, 350],
];


export const Dashboard = () => {

    return (
        <div className="App--Dashboard">
            <Sidebar />
            <Graphic data={data} />
            <List />
        </div>
    );
}