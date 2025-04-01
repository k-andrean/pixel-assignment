import clsx from "clsx";
import FlexWrapper from "../common/Wrapper/FlexWrapper";

interface BorderDividerProps {
    rounded?: 'sm' | 'md' | 'lg' | 'full';
    height?: `[${string}]` | string;
    width?: `[${string}]` | string;
    paddingX?: `[${string}]` | string;
    paddingY?: `[${string}]` | string;
    borderColor?: string;
    borderThickness?: `${number}px`;
    className?: string;
}


const BorderDivider: React.FC<BorderDividerProps> = ({
    rounded = "lg",
    height = "[20px]",
    width = "full",
    paddingX = "[15px]",
    paddingY = "[10px]",
    borderColor = "border-[#CDCDCD]",
    borderThickness = "0.7px",
    className = "",
}) => {
    return (
        <FlexWrapper
            className={clsx(
                "items-center justify-center",
                {
                    [`rounded-${rounded}`]: rounded,
                    [`w-${width}`]: width,
                    [`h-${height}`]: height,
                    [`px-${paddingX}`]: paddingX,
                    [`py-${paddingY}`]: paddingY,
                },
                className
            )}
        >
            <div
                className={clsx(
                    "w-full",
                    `border-t-[${borderThickness}]`,
                    borderColor
                )}
            />
        </FlexWrapper>
    );
};

export default BorderDivider;