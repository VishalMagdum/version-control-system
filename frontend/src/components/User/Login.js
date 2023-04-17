import React, { useEffect } from 'react'
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useDispatch, useSelector } from 'react-redux';
import { login, clearErrors } from '../../actions/userAction'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { error, loading, isAuthenticated } = useSelector((state) => state.user)
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        dispatch(login({
            email: data.get("email"),
            password: data.get("password"),
        }));
    };

    useEffect(() => {
        if (error) {
            toast.error(error)
            dispatch(clearErrors())

        }
        if (isAuthenticated) {
            toast.success("SignUp Successfully")
            navigate('/home')
        }
    }, [dispatch, error, isAuthenticated])

    return (
        <Container component="main" maxWidth="sm">
            <Box
                sx={{
                    boxShadow: 3,
                    borderRadius: 2,
                    px: 4,
                    py: 6,
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />

                    <Button className='bgcolorBlue'
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Log In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                {/* Forgot password? */}
                            </Link>
                        </Grid>
                        <Grid item>

                            <Link href="/signup" variant="body2">
                                Don't have an account? Sign Up
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}


export default Login