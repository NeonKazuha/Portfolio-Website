export interface PageInfo {
    name: string;
    role: string;
    heroImage: string;
    backgroundInformation: string;
    email: string;
    phoneNumber: string;
    address: string;
  }
  
  export interface Experience {
    _id: string;
    company: string;
    jobTitle: string;
    startDate: string;
    endDate: string;
    description: string[];
  }
  
  export interface Skill {
    _id: string;
    name: string;
    proficiency: number;
  }
  
  export interface Project {
    _id: string;
    title: string;
    description: string;
    image: string;
    link: string;
  }
  