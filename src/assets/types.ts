export type Extension = {
  id: number;
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
};


export type Filter = "all" | "active" | "inactive";
