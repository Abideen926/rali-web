"use client";
import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import CustomButton from "@/components/button/CustomButton";
import { usePathname } from "next/navigation";
import InterviewDatePicker from "@/components/applicant/dashboard/InterviewDatePicker"; 

const InterviewInvite = ({ data }) => {
  const pathName = usePathname();

  const inputFields = [
    { label: "Details", placeholder: "Write your details", multiline: true },
    {
      label: "Select date",
      placeHolderLabel: "Enter 1st date & time",
      multiline: false,
    },
    {
      label: "Select date",
      placeHolderLabel: "Enter 2nd date & time",
      multiline: false,
    },
    {
      label: "Select date",
      placeHolderLabel: "Enter 3rd date & time",
      multiline: false,
    },
  ];

  const dateTimeArray = [
    {
      dateTime: "2024-12-12T10:30:00Z",
      timeZone: "UTC",
    },
    {
      dateTime: "2024-12-12T15:00:00Z",
      timeZone: "America/New_York",
    },
    {
      dateTime: "2024-12-12T20:00:00Z",
      timeZone: "Asia/Tokyo",
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedDateTimes, setSelectedDateTimes] = useState([]);
  const [tempSelectedDate, setTempSelectedDate] = useState(null);

  console.log("Current selected date and times:", selectedDateTimes);

  const formatDateTime = (dateTime, timeZone) => {
    const date = new Date(dateTime);

    const formattedDate = date.toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "2-digit",
      timeZone,
    });

    const formattedTime = date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone,
    });

    const formattedTimeZone = date
      .toLocaleTimeString("en-US", {
        timeZoneName: "short",
        timeZone,
      })
      .split(" ")[2];

    return `${formattedDate}   ${formattedTime}   ${formattedTimeZone}`;
  };

  const handleSelect = (index) => {
    setSelectedIndex(index);
  };

  const handleDateChange = (newDate) => {
    console.log("Selected date from DatePicker:", newDate); 
    if (newDate && newDate.isValid()) {
      setTempSelectedDate(newDate.toISOString()); 
      console.log("Temp selected date:", newDate.toISOString()); 
    }
  };

  const handleConfirmDate = () => {
    if (tempSelectedDate) {
      setSelectedDateTimes((prevState) => {
        const updatedState = [...prevState, tempSelectedDate];
        console.log("Updated selected date and times:", updatedState); 
        return updatedState;
      });
      setTempSelectedDate(null);
    }
  };

  const handleSubmit = () => {
    console.log("All Selected Dates and Times:", selectedDateTimes);
  };

  return (
    <div>
      {!pathName.includes("/employer") ? (
        <Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              sx={{ fontWeight: 600, fontSize: "30px", color: "#00305B" }}
            >
              {data?.titleType || "Interview Invite"}
            </Typography>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "20px",
                color: "#000000",
                textDecoration: "underline",
              }}
            >
              {data?.ucnNumber || "34125"}
            </Typography>
          </Box>

          <Typography
            sx={{ fontWeight: 400, fontSize: "20px", color: "#111111", py: 2 }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s.
          </Typography>

          {dateTimeArray?.map((item, index) => (
            <Box
              key={index}
              onClick={() => handleSelect(index)}
              sx={{
                maxWidth: "40%",
                boxShadow: "0px 0px 3px #00000040",
                border: "none",
                outline: "none",
                padding: "18px 20px",
                borderRadius: "10px",
                fontSize: "16px",
                fontWeight: 300,
                lineHeight: "18px",
                color: selectedIndex === index ? "#FFFFFF" : "#222222",
                backgroundColor:
                  selectedIndex === index ? "#00305B" : "#FFFFFF",
                textAlign: "center",
                mx: "auto",
                mb: 2,
                cursor: "pointer",
                transition: "background-color 0.3s, color 0.3s",
              }}
            >
              {formatDateTime(item.dateTime, item.timeZone)}
            </Box>
          ))}

          <Button
            sx={{
              minWidth: "112px",
              border: "1px solid #000000",
              fontSize: "14px",
              color: "#00305B",
            }}
          >
            {data?.ucn || "14253"}
          </Button>
          <Box sx={{py:2}}>
            <CustomButton
              label="Accept"
              bg="#00305B"
              onClick={handleConfirmDate}
            />
          </Box>

          <CustomButton label="Deny" />
        </Box>
      ) : (
        <Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              sx={{ fontWeight: 600, fontSize: "30px", color: "#00305B" }}
            >
              {data?.titleType || "Invite Interview"}
            </Typography>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "20px",
                color: "#000000",
                textDecoration: "underline",
              }}
            >
              {data?.ucnNumber || "34125"}
            </Typography>
          </Box>

          {inputFields.map((field, index) => (
            <Box key={index} sx={{ py: 2 }}>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: "20px",
                  color: "#00305B",
                  mb: 1,
                }}
              >
                {field.label}
              </Typography>
              {field.label === "Select date" ? (
                <InterviewDatePicker onDateChange={handleDateChange} placeHolderLabel={field.placeHolderLabel} />
                // <></>
              ) : (
                <Box
                  component={field.multiline ? "textarea" : "input"}
                  rows={field.multiline ? 4 : undefined}
                  sx={{
                    width: "100%",
                    boxShadow: "0px 0px 3px 1px #00000040",
                    border: "none",
                    padding: "18px 20px",
                    borderRadius: "10px",
                    fontSize: "16px",
                    fontWeight: 300,
                    lineHeight: "18px",
                    color: "#222222",
                    resize: field.multiline ? "vertical" : "none",
                  }}
                  placeholder={field.placeholder}
                />
              )}
            </Box>
          ))}

          {selectedDateTimes?.map((dateTimeString, index) => {
            const date = new Date(dateTimeString);
            const formattedDate = date.toLocaleDateString("en-US", {
              weekday: "short",
              year: "numeric",
              month: "short",
              day: "2-digit",
            });
            const formattedTime = date.toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            });

            return (
              <Box key={index}>
                <Typography>{formattedDate}</Typography>
                <Typography>{formattedTime}</Typography>
              </Box>
            );
          })}

          <CustomButton label="Send Invite" onClick={handleSubmit} />
        </Box>
      )}
    </div>
  );
};

export default InterviewInvite;
