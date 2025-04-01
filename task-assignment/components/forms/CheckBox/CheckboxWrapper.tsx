import { ReactNode } from "react";
import FlexWrapper from "../../common/Wrapper/FlexWrapper";

interface CheckboxWrapperProps {
    children: ReactNode;
    placeholder: string;
    layout?: {
        padding?: {
            x?: {
                left: string;
                right: string;
            };
            y?: string;
        };
        maxWidth?: string;
        minHeight?: string;
    };
    className?: string;
    placeholderProps?: {
        className?: string;
        size?: string;
    };
    contentProps?: {
        className?: string;
        align?: "start" | "center" | "end";
    };
}

const defaultLayout = {
    padding: {
        x: { left: "22px", right: "15px" },
        y: "8px",
    },
    maxWidth: "370px",
    minHeight: "41px",
} as const;

const CheckboxWrapper: React.FC<CheckboxWrapperProps> = ({
    children,
    placeholder,
    layout = defaultLayout,
    className = "",
    placeholderProps = {
        className: "",
        size: "text-sm",
    },
    contentProps = {
        className: "",
        align: "center",
    },
}) => {
    const wrapperStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: layout.padding?.y,
        paddingBottom: layout.padding?.y,
        paddingLeft: layout.padding?.x?.left,
        paddingRight: layout.padding?.x?.right,
        maxWidth: layout.maxWidth,
        minHeight: layout.minHeight,
    };

    const placeholderStyle = {
        fontSize: placeholderProps.size === "text-sm" ? "0.875rem" : "1rem", // Assuming default is "text-sm"
        ...placeholderProps.className && { className: placeholderProps.className },
    };

    const contentStyle = {
        display: "flex",
        alignItems: contentProps.align || "center",
        ...contentProps.className && { className: contentProps.className },
    };

    return (
        <FlexWrapper style={wrapperStyle} className={className}>
            <span style={placeholderStyle}>{placeholder}</span>
            <div style={contentStyle}>{children}</div>
        </FlexWrapper>
    );
};

export default CheckboxWrapper;
