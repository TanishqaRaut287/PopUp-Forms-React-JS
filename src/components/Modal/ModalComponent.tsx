import { Backdrop, Fade, IconButton, Modal, Typography } from '@mui/material'
import CloseSharpIcon from '@mui/icons-material/CloseSharp';

import './styles.css';

export interface modalProps {
    open: boolean,
    handleClose: boolean,
    Component: any,
    title: string
}

const ModalComponent = (modalProps : any) => {

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={modalProps.open}
            onClose={modalProps.handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={modalProps.open}>
                <div className="popform">
                    <Typography
                        sx={{
                            position: "relative",
                            top: "3rem",
                            left: "3.9rem",
                            fontStyle: "normal",
                            fontWeight: "600",
                            fontSize: "20px",
                            color: "black",
                            lineHeight: "24px",
                            marginBottom: "10px",
                        }}
                    >
                        {modalProps.title}
                    </Typography>

                    <IconButton
                        onClick={modalProps.handleClose} sx={{
                            marginLeft: "420px",
                            marginTop: "8px",
                            borderRadius: "0.5rem",
                        }}>
                        <CloseSharpIcon fontSize={"small"} />
                    </IconButton>

                    <modalProps.Component handleClose={modalProps.handleClose} title={modalProps.title} />
                </div>
            </Fade>
        </Modal>
    )
}

export default ModalComponent;