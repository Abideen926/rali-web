"use client";
import React, { useState } from "react";
import {
  Avatar,
  Box,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CustomButton from "@/components/button/CustomButton";
import Search from "@/components/searchField/Search";

const SharePost = ({ data, handleClose }) => {
  const [selectItem, setSelectItem] = useState([]);

  const handleCheckBox = (id) => {
    setSelectItem((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectedItems = data.filter((item) => selectItem.includes(item.id));
  const suggestedItems = data.filter((item) => !selectItem.includes(item.id));

  const handleSend = () => {
    console.log(selectItem, "selectedIt");
  };

  return (
    <Box>
      <Box
        sx={{
          width: { xs: "100%", sm: "100%" },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: "15px",
          mb: "20px",
        }}
      >
        <Typography variant="h3">Send Post</Typography>
        <Box
          sx={{
            width: "43px",
            height: "43px",
            borderRadius: "50%",
            boxShadow: "0px 1px 5px #00000040",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={handleClose}
        >
          <CloseIcon />
        </Box>
      </Box>
     <Search />
      <Box
        sx={{
          maxHeight: "600px",
          overflowY: "scroll",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          px: 1,
        }}
      >
        {selectedItems.length > 0 && (
          <>
            <Typography
              sx={{
                fontSize: { xs: "18px", lg: "22px" },
                lineHeight: "20px",
                fontWeight: 700,
                color: "#00305B",
                my: 2,
              }}
            >
              Selected
            </Typography>
            {selectedItems.map((item, index) => (
              <Box
                key={index}
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 0,
                  padding: 0,
                  borderRadius: "10px",
                  backgroundColor: "#fff",
                  margin: "auto",
                  boxShadow: "0px 1px 5px #00000040",
                  height: "94.03px",
                  border: "none",
                  outline: "none",
                  my: 2,
                }}
              >
                <Box
                  sx={{
                    px: { xs: 1, lg: 2 },
                    py: 2,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Avatar
                      alt="Profile Picture"
                      src={item?.userProfile}
                      sx={{
                        width: { xs: 50, lg: 68 },
                        height: { xs: 50, lg: 68 },
                      }}
                    />
                    <Box sx={{ px: { xs: 1, lg: 1.5 } }}>
                      <Typography
                        sx={{
                          fontSize: { xs: "14px", lg: "16px" },
                          lineHeight: "18px",
                          fontWeight: 500,
                          color: "#00305B",
                        }}
                      >
                        {item?.userName}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: { xs: "10px", lg: "12px" },
                          lineHeight: "17px",
                          fontWeight: 300,
                          py: 0.5,
                          pb: 1,
                        }}
                      >
                        {item?.userDetails}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box
                  onClick={() => handleCheckBox(item?.id)}
                  sx={{
                    width: "29.5px",
                    height: "29.5px",
                    backgroundColor: "#00305B",
                    border: "2px solid #00305B",
                    cursor: "pointer",
                    mx: 3,
                  }}
                ></Box>
              </Box>
            ))}
          </>
        )}

        <Typography
          sx={{
            fontSize: { xs: "18px", lg: "22px" },
            lineHeight: "20px",
            fontWeight: 700,
            color: "#00305B",
            my: 2,
          }}
        >
          Suggested
        </Typography>
        {suggestedItems.map((item, index) => (
          <Box
            key={index}
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 0,
              padding: 0,
              borderRadius: "10px",
              backgroundColor: "#fff",
              margin: "auto",
              boxShadow: "0px 1px 5px #00000040",
              height: "94.03px",
              border: "none",
              outline: "none",
              my: 2,
            }}
          >
            <Box
              sx={{
                px: { xs: 1, lg: 2 },
                py: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Avatar
                  alt="Profile Picture"
                  src={item?.userProfile}
                  sx={{
                    width: { xs: 50, lg: 68 },
                    height: { xs: 50, lg: 68 },
                  }}
                />
                <Box sx={{ px: { xs: 1, lg: 1.5 } }}>
                  <Typography
                    sx={{
                      fontSize: { xs: "14px", lg: "16px" },
                      lineHeight: "18px",
                      fontWeight: 500,
                      color: "#00305B",
                    }}
                  >
                    {item?.userName}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "10px", lg: "12px" },
                      lineHeight: "17px",
                      fontWeight: 300,
                      py: 0.5,
                      pb: 1,
                    }}
                  >
                    {item?.userDetails}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              onClick={() => handleCheckBox(item?.id)}
              sx={{
                width: "29.5px",
                height: "29.5px",
                backgroundColor: "",
                border: "2px solid #00305B",
                cursor: "pointer",
                mx: 3,
              }}
            ></Box>
          </Box>
        ))}
      </Box>
      <CustomButton label="send" onClick={handleSend} />
    </Box>
  );
};

export default SharePost;
