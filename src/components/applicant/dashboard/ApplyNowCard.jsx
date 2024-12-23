import React from "react";
import { Box, Button, Typography, Skeleton } from "@mui/material";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import DoDisturbAltIcon from "@mui/icons-material/DoDisturbAlt";
import { usePathname } from "next/navigation";

const ApplyNowCard = ({
  data,
  handleBookmark,
  isLoadingDetails,
  handleApplyNow,
}) => {
  const labels = {
    0.5: "4.5",
    1: "Useless+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "4.5",
    4: "Good+",
    4.5: "Excellent",
    5: "4.5",
  };
  const value = 5;

  const pathname = usePathname();
  return (
    <Box
      sx={{
        my: 2,
        borderRadius: "10px",
        px: "15px",
        py: 1.5,
        boxShadow: "0px 1px 5px #00000040",
      }}
    >
      <Box
        sx={{ display: "flex", justifyContent: "space-between", py: "10px" }}
      >
        {data?.title || isLoadingDetails ? (
          <Typography
            sx={{
              fontSize: { xs: "18px", sm: "21px", md: "24px" },
              fontWeight: 500,
              lineHeight: { xs: "25px", sm: "30px", md: "25px", lg: "20px" },
              color: "#111111",
            }}
          >
            {data?.title}
          </Typography>
        ) : (
          <Skeleton variant="text" width="70%" height="30px" />
        )}
      </Box>
      {data ? (
        <Box sx={{ display: "flex", alignItems: "center", py: 1 }}>
          <LocationOnRoundedIcon sx={{ width: "18px" }} />
          <Typography
            sx={{
              fontSize: { xs: "12px", sm: "14px", md: "16px" },
              fontWeight: 500,
              lineHeight: "20px",
              color: "#00305B",
              pl: "5px",
              pr: "12px",
            }}
          >
            Location
          </Typography>
          {data?.location ? (
            <Typography
              sx={{
                fontSize: { xs: "12px", sm: "14px", md: "15px" },
                fontWeight: 300,
                lineHeight: "16px",
                color: "#333333",
              }}
            >
              {data.location}
            </Typography>
          ) : (
            <Skeleton variant="text" width="50%" />
          )}
        </Box>
      ) : (
        <Skeleton variant="text" width="50%" />
      )}
      {/* {data?.job_location || isLoadingDetails ? (
        <Box sx={{ display: "flex", alignItems: "center", py: 1 }}>
          <LocationOnRoundedIcon sx={{ width: "18px" }} />
          <Typography
            sx={{
              fontSize: { xs: "12px", sm: "14px", md: "16px" },
              fontWeight: 500,
              lineHeight: "20px",
              color: "#00305B",
              pl: "5px",
              pr: "12px",
            }}
          >
            Location
          </Typography>
          {data?.job_location && data?.country?.name && data?.city?.name ? (
            <Typography
              sx={{
                fontSize: { xs: "12px", sm: "14px", md: "15px" },
                fontWeight: 300,
                lineHeight: "16px",
                color: "#333333",
              }}
            >
              {`${data?.job_location?.name || ""}, ${
                data?.country?.name || ""
              }, ${data?.city?.name || ""}` || "Company Name"}
            </Typography>
          ) : (
            <Skeleton variant="text" width="50%" />
          )}
        </Box>
      ) : (
        <Skeleton variant="text" width="50%" />
      )} */}
      <Box sx={{ py: "10px", display: "flex" }}>
        {data ? (
          <Button
            sx={{
              backgroundColor: "#FDF7F7",
              border: "0.4px solid #0000004D",
              borderRadius: "6px",
              color: "#222222",
              fontSize: { xs: "8px", sm: "14px", md: "16px" },
              fontWeight: 400,
              lineHeight: { xs: "8px", sm: "16px", md: "18px" },
              textAlign: "center",
              p: "7px",
              py: { xs: "10px" },
            }}
          >
            {data?.companyName}
            <ArrowOutwardIcon
              sx={{
                fontSize: { xs: "12px", sm: "14px", md: "25px" },
              }}
            />
          </Button>
        ) : (
          <Skeleton variant="rectangular" width="200px" height="40px" />
        )}
        <Box
          sx={{
            width: 200,
            display: "flex",
            alignItems: "center",
            padding: "4px",
          }}
        >
          {data ? (
            <>
              <Typography
                sx={{
                  mr: 0.5,
                  ml: 1.5,
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "18px",
                  color: "#00305B",
                }}
              >
                {labels[value]}
              </Typography>
              <Rating
                name="text-feedback"
                value={value}
                readOnly
                precision={0.5}
                sx={{
                  fontSize: "12px",
                }}
                emptyIcon={
                  <StarIcon
                    sx={{
                      opacity: 0.55,
                    }}
                  />
                }
              />
            </>
          ) : (
            <Skeleton variant="text" width="50px" />
          )}
        </Box>
      </Box>
      {/* <Box sx={{ py: "10px", display: "flex" }}>
        {data?.employer || isLoadingDetails ? (
          <Button
            sx={{
              backgroundColor: "#FDF7F7",
              border: "0.4px solid #0000004D",
              borderRadius: "6px",
              color: "#222222",
              fontSize: { xs: "8px", sm: "14px", md: "16px" },
              fontWeight: 400,
              lineHeight: { xs: "8px", sm: "16px", md: "18px" },
              textAlign: "center",
              p: "7px",
              py: { xs: "10px" },
            }}
          >
            {`${data?.employer?.first_name || ""} ${
              data?.employer?.middle_name || ""
            } ${data?.employer?.last_name || ""}`}
            <ArrowOutwardIcon
              sx={{
                fontSize: { xs: "12px", sm: "14px", md: "25px" },
              }}
            />
          </Button>
        ) : (
          <Skeleton variant="rectangular" width="200px" height="40px" />
        )}
        <Box
          sx={{
            width: 200,
            display: "flex",
            alignItems: "center",
            padding: "4px",
          }}
        >
          {data?.employer || isLoadingDetails ? (
            <>
              <Typography
                sx={{
                  mr: 0.5,
                  ml: 1.5,
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "18px",
                  color: "#00305B",
                }}
              >
                {labels[value]}
              </Typography>
              <Rating
                name="text-feedback"
                value={value}
                readOnly
                precision={0.5}
                sx={{
                  fontSize: "12px",
                }}
                emptyIcon={
                  <StarIcon
                    sx={{
                      opacity: 0.55,
                    }}
                  />
                }
              />
            </>
          ) : (
            <Skeleton variant="text" width="50px" />
          )}
        </Box>
      </Box> */}
      {data ? (
        <Box sx={{ py: "10px", display: "flex" }}>
          <>
            {pathname === "/applicant/careerAreas" && (
              <Button
                onClick={() => handleApplyNow(data)}
                sx={{
                  width: "200.29px",
                  height: { xs: "40px", sm: "50px", md: "60.93px" },
                  backgroundColor: "#FE4D82",
                  boxShadow: "0px 1px 5px #00000040",
                  borderRadius: "6px",
                  color: "#FFFFFF",
                  fontSize: { xs: "10px", sm: "14px", md: "16px" },
                  fontWeight: 700,
                  lineHeight: "18px",
                  textAlign: "center",
                  p: "7px",
                }}
              >
                Apply Now
              </Button>
            )}
            <Box
              sx={{
                width: "65.93px",
                height: { xs: "40px", sm: "50px", md: "60.93px" },
                borderRadius: "7px",
                boxShadow: "0px 1px 5px #00000040",
                mx: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={handleBookmark(data?.is_saved)}
            >
              <BookmarkIcon
                sx={{
                  fontSize: { xs: "20px", sm: "25px", md: "28px", lg: "35px" },
                }}
              />
            </Box>
            <Box
              sx={{
                width: "65.93px",
                height: { xs: "40px", sm: "50px", md: "60.93px" },
                borderRadius: "7px",
                boxShadow: "0px 1px 5px #00000040",
                mx: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <DoDisturbAltIcon
                sx={{
                  fontSize: { xs: "20px", sm: "25px", md: "28px", lg: "35px" },
                }}
              />
            </Box>
          </>
        </Box>
      ) : (
        <Skeleton variant="rectangular" width="200px" height="50px" />
      )}
      {/* {data?.employer || isLoadingDetails ? (
        <Box sx={{ py: "10px", display: "flex" }}>
          <>
            <Button
            onClick={()=> handleApplyNow(data)}
              sx={{
                width: "200.29px",
                height: { xs: "40px", sm: "50px", md: "60.93px" },
                backgroundColor: "#FE4D82",
                boxShadow: "0px 1px 5px #00000040",
                borderRadius: "6px",
                color: "#FFFFFF",
                fontSize: { xs: "10px", sm: "14px", md: "16px" },
                fontWeight: 700,
                lineHeight: "18px",
                textAlign: "center",
                p: "7px",
              }}
            >
              Apply Now
            </Button>
            <Box
              sx={{
                width: "65.93px",
                height: { xs: "40px", sm: "50px", md: "60.93px" },
                borderRadius: "7px",
                boxShadow: "0px 1px 5px #00000040",
                mx: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={handleBookmark(data?.is_saved)}
            >
              <BookmarkIcon
                sx={{
                  fontSize: { xs: "20px", sm: "25px", md: "28px", lg: "35px" },
                }}
              />
            </Box>
            <Box
              sx={{
                width: "65.93px",
                height: { xs: "40px", sm: "50px", md: "60.93px" },
                borderRadius: "7px",
                boxShadow: "0px 1px 5px #00000040",
                mx: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <DoDisturbAltIcon
                sx={{
                  fontSize: { xs: "20px", sm: "25px", md: "28px", lg: "35px" },
                }}
              />
            </Box>
          </>
        </Box>
      ) : (
        <Skeleton variant="rectangular" width="200px" height="50px" />
      )} */}
    </Box>
  );
};

export default ApplyNowCard;
