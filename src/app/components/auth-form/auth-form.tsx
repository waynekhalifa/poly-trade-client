"use client";

import Image from "next/image";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";

import useSnackbarStore from "@/app/store/snackbar";
import FormFields from "../FormFields";
import { getStrapiURL } from "@/app/utils/api-helpers";
import { IFormField } from "@/app/types/formFields";
import { InputTypes } from "@/app/enums/inputTypes";
import { createSnackbarResponse } from "@/app/utils/snackbar";
import { setSession } from "@/app/utils/set-session";
import {
  IForgotInput,
  ILoginInput,
  ILoginResult,
  IRegisterInput,
  IResetInput,
} from "@/app/types/auth";
import { login } from "@/app/services/auth/login";
import { me } from "@/app/services/users/me";
import { IUser } from "@/app/types/user";
import { signUp } from "@/app/services/auth/sign-up";
import { forgotPassword } from "@/app/services/auth/forgot-password";
import { resetPassword } from "@/app/services/auth/reset-password";
import LinkWrap from "../link-wrap";
import {
  AUTH_LOGIN,
  AUTH_REGISTER,
  AUTH_RESET,
  COMPANY_REGISTRATION,
  DEFAULT_VALIDATION,
  EMAIL,
} from "@/app/validations/auth";

const email: IFormField = {
  id: 1,
  name: "email",
  type: "email",
  label: "Email",
  placeholder: "",
  disabled: false,
  autoFocus: true,
  multiple: false,
  options: [],
};
const name: IFormField = {
  id: 4,
  name: "name",
  type: "text",
  label: "Full Name",
  placeholder: "",
  disabled: false,
  autoFocus: false,
  multiple: false,
  options: [],
};
const phone: IFormField = {
  id: 5,
  name: "phone",
  type: "text",
  label: "Phone",
  placeholder: "",
  disabled: false,
  autoFocus: false,
  multiple: false,
  options: [],
};
const password: IFormField = {
  id: 2,
  name: "password",
  type: "password",
  label: "Password",
  placeholder: "",
  disabled: false,
  autoFocus: false,
  multiple: false,
  options: [],
};
const confirmPassword: IFormField = {
  id: 3,
  name: "confirmPassword",
  type: "password",
  label: "Confirm Password",
  placeholder: "",
  disabled: false,
  autoFocus: false,
  multiple: false,
  options: [],
};
const terms: IFormField = {
  id: 6,
  name: "terms",
  type: "checkbox",
  label: (
    <>
      I accept the{" "}
      <LinkWrap
        href={"/terms-and-conditions?tab=for-users"}
        sx={{
          display: "inline",
          textDecoration: "underline",
          color: "#0000EE",
          "&:visited": { color: "#551A8B" },
        }}
      >
        Terms & Conditions
      </LinkWrap>
      {", "}
      <LinkWrap
        href={"/privacy-policy"}
        sx={{
          display: "inline",
          textDecoration: "underline",
          color: "#0000EE",
          "&:visited": { color: "#551A8B" },
        }}
      >
        Privacy Policy
      </LinkWrap>
      {", and "}
      <LinkWrap
        href={"/cookies-policy"}
        sx={{
          display: "inline",
          textDecoration: "underline",
          color: "#0000EE",
          "&:visited": { color: "#551A8B" },
        }}
      >
        Cookies Policy
      </LinkWrap>
      .
    </>
  ),
  placeholder: "",
  disabled: false,
  autoFocus: false,
  multiple: false,
  options: [],
};

interface Props {
  slug: string;
  code: string | null;
}

