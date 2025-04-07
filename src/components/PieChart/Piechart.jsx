// PieChartComponent.jsx
import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

const Piechart = () => {
    return (
        <PieChart
            series={[
                {
                    data: [
                        { id: 0, value: 10 },
                        { id: 1, value: 20 },
                        { id: 2, value: 30 },
                    ],
                    innerRadius: 70,
                    outerRadius: 100,
                    paddingAngle: 2,
                    cornerRadius: 4,
                    startAngle: -45,
                    endAngle: 313,
                    cx: 150,
                    cy: 150,
                },
            ]}
            width={300}
            height={300}
        />
    );
};

export default Piechart;
