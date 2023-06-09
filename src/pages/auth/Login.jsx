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
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const { googleSignIn, signIn } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/dashboard";
  console.log(showPassword);
  const onSubmit = (data) => {
    reset();
    signIn(data.email, data.password)
      .then(() => {
        navigate(from, { replace: true });
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
              Login
            </Typography>

            <Box
              component={"form"}
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
                label="Email"
                type="email"
                size="small"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <Typography variant="p" color={"red"}>
                  This Email field is required
                </Typography>
              )}
              <TextField
                label="Password"
                type={showPassword == true ? "text" : "password"}
                size="small"
                sx={{ position: "relative" }}
                {...register("password", { required: true })}
              />
              {/* conditional button for show/hide passord */}
              {showPassword == true ? (
                <Button
                  variant="outlined"
                  size="small"
                  sx={{
                    position: "absolute",
                    marginTop: "3.8rem",
                    marginLeft: { xs: "15.5rem", md: "20.5rem" },
                  }}
                  onClick={() => setShowPassword(!true)}
                >
                  Hide
                </Button>
              ) : (
                <Button
                  variant="outlined"
                  size="small"
                  sx={{
                    position: "absolute",
                    marginTop: "3.8rem",
                    marginLeft: { xs: "15.5rem", md: "20.5rem" },
                  }}
                  onClick={() => setShowPassword(!false)}
                >
                  Show
                </Button>
              )}

              {errors.password && (
                <Typography variant="p" color={"red"}>
                  This Password field is required
                </Typography>
              )}
              <Button type="submit" variant="contained">
                Login
              </Button>
            </Box>
            <Box sx={{ display: "block", textAlign: "end", margin: "1rem 0" }}>
              <Link to={"/signUp"} style={{ color: "#2196f3" }}>
                Don`t have an account? Sign Up
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

export default Login;
