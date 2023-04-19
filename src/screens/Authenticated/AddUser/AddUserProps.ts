import { Validators } from "../../../utils/validators";

export const AddUserProps = () => {
    return [
        {
            label: 'First Name *',
            value: '',
            size: 'medium',
            autoFocus: true,
            type: 'text',
            typeValue: 'text',
            variant: 'outlined',
            placeholder: '',
            field: 'firstName',      // this will be field name by which we are going to access the data
            validators: [
                { check: Validators.required, message: "This field is mandatory" },
            ],
            responsive: { xs: 12 },
            required: true,
            sx: { padding: "10px", margin: "1rem", width: "400px" },

        },
        {
            label: 'Last Name *',
            value: '',
            size: 'medium',
            autoFocus: true,
            type: 'text',
            typeValue: 'text',
            variant: 'outlined',
            placeholder: '',
            field: 'lastName',      // this will be field name by which we are going to access the data
            validators: [
                { check: Validators.required, message: "This field is mandatory" },
            ],
            responsive: { xs: 12 },
            required: true,
            sx: { padding: "10px", margin: "1rem", width: "400px" }
        },
    ];
}