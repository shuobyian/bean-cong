import {
  Button,
  Form,
  Input,
  InputNumber,
  Modal,
  ModalProps,
  Radio,
  Select,
  Space,
  Typography,
} from "antd";
import { useForm } from "antd/es/form/Form";
import { useEffect, useState } from "react";
import { Item } from "../lib/table/data";
import { ToolList } from "../lib/type/Tool";

interface IDetailModalProps extends ModalProps {
  prevData?: Item;
  add: (data: Omit<Item, "id">) => void;
  edit: (data: Item) => void;
}

export function DetailModal({
  prevData,
  add,
  edit,
  ...props
}: IDetailModalProps) {
  const [loading, setLoading] = useState(false);

  const [form] = useForm<Item>();
  const materials = Form.useWatch("materials", form) ?? [];

  const onSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    try {
      setLoading(true);
      const value = await form.validateFields();
      if (prevData) edit(value);
      else add(value);
      props.onCancel?.(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    form.setFieldsValue(prevData ?? { materials: [{ base: true }] });
  }, [form, prevData]);

  return (
    <Modal
      width={700}
      title={prevData ? `${prevData.name} 정보 수정` : "물품 추가"}
      okText='추가'
      cancelText='취소'
      onOk={onSubmit}
      okButtonProps={{ loading }}
      {...props}
    >
      <Form form={form} style={{ margin: "30px 0" }}>
        <Form.Item
          name='name'
          rules={[{ required: true, message: "물품명을 입력해주세요" }]}
        >
          <Input placeholder='물품명' />
        </Form.Item>
        <Form.Item
          name='level'
          rules={[{ required: true, message: "레벨을 입력해주세요" }]}
        >
          <InputNumber
            style={{ width: 120 }}
            min={0}
            max={200}
            placeholder='레벨'
          />
        </Form.Item>
        <Form.Item
          name='craftingPrice'
          rules={[{ required: true, message: "크래프팅 가격을 입력해주세요" }]}
        >
          <InputNumber min={0} addonAfter='원' placeholder='크래프팅 가격' />
        </Form.Item>
        <Form.Item
          name='tool'
          rules={[{ required: true, message: "도구를 선택해주세요" }]}
        >
          <Select options={ToolList} placeholder='도구' />
        </Form.Item>
        <Typography>필요 재료</Typography>
        <Form.List name='materials'>
          {(fields, { add, remove }) => (
            <Space direction='vertical'>
              {fields.map((field) => (
                <Space direction='horizontal'>
                  <Form.Item
                    style={{ margin: 0 }}
                    name={[field.name, "material"]}
                    rules={[
                      { required: true, message: "물품명을 입력해주세요" },
                    ]}
                  >
                    <Input placeholder='물품명' />
                  </Form.Item>
                  <Form.Item
                    style={{ margin: 0 }}
                    name={[field.name, "base"]}
                    rules={[
                      {
                        required: true,
                        message: "하위재료 여부를 선택해주세요",
                      },
                    ]}
                  >
                    <Radio.Group
                      optionType='button'
                      options={[
                        { value: false, label: "하위재료" },
                        { value: true, label: "하위재료 없음" },
                      ]}
                    />
                  </Form.Item>
                  <Form.Item
                    style={{ margin: 0 }}
                    name={[field.name, "count"]}
                    rules={[{ required: true, message: "개수를 입력해주세요" }]}
                  >
                    <InputNumber
                      style={{ width: 120 }}
                      min={0}
                      max={100}
                      addonAfter='개'
                      placeholder='개수'
                    />
                  </Form.Item>
                  {field.name > 0 && (
                    <Button onClick={() => remove(field.name)}>-</Button>
                  )}
                  {field.name === materials.length - 1 && field.name < 4 && (
                    <Button onClick={() => add({ base: true })}>+</Button>
                  )}
                </Space>
              ))}
            </Space>
          )}
        </Form.List>
      </Form>
    </Modal>
  );
}
