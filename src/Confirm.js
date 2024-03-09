import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ColorButton = styled(Button)(() => ({
	size: "large",
	fontSize: "20px",
	borderRadius: "20px",
	width: "150px",
	height: "50px",

	display: "block",
}));

export default function Confirm() {
	const navigate = useNavigate();
	const [cancelPosition, setCancelPosition] = useState({
		x: "0px",
		y: "80px",
	});

	const onClickCancelHandler = () => {
		// Calculate random positions for the Cancel button
		const newX = Math.random() * 800 - 400 + "%";
		const newY = Math.random() * 800 - 400 + "%";
		// Update Cancel button position smoothly
		setCancelPosition({
			x: newX,
			y: newY,
		});
	};

	<div>
		<Typography
			variant="h5"
			className="ready"
			style={{ textAlign: "center", marginBottom: "20px" }}
		>
			Are you ready?
		</Typography>
		<div style={{ position: "relative" }}>
			<ColorButton
				onClick={() => navigate("/load2")}
				className="confirmBtn"
				color="success"
				variant="contained"
			>
				Confirm
			</ColorButton>
			<ColorButton
				onMouseOver={onClickCancelHandler}
				onClick={onClickCancelHandler}
				style={{
					transition: "left 0.5s ease, top 0.5s ease",
					left: cancelPosition.x,
					top: cancelPosition.y,
					position: "absolute",
				}}
				className="cancelBtn"
				color="error"
				variant="contained"
			>
				Cancel
			</ColorButton>
		</div>
	</div>;
}
