export const Element = (props) => {
    return (
        <text style={{ fontSize: "10px" }}>
            <tspan x="34" y="45">
                {props.name}
            </tspan>
            <tspan x="40" y="60">
                {`${props.value} %`}
            </tspan>
        </text>
    );
};

export const LongElement = (props) => {
    return (
        <text style={{ fontSize: "10px" }}>
            <tspan x="25" y="45">
                {props.name}
            </tspan>
            <tspan x="40" y="60">
                {`${props.value} %`}
            </tspan>
        </text>
    );
};