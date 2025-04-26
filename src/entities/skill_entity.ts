import { skillEnum } from './skill_enum'

export class SkillEntity {
  id: string;
  href: string;
  alt: string;
  name: string;
  tooltipText?: string;
  skillType: skillEnum
  
  constructor(id:string,href: string, alt: string, name: string, skillType: skillEnum, tooltipText?: string) {
    this.id = id;
    this.href = href;
    this.alt = alt;
    this.name = name;
    this.tooltipText = tooltipText;
    this.skillType = skillType;
  }
}