import { PieChart } from "react-minimal-pie-chart";
import styledComponents from "styled-components";
import { Element, LongElement } from "./Element";

function FrontChart() {
    return (
        <>
            <Chart
                data={[
                    {
                        value: 90,
                        color: '#E34F26',
                        name: "HTML"
                    }
                ]}
                reveal={90}
                lineWidth={18}
                background="#f3f3f3"
                lengthAngle={360}
                rounded
                animate
                label={({ dataEntry, dataIndex }) => <Element key={dataIndex} {...dataEntry} />}
                labelPosition={0}
            />
            <Chart
                data={[
                    {
                        value: 80,
                        color: '#3375BC',
                        name: "CSS3"
                    }
                ]}
                reveal={80}
                lineWidth={18}
                background="#f3f3f3"
                lengthAngle={360}
                rounded
                animate
                label={({ dataEntry, dataIndex }) => <Element key={dataIndex} {...dataEntry} />}
                labelPosition={0}
            />
            <Chart
                data={[
                    {
                        value: 90,
                        color: '#FFCE00',
                        name: "Javascript"
                    }
                ]}
                reveal={90}
                lineWidth={18}
                background="#f3f3f3"
                lengthAngle={360}
                rounded
                animate
                label={({ dataEntry, dataIndex }) => <LongElement key={dataIndex} {...dataEntry} />}
                labelPosition={0}
            />
            <Chart
                data={[
                    {
                        value: 85,
                        color: '#61DAFB',
                        name: "React"
                    }
                ]}
                reveal={85}
                lineWidth={18}
                background="#f3f3f3"
                lengthAngle={360}
                rounded
                animate
                label={({ dataEntry, dataIndex }) => <Element key={dataIndex} {...dataEntry} />}
                labelPosition={0}
            />
        </>
    )
};

export default FrontChart;

export const Chart = styledComponents(PieChart)`
    margin: 1rem 0;
`