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


const getMockModulesForProgram = (skillKey: string): KnowledgeModule[] => {
  const mockModules: { [key: string]: KnowledgeModule[] } = {
    networkSecurity: [
      {
        id: "networkSecurity_foundation",
        name: "Cybersecurity Fundamentals",
        org: { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
        rating: { score: 4.9, reviewCount: 127 },
        coursesRemaining: 8,
        totalCourses: 8,
        skills: [
          { name: "Network Security", level: "intermediate" },
          { name: "Firewall Configuration", level: "advanced" },
          { name: "Incident Response", level: "intermediate" },
          { name: "Risk Assessment", level: "beginner" }
        ],
        courses: []
      },
      {
        id: "networkSecurity_advanced",
        name: "Advanced Security & Penetration Testing",
        org: { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
        rating: { score: 4.7, reviewCount: 89 },
        coursesRemaining: 10,
        totalCourses: 10,
        skills: [
          { name: "Penetration Testing", level: "advanced" },
          { name: "Digital Forensics", level: "advanced" },
          { name: "Security Standards", level: "intermediate" },
          { name: "Ethical Hacking", level: "advanced" }
        ],
        courses: []
      }
    ],
    financialAnalyst: [
      {
        id: "financialAnalyst_foundation",
        name: "Financial Analysis & Valuation",
        org: { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
        rating: { score: 4.8, reviewCount: 156 },
        coursesRemaining: 6,
        totalCourses: 6,
        skills: [
          { name: "Financial Statement Analysis", level: "intermediate" },
          { name: "Business Valuation", level: "advanced" },
          { name: "Excel Modeling", level: "intermediate" },
          { name: "Market Analysis", level: "beginner" }
        ],
        courses: []
      },
      {
        id: "financialAnalyst_advanced",
        name: "Advanced Investment & Risk Management",
        org: { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
        rating: { score: 4.6, reviewCount: 98 },
        coursesRemaining: 8,
        totalCourses: 8,
        skills: [
          { name: "Portfolio Management", level: "advanced" },
          { name: "Risk Assessment", level: "advanced" },
          { name: "Quantitative Analysis", level: "intermediate" },
          { name: "Financial Modeling", level: "advanced" }
        ],
        courses: []
      }
    ],
    digitalStrategist: [
      {
        id: "digitalStrategist_foundation",
        name: "Digital Marketing Foundation",
        org: { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
        rating: { score: 4.7, reviewCount: 203 },
        coursesRemaining: 7,
        totalCourses: 7,
        skills: [
          { name: "Media Planning", level: "intermediate" },
          { name: "Customer Analysis", level: "advanced" },
          { name: "Content Strategy", level: "intermediate" },
          { name: "SEO/SEM", level: "beginner" }
        ],
        courses: []
      },
      {
        id: "digitalStrategist_advanced",
        name: "Advanced Digital Strategy & Analytics",
        org: { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
        rating: { score: 4.5, reviewCount: 134 },
        coursesRemaining: 9,
        totalCourses: 9,
        skills: [
          { name: "Data Analytics", level: "advanced" },
          { name: "Marketing Automation", level: "advanced" },
          { name: "Performance Optimization", level: "intermediate" },
          { name: "Strategic Planning", level: "advanced" }
        ],
        courses: []
      }
    ],
    aiSpecialist: [
      {
        id: "aiSpecialist_foundation",
        name: "AI & Machine Learning Fundamentals",
        org: { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
        rating: { score: 4.9, reviewCount: 289 },
        coursesRemaining: 10,
        totalCourses: 10,
        skills: [
          { name: "Python Programming", level: "intermediate" },
          { name: "Machine Learning", level: "advanced" },
          { name: "Data Processing", level: "intermediate" },
          { name: "Statistical Analysis", level: "beginner" }
        ],
        courses: []
      },
      {
        id: "aiSpecialist_advanced",
        name: "Advanced AI & Deep Learning",
        org: { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
        rating: { score: 4.8, reviewCount: 178 },
        coursesRemaining: 12,
        totalCourses: 12,
        skills: [
          { name: "Deep Learning", level: "advanced" },
          { name: "Neural Networks", level: "advanced" },
          { name: "Computer Vision", level: "intermediate" },
          { name: "NLP", level: "advanced" }
        ],
        courses: []
      }
    ],
    dataScientist: [
      {
        id: "dataScientist_foundation",
        name: "Data Science & Analytics Foundation",
        org: { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
        rating: { score: 4.8, reviewCount: 245 },
        coursesRemaining: 8,
        totalCourses: 8,
        skills: [
          { name: "Python/R", level: "intermediate" },
          { name: "Data Visualization", level: "advanced" },
          { name: "Statistics", level: "intermediate" },
          { name: "SQL", level: "beginner" }
        ],
        courses: []
      },
      {
        id: "dataScientist_advanced",
        name: "Advanced Data Science & Big Data",
        org: { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
        rating: { score: 4.7, reviewCount: 167 },
        coursesRemaining: 10,
        totalCourses: 10,
        skills: [
          { name: "Big Data Processing", level: "advanced" },
          { name: "Predictive Modeling", level: "advanced" },
          { name: "Data Engineering", level: "intermediate" },
          { name: "Cloud Analytics", level: "advanced" }
        ],
        courses: []
      }
    ],
    networkInfrastructure: [
      {
        id: "networkInfrastructure_foundation",
        name: "Network Infrastructure Basics",
        org: { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
        rating: { score: 4.6, reviewCount: 112 },
        coursesRemaining: 6,
        totalCourses: 6,
        skills: [
          { name: "Network Protocols", level: "intermediate" },
          { name: "Router Configuration", level: "advanced" },
          { name: "Network Troubleshooting", level: "intermediate" },
          { name: "System Administration", level: "beginner" }
        ],
        courses: []
      },
      {
        id: "networkInfrastructure_advanced",
        name: "Advanced Network Architecture",
        org: { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
        rating: { score: 4.4, reviewCount: 78 },
        coursesRemaining: 8,
        totalCourses: 8,
        skills: [
          { name: "Cloud Networking", level: "advanced" },
          { name: "Network Security", level: "advanced" },
          { name: "Infrastructure Design", level: "intermediate" },
          { name: "Performance Optimization", level: "advanced" }
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

  return getMockModulesForProgram(skillKey);
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
