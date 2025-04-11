import LoadingImage from 'cp/loading_image';
import { SkillEntity } from 'ett/skill_entity';
import Tooltip, { position } from 'cp/tooltip';
import React, { useState } from 'react';

type TDrawProps = SkillEntity & {
  key: string,
};

export default function DrawSkill({ href, alt, name, tooltipText }: TDrawProps) {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsTooltipVisible(true);
  };

  const handleMouseOut = () => {
    setIsTooltipVisible(false);
  };

  const handleSelect = () => {
    setIsTooltipVisible(true);
  };

  const handleBlur = () => {
    setIsTooltipVisible(false);
  };

  return (
    <>
      {tooltipText && <Tooltip key="tooltip" position={position.topRight} text={tooltipText} show={isTooltipVisible} />}
      <article
        onMouseEnter={handleMouseEnter}
        onMouseOut={handleMouseOut}
        onSelect={handleSelect}
        onBlur={handleBlur}
      >
        <div className="select-none scale-0 animate-show border border-theme-1 bg-[#a7a7a78b] group transition-shadow hover:scale-110 hover:shadow-[2px_2px_3px_5px_var(--theme-6)] shadow-[2px_2px_3px_0_var(--theme-4)] p-2 flex flex-col justify-center gap-1 items-center rounded-2xl">
          <LoadingImage src={href} alt={alt} width={70} height={70} className="group-hover:animate-skill-move transition-transform min-w-[120px] min-h-fit" />
          <span>{name}</span>
        </div>
      </article>
    </>
  );
}
