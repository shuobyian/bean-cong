import { Route, Routes } from "react-router-dom";
import DataGrid from "../DataGrid";
import Wallet from "../Wallet";
import Home from "../Home";
import { ROUTER_URL } from "../constant/ROUTER_URL";

export function Router() {
  return (
    <Routes>
      <Route path='' element={<Home />} />
      <Route path={ROUTER_URL.DATA_GRID} element={<DataGrid />} />
      <Route path={ROUTER_URL.WEB3} element={<Wallet />} />
    </Routes>
  );
}
