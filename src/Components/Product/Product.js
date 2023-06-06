import { Box, Typography } from "@mui/material";
import React from "react";

export const Product = ({ dataProduct }) => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"ceter"}
      mt={"50px"}
      height={"100vh"}
    >
      <Box width={"1200px"} display={"flex"} flexDirection={"column"}>
        <Box display={"flex"} gap={"730px"}>
          <Typography
            variant="h6"
            fontWeight={"700"}
            zIndex={"10"}
            color={"#4c4c4c"}
          >
            {" "}
            Топ смартфоны в рассрочку х12
          </Typography>
          <Typography
            sx={[
              {
                fontWeight: "600",
                color: "#2D3092FF",
                height: "20px",
                width: "123px",
              },
              {
                "&:hover": {
                  borderBottom: "1px solid #2D3092FF",
                  mt: "-5px",
                  transition: "all .5s",
                },
              },
            ]}
          >
            Показать все<i class="bx bx-chevron-right"></i>
          </Typography>
        </Box>
        <Box display={"flex"} mt={"30px"} gap={"20px"}>
          {dataProduct.map((item, index) => (
            <Box>
              <Box
                key={index}
                sx={[
                  {
                    borderRadius: "10px",
                    background: "#fbfbfb",
                    boxShadow:
                      "35px 35px 100px #bcbcbc,-35px -35px 100px #ffffff",
                    padding: "10px",
                    cursor: "pointer",
                  },
                  { "&&:hover": { mt: "-10px", transition: ".5s all" } },
                ]}
              >
                <Box display={"flex"} justifyContent={"center"}>
                  <Box height={"222px"}>
                    <img
                      src={item.Img}
                      style={{ width: "100%", height: "100%" }}
                      alt=""
                    />
                  </Box>
                </Box>
                <Box>
                  <Typography fontSize={"14px"}>{item.PName}</Typography>
                </Box>
                <Box display={"flex"} justifyContent={"space-between"}>
                  <Box>
                    <Box>
                      <Typography fontWeight={"600"} color={"#4c4c4c"}>
                        UZS {item.NewPrice}
                      </Typography>
                    </Box>
                    <Box width={"105px"}>
                      <Typography
                        color={"#9b9b9b"}
                        borderBottom={"1px solid  #9b9b9b"}
                        height={"13px"}
                      >
                        USZ {item.OldPrice}
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    bgcolor={"red"}
                    padding={"1px 10px"}
                    overflow={"hidden"}
                    borderRadius={"5px"}
                    mt={"5px"}
                  >
                    <Typography color={"#fff"}>-{item.Skidka}%</Typography>
                  </Box>
                </Box>
                <Box display={"flex"} mt={"15px"}>
                  <Box>🤩 {item.Comment} </Box>
                  <Box mt={"3px"} ml={"2px"}>
                    {" "}
                    <img src={item.Flag} style={{ width: "22px" }} alt="" />
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
