import { Divider } from "@mui/material";
import { FC } from "react";

type PrimaryButtonProps = {
  sx?: Object;
};

const DividerLine: FC<PrimaryButtonProps> = ({
  sx,
}) => {
  return <Divider sx={sx} />
};
export default DividerLine;
