"use client"
export default function PlayTime () {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const handleChange = (event: any) => {
		const input = event.target.value;
		
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const elementAudio: any = document.querySelector(".play-audio .inner-audio")
		elementAudio.currentTime = input
		
	}

	return (
		<>
			<div className="mt-[11px] relative inner-play-time">
				<div className="h-[5px] w-[0%] bg-[#00ADEF] rounded-[50px] absolute left-0 top-[13px] inner-current"></div>
				<input 
					type="range"
					min={0}
					max={0}
					defaultValue={0}
					className="w-full h-[5px] bg-[#FFFFFF0A] appearance-none rounded-[50px] cursor-pointer range-sm inner-total"
					onChange={handleChange}
				/>
			</div>
		</>
	)
}