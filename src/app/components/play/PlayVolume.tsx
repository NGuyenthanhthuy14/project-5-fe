"use client"
import { FaVolumeHigh } from "react-icons/fa6";

export default function PlayVolume () {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const handleChange = (event: any) => {
		const elememtPlayAudio = document.querySelector(".play-audio")
		if (elememtPlayAudio) {
			const volume = parseFloat(event.target.value)
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const elementAudio: any = elememtPlayAudio.querySelector(".inner-audio")
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const elementVolumeCurren: any = elememtPlayAudio.querySelector(".inner-volume .inner-current")
			elementAudio.volume = volume/100
			elementVolumeCurren.style.width = `${volume}%`
		}
	}
	return (
		<>
			<div className="w-[184px] flex items-end">
				<button className="text-[16px] text-[#FFFFFF]">
					<FaVolumeHigh/>
				</button>

				<div className="ml-[6px] relative inner-volume">
					<div className="h-[3px] w-[100%] bg-[#00ADEF] rounded-[50px] absolute left-0 top-[14px] inner-current"></div>
					<input 
						type="range"
						min={0}
						max={100}
						defaultValue={100}
						className="w-full h-[3px] bg-[#FFFFFF0A] appearance-none rounded-[50px] cursor-pointer range-sm inner-total"
						onChange={handleChange}
					/>
				</div>
			</div>
		</>
	)
}