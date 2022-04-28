import { Content } from "../shared/ProjectComponents";
import { Element, LongElement } from "./Element";
import { Chart } from "./FrontChart";

function DataBaseChart() {
    return (
        <>
            <Chart
                data={[
                    {
                        value: 40,
                        color: '#4479A1',
                        name: "MySQL"
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
                select, where, limit 등의 기본 문법
            </Content>
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
            <Content>
                쿼리, 뮤테이션, prisma를 사용한 스케마 등의 사용
            </Content>
        </>
    )
};

export default DataBaseChart;
