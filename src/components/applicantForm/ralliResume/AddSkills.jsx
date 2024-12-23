"use client";
import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import { useWizard } from "react-use-wizard";

import CustomButton from "@/components/button/CustomButton";
import FormTitle from "@/components/applicant/dashboard/FormTitle";

const AddSkills = ({ data, onNext }) => {
  const [skillInput, setSkillInput] = useState("");
  const [skills, setSkills] = useState([]);
  const { nextStep, previousStep } = useWizard();

  const handleNext = () => {
    onNext();
    nextStep();
  };

  const handleBack = () => {
    previousStep();
  };
  const handleAddSkill = (skill) => {
    console.log("Skill before processing:", skill);
    if (
      typeof skill === "string" &&
      skill.trim() &&
      !skills.includes(skill.trim())
    ) {
      setSkills((prev) => {
        console.log("Updated skills:", [...prev, skill.trim()]);
        return [...prev, skill.trim()];
      });
      setSkillInput("");
    }
  };
  const handleClossItem = (skillToRemove) => {
    setSkills((prevSkills) =>
      prevSkills.filter((skill) => skill !== skillToRemove)
    );
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
          mb: "10px",
        }}
      >
        <Button onClick={handleBack} sx={{ minWidth: 0, p: 0 }}>
          <ArrowCircleLeftRoundedIcon sx={{ color: "#00305B", fontSize: 32 }} />
        </Button>
      </Box>
      <Box>
        <Typography
          sx={{
            fontSize: { xs: "10px", sm: "15px", md: "16px" },
            fontWeight: 300,
            lineHeight: { xs: "12px", sm: "20px", md: "25px", lg: "33px" },
            color: "#111111",
            pb: 2,
          }}
        >
          {data.pages}
        </Typography>
        <FormTitle label={data?.title} />

        <Typography
          sx={{
            fontSize: { xs: "10px", sm: "15px", md: "24px" },
            fontWeight: 400,
            lineHeight: { xs: "12px", sm: "20px", md: "25px", lg: "18px" },
            color: "#111111",
            pb: 6,
          }}
        >
          {data?.para}
        </Typography>
      </Box>

      <Box>
        <Typography
          sx={{
            fontSize: { xs: "10px", sm: "15px", md: "24px" },
            fontWeight: 500,
            lineHeight: { xs: "12px", sm: "20px", md: "25px", lg: "18px" },
            color: "#222222",
            pb: 2,
          }}
        >
          Add A Skill
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Box
          component="input"
          sx={{
            boxShadow: "0px 0px 3px #00000040",
            width: "100%",
            border: "none",
            padding: "16px 20px",
            borderRadius: "10px",
            fontSize: "16px",
            fontWeight: 300,
            lineHeight: "18px",
            color: "#222222",
            mb: 2,
            mr: 2,
          }}
          placeholder="Start Typing To Search"
          value={skillInput}
          onChange={(e) => setSkillInput(e.target.value)}
        />
        <Box
          sx={{
            boxShadow: "0px 0px 3px #00000040",
            border: "none",
            padding: "12px 20px",
            borderRadius: "6px",
            fontWeight: 300,
            lineHeight: "18px",
            color: "#222222",
            mb: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={() => {
            handleAddSkill(skillInput);
          }}
        >
          <AddIcon
            sx={{
              color: "#00305B",
              cursor: "pointer",
              fontSize: 30,
              stroke: "#00305B",
              strokeWidth: 1.5,
            }}
          />
        </Box>
      </Box>
      {skills?.length > 0 && (
        <Box
          sx={{
            backgroundColor: "#EEF2FE",
            borderRadius: "10px",
            p: 5,
            mb: 6,
          }}
        >
          {skills.map((skill, index) => (
            <Box
              key={index}
              sx={{
                width: "auto",
                display: "inline-flex",
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                boxShadow: "0px 1px 5px #00000040",
                borderRadius: "6px",
                px: 2,
                mb: "15px",
                mx: 2,
              }}
            >
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 300,
                  lineHeight: "18px",
                  color: "#222222",
                  padding: "18px 10px",
                }}
              >
                {skill}
              </Typography>
              <CloseIcon
                onClick={() => handleClossItem(skill)}
                sx={{ cursor: "pointer" }}
              />
            </Box>
          ))}
        </Box>
      )}

      <Box
        sx={{
          backgroundColor: "#EEF2FE",
          borderRadius: "10px",
          p: 5,
          mb: 6,
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "12px", sm: "14px", md: "30px" },
            fontWeight: 700,
            lineHeight: { xs: "25px", sm: "30px", md: "24px", lg: "18px" },
            color: "#222222",
            py: 2,
            pb: 4,
            textTransform: "capitalize",
          }}
        >
          {data?.title}
        </Typography>

        {data?.skillsBox?.items?.map((item) => (
          <Box key={item.name} sx={{ mb: "15px" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                boxShadow: "0px 1px 5px #00000040",
                borderRadius: "6px",
                border: "0.8px solid #999999",
                px: 2,
              }}
              onClick={() => handleAddSkill(item.placeHolder)}
            >
              <AddIcon
                sx={{
                  color: "#00305B",
                  cursor: "pointer",
                  fontSize: 30,
                  stroke: "#00305B",
                  strokeWidth: 1.5,
                }}
              />

              <Typography
                sx={{
                  width: "100%",
                  display: "block",
                  padding: "18px 10px",

                  fontSize: "16px",
                  fontWeight: 300,
                  lineHeight: "18px",
                  color: "#00305B",
                }}
              >
                {item?.placeHolder}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          pb: 3,
        }}
      >
        <CustomButton label="Save and Continue" onClick={handleNext} />
      </Box>
    </Box>
  );
};

export default AddSkills;
