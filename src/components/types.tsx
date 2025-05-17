// types.ts or types/index.ts

export type Skill = {
  name: string;
  icon: JSX.Element; // this allows React icons (JSX)
  level: number; // from 1 to 10
  category: "frontend" | "backend" | "tools" | "other"; // optional enum for better dev experience
};
