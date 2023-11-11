import { RawItem, Item } from "../table/data";

export function convertTable(items: RawItem[]): Item[] {
  return items
    .map((item) => ({
      ...item,
      materials: [
        {
          material: item.material1,
          base: item.base1 ? false : true,
          count: item.count1,
        },
        {
          material: item.material2 || "",
          base: item.base2 ? false : true,
          count: item.count2 || 0,
        },
        {
          material: item.material3 || "",
          base: item.base3 ? false : true,
          count: item.count3 || 0,
        },
        {
          material: item.material4 || "",
          base: item.base4 ? false : true,
          count: item.count4 || 0,
        },
        {
          material: item.material5 || "",
          base: item.base5 ? false : true,
          count: item.count5 || 0,
        },
      ].filter(({ material }) => !!material),
    }))
    .sort((a, b) => a.level - b.level);
}
