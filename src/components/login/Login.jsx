'use client'
import React, { useState } from "react";
import { Box, Button, Grid, Typography, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import { useFormik } from "formik";
import { AuthSchema } from "@/schemas/loginSchema";
import PublicFooter from "../footer/PublicFooter";
import { FOOTER_DATA } from "@/constant/applicant/footer";
import { useDispatch } from "react-redux";
import { login } from "@/redux/slices/authSlice";
import { LOGIN } from "@/services/apiService/apiEndPoints";
import Cookie from "js-cookie";
import { useRouter } from "next/navigation";
import apiInstance from "@/services/apiService/apiServiceInstance";
import RalliModal from "../Modal/RalliModal";
import ModalRalli from "../applicant/dashboardProfile/ModalRalli";

const Login = ({ data, loginType }) => {
  const [showPassword, setShowPassword] = useState(false);
const [isForgetPasswordModalOpen, setIsForgetPasswordModalOpen] =
    useState(false);
    const handleCloseModal = () => {
      setIsForgetPasswordModalOpen(false);
    };
 
  const dispatch = useDispatch();
  const router = useRouter();

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleForgetPassword = ()=> {
    setIsForgetPasswordModalOpen(true);
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: AuthSchema,
    onSubmit: (values, { setSubmitting }) => {
      // successful login with out api work
      console.log("Form submitted:", values);
      setSubmitting(false);

      // dispatch and cookie setting without API call work
      dispatch(login({ email: values.email, is_verified: true }));
      Cookie.set("token", "mockToken");
      Cookie.set("isVerified", "true");
      if (loginType === "Applicant Login") {
        router.push("/applicant/careerAreas");
      } else {
        router.push("/employer/careerAreas");
      }
    },
    // onSubmit: async (values, { setSubmitting, setErrors }) => {
    //   try {
    //     const formData = new FormData();
    //     formData.append('email', values.email);
    //     formData.append('password', values.password);

    //     const response = await apiInstance?.post(LOGIN, formData);

    //     if (response?.data?.data?.is_verified) {
    //       router.push('/applicant/careerAreas');
    //     } else {
    //       router.push('/form/emailVerification');
    //     }

    //     dispatch(login(response?.data?.data));
    //     Cookie.set('token', response?.data?.data?.token);
    //     Cookie.set('isVerified', response?.data?.data?.is_verified);
    //   } catch (error) {
    //     setErrors({ email: error?.response?.data?.message || 'Login failed' });
    //   } finally {
    //     setSubmitting(false);
    //   }
    // },
  });

  return (
    <Box
      sx={{
        position: "relative",
        width: { xs: "auto", sm: "auto", lg: "1050px" },
        height: { xs: "auto", sm: "auto", lg: "662.17px" },
      }}
    >
      <Box
        sx={{
          width: { xs: "auto", lg: "1050px" },
          height: { xs: "auto", lg: "662.17px" },
          backgroundColor: "#FFFFFF",
          borderRadius: "20px",
          padding: { xs: "40px 30px", md: "20px 30px" },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center", py: "20px" }}>
          <Image src={data?.logo} width={122} height={80.04} alt="logo" />
        </Box>
        <Box sx={{ py: "5px" }}>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              lineHeight: { xs: "22px", md: "18px" },
              fontWeight: 500,
              color: "#222222",
              py: "10px",
              textAlign: "center",
            }}
          >
            {data?.title}
          </Typography>
        </Box>
        <Grid container spacing={6} sx={{ mt: "0px" }}>
          <Grid item xs={12} md={6}>
            <Typography
              dangerouslySetInnerHTML={{ __html: data?.paragraph }}
              sx={{
                fontSize: { xs: "14px", md: "16px" },
                lineHeight: { xs: "26px", md: "22px" },
                fontWeight: 400,
                color: "#222222B2",
                pr: { md: "60px" },
                pb: { md: "15px" },
              }}
            />
            {data?.loginWidth.map((item) => (
              <Link
                href={
                  loginType === "Employer Login"
                    ? "/employer/form"
                    : item?.path || "#"
                }
                passHref
                key={item?.label}
              >
                <Box
                  sx={{
                    width: "100%",
                    padding: "12px 20px",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    my: "15px",
                    mb: "20px",
                    boxShadow: "0px 0px 3px #00000040",
                    cursor: "pointer",
                  }}
                >
                  <Image src={item?.img} width={30} height={30} alt="logo" />
                  <Typography
                    sx={{
                      fontSize: { xs: "14px", md: "16px" },
                      lineHeight: { xs: "19px", md: "18px" },
                      fontWeight: 500,
                      color: "#222222",
                      py: "10px",
                      px: "13px",
                    }}
                  >
                    {item?.label}
                  </Typography>
                </Box>
              </Link>
            ))}
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                fontSize: "16px",
                lineHeight: "18px",
                fontWeight: 700,
                pb: { xs: "10px", md: "15px" },
              }}
            >
              {loginType}
            </Typography>
            <hr />
            <form onSubmit={formik.handleSubmit}>
              {data?.inputType.map((item) => (
                <Box key={item?.label} sx={{ mb: 1 }}>
                  <Typography
                    sx={{
                      fontSize: { xs: "14px", md: "16px" },
                      lineHeight: { xs: "22px", md: "18px" },
                      fontWeight: 500,
                      py: 1,
                      pt: { md: "18px" },
                      pb: { md: "10px" },
                    }}
                  >
                    {item?.label}
                  </Typography>

                  <Box sx={{ position: "relative", width: "100%" }}>
                    <Box
                      component="input"
                      type={
                        item.label === "Password" && !showPassword
                          ? "password"
                          : "text"
                      }
                      name={item.label.toLowerCase()}
                      value={formik.values[item.label.toLowerCase()] || ""}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      sx={{
                        px: "18px",
                        py: "22px",
                        borderRadius: "10px",
                        boxShadow: "0px 0px 3px #00000040",
                        width: "100%",
                        border: "none",
                      }}
                      placeholder={item?.placeholder}
                    />
                    {item.label === "Password" && (
                      <IconButton
                        onClick={handleTogglePasswordVisibility}
                        sx={{
                          position: "absolute",
                          right: "10px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          color: "#222222",
                        }}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    )}
                  </Box>
                  {formik.touched[item.label.toLowerCase()] &&
                    formik.errors[item.label.toLowerCase()] && (
                      <Typography
                        sx={{
                          fontSize: { xs: "14px", md: "16px" },
                          lineHeight: { xs: "22px", md: "18px" },
                          pt: 1,
                          fontWeight: 300,
                          color: "red",
                        }}
                      >
                        {formik.errors[item.label.toLowerCase()]}
                      </Typography>
                    )}
                </Box>
              ))}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  pt: "10px",
                  mb: { xs: "290px", sm: "180px", md: "140px" },
                }}
              >
                <Typography
                onClick={handleForgetPassword}
                  sx={{
                    fontSize: { xs: "14px", md: "16px" },
                    lineHeight: { xs: "22px", md: "18px" },
                    fontWeight: 500,
                    color: "#222222",
                    cursor:'pointer'
                  }}
                >
                  {data?.forgetPasswordLable}
                </Typography>
                <Button
                  type="submit"
                  disabled={formik.isSubmitting}
                  sx={{
                    width: { sm: "140.7px" },
                    height: "43px",
                    backgroundColor: "#FE4D82",
                    color: "#fff",
                    fontSize: "16px",
                    lineHeight: "20px",
                    fontWeight: 700,
                    letterSpacing: "3%",
                  }}
                >
                  {data.buttonLable}
                </Button>
              </Box>
            </form>
          </Grid>
        </Grid>
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            right: 0,
            left: 0,
            width: "100%",
            borderRadius: "0px 0px 20px 20px",
            overflow: "hidden",
          }}
        >
          <PublicFooter data={FOOTER_DATA} />
        </Box>
      </Box>
      <ModalRalli
        open={isForgetPasswordModalOpen}
        onClose={handleCloseModal}
        isForgetPasswordModalOpen={isForgetPasswordModalOpen}
      />
    </Box>
  );
};

export default Login;
