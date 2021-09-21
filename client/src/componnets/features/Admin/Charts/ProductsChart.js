import React from "react";
import { Column } from "@ant-design/charts";

const ProductChart = () => {
  const data = [
    {
      type: "חולצה",
      sales: 38,
    },
    {
      type: "מדבקת רכב",
      sales: 52,
    },
    {
      type: "כרטיס מועדון",
      sales: 145,
    },
  ];

  const config = {
    data,
    xField: "type",
    yField: "sales",
    label: {
      position: "middle",
      style: {
        fill: "#FFFFFF",
        opacity: 0.6,
      },
    },
    meta: {
      type: { alias: "Category" },
      sales: { alias: "Sales" },
    },
  };

  return (
    <div >
        <h3 style={{textAlign:"center"}}>מכירות חודשיות </h3>
      <Column
        {...config}
        onReady={(plot) => {
          plot.on("plot:click", (evt) => {
            const { x, y } = evt;
            const { xField } = plot.options;
            const tooltipData = plot.chart.getTooltipItems({ x, y });
            console.log(tooltipData);
          });
        }}
      />
    </div>
  );
};

export default ProductChart;
  
