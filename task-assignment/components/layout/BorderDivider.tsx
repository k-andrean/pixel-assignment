import FlexWrapper from "../common/Wrapper/FlexWrapper";

interface BorderDividerProps {
    rounded?: 'sm' | 'md' | 'lg' | 'full';
    height?: string;
    width?: string;
    paddingX?: string;
    paddingY?: string;
    borderColor?: string;
    borderThickness?: string;
    className?: string;
}

const BorderDivider: React.FC<BorderDividerProps> = ({
    rounded = "lg",
    height = "20px",
    width = "100%",
    paddingX = "15px",
    paddingY = "10px",
    borderColor = "#CDCDCD",
    borderThickness = "0.7px",
    className = "",
}) => {
    const wrapperStyles = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: rounded === "sm" ? "4px" : rounded === "md" ? "8px" : rounded === "lg" ? "12px" : "9999px",
        width: width,
        height: height,
        paddingLeft: paddingX,
        paddingRight: paddingX,
        paddingTop: paddingY,
        paddingBottom: paddingY,
    };

    const dividerStyles = {
        width: "100%",
        borderTop: `${borderThickness} solid ${borderColor}`,
    };

    return (
        <FlexWrapper className={className} style={wrapperStyles}>
            <div style={dividerStyles} />
        </FlexWrapper>
    );
};

export default BorderDivider;
