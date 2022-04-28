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
                        color: '#E34F26',
                        name: "Node.js"
                    }
                ]}
                reveal={30}
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
                        value: 30,
                        color: '#6DB33F',
                        name: "Spring"
                    }
                ]}
                reveal={30}
                lineWidth={18}
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
                        color: '#311C87',
                        name: "Apollo"
                    }
                ]}
                reveal={40}
                lineWidth={18}
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
