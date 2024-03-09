import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom"; // Import Link and useHistory from React Router

export default function CircularIndeterminate(props) {
	const navigate = useNavigate();
	setTimeout(() => {
		navigate(props.navigateTo);
	}, 5000);
	return (
		<Stack spacing={2} direction="row" size="medium">
			<CircularProgress color="inherit" />
		</Stack>
	);
}
