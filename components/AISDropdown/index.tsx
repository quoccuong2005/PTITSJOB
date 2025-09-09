import React from "react";

interface DropdownSection {
  title: string;
  items: string[];
  viewAllText: string;
}

interface IProps {
  isVisible: boolean;
  sections: DropdownSection[];
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const AISDropdown = ({ isVisible, sections, onMouseEnter, onMouseLeave }: IProps) => {
  if (!isVisible) return null;

  return (
    <div 
      className="absolute bg-white shadow-lg"
      style={{
        boxShadow: '0px 2px 8px 0px rgba(6, 3, 88, 0.07)',
        border: '1px solid rgba(5, 26, 83, 0.12)',
        borderTop: '0.5px solid rgba(5, 26, 83, 0.12)',
        left: 'calc(-50vw + 50%)',
        width: '100vw',
        zIndex: 50,
        top: 'calc(100% - 2px)'
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="lg:mx-auto px-[16px] lg:px-[40px] py-[40px]">
        <div className="flex gap-10 max-w-[1360px] mx-auto">
          {sections.map((section, index) => (
            <div key={index} className="flex-1">
              <h3 className="text-[#828D9B] text-[15px] font-normal uppercase tracking-[0.45px] leading-[18px] mb-5">
                {section.title}
              </h3>
              <div className="flex flex-col gap-3">
                {section.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex}
                    className="text-[#051A53] text-[16px] font-normal leading-[19px] tracking-[0.48px] cursor-pointer hover:text-[#BC2826] transition-colors duration-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="text-[#BC2826] text-[16px] font-medium leading-[19px] tracking-[0.48px] cursor-pointer hover:underline mt-5 transition-colors duration-200">
                {section.viewAllText}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AISDropdown;
