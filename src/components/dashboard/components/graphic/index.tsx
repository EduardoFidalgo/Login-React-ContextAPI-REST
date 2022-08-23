import React from 'react';
import { Chart } from "react-google-charts";
import { getUserLocalStorage } from "../../../../context/authProvider/util";

export const Graphic = (props: any) => {

    const user = getUserLocalStorage();

    return (
        <div className="graphic">
            <div>
                <h1>Olá, {user.email}!</h1>
            </div>
            <div className="card--dashboard">
                <div className="card--total">
                    <span className="total--number">12</span>
                    <br />
                    <br />
                    <span className="total--label">Total User's</span>
                </div>
                <div className="card--total">
                    <span className="total--number">40</span>
                    <br />
                    <br />
                    <span className="total--label">Sales Today</span>
                </div>
            </div>
            <div className="chart">
                <Chart
                    chartType="Bar"
                    width="100%"
                    height="300px"
                    data={props.data}
                />
            </div>
        </div>
    );
}