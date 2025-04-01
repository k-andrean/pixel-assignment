'use client';

import CheckboxCard from "@/components/forms/CheckBox/CheckBoxCard";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-200">
      <div className="relative w-[578px] h-[794px] bg-white">
        <div className="absolute top-[85px] left-[104px]">
          <CheckboxCard />
        </div>
      </div>
    </div>
  );
}
