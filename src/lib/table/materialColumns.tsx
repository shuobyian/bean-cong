import { Space, Tooltip } from "antd";
import { ColumnType } from "antd/es/table";
import { getToolLabel } from "../type/Tool";
import { Item } from "./Item";
import { StringUtil } from "../util/StringUtil";

export const materialColumns: ColumnType<Item>[] = [
  {
    title: "물품명",
    key: "name",
    dataIndex: "name",
    render: (name) => <Tooltip title={name}>{name}</Tooltip>,
    width: 140,
    fixed: "left",
  },
  {
    title: "레벨",
    key: "level",
    dataIndex: "level",
    width: 80,
  },
  {
    title: "크래프팅 가격",
    key: "craftingPrice",
    dataIndex: "craftingPrice",
    render: (craftingPrice) => StringUtil.commaWithMoney(craftingPrice),
    width: 120,
  },
  {
    title: "도구",
    key: "tool",
    dataIndex: "tool",
    render: (tool) => getToolLabel(tool),
    width: 120,
  },
  {
    title: "재료",
    key: "materials",
    dataIndex: "",
    render: (item: Item) => (
      <Space direction='vertical'>
        {item.materials.map((m) =>
          m.material ? (
            <div key={m.material}>
              {m.material} / {m.base ? "하위재료 있음" : "하위재료 없음"} /{" "}
              {m.count}개
            </div>
          ) : (
            <></>
          )
        )}
      </Space>
    ),
    width: 400,
  },
];
