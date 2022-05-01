export const Element = (props) => {
    return (
        <text>
            <tspan x="34" y="45" style={{
                fontWeight: "600",
                fontSize: "10px",
            }}>
                {props.name}
            </tspan>
            <tspan x="40" y="62" style={{
                fontWeight: "500",
                fontSize: "9px",
                fill: "#666",
            }}>
                {`${props.value} %`}
            </tspan>
        </text>
    );
};

export const LongElement = (props) => {
    return (
        <text>
            <tspan x="25" y="45" style={{
                fontWeight: "600",
                fontSize: "10px",
            }}>
                {props.name}
            </tspan>
            <tspan x="40" y="62" style={{
                fontWeight: "500",
                fontSize: "9px",
                fill: "#666",
            }}>
                {`${props.value} %`}
            </tspan>
        </text>
    );
};