"use client"

import Songitem2 from "@/app/components/song/Songitem2";
import Title from "@/app/components/title/Title";
import { dbFirebase } from "@/app/FirebaseConfig";
import { onValue, ref } from "firebase/database";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Section1 () {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const [songList, setSongList] = useState<any>()
	const params = useSearchParams();
	const keywordDefault = params.get("keyword") || ""

	useEffect(() => {
		const songRef = ref(dbFirebase, "songs")

		onValue (songRef, snapshotSong => {
			const songData = snapshotSong.val();
			let songArray = Object.keys(songData).map(key => ({
				id: key,
				image: songData[key].image,
				title: songData[key].title,
				listen: songData[key].listen,
				singerId: songData[key].singerId,
				singer: "Sơn Tùng M-TP",
				categoryId: songData[key].categoryId,
				time: "4:20"
			}))

			// i: không phân biệt chữ hoa chữ thường
			const regex = new RegExp(keywordDefault, "i")
			songArray = songArray.filter(item => regex.test(item.title))
			setSongList(songArray)

		})
	},[keywordDefault])
	// const data = [
	// 	{
	// 		image: "/demo/image-1.svg",
	// 		title: "Cô Phòng",
	// 		singer: "Hồ Quang Hiếu, Huỳnh Văn",
	// 		time: "4:32"
	// 	},
	// 	{
	// 		image: "/demo/image-2.svg",
	// 		title: "Cô Phòng",
	// 		singer: "Hồ Quang Hiếu, Huỳnh Văn",
	// 		time: "4:32"
	// 	},
	// 	{
	// 		image: "/demo/image-3.svg",
	// 		title: "Cô Phòng",
	// 		singer: "Hồ Quang Hiếu, Huỳnh Văn",
	// 		time: "4:32"
	// 	},
	// ]
	return (
		<>
			<div className="mt-[30px]">
				<Title text="Kết quả tìm kiếm"/>

				{/* List */}
				{songList && (
					<div className="grid grid-cols-1 gap-[10px]">
						{/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
						{songList.map ((item: any) => (
							<Songitem2 key={item.id} {...item}/>
						))}
					</div>
				)}
			</div>
		</>
	)
}