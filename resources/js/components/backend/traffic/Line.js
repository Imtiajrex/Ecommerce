import React from "react";
class Line extends React.Component {
    constructor() {
        super();
    }
    componentDidMount() {
        var ctx = $("#lineChart");
        if (ctx.getContext) {
            ctx = ctx.getContext("2d");
        }
        let data = {
            labels: ["27th", "26th", "25th", "24th", "23rd", "22nd"],
            datasets: [
                {
                    barPercentage: 0.5,
                    barThickness: 15,
                    maxBarThickness: 20,
                    minBarLength: 2,
                    label: "Visitors",
                    data: [50, 60, 21, 3, 150, 5],
                    backgroundColor: "#5e72e4"
                }
            ]
        };
        let myDoughnutChart = new Chart(ctx, {
            type: "bar",
            data: data
        });
    }
    render() {
        return (
            <>
                <canvas
                    id="lineChart"
                    className="chart-canvas chartjs-render-monitor"
                    style={{
                        display: "block",
                        width: "50%",
                        height: "50%"
                    }}
                ></canvas>
            </>
        );
    }
}

export default Line;
