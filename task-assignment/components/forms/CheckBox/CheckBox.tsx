import { useState, InputHTMLAttributes } from "react";
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
    border: "#D1D5DB", // gray-300
    hoverBorder: "#BDBDBD",
    checkedBg: "#2469F6",
    checkedHoverBg: "#5087F8",
    checkmark: "white",
    hoverCheckmark: "#E3E3E3",
    pressedCheckmark: "#878787",
} as const;

const CheckBox: React.FC<CheckBoxProps> = ({
    checked,
    onChange,
    size = { width: "23px", height: "23px" },
    appearance = { borderRadius: "6px", colors: defaultColors },
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

    return (
        <label
            className={`flex items-center cursor-pointer select-none ${disabled ? "cursor-not-allowed opacity-50" : ""
                } ${className}`}
            {...handleInteraction}
        >
            <div className="relative">
                <input
                    type="checkbox"
                    className="sr-only"
                    checked={checked}
                    disabled={disabled}
                    onChange={(e) => onChange(e.target.checked)}
                    {...props}
                />
                <div
                    className="flex items-center justify-center border shadow-sm"
                    style={{
                        width: size.width,
                        height: size.height,
                        borderRadius: appearance.borderRadius,
                        borderColor: !checked
                            ? isHovered || isPressed
                                ? appearance.colors?.hoverBorder
                                : appearance.colors?.border
                            : "transparent",
                        backgroundColor: checked
                            ? isHovered && !isPressed
                                ? appearance.colors?.checkedHoverBg
                                : appearance.colors?.checkedBg
                            : "transparent",
                    }}
                >
                    {(checked || isHovered || isPressed) && (
                        <CheckmarkIcon
                            style={{
                                color: checked
                                    ? appearance.colors?.checkmark
                                    : isHovered
                                        ? appearance.colors?.hoverCheckmark
                                        : isPressed
                                            ? appearance.colors?.pressedCheckmark
                                            : "transparent",
                            }}
                        />
                    )}
                </div>
            </div>
        </label>
    );
};

export default CheckBox;
