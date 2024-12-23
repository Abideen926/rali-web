"use client";
import React from "react";
import { Avatar, Box, Button, Rating, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { BorderLinearProgress } from "@/helper/progressbar";
import CustomButton from "@/components/button/CustomButton";
import { usePathname, useRouter } from "next/navigation";

const EmployerProfile = ({ data }) => {
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

  const route = useRouter();
  const pathName = usePathname();

  const handleAddReview = () => {
    route.push("/applicant/feedback/writeReviews");
  };
  const handleEdit = () => {
    route.push("/employer/profile/editProfile");
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Avatar
          alt="Remy Sharp"
          src={data?.userProfile}
          sx={{
            width: { xs: 80, sm: 100, md: 131 },
            height: { xs: 80, sm: 100, md: 131 },
          }}
        />
        <Typography
          sx={{
            fontSize: { xs: "20px", sm: "22px", md: "26px" },
            fontWeight: 600,
            lineHeight: { xs: "25px", sm: "30px", md: "24px", lg: "33px" },
            color: "#111111",
            mt: "10px",
            mb: "-5px",
          }}
        >
          {data?.userName}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "14px", sm: "16px", md: "18px" },
            fontWeight: 400,
            lineHeight: { xs: "25px", sm: "30px", md: "24px", lg: "19px" },
            textDecoration: "underline",
            color: "#00305B",
            mt: "10px",
            mb: "5px",
          }}
        >
          {data?.userReview}
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
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: "center",
          my: 4,
        }}
      >
        <Button
          sx={{
            width: { xs: "100%", sm: "300px", md: "390px" },
            height: "60px",
            borderRadius: "10px",
            backgroundColor: "#FE4D82",
            color: "#fff",
          }}
        >
          Follow
        </Button>
        <Button
          sx={{
            width: { xs: "100%", sm: "300px", md: "390px" },
            height: "60px",
            borderRadius: "10px",
            backgroundColor: "#00305B",
            color: "#fff",
          }}
        >
          Message
        </Button>
        {!pathName.includes("employer/") && (
          <Button
            sx={{
              width: { xs: "100%", sm: "300px", md: "390px" },
              height: "60px",
              borderRadius: "10px",
              backgroundColor: "#000000",
              color: "#fff",
            }}
          >
            Write A Review
          </Button>
        )}
        {pathName.includes("employer/") && (
          <Button
            onClick={handleEdit}
            sx={{
              width: { xs: "100%", sm: "300px", md: "390px" },
              height: "60px",
              borderRadius: "10px",
              backgroundColor: "#000000",
              color: "#fff",
            }}
          >
            Edit
          </Button>
        )}
      </Box>
      <Typography
        sx={{
          fontSize: { xs: "18px", sm: "24px", md: "30px" },
          lineHeight: { xs: "14px", sm: "16px", md: "17px" },
          fontWeight: 600,
          color: "#00305B",
          pb: 2,
        }}
      >
        Overview
      </Typography>
      {data?.overview?.map((item, index) => (
        <Box
          key={index}
          sx={{
            width: "100%",
            boxShadow: "0px 0px 3px #00000040",
            border: "none",
            outline: "none",
            padding: "18px 20px",
            borderRadius: "10px",
            fontSize: "16px",
            fontWeight: 300,
            lineHeight: "18px",
            color: "#222222",
            display: "flex",
            justifyContent: "space-between",
            my: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "14px", sm: "14px", md: "16px" },
              lineHeight: { xs: "14px", sm: "16px", md: "18px" },
              fontWeight: 500,
              color: "#222222",
            }}
          >
            {item?.name}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", sm: "14px", md: "16px" },
              lineHeight: { xs: "14px", sm: "16px", md: "18px" },
              fontWeight: 700,
              color: "#00305B",
            }}
          >
            {item?.content}
          </Typography>
        </Box>
      ))}
      <Box
        sx={{
          width: "100%",
          boxShadow: "0px 0px 3px #00000040",
          border: "none",
          outline: "none",
          padding: "18px 20px",
          borderRadius: "10px",
          fontSize: "16px",
          fontWeight: 300,
          lineHeight: "18px",
          color: "#222222",
          my: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "16px", sm: "18px", md: "22px" },
            lineHeight: "18px",
            fontWeight: 600,
            color: "#00305B",
            pb: 2,
          }}
        >
          Specialities
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "14px", sm: "16px", md: "16px" },
            lineHeight: { xs: "20px", sm: "22px", md: "26px" },
            fontWeight: 300,
            color: "#111111",
            pb: 2,
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. Lorem Ipsum is simply dummy
          text of the printing and typesetting industry. Lorem Ipsum has been
          the industrys standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industrys standard
          dummy text ever since the 1500s, when an unknown printer.
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          boxShadow: "0px 0px 3px #00000040",
          border: "none",
          outline: "none",
          padding: "18px 20px",
          borderRadius: "10px",
          fontSize: "16px",
          fontWeight: 300,
          lineHeight: "18px",
          color: "#222222",
          my: 2,
          mb: 4,
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "16px", sm: "18px", md: "22px" },
            lineHeight: "18px",
            fontWeight: 600,
            color: "#00305B",
            pb: 2,
          }}
        >
          About
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "14px", sm: "16px", md: "16px" },
            lineHeight: { xs: "20px", sm: "22px", md: "26px" },
            fontWeight: 300,
            color: "#111111",
            pb: 2,
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. Lorem Ipsum is simply dummy
          text of the printing and typesetting industry. Lorem Ipsum has been
          the industrys standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industrys standard
          dummy text ever since the 1500s, when an unknown printer.
        </Typography>
      </Box>

      <Box>
        <Typography
          sx={{
            fontSize: { xs: "18px", sm: "24px", md: "30px" },
            lineHeight: { xs: "14px", sm: "16px", md: "17px" },

            fontWeight: 600,
            color: "#00305B",
            pb: 2,
          }}
        >
          Reviews & Rating
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Box sx={{ maxWidth: "800px", width: "100%" }}>
            {[5, 4, 3, 2, 1].map((item) => (
              <Box
                key={item}
                sx={{ my: 2, display: "flex", alignItems: "center" }}
              >
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "#00305B",
                    mr: 2,
                  }}
                >
                  {item}
                </Typography>
                <BorderLinearProgress
                  variant="determinate"
                  value={item * 20}
                  sx={{ width: "100%" }}
                />
              </Box>
            ))}
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: { xs: "22px", sm: "26px", md: "30px", lg: "40px" },
                lineHeight: { xs: "35px", sm: "40px", md: "48px" },
                color: "#00305B",
              }}
            >
              4.5
            </Typography>
            <Typography
              sx={{
                fontWeight: 300,
                fontSize: { xs: "14px", sm: "16px", md: "20px" },
                lineHeight: { xs: "14px", sm: "16px", md: "17px" },
                color: "#111111",
              }}
            >
              478 Reviews
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
          </Box>
        </Box>
      </Box>
      {data?.reviews?.map((item, index) => (
        <Box
          key={index}
          sx={{
            width: "100%",
            boxShadow: "0px 0px 3px #00000040",
            border: "none",
            outline: "none",
            padding: "18px 20px",
            borderRadius: "10px",
            fontSize: "16px",
            fontWeight: 300,
            lineHeight: "18px",
            color: "#222222",
            my: 2,
          }}
        >
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

          <Typography
            sx={{
              fontSize: { xs: "14px", sm: "16px", md: "20px" },
              lineHeight: "17px",
              fontWeight: 500,
              color: "#222222",
              py: 1,
            }}
          >
            {item?.title}
          </Typography>

          <Box sx={{ display: "flex", gap: { xs: 0.5, sm: 1, md: 2 }, py: 1 }}>
            <Typography
              sx={{
                fontSize: { xs: "12px", sm: "14px", md: "16px" },
                lineHeight: { xs: "14px", sm: "16px", md: "17px" },

                fontWeight: 300,
                color: "#111111",
              }}
            >
              {item?.subTitle}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "12px", sm: "14px", md: "16px" },
                lineHeight: { xs: "14px", sm: "16px", md: "17px" },
                fontWeight: 300,
                color: "#222222",
              }}
            >
              (former employee) - uSA - OCTOBER 3,2023
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: { xs: "12px", sm: "14px", md: "16px" },
              lineHeight: { xs: "17px", sm: "20px", md: "26px" },
              fontWeight: 300,
              color: "#111111",
              py: 1,
            }}
          >
            {item?.descriptions}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", sm: "16px", md: "20px" },
              lineHeight: { xs: "12px", sm: "14px", md: "17px" },
              fontWeight: 500,
              color: "#222222",
              py: 1,
            }}
          >
            Was this review helpful?
          </Typography>
          <Box sx={{ display: "flex", gap: 2, py: 1 }}>
            <Button
              sx={{
                backgroundColor: "#FFF",
                color: "#000",
                border: "1px solid #000",
                fontSize: { xs: "14px", sm: "16px", lg: "18px" },
                fontWeight: 400,
              }}
            >
              Yes(18)
            </Button>
            <Button
              sx={{
                backgroundColor: "#FE4D82",
                color: "#fff",
                fontSize: { xs: "14px", sm: "16px", lg: "18px" },
                fontWeight: 400,
              }}
            >
              Yes(18)
            </Button>
          </Box>
        </Box>
      ))}
      {!pathName?.includes("employer/") && (
        <CustomButton label="Write A Reviews" onClick={handleAddReview} />
      )}
    </Box>
  );
};

export default EmployerProfile;
