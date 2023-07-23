import React, { useState } from "react";
import { Container, Paper, TextField, Button, Typography } from "@mui/material";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post("http://localhost:8081/user/login", {
        email,
        password,
      });

      const token = response.data.data.token;
      console.log(token);

      //  Decode the token
      const decodedToken = jwtDecode(token);
      console.log(decodedToken);
      const role = decodedToken.authorities[0];
      console.log(role);
      const userEmail = decodedToken.sub;
      const userId = decodedToken.userId; // Assuming the token contains userId
      const user = { role: role, userEmail: userEmail, id: userId };

      //  Store user and role in local storage
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      console.log("User:", user);

      // Redirect to different routes based on role (You can uncomment this after implementing the role-based redirection)
      // if (user && user.role === 'Admin') {
      //   navigate('/admin/dashboard');
      // } else if (user && user.role === 'APPLICANT') {
      //   navigate('/trainer/dashboard');
      // } else if (user && user.role === 'EVALUATOR') {
      //   navigate('/trainee/dashboard');
      // }

      console.log("Login successful!");
      console.log("Response:", response.data.data.token);

      setIsLoading(false);
      setLoginSuccess(true);
    } catch (error) {
      setError("Invalid credentials. Please try again.");
      console.error("Error:", error.message);

      setIsLoading(false);
      setLoginSuccess(false);
    }
  };

  return (
    <Container maxWidth="xs">
      <Paper
        elevation={3}
        style={{ padding: "40px", borderRadius: "10px", marginTop: "50px" }}
      >
        <Typography variant="h5" align="center" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            value={email}
            onChange={handleEmailChange}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            fullWidth
            required
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={isLoading}
            style={{ marginTop: "20px" }}
          >
            {isLoading ? "Logging in..." : "Login"}
          </Button>
          {loginSuccess && (
            <Typography
              variant="body2"
              color="primary"
              align="center"
              style={{ marginTop: "10px" }}
            >
              Login successful! Redirecting...
            </Typography>
          )}
          {error && (
            <Typography
              variant="body2"
              color="error"
              align="center"
              style={{ marginTop: "10px" }}
            >
              {error}
            </Typography>
          )}
        </form>
      </Paper>
    </Container>
  );
};

export default LoginPage;
