import { Box, Typography } from "@mui/material";
import React from "react";

export const Navigate = () => {
  return (
    <Box
      bgcolor={"#FFD200FF"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"ceter"}
      padding={"5px 0px"}
    >
      <Box width={"1200px"} display={"flex"} gap={"500px"}>
        <Box gap={"50px"} display={"flex"}>
          <Typography sx={{ color: "#606266FF", fontSize: "14px" }}>
            <i class="bx bx-target-lock"></i>
            Горячие предложения
          </Typography>
          <Typography sx={{ color: "#606266FF", fontSize: "14px" }}>
            <i class="bx bx-star"></i>
            Популярные категории
          </Typography>
          <Typography sx={{ color: "#606266FF", fontSize: "14px" }}>
            <i class="bx bx-shopping-bag"></i>
            Продавай на Zood
          </Typography>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          gap={"10px"}
          alignItems={"center"}
        >
          <Box>
            <select
              style={{
                width: "50px",
                height: "20px",
                background: "#FFD200FF",
                border: 1,
                fontSize: "15px",
                color: "#606266FF",
              }}
              name="select"
              id="select"
            >
              <option value="Ru">Ru</option>
              <option value="Uz">Uz</option>
              <option value="Eng">Eng</option>
            </select>
          </Box>
          <Box>
            <Typography
              sx={{
                color: "#606266FF",
                fontSize: "12px",
                mb: "-4px",
                fontWeight: "600",
              }}
            >
              <i class="bx bx-user"></i>Войти
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
