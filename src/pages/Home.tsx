import { Button, Layout, Space } from "antd";
import { useNavigate } from "react-router-dom";
import { ROUTER_URL } from "./constant/ROUTER_URL";

export default function Home() {
  const navigate = useNavigate();

  const goToDataGrid = () => {
    navigate(ROUTER_URL.DATA_GRID);
  };

  const goToWeb3 = () => {
    navigate(ROUTER_URL.WEB3);
  };

  return (
    <Layout style={{ width: "100vw", height: "100vh" }}>
      <Space style={{ justifyContent: "center", marginTop: "10%" }}>
        <Button onClick={goToDataGrid}>Data Grid 페이지</Button>
        <Button onClick={goToWeb3}>Web3 페이지</Button>
      </Space>
    </Layout>
  );
}
