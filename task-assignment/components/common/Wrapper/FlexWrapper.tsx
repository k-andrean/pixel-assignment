import React from "react";

interface FlexWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
}

const FlexWrapper: React.FC<FlexWrapperProps> = ({ children, className = "", ...props }) => {
    return (
        <div className={`flex ${className}`} {...props}>
            {children}
        </div>
    );
};

export default FlexWrapper;