import { ReactNode } from 'react';
import clsx from 'clsx';

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
    shadow = "0_4px_15px_#1414141F",
    className = "",
}) => {
    return (
        <div
            className={clsx(
                "flex flex-col",
                `w-[${width}] h-[${height}]`,
                `px-[${padding.x}] py-[${padding.y}]`,
                `rounded-[${borderRadius}]`,
                `shadow-[${shadow}]`,
                className
            )}
        >
            {children}
        </div>
    );
};

export default Card;