import { PieChart } from "react-minimal-pie-chart";
import styledComponents from "styled-components";
import { Element, LongElement } from "./Element";
import { Content } from "../shared/ProjectComponents";

function FrontChart() {
    return (
        <>
            <Chart
                data={[
                    {
                        value: 90,
                        color: '#E66B63',
                        name: "HTML"
                    }
                ]}
                startAngle={270}
                reveal={90}
                lineWidth={15}
                background="#f3f3f3"
                lengthAngle={360}
                rounded
                animate
                label={({ dataEntry, dataIndex }) => <Element key={dataIndex} {...dataEntry} />}
                labelPosition={0}
            />
            <Content>
                마크업, form, svg 등 사용
            </Content>
            <Chart
                data={[
                    {
                        value: 80,
                        color: '#E66B63',
                        name: "CSS3"
                    }
                ]}
                startAngle={270}
                reveal={80}
                lineWidth={15}
                background="#f3f3f3"
                lengthAngle={360}
                rounded
                animate
                label={({ dataEntry, dataIndex }) => <Element key={dataIndex} {...dataEntry} />}
                labelPosition={0}
            />
            <Content>
                flex, 텍스트, 애니메이션 등 사용
            </Content>
            <Chart
                data={[
                    {
                        value: 90,
                        color: '#E66B63',
                        name: "JavaScript"
                    }
                ]}
                startAngle={270}
                reveal={90}
                lineWidth={15}
                background="#f3f3f3"
                lengthAngle={360}
                rounded
                animate
                label={({ dataEntry, dataIndex }) => <LongElement key={dataIndex} {...dataEntry} />}
                labelPosition={0}
            />
            <Content>
                ES6 문법, Event 등 사용
            </Content>
            <Chart
                data={[
                    {
                        value: 85,
                        color: '#E66B63',
                        name: "React"
                    }
                ]}
                startAngle={270}
                reveal={85}
                lineWidth={15}
                background="#f3f3f3"
                lengthAngle={360}
                rounded
                animate
                label={({ dataEntry, dataIndex }) => <Element key={dataIndex} {...dataEntry} />}
                labelPosition={0}
            />
            <Content>
                React Hooks, 컴포넌트, styledComponent 등 사용
            </Content>
        </>
    )
};

export default FrontChart;

export const Chart = styledComponents(PieChart)`
    margin: 1rem 0 0 0;
`