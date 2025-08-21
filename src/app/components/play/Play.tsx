/* eslint-disable @next/next/no-img-element */
import PlayAudio from "./PlayAudio";
import PlayInfor from "./PlayInfor";
import PlayAction from "./PlayAction";
import PlayTime from "./PlayTime";
import PlayVolume from "./PlayVolume";

export default function Play() {
	return (
		<>
			<div className="bg-[#212121] z-[999] bottom-0 left-0 w-full py-[20px] mt-[30px] fixed border-t border-[#494949] hidden play-audio">
				<PlayAudio/>
				<div className="container mx-auto flex items-center justify-between">
					{/* Thông tin*/}
					<PlayInfor/>

					<div className="flex-1 mx-[67px]">
						{/* Hành động */}
						<PlayAction/>

						{/* Thanh phát nhạc */}
						<PlayTime/>
					</div>

					{/* Khối âm lượng */}
						<PlayVolume/>
				</div>
			</div>
		</>
	)
}