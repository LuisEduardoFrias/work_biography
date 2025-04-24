import { alpha } from 'wolf-db'

export class ExperienceEntity extends alpha {
  institution: string;
  position: string;
  responsibilities: string[];
  technologies: string[];

  constructor(
    institution: string,
    position: string,
    responsibilities: string[],
    technologies: string[]
  ) {
    super();
    this.institution = institution;
    this.position = position;
    this.responsibilities = responsibilities;
    this.technologies = technologies;
  }
}
