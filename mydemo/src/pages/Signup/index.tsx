import React from 'react';
import {
  Container,
  Typography,
  Grid,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Box,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './css/index.css';
import { IUserAddType } from '../../models/userModels';
import {useSignup} from './hooks/useSignup';


const user: IUserAddType = {
  email: "",
  password: "",
  passwordConfirmed: "",
  role: "student",
  nickName: "",
};

export const Signup = () => {
  const {onClickSignup} = useSignup();

  const loadLabelForInput = (lable: string) => {
    return (
      <Typography>
        <span className="span">*</span> {lable}
      </Typography>
    );
  };

  const formik = useFormik({
    initialValues: user,
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email required"),
      password: Yup.string()
        .min(6, "Should be of minimum characters length")
        .required("Password required"),
      passwordConfirmed: Yup.string()
        .min(6, "Should be of minimum characters length")
        .required("Password required")
        .oneOf([Yup.ref("password"), null], "Password must match"),
    }),
    onSubmit: (values) => {
      onClickSignup(values);
    },
  });
  
  return (
    <Container component="main" maxWidth="sm">
      <Typography
        component="h1"
        variant="h3"
        align="right"
        noWrap
        sx={{ fontFamily: "Impact", fontSize: "42px" }}
      >
        SING UP YOUR ACCOUNT
      </Typography>
      <form className="form" onSubmit={formik.handleSubmit}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Box>{loadLabelForInput("Role")}</Box>
            <Box className="Box">
              <RadioGroup
                row
                name="role"
                value={formik.values.role}
                onChange={formik.handleChange}
                defaultValue="student"
              >
                <FormControlLabel
                  value="student"
                  control={<Radio color="primary" />}
                  label="Student"
                />
                <FormControlLabel
                  control={<Radio color="primary" />}
                  value="teacher"
                  label="Teacher"
                />
                <FormControlLabel
                  control={<Radio color="primary" />}
                  value="manager"
                  label="Manager"
                />
              </RadioGroup>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box>{loadLabelForInput("Email")}</Box>
            <Box className="Box">
              <TextField
                fullWidth
                id="email"
                label="email"
                autoComplete="email"
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={
                  formik.touched.email && formik.errors.email
                    ? formik.errors.email
                    : ""
                }
                {...formik.getFieldProps("email")}
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box>{loadLabelForInput("Password")}</Box>
            <Box className="Box">
              <TextField
                required
                fullWidth
                id="password"
                label="password"
                type="password"
                autoComplete="current-password"
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={
                  formik.touched.password && formik.errors.password
                    ? formik.errors.password
                    : ""
                }
                {...formik.getFieldProps("password")}
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box>{loadLabelForInput("Confirm password")}</Box>
            <Box className="Box">
              <TextField
                required
                fullWidth
                id="passwordConfirmed"
                label="passwordConfirmed"
                type="password"
                autoComplete="current-password"
                error={
                  formik.touched.passwordConfirmed &&
                  Boolean(formik.errors.passwordConfirmed)
                }
                helperText={
                  formik.touched.passwordConfirmed &&
                  formik.errors.passwordConfirmed
                    ? formik.errors.passwordConfirmed
                    : ""
                }
                {...formik.getFieldProps("passwordConfirmed")}
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              size="large"
            >
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};
