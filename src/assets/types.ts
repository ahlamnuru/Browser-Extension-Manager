// this describes the shape every single extension object must have
// TypeScript will now warn us if we ever try to use an extension
// that's missing one of these fields, or has the wrong type
export type Extension = {
  id: number;
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
};

// the filter can only ever be one of these three words, nothing else
export type Filter = "all" | "active" | "inactive";