const AuthForm: React.FC<Props> = ({ slug, code }) => {
  const setSnackbar = useSnackbarStore((state) => state.setSnackbar);
  const isLogin: boolean = slug === "login";
  const isRegister: boolean = slug === "register";
  const isCompanyRegistration: boolean = slug === "company-registration";
  const isForgotPassword: boolean = slug === "forgot-password";
  const isResetPassword: boolean = slug === "reset-password";
  const isEmailConfirmation: boolean = slug === "email-confirmation";
  const fields: IFormField[] = [];

  if (isLogin) fields.push(email, password);
  if (isRegister) fields.push(email, password, confirmPassword, terms);
  if (isForgotPassword) fields.push(email);
  if (isResetPassword) fields.push(password, confirmPassword);
  if (isCompanyRegistration) fields.push(email, name, phone, terms);

  const DEFAULT_VALUES: any = {};

  for (const field of fields) {
    if (field.type === InputTypes.CHECKBOX) {
      DEFAULT_VALUES[field.name] = false;
    } else if (field.type === InputTypes.SELECT) {
      DEFAULT_VALUES[field.name] = field.options![0];
    } else {
      DEFAULT_VALUES[field.name] = "";
    }
  }

  const validationSchema = () => {
    if (isLogin) return AUTH_LOGIN;
    if (isRegister) return AUTH_REGISTER;
    if (isForgotPassword) return EMAIL;
    if (isResetPassword) return AUTH_RESET;
    if (isCompanyRegistration) return COMPANY_REGISTRATION;

    return DEFAULT_VALIDATION;
  };

  const {
    control,
    handleSubmit,
    watch,
    setValue,
    register,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(validationSchema()),
    mode: "onChange",
    defaultValues: DEFAULT_VALUES,
  });

  const renderButtonText = () => {
    if (slug === "company-registration") return "request a call back";

    return slug.replaceAll("-", " ");
  };

  const handleLogin = async (formData: any) => {
    const input: ILoginInput = {
      identifier: formData.email,
      password: formData.password,
    };

    try {
      const data: ILoginResult = await login(input);

      try {
        const user: IUser = await me(data.jwt);

        await setSession({ token: data.jwt, ...user });

        if (typeof window !== "undefined") {
          window.open("/", "_self");
        }
      } catch (err: Error | any) {
        await setSession({ token: data.jwt, ...data.user });

        if (typeof window !== "undefined") {
          window.open("/", "_self");
        }
      }
    } catch (err: Error | any) {
      setSnackbar(
        createSnackbarResponse(<>{err.message ? err.message : err}</>, "error")
      );
    }
  };

  const handleRegister = async (formData: any) => {
    const input: IRegisterInput = {
      username: formData.email,
      email: formData.email,
      password: formData.password,
    };

    try {
      await signUp(input);

      setSnackbar(
        createSnackbarResponse(
          <>
            Your account has been created successfully, next step Check your
            email for activation
          </>,
          "success"
        )
      );
    } catch (err: Error | any) {
      setSnackbar(
        createSnackbarResponse(<>{err.message ? err.message : err}</>, "error")
      );
    }
  };

  const handleCompanyRegistration = async (formData: any) => {
    const createInput: any = {
      email: formData.email,
      name: formData.name,
      phone: formData.phone,
    };
    const res = await fetch(getStrapiURL() + "/api/company-submissions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_FORM_SUBMISSION_TOKEN}`,
      },
      body: JSON.stringify({ data: createInput }),
    });

    const data = await res.json();

    if (data?.error) {
      throw data?.error;
    } else {
      console.log("should handle error messages using main snackbar!");
    }
  };

  const handleForgotPassword = async (formData: IForgotInput) => {
    try {
      await forgotPassword(formData);

      setSnackbar(
        createSnackbarResponse(
          <>An Email with reset password instruction sent to your email!</>,
          "success"
        )
      );
    } catch (err: Error | any) {
      setSnackbar(
        createSnackbarResponse(<>{err.message ? err.message : err}</>, "error")
      );
    }
  };

  const handleResetPassword = async (formData: any) => {
    if (!code) throw new Error("Check your email for reset code");

    const input: IResetInput = {
      passwordConfirmation: formData.confirmPassword,
      password: formData.password,
      code,
    };

    try {
      const data: ILoginResult = await resetPassword(input);

      try {
        const user: IUser = await me(data.jwt);

        await setSession({ token: data.jwt, ...user });

        if (typeof window !== "undefined") {
          window.open("/", "_self");
        }
      } catch (err: Error | any) {
        await setSession({ token: data.jwt, ...data.user });

        if (typeof window !== "undefined") {
          window.open("/", "_self");
        }
      }

      setSnackbar(
        createSnackbarResponse(
          <>You have set new passwords, now you can login to your account!</>,
          "success"
        )
      );
    } catch (err: Error | any) {
      setSnackbar(
        createSnackbarResponse(<>{err.message ? err.message : err}</>, "error")
      );
    }
  };

  const onSubmit: SubmitHandler<any> = (formData: any) => {
    if (isLogin) return handleLogin(formData);
    if (isRegister) return handleRegister(formData);
    if (isCompanyRegistration) return handleCompanyRegistration(formData);
    if (isForgotPassword) return handleForgotPassword(formData);
    if (isResetPassword) return handleResetPassword(formData);

    setSnackbar(
      createSnackbarResponse(<>Should implement submit handler!</>, "error")
    );
  };

  //  boxShadow={"0px 10px 40px -5px rgba(0, 0, 0, 0.15)"}

  return (
    <>
      <Stack alignItems={"center"} justifyContent={"center"} height={"100vh"}>
        <Container maxWidth="sm" sx={{ overflowY: "auto" }}>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            display={"block"}
            border={"1px solid"}
            borderColor={"divider"}
            p={3}
            boxShadow={2}
          >
            <Grid container justifyContent={"center"}>
              <Box
                component={"a"}
                href={"/"}
                sx={{ display: "block", mb: { xs: 3 } }}
              >
                <Image
                  src={getStrapiURL("/uploads/logo_d688271e6e.svg")}
                  alt={"fetishubait"}
                  width={130}
                  height={57}
                />
              </Box>
            </Grid>

            {isCompanyRegistration && (
              <Typography variant="body2" textAlign={"center"} paragraph>
                To advertise on Fetishu bait you should be a real estate broker
                or have a registered office.
              </Typography>
            )}
            {isEmailConfirmation && (
              <>
                <Typography textAlign={"center"} paragraph>
                  Congratulations your account has been activated. you can click
                  the link below to login into your account
                </Typography>
                <Grid container justifyContent={"center"}>
                  <a href="/login">Login</a>
                </Grid>
              </>
            )}
            {fields.map((item: any) => (
              <Box key={item.id} sx={{ mb: { xs: 2 } }}>
                <FormFields
                  {...item}
                  control={control}
                  errors={errors}
                  watch={watch}
                  setValue={setValue}
                  register={register}
                />
              </Box>
            ))}
            {isLogin && (
              <Grid container justifyContent={"flex-end"}>
                <Typography
                  variant="body2"
                  component={"a"}
                  href={"/forgot-password"}
                  sx={{ mb: { xs: 2 } }}
                >
                  Forgot password?
                </Typography>
              </Grid>
            )}
            {!isEmailConfirmation && (
              <Button
                variant="contained"
                type="submit"
                fullWidth
                sx={{ textTransform: "capitalize" }}
              >
                {renderButtonText()}
              </Button>
            )}
            {(isLogin || isRegister) && (
              <Grid container justifyContent={"center"} mt={{ xs: 2 }}>
                {isLogin && (
                  <Typography variant="body2">
                    Don&apos;t have an account?{" "}
                    <Box
                      component={"a"}
                      href={"/register"}
                      sx={{ color: "primary.main", textDecoration: "none" }}
                    >
                      Create an Account
                    </Box>
                  </Typography>
                )}
                {isRegister && (
                  <Typography variant="body2">
                    Already have an account?{" "}
                    <Box
                      component={"a"}
                      href={"/login"}
                      sx={{ color: "primary.main", textDecoration: "none" }}
                    >
                      Login
                    </Box>
                  </Typography>
                )}
              </Grid>
            )}
          </Box>
        </Container>
      </Stack>
    </>
  );
};

export default AuthForm;
