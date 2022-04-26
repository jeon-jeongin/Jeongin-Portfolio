import { Element, LongElement } from "./Element";
import { Chart } from "./FrontChart";

function DataBaseChart() {
    return (
        <>
            <Chart
                data={[
                    {
                        value: 50,
                        color: '#4479A1',
                        name: "MySQL"
                    }
                ]}
                reveal={50}
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
                        value: 50,
                        color: '#E10098',
                        name: "GraphQL"
                    }
                ]}
                reveal={50}
                lineWidth={18}
                background="#f3f3f3"
                lengthAngle={360}
                rounded
                animate
                label={({ dataEntry, dataIndex }) => <LongElement key={dataIndex} {...dataEntry} />}
                labelPosition={0}
            />
        </>
    )
};

export default DataBaseChart;
