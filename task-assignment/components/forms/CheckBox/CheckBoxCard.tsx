import { useState } from "react";
import Card from "../../common/Card/Card";
import CheckBox from "./CheckBox";
import CheckBoxWrapper from "./CheckboxWrapper";
import BorderDivider from "../../layout/BorderDivider";
import Button from "../../common/Button/Button";
import FlexWrapper from "../../common/Wrapper/FlexWrapper";

interface CheckboxCardProps {
    placeholder?: string;
    numCheckboxes?: number;
    onSubmit?: (checkedItems: boolean[]) => void;
    labels?: string[];
    className?: string;
}

const CheckboxCard: React.FC<CheckboxCardProps> = ({
    placeholder = "All pages",
    numCheckboxes = 6,
    onSubmit,
    labels,
    className = "",
}) => {
    const [checkedItems, setCheckedItems] = useState<boolean[]>(
        Array(numCheckboxes).fill(false)
    );

    const handleSelectAll = (isChecked: boolean) => {
        setCheckedItems(Array(numCheckboxes).fill(isChecked));
    };

    const handleCheck = (index: number, isChecked: boolean) => {
        setCheckedItems((prev) => {
            const updated = [...prev];
            updated[index] = isChecked;
            return updated;
        });
    };

    const handleSubmit = () => {
        onSubmit?.(checkedItems);
    };

    const isAllChecked = checkedItems.length > 0 && checkedItems.every(Boolean);

    return (
        <Card height="326px" className={className}>
            {/* Header Section */}
            <CheckBoxWrapper placeholder={placeholder}>
                {numCheckboxes > 1 && (
                    <CheckBox
                        checked={isAllChecked}
                        onChange={handleSelectAll}
                        aria-label="Select all items"
                    />
                )}
            </CheckBoxWrapper>

            {/* Body Section */}
            <div className="flex flex-col flex-grow overflow-hidden">
                <BorderDivider />

                {/* Scrollable Section */}
                <div className="relative flex-grow overflow-hidden">
                    <div className="overflow-y-auto -mr-17 max-h-[164px]">
                        {checkedItems.map((checked, index) => (
                            <CheckBoxWrapper
                                key={index}
                                placeholder={labels?.[index] ?? `Page ${index + 1}`}
                            >
                                <CheckBox
                                    checked={checked}
                                    onChange={(isChecked) => handleCheck(index, isChecked)}
                                    aria-label={`Select ${labels?.[index] ?? `Page ${index + 1}`}`}
                                />
                            </CheckBoxWrapper>
                        ))}
                    </div>
                </div>

                <BorderDivider />
            </div>

            {/* Footer */}
            <FlexWrapper className="w-full justify-center items-center px-4 py-2">
                <Button onClick={handleSubmit}>Submit</Button>
            </FlexWrapper>
        </Card>
    );
};

export default CheckboxCard;
