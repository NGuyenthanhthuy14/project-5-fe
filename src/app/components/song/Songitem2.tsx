import ButtonPlay from "../button/ButtonPlay";
import ButtonHeart2 from "../button/ButtonHeart2";

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
export default function Songitem2 (props: any) {

	const {image, title, singer, time} = props
	return (
		<>
			{/* Items */}
			<div className="flex justify-between items-center bg-[#212121] rounded-[15px] px-[18px] py-[10px]">
				{/* left */}
				<div className="flex items-center w-[40%] ">
					<ButtonPlay {...props} className="text-white text-[24px]"/>

					<div className="w-[42px] aspect-square rounded-[8px] truncate mx-[12px]">
						<img src={image} alt={title} className="h-full w-full object-cover"/>
					</div>
					<div className="text-white font-[700] text-[14px]">
						{title}
					</div>
				</div>

				{/* center */}
				<div className="w-[30%] text-center">
					<div className="text-white font-[400] text-[14px]">
						{singer}
					</div>
				</div>

				{/* Right */}
				<div className="text-white w-[30%] text-right flex items-center justify-end">
					<div className="font-[400] text-[14px] mr-[18px]">
						{time}
					</div>
					<ButtonHeart2 {...props}/>
				</div>
			</div>
		</>
	)
}