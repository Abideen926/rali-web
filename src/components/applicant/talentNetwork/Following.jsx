import React from "react";
import { Avatar, Box, Button, Typography } from "@mui/material";
import TalentNetworkTitleSearchable from "./TalentNetworkTitleSearchable";
import CustomButton from "@/components/button/CustomButton";
import { usePathname, useRouter } from "next/navigation";

const Following = ({ data }) => {
  const path = usePathname();
  const router = useRouter();
  const handleLoadMore = () => {
    router.push("/applicant/talentNetwork/myConnections");
  };
  return (
    <Box>
      <TalentNetworkTitleSearchable label={"3,541 Connections"} />
      {data?.map((item, index) => (
        <Box
          key={index}
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 0,
            padding: 0,
            margin: "auto",
            borderTop: "1px solid #0000004D",
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
                flexDirection: { xs: "column", md: "row" },
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
                    textAlign: { xs: "center", md: "left" },
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
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  {item?.userDetails}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            //   onClick={() => handleCheckBox(item?.id)}
            sx={{
              display: "flex",
              gap: 1,
            }}
          >
            <Button
              sx={{
                minWidth: "151.16px",
                height: "46px",
                margin: "0px auto",
                borderRadius: "6px",
                border: "1px solid #00305B",
                boxShadow: "0px 1px 3px #00000033",
                color: "#00305B",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                mb: 1,
                fontSize: "14px",
                fontWeight: 700,
                lineHeight: "21px",
                "@media (max-width: 340px)": {
                  minWidth: "111.16px",
                },
              }}
            >
              Delete
            </Button>
            <Button
              sx={{
                minWidth: "151.16px",
                height: "46px",
                margin: "0px auto",
                borderRadius: "6px",
                border: "1px solid #00305B",
                boxShadow: "0px 1px 3px #00000033",
                color: "#00305B",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                mb: 1,
                fontSize: "14px",
                fontWeight: 700,
                lineHeight: "21px",
                "@media (max-width: 340px)": {
                  minWidth: "111.16px",
                },
              }}
            >
              Unfollow
            </Button>
          </Box>
        </Box>
      ))}
      {path === "/applicant/profile" && (
        <CustomButton label="Load More" onClick={handleLoadMore} />
      )}
    </Box>
  );
};

export default Following;
