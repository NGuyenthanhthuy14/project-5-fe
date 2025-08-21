"use client"
import Carditem from "@/app/components/card/Carditem";
import Title from "@/app/components/title/Title";
import { dbFirebase } from "@/app/FirebaseConfig";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
export default function Section3 () {
	// const data = [
	// 	{
	// 		image: "/demo/image-11.svg",
	// 		title: "Sơn Tùng M-TP",
	// 		description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
	// 		link: ""
	// 	},
	// 	{
	// 		image: "/demo/image-12.svg",
	// 		title:"Nal",
	// 		description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
	// 		link: ""
	// 	},
	// 	{
	// 		image: "/demo/image-13.svg",
	// 		title: "Tuấn Hưng",
	// 		description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
	// 		link: ""
	// 	},
	// 	{
	// 		image: "/demo/image-14.svg",
	// 		title: "Jimmy Nguyễn",
	// 		description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
	// 		link: ""
	// 	},
	// 	{
	// 		image: "/demo/image-15.svg",
	// 		title: "BigDaddy",
	// 		description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
	// 		link: ""
	// 	}
	// ]
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const [singerList, setSingerList] = useState<any>()

	useEffect(() => {
		const singerRef = ref(dbFirebase, "singers");

		onValue (singerRef, snapshotSinger => {
			const singerData = snapshotSinger.val();
			let singerArray = Object.keys(singerData).map(key => ({
				id: key,
				description: singerData[key].description,
				title: singerData[key].title,
				image: singerData[key].image,
				link: `singers/${key}`
			}))

			singerArray = singerArray.slice(0,5)
			setSingerList(singerArray)
		})
	},[])
	return (
		<>
			<div className="pt-[30px]">
				<Title text= "Ca Sĩ Nổi Bật"/>

				<div className="grid grid-cols-5 gap-[20px]">
				{singerList && (
					<>
						{/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
						{singerList.map((item: any) => (
							<Carditem key={item.id} {...item}/>
						))}
					</>
				)}
				</div>
			</div>
		</>
	)
}