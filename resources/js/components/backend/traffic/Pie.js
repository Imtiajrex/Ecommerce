import React from "react";
class Pie extends React.Component {
    constructor() {
        super();
    }
    componentDidMount() {
        var ctx = $("#myChart");
        if (ctx.getContext) {
            ctx = ctx.getContext("2d");
        }
        let data = {
            datasets: [
                {
                    data: [10, 20, 30],
                    backgroundColor: [
                        "#fb6340",
                        "#f5365c",
                        "#2dce89",
                        "#11cdef",
                        "#f4f5f7",
                        "#5e72e4"

                        //...
                    ]
                }
            ],
            labels: ["Product 231", "Product 45", "Product 12"]
        };
        let myDoughnutChart = new Chart(ctx, {
            type: "doughnut",
            data: data
        });
    }
    render() {
        return (
            <>
                <canvas
                    id="myChart"
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

export default Pie;
