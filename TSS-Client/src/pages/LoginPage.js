// import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Prepare the form data
    const formData = {
      email,
      password,
    };

    // Perform the login logic by sending the form data to the server
    // Replace the endpoint URL with your server's login endpoint
    fetch("http://example.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server
        if (data.success) {
          // Login successful
          console.log("Login successful");
        } else {
          // Login failed
          console.log("Login failed");
        }

        localStorage.setItem("",data.token)

        // Reset the form fields
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        // Handle any error that occurred during login
        console.error("An error occurred during login:", error);

      });
  };
  return (
    // <From onSubmit={handleLogin}>
      <div onSubmit={handleLogin}>
      <div>
        <div className="d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                <div className="brand-logo">
                  {/* <img src={require("../../assets/images/logo.svg")} alt="logo" /> */}
                </div>
                <h4>Hello! let's get started</h4>
                <h6 className="font-weight-light">Sign in to continue.</h6>
                <Form className="pt-3">
                  <Form.Group className="d-flex search-field">
                    <Form.Control
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Username"
                      size="lg"
                      className="h-auto"
                    />
                  </Form.Group>
                  <Form.Group className="d-flex search-field">
                    <Form.Control
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder="Password"
                      size="lg"
                      className="h-auto"
                    />
                  </Form.Group>
                  <div className="mt-3">
                    <Link
                      className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                      to="/"
                    >
                      SIGN IN
                    </Link>
                  </div>
                  <div className="my-2 d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <label className="form-check-label text-muted">
                        <input type="checkbox" className="form-check-input" />
                        <i className="input-helper"></i>
                        Keep me signed in
                      </label>
                    </div>
                    <a
                      href="!#"
                      onClick={(event) => event.preventDefault()}
                      className="auth-link text-black"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <div className="mb-2">
                    <button
                      type="button"
                      className="btn btn-block btn-facebook auth-form-btn"
                    >
                      <i className="mdi mdi-facebook mr-2"></i>Connect using
                      facebook
                    </button>
                  </div>
                  <div className="text-center mt-4 font-weight-light">
                    Don't have an account?{" "}
                    <Link to="/user-pages/register" className="text-primary">
                      Create
                    </Link>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </From>
  );
};

export default LoginPage;

// import { TextField,Button, Typography } from '@mui/material';
// import { makeStyles } from '@mui/styles';
// import React, { useState } from 'react';
// // import { Button } from 'reactstrap';
// // import { makeStyles } from '@material-ui/core/styles';
// // import { TextField, Button, Typography } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: '100vh',
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//     width: '300px',
//     gap: '16px',
//   },
//   submitButton: {
//     marginTop: '16px',
//   },
//   errorMessage: {
//     color: theme.palette.error.main,
//     marginTop: '8px',
//   },
// }));

// const LoginPage = () => {
//   const classes = useStyles();
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Perform login logic here
//     if (username === 'admin' && password === 'admin123') {
//       setError('');
//       // Redirect to dashboard or home page
//     } else {
//       setError('Invalid username or password');
//     }
//   };

//   return (
//     <div className={classes.root}>
//       <form className={classes.form} onSubmit={handleLogin}>
//         <TextField
//           label="Username"
//           variant="outlined"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <TextField
//           label="Password"
//           type="password"
//           variant="outlined"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <Button
//           className={classes.submitButton}
//           variant="contained"
//           color="primary"
//           size="large"
//           fullWidth
//           type="submit"
//         >
//           Log In
//         </Button>
//         {error && <Typography className={classes.errorMessage}>{error}</Typography>}
//       </form>
//     </div>
//   );
// };

// export default LoginPage;

// // import { Helmet } from 'react-helmet-async';
// // @mui
// import { styled } from '@mui/material/styles';
// import { Link, Container, Typography, Divider, Stack, Button } from '@mui/material';
// // hooks
// import useResponsive from '../hooks/useResponsive';
// // components
// // import Logo from '../components/logo';
// // import Iconify from '../components/iconify/Iconify';
// import LoginForm from '../auth/LoginFrom';
// import Iconify from '../components/iconify/Iconify';
// import { Helmet } from 'react-helmet-async';
// // sections
// // import { LoginForm } from '../sections/auth/login';

// // ----------------------------------------------------------------------

// const StyledRoot = styled('div')(({ theme }) => ({
//   [theme.breakpoints.up('md')]: {
//     display: 'flex',
//   },
// }));

// const StyledSection = styled('div')(({ theme }) => ({
//   width: '100%',
//   maxWidth: 480,
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'center',
//   // boxShadow: theme.customShadows.card,
//   backgroundColor: theme.palette.background.default,
// }));

// const StyledContent = styled('div')(({ theme }) => ({
//   maxWidth: 480,
//   margin: 'auto',
//   minHeight: '100vh',
//   display: 'flex',
//   justifyContent: 'center',
//   flexDirection: 'column',
//   padding: theme.spacing(12, 0),
// }));

// // ----------------------------------------------------------------------

// export default function LoginPage() {
//   const mdUp = useResponsive('up', 'md');

//   return (
//     <>
//       <Helmet>
//         <title> Login | Minimal UI </title>
//       </Helmet>

//       <StyledRoot>
//         {/* <Logo
//           sx={{
//             position: 'fixed',
//             top: { xs: 16, sm: 24, md: 40 },
//             left: { xs: 16, sm: 24, md: 40 },
//           }}
//         /> */}

//         {mdUp && (
//           <StyledSection>
//             <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
//               Hi, Welcome Back
//             </Typography>
//             <img src="/assets/illustrations/illustration_login.png" alt="login" />
//           </StyledSection>
//         )}

//         <Container maxWidth="sm">
//           <StyledContent>
//             <Typography variant="h4" gutterBottom>
//               Sign in to Minimal
//             </Typography>

//             <Typography variant="body2" sx={{ mb: 5 }}>
//               Don’t have an account? {''}
//               <Link variant="subtitle2">Get started</Link>
//             </Typography>

//             <Stack direction="row" spacing={2}>
//               <Button fullWidth size="large" color="inherit" variant="outlined">
//                 <Iconify icon="eva:google-fill" color="#DF3E30" width={22} height={22} />
//               </Button>

//               <Button fullWidth size="large" color="inherit" variant="outlined">
//                 <Iconify icon="eva:facebook-fill" color="#1877F2" width={22} height={22} />
//               </Button>

//               <Button fullWidth size="large" color="inherit" variant="outlined">
//                 <Iconify icon="eva:twitter-fill" color="#1C9CEA" width={22} height={22} />
//               </Button>
//             </Stack>

//             <Divider sx={{ my: 3 }}>
//               <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//                 OR
//               </Typography>
//             </Divider>
//             <LoginForm />
//           </StyledContent>
//         </Container>
//       </StyledRoot>
//     </>
//   );
// }
