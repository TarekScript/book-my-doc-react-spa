import React from 'react';
import {
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
} from 'recharts'

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink']

// Custom triangle path
const getPath = (x, y, width, height) => {
    return `
    M${x},${y + height}
    C${x + width / 3},${y + height}
     ${x + width / 2},${y + height / 3}
     ${x + width / 2},${y}
    C${x + width / 2},${y + height / 3}
     ${x + (2 * width) / 3},${y + height}
     ${x + width},${y + height}
    Z
  `
}

// Custom bar shape
const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props

    return (
        <path
            d={getPath(Number(x), Number(y), Number(width), Number(height))}
            stroke="none"
            fill={fill}
        />
    )
}

const Chart = ({ data }) => {
    return (
        <div style={{ width: '100%', height: '400px' }}>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={data}
                    margin={{ top: 20, right: 20, left: 0, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Bar
                        dataKey="fees"
                        shape={<TriangleBar />}
                        label={{ position: 'top' }}
                    >
                        {data.map((_, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={colors[index % colors.length]}
                            />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>

    );
};

export default Chart;