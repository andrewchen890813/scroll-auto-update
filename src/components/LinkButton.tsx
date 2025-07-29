import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

interface LinkButtonProps {
  to: string;
  label: string;
}

export default function LinkButton({ to, label }: LinkButtonProps) {
  return (
    <Button component={Link} to={to} variant="outlined" color="primary">
      {label}
    </Button>
  );
}
