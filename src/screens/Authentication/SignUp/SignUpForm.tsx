import { Box, Grid } from '@mui/material';
import { padding } from '@mui/system';
import {FC, useRef, RefObject} from 'react';
import PrimaryButton from '../../../components/Button/PrimaryButton';
import Form from '../../../components/Form';
import { SignUpFormProps } from './SignUpFormProps';

const SignUpForm: FC = () => {

  const signUpFormRef: RefObject<Form | null | undefined> = useRef();

  const roleList = [{ label : "Admin", value : "Admin"}, {label: "User", value:"User"}]
  

  const pageConfig  = {
    formModel : SignUpFormProps(roleList)
  }

  const handleSignUp = () => {
    console.log("sign up")
    
  }
    
  return (
    <div>
        <Box sx={{alignItems: "center"}}>
            {/* <Grid container sx={{padding: "10px", width: "500px"}}>  */}
                <Form 
                
                ref={signUpFormRef as RefObject<Form>}
                model={pageConfig.formModel}
                values={""}
                />
                <PrimaryButton 
                onClick={handleSignUp}
                sx={{marginTop: "1rem", marginLeft: "180px"}}
                >Sign Up</PrimaryButton>
            {/* </Grid> */}
        </Box>
    </div>
  )
}

export default SignUpForm