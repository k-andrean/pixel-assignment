import { useState, ButtonHTMLAttributes } from "react";
import clsx from "clsx";

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
    width = "full",
    height = "40px",
    paddingX = "20px",
    paddingY = "10px",
    textColor = "#1F2128",
    backgroundColor = "#FFCE22",
    hoverBackgroundColor = "#FFD84D",
    borderRadius = "4px",
    textSize = "text-sm",
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

    return (
        <button
            className={clsx(
                `w-${width} h-[${height}] px-[${paddingX}] py-[${paddingY}] ${textSize} text-[${textColor}]`,
                `bg-[${backgroundColor}]`,
                `rounded-[${borderRadius}]`,
                "transition-all duration-200",
                {
                    [`bg-[${hoverBackgroundColor}]`]: isHovered && !isPressed,
                },
                className
            )}
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
