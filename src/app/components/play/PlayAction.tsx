"use client"
import { FaBackwardStep, FaForwardStep, FaPause, FaPlay } from "react-icons/fa6";

export default function PlayAction () {
	const handlePlay = () => {
		const elementPlayAudio = document.querySelector(".play-audio");
		if (elementPlayAudio) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const elementButtonPlay: any = elementPlayAudio.querySelector(".inner-button-play")
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const elementAudio: any = elementPlayAudio.querySelector(".inner-audio")

			if (elementButtonPlay.classList.contains("play")) {
				elementButtonPlay.classList.remove("play")
				elementAudio.pause()
			}else {
				elementButtonPlay.classList.add("play")
				elementAudio.play()
			}
		}
	}

	const handleNext = () => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const elementPlayAudio: any = document.querySelector(".play-audio");
		const idSongCurrent = elementPlayAudio.getAttribute("song-id")
		if (idSongCurrent) {
			const songList = document.querySelector("[song-list]");
			if (songList) {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				const elementSongCurrent: any = songList.querySelector(`[data-song = "${idSongCurrent}"]`)
				const elementSongNext = elementSongCurrent.nextElementSibling;
				if (elementSongNext) {
					const buttonPlay = elementSongNext.querySelector(".inner-button-play");
					buttonPlay.click();
				}
			}
		}
	}

	const handleBack = () => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const elementPlayAudio: any= document.querySelector(".play-audio");
		const idSongCurrent = elementPlayAudio.getAttribute("song-id");

		if (idSongCurrent) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const songList: any = document.querySelector("[song-list]");
			if (songList) {
				const elementSongCurrent = songList.querySelector (`[data-song = "${idSongCurrent}"]`)
				const elementSongBack = elementSongCurrent.previousElementSibling;
				if (elementSongBack) {
					const buttonPlay = elementSongBack.querySelector(".inner-button-play");
					buttonPlay.click()
				}
			}
		}
	}

	return (
		<>
		<div className="flex items-center justify-center ">
			<button className="text-[16px] text-[#FFFFFF]" onClick={handleBack}>
				<FaBackwardStep/>
			</button>
			<button 
				className="text-[16px] text-[#FFFFFF] bg-[#00ADEF] w-[32px] h-[32px] rounded-full inline-flex items-center justify-center mx-[42px] inner-button-play"
				onClick={handlePlay}
			>
				<FaPlay className="inner-icon-play"/>
				<FaPause className="inner-icon-pause"/>
			</button>
			<button className="text-[16px] text-[#FFFFFF]" onClick={handleNext}>
				<FaForwardStep/>
			</button>
		</div>
		</>
	)
}