import { Box } from '@mui/material';
import {FC, RefObject, useState, useRef } from 'react';
import PrimaryButton from '../../../components/Button/PrimaryButton';
import Form from '../../../components/Form/index';
import { AddUserProps } from './AddUserProps'

const AddUser: FC = () => {

    // const [error, setError] = useState(true);

    const addFormRef: RefObject<Form | null | undefined> = useRef();

    const submit = (e: any) => {
        e.preventDefault();
        const { formData, isFormValid }: any = addFormRef.current?.getFormData();
        console.log(formData.firstName, formData.lastName)
        // setError(!isFormValid);
        console.log("isFormValid",isFormValid);
        // console.log("error",error)
    }

    return (
        <div>
            <Box sx={{backgroundColor: "offwhite", margin: "1rem", alignContent: "center"}}>
                <Form
                 
                    ref={addFormRef as RefObject<Form>}
                    model={AddUserProps()}
                    values={''}
                    // hasError = {error}
                />
              <PrimaryButton onClick={submit}>ADD</PrimaryButton>

            </Box>

        </div>
    )
}

export default AddUser;