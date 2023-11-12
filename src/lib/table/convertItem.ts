import { RawItem, Item } from "./Item";

export function convertExcelToTable(items: RawItem[]): Item[] {
  return items
    .map((item) => ({
      id: item.id,
      name: item.name,
      level: item.level,
      craftingPrice: item.craftingPrice,
      tool: item.tool,
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

export function convertTableToExcel(items: Item[]): RawItem[] {
  return items.map(({ materials, ...item }) => {
    const [m1, m2, m3, m4, m5] = materials;
    return {
      ...item,
      material1: m1.material,
      base1: m1.base ? 0 : 1,
      count1: m1.count,
      material2: m2?.material,
      base2: m2 ? (m2.base ? 0 : 1) : undefined,
      count2: m2?.count,
      material3: m3?.material,
      base3: m3 ? (m3.base ? 0 : 1) : undefined,
      count3: m3?.count,
      material4: m4?.material,
      base4: m4 ? (m4.base ? 0 : 1) : undefined,
      count4: m4?.count,
      material5: m5?.material,
      base5: m5 ? (m5.base ? 0 : 1) : undefined,
      count5: m5?.count,
    };
  });
}
