import React from "react";
import "./styles.css";

import person from "./res/person.png";
import cake from "./res/cake.png";
import flower from "./res/flower.png";
import rainbow from "./res/rainbow.png";
import rainbow2 from "./res/rainbow2.png";
import smile from "./res/smile.png";
import dog from "./res/dog.png";

const BirthdayCard = () => {
	const handleDownloadPDF = () => {
		const googleDriveUrl =
			"https://drive.google.com/file/d/1fcarKkArsMI3GSlnZbL7H7frrXQK0O2Y/view?usp=share_link";
		window.open(googleDriveUrl, "_blank");
	};

	return (
		<div className="birthdayCard" onClick={handleDownloadPDF}>
			<div className="cardFront">
				<h3 className="happy">HAPPY BIRTHDAY TO 🐷❤️</h3>
				<img src={rainbow2} alt="rainbow2" className="rainbow2" />
				<img src={cake} alt="cake" className="cake" />
				<div className="balloons">
					<img src={person} alt="Picture" className="person" />
					<div className="balloonThree" />
					<div className="balloonTwo" />
					<div className="balloonOne" />
				</div>
			</div>
			<div className="cardInside">
				<h3 className="back">HAPPY BIRTHDAY ❤️❤️❤️</h3>
				<p>To Receiver 🐷 ,</p>
				<p className="text-body">
					Happy Birthday! 🎉 Wishing you a day filled with joy, laughter, and
					all the things that make you smile. May this year bring you endless
					happiness and unforgettable memories. Cheers to another amazing trip
					around the sun! 🎂🎈🎊
				</p>
				<p className="name">Sender 🐶</p>
				<img src={smile} alt="smile" className="smile" />
				<img src={flower} alt="flower" className="flower" />
				<img src={rainbow} alt="rainbow" className="rainbow" />
				<img src={dog} alt="dog" className="dog" />
			</div>
		</div>
	);
};

export default BirthdayCard;
