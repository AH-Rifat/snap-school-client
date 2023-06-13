import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useRef } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const { googleSignIn, createUser, updateUserProfile } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure()

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/dashboard";
  const onSubmit = (data) => {
    reset();
    createUser(data.email, data.password)
      .then(() => {
        axiosSecure.post(`/user`, {
          name: data.name,
          email: data.email,
          photoUrl: data.photoUrl,
          role: "student",
        })
          .then(() => {
            updateUserProfile(data.name, data.photoUrl)
            toast.success('Registration Successful')
            navigate("/dashboard");
          })
          .catch((error) => toast.error(error.message));
      })
      .catch((error) => toast.error(error.message));
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const password = useRef({});
  password.current = watch("password", "");

  return (
    <Container
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Card>
        <CardContent>
          <Box>
            <Typography
              component="h1"
              variant="h4"
              textAlign={"center"}
              color={"#2196f3"}
              style={{ fontWeight: 700 }}
            >
              Sign up
            </Typography>

            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              sx={{
                mt: 3,
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                width: { xs: "20rem", md: "25rem" },
              }}
            >
              <TextField
                label="Name"
                type="text"
                size="small"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <Typography variant="p" color={"red"}>
                  This Name field is required
                </Typography>
              )}
              <TextField
                label="Email"
                type="email"
                size="small"
                {...register("email")}
              />
              {errors.name && (
                <Typography variant="p" color={"red"}>
                  This Email field is required
                </Typography>
              )}
              <TextField
                label="Password"
                type="password"
                size="small"
                {...register("password", {
                  minLength: 6,
                  pattern: /^(?=.*[A-Z])/,
                  validate: (value) => !/[!@#$%^&*(),.?":{}|<>]/.test(value),
                })}
              />
              {errors.password && errors.password.type === "minLength" && (
                <Typography variant="p" color={"red"}>
                  Password should be at least 6 characters long.
                </Typography>
              )}
              {errors.password && errors.password.type === "pattern" && (
                <Typography variant="p" color={"red"}>
                  Password should contain at least one capital letter.
                </Typography>
              )}
              {errors.password && errors.password.type === "validate" && (
                <Typography variant="p" color={"red"}>
                  Password should not contain any special characters.
                </Typography>
              )}
              {errors.name && (
                <Typography variant="p" color={"red"}>
                  This Password field is required.
                </Typography>
              )}
              <TextField
                label="Confirm Password"
                type="password"
                size="small"
                {...register("confirmPassword", {
                  validate: (value) =>
                    value === password.current || "Passwords do not match",
                })}
              />
              {errors.name && (
                <Typography variant="p" color={"red"}>
                  This Confirm Password field is required
                </Typography>
              )}
              {errors.confirmPassword && (
                <Typography variant="p" color={"red"}>
                  {errors.confirmPassword.message}
                </Typography>
              )}
              <TextField
                label="Photo URL"
                type="text"
                size="small"
                {...register("photoUrl")}
              />
              <Button variant="contained" type="submit">
                Sign Up
              </Button>
            </Box>
            <Box sx={{ display: "block", textAlign: "end", margin: "1rem 0" }}>
              <Link to={"/login"} style={{ color: "#2196f3" }}>
                Already have an account? Login
              </Link>
              <Divider sx={{ margin: "1rem 0", color: "#2196f3" }}>OR</Divider>
              <Button
                variant="outlined"
                sx={{
                  width: "100%",
                  display: "flex",
                  gap: "1rem",
                  alignItems: "center",
                }}
                color="primary"
                onClick={handleGoogleSignIn}
              >
                <GoogleIcon fontSize="small" />{" "}
                <span style={{ fontSize: "1rem" }}>Google</span>
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default SignUp;
