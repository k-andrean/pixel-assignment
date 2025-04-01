import { SVGProps } from 'react';

interface CheckmarkIconProps extends Omit<SVGProps<SVGSVGElement>, 'width' | 'height'> {
    size?: {
        width?: string;
        height?: string;
    };
    strokeColor?: string;
}

const CheckmarkIcon: React.FC<CheckmarkIconProps> = ({
    size = { width: "17", height: "13" },
    strokeColor = "currentColor",
    className = "",
    ...props
}) => (
    <svg
        width={size.width}
        height={size.height}
        viewBox="0 0 17 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        stroke={strokeColor}
        role="img"
        aria-hidden="true"
        {...props}
    >
        <path
            d="M0.68 6.592L6.22879 11.5272C6.24925 11.5454 6.28055 11.5437 6.29899 11.5235L16.32 0.520004"
            strokeLinecap="round"
            strokeWidth="1"
        />
    </svg>
);

export default CheckmarkIcon;
