import Link from "next/link"

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
export default function Carditem (props: any) {

	const {image, title, description, link} = props
	return (
		<>
			<div className="">
				<Link href={link}>
					<div className="w-full aspect-square rounded-[15px] truncate mb-[10px]">
						<img src={image} alt={title} className="w-[full] h-[full] object-cover"/>
					</div>
				</Link>

				<div className="font-[700] text-[14px] text-[#FFFFFF] mb-[10px] line-clamp-1">
					{title}
				</div>

				<div className="font-[400] text-[12px] text-[#FFFFFF] mb-[10px] line-clamp-1">
					{description}
				</div>
			</div>
		</>
	)
}