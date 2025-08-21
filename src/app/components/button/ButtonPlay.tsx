"use client"
import { FaPlay } from "react-icons/fa6";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ButtonPlay(props: any){

	const { audio, id, image, title, singer, className= ""} = props

	const handlePlay = () => {
		const elementPlayAudio = document.querySelector(".play-audio");
		
		// Phát nhạc
		if (elementPlayAudio) {
			// Chèn thêm song-id
			elementPlayAudio.setAttribute ("song-id", id)

			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const elementAudio: any = elementPlayAudio.querySelector(".inner-audio");
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const elementSource: any = elementPlayAudio.querySelector(".inner-source");

			elementSource.src = audio
			elementAudio.load()
			elementAudio.play()

			// hiển thị khối play
			if (elementPlayAudio.classList.contains("hidden")) {
				elementPlayAudio.classList.remove("hidden")
			}

			// Hiển thị ảnh
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const elementImage : any= document.querySelector(".inner-image");
			elementImage.src = image
			elementImage.alt = title

			// Hiển thị tiêu đề
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const elementTitle: any = document.querySelector(".inner-title");
			elementTitle.innerHTML = title

			// Hiển thị ca sĩ
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const elementSinger: any= document.querySelector(".inner-singer");
			elementSinger.innerHTML = singer

			// Thêm class vào inner-button-play
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const elementButtonPlay: any = elementPlayAudio.querySelector(".inner-button-play")
			elementButtonPlay.classList.add("play")

			// Lấy ra tổng thời gian.
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const elementPlayTime: any = elementPlayAudio.querySelector(".inner-play-time .inner-total")
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const elementPlayTimeCurent: any = elementPlayAudio.querySelector(".inner-play-time .inner-current")

			elementAudio.onloadedmetadata = () => {
				const totalTime = elementAudio.duration;
				elementPlayTime.max = totalTime;

				// Lấy ra thời gian hiện tại.
				elementAudio.ontimeupdate = () => {
					const currentTime = elementAudio.currentTime;
					elementPlayTime.value = currentTime
					const percent = (currentTime * 100)/ totalTime 
					elementPlayTimeCurent.style.width = `${percent}%`
				}
			}
		}
	}

	return (
		<>
			<button 
				onClick={handlePlay}
				className= {className}
				>
				<FaPlay/>
			</button>
		</>
	)
} 