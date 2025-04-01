import { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    width?: string;
    height?: string;
    padding?: {
        x?: string;
        y?: string;
    };
    className?: string;
    borderRadius?: string;
    shadow?: string;
}

const Card: React.FC<CardProps> = ({
    children,
    width = "370px",
    height = "auto",
    padding = { x: "0", y: "10px" },
    borderRadius = "6px",
    shadow = "0px 8px 15px rgba(20, 20, 20, 0.12)",
    className = "",
}) => {
    return (
        <div
            className={`flex flex-col ${className}`}
            style={{
                width,
                height,
                padding: `${padding.y} ${padding.x}`,
                borderRadius,
                boxShadow: shadow,
            }}
        >
            {children}
        </div>
    );
};

export default Card;
