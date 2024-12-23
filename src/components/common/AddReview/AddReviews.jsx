"use client";
import React, { useState } from "react";
import InfoIcon from "@mui/icons-material/Info";
import { Box, Button, Typography, Checkbox } from "@mui/material";
import RateCompany from "./RateCompany";
import AddComment from "./AddComment";
import CustomButton from "@/components/button/CustomButton";
import OverallRating from "./OverallRating";
import WorkCulture from "./WorkCulture";
import RalliModal from "@/components/Modal/RalliModal";

const AddReviews = ({ data }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [responses, setResponses] = useState({});
  const [selectedWorkCulture, setSelectedWorkCulture] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [ratings, setRatings] = useState({
    workLifeBalance: 0,
    compensation: 0,
    jobSecurity: 0,
  });
  const [comment, setComment] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const handleResponse = (name, value) => {
    setResponses((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleWorkCultureSelect = (name) => {
    setSelectedWorkCulture(name);
  };
  const handleRatingSelect = (rating) => {
    setSelectedRating(rating);
  };
  const handleRatingChange = (categoryId, newValue) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [categoryId]: newValue,
    }));
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleAnonymousChange = (event) => {
    setIsAnonymous(event.target.checked);
  };

  return (
    <Box>
      <Typography
        sx={{
          fontSize: { xs: "14px", sm: "16px", md: "19px", lg: "22px" },
          lineHeight: { xs: "22px", md: "18px" },
          fontWeight: 500,
          color: "#00305B",
          textTransform: "capitalize",
        }}
      >
        Share your anonymous feedback about your Employer in just two steps
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "16px" },
          lineHeight: { xs: "28px", md: "26px" },
          fontWeight: 300,
          color: "#111111",
          textTransform: "capitalize",
          py: 2,
        }}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. Lorem Ipsum is simply dummy
        text of the printing and typesetting industry. Lorem Ipsum has been the
        industrys standard dummy text ever since the 1500s.
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, pb: 4 }}>
        <InfoIcon sx={{ color: "#00305B" }} />
        <Typography
          sx={{
            fontSize: { xs: "14px", sm: "16px", md: "19px", lg: "22px" },
            lineHeight: { xs: "22px", md: "18px" },
            fontWeight: 500,
            color: "#FE4D82",
            textTransform: "capitalize",
          }}
        >
          All questions are optional. Please skip any that don’t apply.
        </Typography>
      </Box>
      {data?.companyBoolainFeedback?.map((item) => (
        <Box
          key={item.name}
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
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            my: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "12px", sm: "13px", md: "16px" },
              lineHeight: { xs: "20px", sm: "19px", md: "18px" },
              fontWeight: 500,
              color: "#222222",
              textTransform: "capitalize",
              py: { xs: 1, sm: 0 },
            }}
          >
            {item?.label}
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Button
              onClick={() => handleResponse(item.name, "Yes")}
              sx={{
                backgroundColor: "#00305B",
                fontSize: { xs: "12px", md: "14px" },
                lineHeight: "21px",
                fontWeight: 700,
                color: "#FFFFFF",
                "&:hover": { backgroundColor: "#002244" },
              }}
            >
              {item?.buttonYes}
            </Button>
            <Button
              onClick={() => handleResponse(item.name, "No")}
              sx={{
                backgroundColor: "#FE4D82",
                fontSize: { xs: "12px", md: "14px" },
                lineHeight: "21px",
                fontWeight: 700,
                color: "#FFFFFF",
                "&:hover": { backgroundColor: "#D93B6A" },
              }}
            >
              {item?.buttonNo}
            </Button>
          </Box>
        </Box>
      ))}
      <WorkCulture
        data={data}
        selected={selectedWorkCulture}
        onSelect={handleWorkCultureSelect}
      />
      <OverallRating
        selectedRating={selectedRating}
        onSelect={handleRatingSelect}
      />
      <RateCompany ratings={ratings} onRatingChange={handleRatingChange} />
      <AddComment comment={comment} onCommentChange={handleCommentChange} />

      <Box sx={{ display: "flex", alignItems: "center", my: 2 }}>
        <Checkbox
          checked={isAnonymous}
          onChange={handleAnonymousChange}
          sx={{ color: "#00305B" }}
        />
        <Typography
          sx={{
            fontSize: { xs: "14px", sm: "16px", md: "18px" },
            lineHeight: { xs: "22px", md: "18px" },
            fontWeight: 500,
            color: "#00305B",
            textTransform: "capitalize",
          }}
        >
          Want to Review as Anonymous
        </Typography>
      </Box>

      <CustomButton label="Submit" onClick={handleOpenModal} />

      <RalliModal
        open={isModalOpen}
        onClose={handleCloseModal}
        para={"Review submitted! Your insights are valuable to us and will assist others in understanding more about this company."}
        imageSrc={"/assets/images/confirmation.png"}
        buttonLabel='Done'
      />
    </Box>
  );
};

export default AddReviews;
