import { Route, Routes } from "react-router";
import "./App.css";
import { Box } from "@mui/material";
import { Components } from "./Components/Components";
import { Navigate } from "./Components/Navigate/Navigate";
import { Nav } from "./Components/Nav/Nav";
import { Katigoriy } from "./Components/Katigory/Katigoriy";
import { useEffect, useState } from "react";
import axios from "axios";
import { base_url } from "./Api/base_url";

function App() {
  let [dataAfish, setdataAfish] = useState([]);

  useEffect(() => {
    axios.get(base_url + "Afish ")
    .then((res) => setdataAfish(res.data));
  },[]);


  return (
    <Box>
      <Navigate />
      <Nav />
      <Katigoriy />
      <Routes>
        <Route path="/" element={<Components dataAfish={dataAfish} />} />
      </Routes>
    </Box>
  );
}

export default App;
