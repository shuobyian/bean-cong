import { BrowserRouter } from "react-router-dom";
import { Router } from "./pages/routes";

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
