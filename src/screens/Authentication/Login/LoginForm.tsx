import {FC, useRef, RefObject} from 'react';

import { Box, Grid } from '@mui/material';

import Form from '../../../components/Form';
import PrimaryButton from '../../../components/Button/PrimaryButton';
import { LoginFormProps } from './LoginFormProps';

const LoginForm : FC = () => {
  
  const loginFormRef: RefObject<Form | null | undefined> = useRef();

  const handleLogin = () => {
    const {formData, isFormValid}: any = loginFormRef.current?.getFormData();
    console.log("Form Data: ", formData);
    console.log("isFormValid:", isFormValid);
  }
  

  return (
    <div>
      <Box sx={{backgroundColor: "offwhite", margin: "1rem", alignContent: "center"}}>
        
          <Form 
          ref={loginFormRef as RefObject<Form>}
          model={LoginFormProps()}
          values={''}
          />
          <PrimaryButton onClick={handleLogin} sx={{marginLeft: "90px"}}>Login</PrimaryButton>
       
      </Box>
    </div>
  )
}

export default LoginForm