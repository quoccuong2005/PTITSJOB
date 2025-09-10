import { ProgramDetail, KnowledgeModule, CourseInfo } from '../components/DetailPage/types';
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


const getMockModulesForProgram = (skillKey: string, common: any): KnowledgeModule[] => {
  const mockModules: { [key: string]: KnowledgeModule[] } = {
    networkSecurity: [
      {
        id: "networkSecurity_foundation",
        name: common('programs.networkSecurity.foundation.name'),
        org: { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
        rating: { score: 4.9, reviewCount: 127 },
        coursesRemaining: 8,
        totalCourses: 8,
        skills: [
          { name: common('programs.networkSecurity.foundation.skills.networkSecurity'), level: "intermediate" },
          { name: common('programs.networkSecurity.foundation.skills.firewallConfiguration'), level: "advanced" },
          { name: common('programs.networkSecurity.foundation.skills.incidentResponse'), level: "intermediate" },
          { name: common('programs.networkSecurity.foundation.skills.riskAssessment'), level: "beginner" }
        ],
        courses: []
      },
      {
        id: "networkSecurity_advanced",
        name: common('programs.networkSecurity.advanced.name'),
        org: { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
        rating: { score: 4.7, reviewCount: 89 },
        coursesRemaining: 10,
        totalCourses: 10,
        skills: [
          { name: common('programs.networkSecurity.advanced.skills.penetrationTesting'), level: "advanced" },
          { name: common('programs.networkSecurity.advanced.skills.digitalForensics'), level: "advanced" },
          { name: common('programs.networkSecurity.advanced.skills.securityStandards'), level: "intermediate" },
          { name: common('programs.networkSecurity.advanced.skills.ethicalHacking'), level: "advanced" }
        ],
        courses: []
      }
    ],
    financialAnalyst: [
      {
        id: "financialAnalyst_foundation",
        name: common('programs.financialAnalyst.foundation.name'),
        org: { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
        rating: { score: 4.8, reviewCount: 156 },
        coursesRemaining: 6,
        totalCourses: 6,
        skills: [
          { name: common('programs.financialAnalyst.foundation.skills.financialStatementAnalysis'), level: "intermediate" },
          { name: common('programs.financialAnalyst.foundation.skills.businessValuation'), level: "advanced" },
          { name: common('programs.financialAnalyst.foundation.skills.excelModeling'), level: "intermediate" },
          { name: common('programs.financialAnalyst.foundation.skills.marketAnalysis'), level: "beginner" }
        ],
        courses: []
      },
      {
        id: "financialAnalyst_advanced",
        name: common('programs.financialAnalyst.advanced.name'),
        org: { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
        rating: { score: 4.6, reviewCount: 98 },
        coursesRemaining: 8,
        totalCourses: 8,
        skills: [
          { name: common('programs.financialAnalyst.advanced.skills.portfolioManagement'), level: "advanced" },
          { name: common('programs.financialAnalyst.advanced.skills.riskAssessment'), level: "advanced" },
          { name: common('programs.financialAnalyst.advanced.skills.quantitativeAnalysis'), level: "intermediate" },
          { name: common('programs.financialAnalyst.advanced.skills.financialModeling'), level: "advanced" }
        ],
        courses: []
      }
    ],
    digitalStrategist: [
      {
        id: "digitalStrategist_foundation",
        name: common('programs.digitalStrategist.foundation.name'),
        org: { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
        rating: { score: 4.7, reviewCount: 203 },
        coursesRemaining: 7,
        totalCourses: 7,
        skills: [
          { name: common('programs.digitalStrategist.foundation.skills.mediaPlanning'), level: "intermediate" },
          { name: common('programs.digitalStrategist.foundation.skills.customerAnalysis'), level: "advanced" },
          { name: common('programs.digitalStrategist.foundation.skills.contentStrategy'), level: "intermediate" },
          { name: common('programs.digitalStrategist.foundation.skills.seoSem'), level: "beginner" }
        ],
        courses: []
      },
      {
        id: "digitalStrategist_advanced",
        name: common('programs.digitalStrategist.advanced.name'),
        org: { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
        rating: { score: 4.5, reviewCount: 134 },
        coursesRemaining: 9,
        totalCourses: 9,
        skills: [
          { name: common('programs.digitalStrategist.advanced.skills.dataAnalytics'), level: "advanced" },
          { name: common('programs.digitalStrategist.advanced.skills.marketingAutomation'), level: "advanced" },
          { name: common('programs.digitalStrategist.advanced.skills.performanceOptimization'), level: "intermediate" },
          { name: common('programs.digitalStrategist.advanced.skills.strategicPlanning'), level: "advanced" }
        ],
        courses: []
      }
    ],
    aiSpecialist: [
      {
        id: "aiSpecialist_foundation",
        name: common('programs.aiSpecialist.foundation.name'),
        org: { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
        rating: { score: 4.9, reviewCount: 289 },
        coursesRemaining: 10,
        totalCourses: 10,
        skills: [
          { name: common('programs.aiSpecialist.foundation.skills.pythonProgramming'), level: "intermediate" },
          { name: common('programs.aiSpecialist.foundation.skills.machineLearning'), level: "advanced" },
          { name: common('programs.aiSpecialist.foundation.skills.dataProcessing'), level: "intermediate" },
          { name: common('programs.aiSpecialist.foundation.skills.statisticalAnalysis'), level: "beginner" }
        ],
        courses: []
      },
      {
        id: "aiSpecialist_advanced",
        name: common('programs.aiSpecialist.advanced.name'),
        org: { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
        rating: { score: 4.8, reviewCount: 178 },
        coursesRemaining: 12,
        totalCourses: 12,
        skills: [
          { name: common('programs.aiSpecialist.advanced.skills.deepLearning'), level: "advanced" },
          { name: common('programs.aiSpecialist.advanced.skills.neuralNetworks'), level: "advanced" },
          { name: common('programs.aiSpecialist.advanced.skills.computerVision'), level: "intermediate" },
          { name: common('programs.aiSpecialist.advanced.skills.nlp'), level: "advanced" }
        ],
        courses: []
      }
    ],
    dataScientist: [
      {
        id: "dataScientist_foundation",
        name: common('programs.dataScientist.foundation.name'),
        org: { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
        rating: { score: 4.8, reviewCount: 245 },
        coursesRemaining: 8,
        totalCourses: 8,
        skills: [
          { name: common('programs.dataScientist.foundation.skills.pythonR'), level: "intermediate" },
          { name: common('programs.dataScientist.foundation.skills.dataVisualization'), level: "advanced" },
          { name: common('programs.dataScientist.foundation.skills.statistics'), level: "intermediate" },
          { name: common('programs.dataScientist.foundation.skills.sql'), level: "beginner" }
        ],
        courses: []
      },
      {
        id: "dataScientist_advanced",
        name: common('programs.dataScientist.advanced.name'),
        org: { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
        rating: { score: 4.7, reviewCount: 167 },
        coursesRemaining: 10,
        totalCourses: 10,
        skills: [
          { name: common('programs.dataScientist.advanced.skills.bigDataProcessing'), level: "advanced" },
          { name: common('programs.dataScientist.advanced.skills.predictiveModeling'), level: "advanced" },
          { name: common('programs.dataScientist.advanced.skills.dataEngineering'), level: "intermediate" },
          { name: common('programs.dataScientist.advanced.skills.cloudAnalytics'), level: "advanced" }
        ],
        courses: []
      }
    ],
    networkInfrastructure: [
      {
        id: "networkInfrastructure_foundation",
        name: common('programs.networkInfrastructure.foundation.name'),
        org: { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
        rating: { score: 4.6, reviewCount: 112 },
        coursesRemaining: 6,
        totalCourses: 6,
        skills: [
          { name: common('programs.networkInfrastructure.foundation.skills.networkProtocols'), level: "intermediate" },
          { name: common('programs.networkInfrastructure.foundation.skills.routerConfiguration'), level: "advanced" },
          { name: common('programs.networkInfrastructure.foundation.skills.networkTroubleshooting'), level: "intermediate" },
          { name: common('programs.networkInfrastructure.foundation.skills.systemAdministration'), level: "beginner" }
        ],
        courses: []
      },
      {
        id: "networkInfrastructure_advanced",
        name: common('programs.networkInfrastructure.advanced.name'),
        org: { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
        rating: { score: 4.4, reviewCount: 78 },
        coursesRemaining: 8,
        totalCourses: 8,
        skills: [
          { name: common('programs.networkInfrastructure.advanced.skills.cloudNetworking'), level: "advanced" },
          { name: common('programs.networkInfrastructure.advanced.skills.networkSecurity'), level: "advanced" },
          { name: common('programs.networkInfrastructure.advanced.skills.infrastructureDesign'), level: "intermediate" },
          { name: common('programs.networkInfrastructure.advanced.skills.performanceOptimization'), level: "advanced" }
        ],
        courses: []
      }
    ]
  };

  return mockModules[skillKey] || [];
};

export const createProgramModules = (program: ProgramCardProps, common: any): KnowledgeModule[] => {
  let skillKey = program.id;
  
  if (skillKey.includes('_')) {
    skillKey = skillKey.split('_')[0];
  }

  return getMockModulesForProgram(skillKey, common);
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
