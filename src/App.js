import { Route, Routes } from "react-router";
import "./App.css";
import { Box } from "@mui/material";
import { Components } from "./Components/Components";
import { Navigate } from "./Components/Navigate/Navigate";
import { Nav } from "./Components/Nav/Nav";

function App() {
  return (
    <Box>
      <Navigate />
      <Nav/>
      <Routes>
        <Route path="/" element={<Components />} />
      </Routes>
    </Box>
  );
}

export default App;
