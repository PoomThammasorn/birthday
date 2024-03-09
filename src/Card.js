import React from "react";
import "./styles.css";

import muayliie_img from "./res/muayliie.png";
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
					<img src={muayliie_img} alt="Muayliie" className="muayliie" />
					<div className="balloonThree" />
					<div className="balloonTwo" />
					<div className="balloonOne" />
				</div>
			</div>
			<div className="cardInside">
				<h3 className="back">HAPPY BIRTHDAY ❤️❤️❤️</h3>
				<p>ถึง มุอ้น 🐷 ,</p>
				<p className="text-body">
					สุขสันต์วันเกิดน้า อายุครบ 22 ขวบแย้ว ขอให้มุอ้นมีความสุขมาก ๆ
					ขอให้มุอ้นสมหวังในทุกสิ่ง ขอให้มุอ้นได้ลองทำอะไรใหม่ ๆ
					ขอให้มุอ้นสุขภาพแข็งแรง เติบโตไปเป็นเด็กอ้นที่น่ายัก มะต้องเครียดเย้อ
					ใช้ชีวิตให้มีความสุข เค้าจะอยู่ข้างมุอ้นเสมอ ขอให้มุอ้นมีความสุขกับวัย
					22 น้า 🫶 🥰 😘
				</p>
				<p className="name">หมาอ้น 🐶</p>
				<img src={smile} alt="smile" className="smile" />
				<img src={flower} alt="flower" className="flower" />
				<img src={rainbow} alt="rainbow" className="rainbow" />
				<img src={dog} alt="dog" className="dog" />
			</div>
		</div>
	);
};

export default BirthdayCard;
