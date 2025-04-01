import { ReactNode } from "react";
import clsx from "clsx";
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
        align?: 'start' | 'center' | 'end';
    };
}

const defaultLayout = {
    padding: {
        x: { left: '22px', right: '15px' },
        y: '8px',
    },
    maxWidth: '370px',
    minHeight: '41px',
} as const;

const CheckboxWrapper: React.FC<CheckboxWrapperProps> = ({
    children,
    placeholder,
    layout = defaultLayout,
    className = "",
    placeholderProps = {
        className: "",
        size: "text-sm"
    },
    contentProps = {
        className: "",
        align: "center"
    }
}) => {
    const containerClasses = clsx(
        "items-center justify-between",
        `py-[${layout.padding?.y}] pl-[${layout.padding?.x?.left}] pr-[${layout.padding?.x?.right}]`,
        `max-w-[${layout.maxWidth}] min-h-[${layout.minHeight}]`,
        className
    );

    const placeholderClasses = clsx(
        placeholderProps.size,
        placeholderProps.className
    );

    const contentClasses = clsx(
        "flex",
        `items-${contentProps.align}`,
        contentProps.className
    );

    return (
        <FlexWrapper className={containerClasses}>
            <span className={placeholderClasses}>{placeholder}</span>
            <div className={contentClasses}>{children}</div>
        </FlexWrapper>
    );
};

export default CheckboxWrapper;
