import React from "react";
import { Box, Button, Typography } from "@mui/material";
import CustomButton from "@/components/button/CustomButton";
import { usePathname } from "next/navigation";


const CounterLetter = ({data}) => {
  const pathName = usePathname();


  const inputFields = [
    { label: "Details", placeholder: "Write your details", multiline: true },
    { label: "Salary", placeholder: "Enter salary details", multiline: false },
  ];
  return (
    <div>
       {!pathName.includes("/employer") ? (
        <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "30px",
            lineHeight: "18px",
            color: "#00305B",
          }}
        >
          {data?.titleType || "Counter Offer Letter"}
        </Typography>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "20px",
            lineHeight: "30px",
            color: "#000000",
            textDecoration: "underline",
          }}
        >
          {data?.ucnNumber || "34125"}
        </Typography>
      </Box>
      <Typography
        sx={{
          fontWeight: 400,
          fontSize: "20px",
          lineHeight: "30px",
          color: "#111111",
          py: 2,
        }}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book Lorem Ipsum is simply dummy
        text of the printing and typesetting industry. Lorem Ipsum has been the
        industrys standard dummy text ever since the 1500s, when an unknown
        printer took a galley of type and scrambled it to make a type specimen
        book. Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </Typography>
      <Button
        sx={{
          minWidth: "112px",
          border: "1px solid #000000",
          fontSize: "14px",
          lineHeight: "21px",
          color: "#00305B",
        }}
      >
        {data?.ucn || "14253"}
      </Button>
      <Box sx={{ py: 2 }}>
        <CustomButton label="accept" bg="#00305B" />
      </Box>
      <CustomButton label="deny" />
      </Box>
      ) : (
        <Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "30px",
                lineHeight: "18px",
                color: "#00305B",
              }}
            >
              {data?.titleType || "Counter Offer later"}
            </Typography>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "20px",
                lineHeight: "30px",
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
                  lineHeight: "30px",
                  color: "#00305B",
                  mb: 1,
                }}
              >
                {field.label}
              </Typography>
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
            </Box>
          ))}
          <CustomButton label='Send Invite' />
        </Box>
      )}
    </div>
  );
};

export default CounterLetter;
