import { Box, Button, Link, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router";

export const ItemProduct = ({ dataProduct }) => {
  let { productItemsId } = useParams();

  // {dataProduct[productItemsId-1].Img}
  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"ceter"}>
      <Box
        width={"1200px"}
        display={"flex"}
        flexDirection={"column"}
        mt={"20px"}
      >
        <Box display={"flex"} gap={"10px"}>
          <Link to="/" sx={{ textDecoration: "none" }}>
            {" "}
            <Typography
              sx={[
                { color: "#9697a1" },
                { "&:hover": { color: "#F4CA16FF", transition: "all 0.5s" } },
              ]}
            >
              Zood
            </Typography>
          </Link>
          <Typography
            sx={[
              { color: "#9697a1" },
              { "&:hover": { color: "#F4CA16FF", transition: "all 0.5s" } },
            ]}
          >
            /
          </Typography>
          <Typography
            sx={[
              { color: "#9697a1" },
              { "&:hover": { color: "#F4CA16FF", transition: "all 0.5s" } },
            ]}
          >
            Телефоны и аксессуары{" "}
          </Typography>
          <Typography
            sx={[
              { color: "#9697a1" },
              { "&:hover": { color: "#F4CA16FF", transition: "all 0.5s" } },
            ]}
          >
            /
          </Typography>
          <Typography
            sx={[
              { color: "#9697a1" },
              { "&:hover": { color: "#F4CA16FF", transition: "all 0.5s" } },
            ]}
          >
            Smartphones{" "}
          </Typography>
          <Typography
            sx={[
              { color: "#9697a1" },
              { "&:hover": { color: "#F4CA16FF", transition: "all 0.5s" } },
            ]}
          >
            /
          </Typography>
          <Typography sx={[{ color: "#606266" }, {}]}>
            {dataProduct[productItemsId - 1].PName}
          </Typography>
        </Box>
        <Box display={"flex"} mt={"40px"}>
          <Box>
            <Box
              border={"1px solid #ccc"}
              padding={"20px"}
              borderRadius={"10px"}
              position={"relative"}
            >
              <Box overflow={"hidden"} borderRadius={"20px"}>
                <img
                  src={dataProduct[productItemsId - 1].Img}
                  style={{ width: "300px" }}
                  alt=""
                />
                <Box>
                  <Button
                    sx={[
                      {
                        bgcolor: "#FDFEFE",
                        opacity: "0.5",
                        position: "absolute",
                        padding: "10px 1px",
                        top: "1px",
                        left:"275px",
                        zIndex: "100",
                        borderRadius: "10px",
                      },
                      {
                        "&:hover": {
                          bgcolor: "#FDFEFE",
                          opacity: "1",
                          transition: "all 0.5s",
                        },
                      },
                    ]}
                  >
                    <Typography sx={{ fontSizent: "50px", color: "#2D3092FF" }}>
                      <i class="bx bx-heart"></i>
                    </Typography>
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box></Box>
        </Box>
      </Box>
    </Box>
  );
};
