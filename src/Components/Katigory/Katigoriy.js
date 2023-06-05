import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";

export const Katigoriy = () => {
  let [Katalog, SetKatalog] = useState(false);

  let Muve = () => {
    Katalog = true;
    SetKatalog(Katalog);
  };

  let DisMuve = () => {
    Katalog = false;
    SetKatalog(Katalog);
  };

  let Activ = () => {
    Katalog = true;
    SetKatalog(Katalog);
  };

  let disActive = () => {
    Katalog = false;
    SetKatalog(Katalog);
  };

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"ceter"}
      mt={"30px"}
    >
      <Box width={"1200px"} display={"flex"} gap={'29px'}>
        <Button
          onMouseEnter={Muve}
          onMouseLeave={DisMuve}
          sx={{ padding: "10px 10px", color: "#4d4d4d", bgcolor: "#E1E1E1" }}
        >
          <i style={{ color: "#303493FF" }} class="bx bxs-category"></i>Все
          категории
          {Katalog ? (
            <i style={{ fontSize: "18px" }} class="bx bx-chevron-up"></i>
          ) : (
            <i style={{ fontSize: "18px" }} class="bx bx-chevron-down"></i>
          )}
        </Button>
        <Button
          sx={{ padding: "10px 10px", color: "#4d4d4d", bgcolor: "#E1E1E1" }}
        >
          Женская одежда
        </Button>
        <Button
          sx={{ padding: "10px 10px", color: "#4d4d4d", bgcolor: "#E1E1E1" }}
        >
          Мужская одежда
        </Button>
        <Button
          sx={{ padding: "10px 10px", color: "#4d4d4d", bgcolor: "#E1E1E1" }}
        >
         Телефоны и аксессуары
        </Button>
        <Button
          sx={{ padding: "10px 10px", color: "#4d4d4d", bgcolor: "#E1E1E1" }}
        >
         Компьютеры и офис
        </Button>
        <Button
          sx={{ padding: "10px 10px", color: "#4d4d4d", bgcolor: "#E1E1E1" }}
        >
         Электроника
        </Button>
      </Box>
      {Katalog ? (
        <Box
          padding={"10px 30px"}
          position={"absolute"}
          top={"192px"}
          left={"170px"}
          zIndex={"10"}
          onMouseEnter={Activ}
          onMouseLeave={disActive}
          borderRadius={"5px"}
          bgcolor="#F1F1F1"
          box-shadow="35px 35px 70px #bebebe,-35px -35px 70px #ffffff"
        >
          <Typography fontSize={"18px"} mt={"10px"}>
            Женская одежда
          </Typography>
          <Typography fontSize={"18px"} mt={"10px"}>
            Мужская одежда
          </Typography>
          <Typography fontSize={"18px"} mt={"10px"}>
            Телефоны и аксессуары
          </Typography>
          <Typography fontSize={"18px"} mt={"10px"}>
            Компьютеры и офис
          </Typography>
          <Typography fontSize={"18px"} mt={"10px"}>
            Женская одежда
          </Typography>
          <Typography fontSize={"18px"} mt={"10px"}>
            Мужская одежда
          </Typography>
          <Typography fontSize={"18px"} mt={"10px"}>
            Телефоны и аксессуары
          </Typography>
          <Typography fontSize={"18px"} mt={"10px"}>
            Компьютеры и офис
          </Typography>
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
};
