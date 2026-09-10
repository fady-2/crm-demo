
export interface Project {
  name: string;
  channel: string;
  salesman: string;
  salesmanAvatar: string;
  createdBy: string;
  createdByAvatar: string;
  creationDate: string;
  status: string;
}

export interface Lead {
  name: string;
    id: number;

  email: string;
  mobile1: string;
  mobiles: string[];
  communicateWay: string;
  channel: string;
  status: string;
  creationDate: string;
  lastUpdate: string;
  salesRep: string;
  salesRepEmail: string;
  avatarUrl: string;
  projectName: string;
  fillCount: number;
  hugCount: number;
  projects: Project[];
}
