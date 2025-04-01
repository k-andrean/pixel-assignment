import { useState, InputHTMLAttributes } from "react";
import clsx from "clsx";
import CheckmarkIcon from "./CheckMarkIcon";

interface CheckBoxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'checked' | 'onChange'> {
    checked: boolean;
    onChange: (checked: boolean) => void;
    size?: {
        width?: string;
        height?: string;
    };
    appearance?: {
        borderRadius?: string;
        colors?: {
            border?: string;
            hoverBorder?: string;
            checkedBg?: string;
            checkedHoverBg?: string;
            checkmark?: string;
            hoverCheckmark?: string;
            pressedCheckmark?: string;
        };
    };
}

const defaultColors = {
    border: 'gray-300',
    hoverBorder: '#BDBDBD',
    checkedBg: '#2469F6',
    checkedHoverBg: '#5087F8',
    checkmark: 'white',
    hoverCheckmark: '#E3E3E3',
    pressedCheckmark: '#878787',
} as const;

const CheckBox: React.FC<CheckBoxProps> = ({
    checked,
    onChange,
    size = { width: '23px', height: '23px' },
    appearance = { borderRadius: '6px', colors: defaultColors },
    className = "",
    disabled = false,
    ...props
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isPressed, setIsPressed] = useState(false);

    const handleInteraction = {
        onMouseEnter: () => !disabled && setIsHovered(true),
        onMouseLeave: () => {
            setIsHovered(false);
            setIsPressed(false);
        },
        onMouseDown: () => !disabled && setIsPressed(true),
        onMouseUp: () => setIsPressed(false),
    };

    const checkboxClasses = clsx(
        "flex items-center cursor-pointer select-none",
        { "cursor-not-allowed opacity-50": disabled },
        className
    );

    const boxClasses = clsx(
        "flex items-center justify-center border transition-all duration-200 ease-in-out shadow-sm",
        `w-[${size.width}] h-[${size.height}] rounded-[${appearance.borderRadius}]`,
        {
            [`border-${appearance.colors?.border}`]: !checked && !isHovered && !isPressed,
            [`border-[${appearance.colors?.hoverBorder}]`]: !checked && (isHovered || isPressed),
            [`bg-[${appearance.colors?.checkedBg}]`]: checked && (!isHovered || isPressed),
            [`bg-[${appearance.colors?.checkedHoverBg}]`]: checked && isHovered && !isPressed,
        }
    );

    const iconClasses = clsx(
        "transition-all duration-200",
        {
            [`text-${appearance.colors?.checkmark}`]: checked,
            [`text-[${appearance.colors?.hoverCheckmark}]`]: isHovered && !checked,
            [`text-[${appearance.colors?.pressedCheckmark}]`]: isPressed && !checked,
        }
    );

    return (
        <label className={checkboxClasses} {...handleInteraction}>
            <div className="relative">
                <input
                    type="checkbox"
                    className="sr-only"
                    checked={checked}
                    disabled={disabled}
                    onChange={(e) => onChange(e.target.checked)}
                    {...props}
                />
                <div className={boxClasses}>
                    {(checked || isHovered || isPressed) && (
                        <CheckmarkIcon className={iconClasses} />
                    )}
                </div>
            </div>
        </label>
    );
};

export default CheckBox;