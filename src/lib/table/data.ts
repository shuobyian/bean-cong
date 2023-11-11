import { Tool } from "../type/Tool";
export interface RawItem {
  id: number;
  name: string;
  level: number;
  craftingPrice: number;
  tool: Tool;
  material1: string;
  base1: number;
  count1: number;
  material2?: string;
  base2?: number;
  count2?: number;
  material3?: string;
  base3?: number;
  count3?: number;
  material4?: string;
  base4?: number;
  count4?: number;
  material5?: string;
  base5?: number;
  count5?: number;
}

export interface Item {
  id: number;
  name: string;
  level: number;
  craftingPrice: number;
  tool: Tool;
  materials: {
    material: string;
    base: boolean;
    count: number;
  }[];
}
