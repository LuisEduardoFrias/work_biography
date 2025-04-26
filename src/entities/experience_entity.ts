
export class ExperienceEntity {
  id: string;
  institution: string;
  position: string;
  responsibilities: string[];
  technologies: string[];

  constructor(id:string,
    institution: string,
    position: string,
    responsibilities: string[],
    technologies: string[]
) {
    this.id = id;
    this.institution = institution;
    this.position = position;
    this.responsibilities = responsibilities;
    this.technologies = technologies;
  }
}
