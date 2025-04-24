
import { alpha } from 'wolf-db'
import { skillEnum } from './skill_enum'

export class SkillEntity extends alpha {
  href: string;
  alt: string;
  name: string;
  tooltipText?: string;
  skillType: skillEnum

  constructor(href: string, alt: string, name: string, skillType: skillEnum,tooltipText?: string) {
    super();
    this.href = href;
    this.alt = alt;
    this.name = name;
    this.tooltipText = tooltipText;
    this.skillType = skillType;
  }
}