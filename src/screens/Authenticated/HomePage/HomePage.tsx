import { Box, Grid, Typography } from "@mui/material";
import { FC, useState } from "react";
import PrimaryButton from "../../../components/Button/PrimaryButton";
import ModalComponent from "../../../components/Modal/ModalComponent";
import LoginForm from "../../Authentication/Login/LoginForm";
import SignUpForm from "../../Authentication/SignUp/SignUpForm";
import AddUser from "../AddUser/AddUser";

const HomePage = () => {

    const [open, setOpen] = useState<boolean>(false);
    const [loginOpen, setLoginOpen] = useState<boolean>(false);
    const [signupOpen, setSignupOpen] = useState<boolean>(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(!open);
    const handleLoginOpen = () => setLoginOpen(true);
    const handleLoginClose = () => setLoginOpen(!loginOpen);
    const handleSignUpOpen = () => setSignupOpen(true);
    const handleSignUpClose = () => setSignupOpen(!signupOpen);

    return (
        <div>
            <Box sx={{ alignContent: "center", marginLeft: '650px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sx={{ margin: "2rem" }}>
                        <Typography>Pop Up Form Components</Typography>
                    </Grid>

                    <Grid item>
                        <Box sx={{ marginLeft: "1px", padding: "1rem" }}>

                            <ModalComponent
                                Component={AddUser}
                                handleClose={handleClose}
                                open={open}
                                title={"Add User"}
                            />

                            <ModalComponent
                                Component={LoginForm}
                                handleClose={handleLoginClose}
                                open={loginOpen}
                                title={"Login Form"}
                            />

                            <ModalComponent
                                Component={SignUpForm}
                                handleClose={handleSignUpClose}
                                open={signupOpen}
                                title={"Sign Up Form"}
                            />

                            <Grid container columnSpacing={10} >
                                <Grid item xs={6}>
                                    <PrimaryButton onClick={handleOpen}> ADD </PrimaryButton>
                                </Grid>
                                <Grid item xs={6}>
                                    <PrimaryButton onClick={handleLoginOpen}> Login </PrimaryButton>
                                </Grid>
                                <Grid item xs={6}>
                                    <PrimaryButton onClick={handleSignUpOpen}> Sign Up </PrimaryButton>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default HomePage