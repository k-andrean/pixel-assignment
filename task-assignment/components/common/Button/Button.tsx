import { useState, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    onSubmit?: () => void;
    width?: string;
    height?: string;
    paddingX?: string;
    paddingY?: string;
    textColor?: string;
    backgroundColor?: string;
    hoverBackgroundColor?: string;
    borderRadius?: string;
    textSize?: string;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({
    onSubmit = () => { },
    width = "100%",
    height = "40px",
    paddingX = "15px",
    paddingY = "10px",
    textColor = "#1F2128",
    backgroundColor = "#FFCE22",
    hoverBackgroundColor = "#FFD84D",
    borderRadius = "4px",
    textSize = "14px", // textSize in pixels instead of text class
    className = "",
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isPressed, setIsPressed] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => {
        setIsHovered(false);
        setIsPressed(false);
    };
    const handleMouseDown = () => setIsPressed(true);
    const handleMouseUp = () => setIsPressed(false);

    const buttonStyle = {
        width: width,
        height: height,
        paddingLeft: paddingX,
        paddingRight: paddingX,
        paddingTop: paddingY,
        paddingBottom: paddingY,
        color: textColor,
        backgroundColor: isHovered && !isPressed ? hoverBackgroundColor : backgroundColor,
        borderRadius: borderRadius,
        fontSize: textSize,
        transition: "all 0.2s ease-in-out",
    };

    return (
        <button
            className={className}
            style={buttonStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onClick={onSubmit}
        >
            <span className="font-medium">Done</span>
        </button>
    );
};

export default Button;
