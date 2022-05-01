import { Content } from "../shared/ProjectComponents";
import { Element } from "./Element";
import { Chart } from "./FrontChart";

function BackChart() {
    return (
        <>
            <Chart
                data={[
                    {
                        value: 30,
                        color: '#E66B63',
                        name: "Node.js"
                    }
                ]}
                startAngle={270}
                reveal={30}
                lineWidth={15}
                background="#f3f3f3"
                lengthAngle={360}
                rounded
                animate
                label={({ dataEntry, dataIndex }) => <Element key={dataIndex} {...dataEntry} />}
                labelPosition={0}
            />
            <Content>
                JavaScript 런타임의 이해
            </Content>
            <Chart
                data={[
                    {
                        value: 30,
                        color: '#E66B63',
                        name: "Spring"
                    }
                ]}
                startAngle={270}
                reveal={30}
                lineWidth={15}
                background="#f3f3f3"
                lengthAngle={360}
                rounded
                animate
                label={({ dataEntry, dataIndex }) => <Element key={dataIndex} {...dataEntry} />}
                labelPosition={0}
            />
            <Content>
                mvc 구조의 이해
            </Content>
            <Chart
                data={[
                    {
                        value: 40,
                        color: '#E66B63',
                        name: "Apollo"
                    }
                ]}
                startAngle={270}
                reveal={40}
                lineWidth={15}
                background="#f3f3f3"
                lengthAngle={360}
                rounded
                animate
                label={({ dataEntry, dataIndex }) => <Element key={dataIndex} {...dataEntry} />}
                labelPosition={0}
            />
            <Content>
                Apollo 캐시, Apollo client 등의 사용
            </Content>
        </>
    )
};

export default BackChart;
