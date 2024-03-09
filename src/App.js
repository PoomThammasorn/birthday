import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import Card from "./Card";
import Button from "./Button";
import Load from "./Load";
import song from "./res/song.mp3";
import Confirm from "./Confirm";

export default function App() {
	// Create a new Audio object with the source URL of the song
	const audio = new Audio(song);
	audio.volume = 0.4;

	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<div className="App">
				<Routes>
					<Route
						path="/"
						element={<Button song={audio} navigateTo="/load1" />}
					/>
					<Route path="/load1" element={<Load navigateTo="/confirm" />} />
					<Route path="/load2" element={<Load navigateTo="/card" />} />
					<Route path="/confirm" element={<Confirm />} />
					<Route path="/card" element={<Card />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}
