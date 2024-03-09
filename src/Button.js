import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { brown } from "@mui/material/colors";
import Snoopy from "./res/snoopy.gif";
import { useNavigate } from "react-router-dom"; // Import Link and useHistory from React Router

const ColorButton = styled(Button)(({ theme }) => ({
	color: theme.palette.getContrastText(brown[500]),
	backgroundColor: brown[500],
	"&:hover": {
		backgroundColor: brown[700],
	},
	size: "large",
	fontSize: "20px",
	borderRadius: "20px",
	width: "150px",
	height: "50px",
	margin: "auto",
	display: "block",
}));

const ImageContainer = styled("div")({
	height: "100px", // Adjust the height as needed
});

export default function BasicButtons(props) {
	const navigate = useNavigate();
	let count = 0;
	let first = true;

	const onClickHandler = () => {
		console.log("Button clicked");
		const img = document.createElement("img");
		if (first) {
			// plat forever
			props.song.loop = true;
			props.song.play();
			first = false;
		}
		if (count < 3) {
			// set TTL to 8 seconds
			setTimeout(() => {
				img.remove();
				count -= 1;
			}, 7 * 1000);
			img.src = Snoopy;
			img.alt = "snoopy";
			img.className = "snoopy";
			document.getElementById("img").appendChild(img);
			count += 1;
		}
		if (count === 3) {
			setTimeout(() => {
				navigate(props.navigateTo);
			}, 4000);
		}
	};

	return (
		<div>
			<ImageContainer id="img" className="img"></ImageContainer>
			<ColorButton disableElevation onClick={onClickHandler} className="btn">
				Click Me!
			</ColorButton>
		</div>
	);
}
