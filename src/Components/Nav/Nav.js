import { Box, Button, Typography } from "@mui/material";
import React from "react";

export const Nav = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"ceter"}
      mt={"30px"}
    >
      <Box width={"1200px"} display={"flex"}>
        <Box mt={"10px"} mr={"20px"}>
          <img
            src="https://static.zoodmall.uz/_nuxt/img/zoodmall.342f9ee.svg"
            width={"200px"}
            alt=""
          />
        </Box>
        <Box position={"relative"}>
          <input
            type="text"
            placeholder="Поиск на Zood"
            style={{
              padding: "15px 565px 20px 10px",
              background: "#f1f1f1",
              border: "0px",
              borderRadius: "10px",
              fontSize: "17px",
            }}
          />
          <Button
            sx={{
              padding: "17px 5px",
              position: "absolute",
              left: "723px",
              borderRadius: "10px",
              fontSize: "20px",
            }}
          >
            <i
              style={{ fontWeight: "800", color: "#303493FF" }}
              class="bx bx-search"
            ></i>
          </Button>
        </Box>
        <Box
          sx={[
            { mt: "10px", ml: "20px", color: "#2D3092FF" },
            { "&&:hover": { mt: "7px", transition: ".2s linear" } },
          ]}
        >
          <Typography fontSize={"30px"}>
            <i class="bx bx-heart"></i>
          </Typography>
        </Box>
        <Box display={'flex'}
          sx={[
            { mt: "10px",ml: "20px"  },
            { "&&:hover": { mt: "7px", transition: ".2s linear" } },
          ]}
        >
          <Typography fontSize={"30px"} color={'#2D3092FF'}>
          <i class='bx bx-shopping-bag'></i>
          </Typography>
          <Typography fontSize={"15px"} mt={'12px'} ml={'10px'}>
          Корзина
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
