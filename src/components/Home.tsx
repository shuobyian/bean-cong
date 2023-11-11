import { Button, Divider, Space, Typography, message } from "antd";
import Table, { ColumnType } from "antd/es/table";
import { useState } from "react";
import { materialColumns } from "../lib/table/column";
import { Item } from "../lib/table/data";
import { DetailModal } from "./DetailModal";
import { Excel } from "./Excel";
import { DATA_KEY } from "../lib/constant/localStorageKey";
import { StringUtil } from "../lib/util/StringUtil";

const DEFAULT_DATA = localStorage.getItem(DATA_KEY);

const columns: ColumnType<Item>[] = materialColumns;

export default function Home() {
  const [datas, setDatas] = useState<Item[]>(
    DEFAULT_DATA ? JSON.parse(DEFAULT_DATA) : []
  );

  const [isModalOpened, setIsModalOpened] = useState(false);
  const [selectedRow, setSelectedRow] = useState<Item>();
  const [selectedRows, setSelectedRows] = useState<Item[]>([]);

  const openModal = () => {
    setIsModalOpened(true);
  };

  const add = (data: Omit<Item, "id">) => {
    setDatas((prev) => [...prev, { ...data, id: (datas.at(-1)?.id ?? 0) + 1 }]);
    message.success("추가되었습니다.");
  };

  const edit = (data: Item) => {
    setDatas((prevs) =>
      prevs.map((prev) => (prev.id === data.id ? data : prev))
    );
    message.success("수정되었습니다.");
  };

  const remove = () => {
    setDatas((prevs) =>
      prevs.filter((prev) => !selectedRows.find((row) => row.id === prev.id))
    );
    message.success("삭제되었습니다.");
  };

  const save = () => {
    localStorage.setItem(DATA_KEY, JSON.stringify(datas));
    message.success("저장되었습니다.");
  };

  return (
    <div style={{ margin: 20 }}>
      <div style={{ width: "100%" }}>
        <Space direction='horizontal'>
          <Button onClick={openModal}>추가</Button>
          <Button onClick={remove} disabled={selectedRows.length < 1}>
            삭제
          </Button>
        </Space>
        <Button style={{ float: "right" }} onClick={save}>
          저장
        </Button>
      </div>
      <Divider type='horizontal' />
      <Typography>
        선택된 물품 {StringUtil.commaWithNumber(selectedRows.length)}개
      </Typography>
      <Table
        onRow={(record) => {
          return {
            onClick: () => {
              setSelectedRow(record);
              setIsModalOpened(true);
            },
          };
        }}
        rowSelection={{
          type: "checkbox",
          onSelect: (record: Item, selected: boolean) => {
            if (!selected) {
              setSelectedRows((prev) => prev.filter((p) => p.id !== record.id));
            }
          },
          onChange: (_, records: Item[], { type }) => {
            if (type === "all") setSelectedRows(records);
            else {
              setSelectedRows((prev) =>
                [...prev, ...records].reduce<Item[]>(
                  (ac, v) => (ac.find((a) => a.id === v.id) ? ac : [...ac, v]),
                  []
                )
              );
            }
          },
        }}
        columns={columns.map((column) => ({ ...column, ellipsis: true }))}
        dataSource={datas.map((data) => ({ key: data.id, ...data }))}
        scroll={{
          x: columns.reduce((acc, cur) => (acc += Number(cur.width)), 0),
        }}
      />
      <Divider type='horizontal' />
      <Excel datas={datas} setDatas={setDatas} />
      {isModalOpened && (
        <DetailModal
          prevData={selectedRow}
          add={add}
          edit={edit}
          open={isModalOpened}
          onCancel={() => {
            setIsModalOpened(false);
            setSelectedRow(undefined);
          }}
        />
      )}
    </div>
  );
}
