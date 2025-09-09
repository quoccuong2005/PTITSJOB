import { ProgramDetail } from '../components/DetailPage/types';
import { ProgramCardProps } from '../components/AISCard/types';


export const getSkillNeeded = (common: any, skillKey: string) => {
  const skillNeeded: { [key: string]: string } = {};
  
  
  for (let i = 1; i <= 10; i++) {
    const skillKey_i = `${skillKey}.skillNeeded.skill${i}`;
    const skillValue = common(skillKey_i);
    if (skillValue) {
      skillNeeded[`skill${i}`] = skillValue;
    }
  }
  
  if (Object.keys(skillNeeded).length > 0) {
    return skillNeeded;
  }
  
  return undefined;
};

export const createProgramDetail = (program: ProgramCardProps, common: any, detailedDescription?: string): ProgramDetail => {
  let skillKey = program.id;
  
  if (skillKey.includes('_')) {
    skillKey = skillKey.split('_')[0];
  }

  const defaultDetailedDescription = detailedDescription || 
    `${program.description || ''}\n\nThis is a dynamic career field that requires continuous learning, adaptability, and strong technical skills combined with excellent communication abilities to succeed in today's digital landscape.`;

  const skillNeeded = getSkillNeeded(common, skillKey);

  return {
    title: program.title || '',
    description: program.description || '',
    detailedDescription: defaultDetailedDescription,
    imageUrl: program.imageUrl || '',
    teachingOrgs: program.teachingOrgs || [],
    requiredSkills: [], 
    achievableSkills: [], 
    skillNeeded: skillNeeded
  };
};

export const getDefaultPrograms = (common: any): ProgramCardProps[] => [
  {
    variant: "program",
    id: "networkSecurity",
    title: common("networkSecurity.title"),
    href: "/muc-tieu-nghe-nghiep/networkSecurity",
    imageUrl: "/images/X5gFB1559764843.png",
    teachingOrgs: [
      { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
    ],
    description: common("networkSecurity.description"),
    categoryId: common("tabs.populate")
  },
  {
    variant: "program",
    id: "financialAnalyst",
    title: common("financialAnalyst.title"),
    href: "/muc-tieu-nghe-nghiep/financialAnalyst",
    imageUrl: "/images/data-analysis.jpeg",
    teachingOrgs: [
      { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
    ],
    description: common("financialAnalyst.description"),
    categoryId: common("tabs.economic")
  },
  {
    variant: "program",
    id: "digitalStrategist",
    title: common("digitalStrategist.title"),
    href: "/muc-tieu-nghe-nghiep/digitalStrategist",
    imageUrl: "/images/social.png",
    teachingOrgs: [
      { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
    ],
    description: common("digitalStrategist.description"),
    categoryId: common("tabs.media")
  },
  {
    variant: "program",
    id: "digitalStrategist_populate",
    title: common("digitalStrategist.title"),
    href: "/muc-tieu-nghe-nghiep/digitalStrategist_populate",
    imageUrl: "/images/social.png",
    teachingOrgs: [
      { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
    ],
    description: common("digitalStrategist.description"),
    categoryId: common("tabs.populate")
  },
  {
    variant: "program",
    id: "aiSpecialist",
    title: common("aiSpecialist.title"),
    href: "/muc-tieu-nghe-nghiep/aiSpecialist",
    imageUrl: "/images/data-analysis.jpeg",
    teachingOrgs: [
      { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
    ],
    description: common("aiSpecialist.description"),
    categoryId: common("tabs.it")
  },
  {
    variant: "program",
    id: "aiSpecialist_populate",
    title: common("aiSpecialist.title"),
    href: "/muc-tieu-nghe-nghiep/aiSpecialist_populate",
    imageUrl: "/images/data-analysis.jpeg",
    teachingOrgs: [
      { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
    ],
    description: common("aiSpecialist.description"),
    categoryId: common("tabs.populate")
  },
  {
    variant: "program",
    id: "networkInfrastructure",
    title: common("networkInfrastructure.title"),
    href: "/muc-tieu-nghe-nghiep/networkInfrastructure",
    imageUrl: "/images/X5gFB1559764843.png",
    teachingOrgs: [
      { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
    ],
    description: common("networkInfrastructure.description"),
    categoryId: common("tabs.it")
  },
  {
    variant: "program",
    id: "dataScientist",
    title: common("dataScientist.title"),
    href: "/muc-tieu-nghe-nghiep/dataScientist",
    imageUrl: "/images/data-analysis.jpeg",
    teachingOrgs: [
      { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
    ],
    description: common("dataScientist.description"),
    categoryId: common("tabs.it")
  },
  {
    variant: "program",
    id: "dataScientist_economic",
    title: common("dataScientist.title"),
    href: "/muc-tieu-nghe-nghiep/dataScientist_economic",
    imageUrl: "/images/data-analysis.jpeg",
    teachingOrgs: [
      { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
    ],
    description: common("dataScientist.description"),
    categoryId: common("tabs.economic")
  }
];
