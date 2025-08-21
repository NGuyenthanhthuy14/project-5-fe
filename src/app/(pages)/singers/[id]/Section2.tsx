"use client"
import Songitem2 from "@/app/components/song/Songitem2";
import Title from "@/app/components/title/Title";
import { dbFirebase } from "@/app/FirebaseConfig";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function Section2 (props : {
	id: string
}) {
	
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
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const { id } = props

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const [songList, setSongList] = useState<any>();

	useEffect(() => {
		const songRef = ref(dbFirebase, "songs")

		onValue (songRef, snapshotSong => {
			const songData = snapshotSong.val();
			let songArray = Object.keys(songData).map(key => ({
				id: key,
				categoryId: songData[key].categoryId,
				image: songData[key].image,
				listen: songData[key].listen,
				lyric: songData[key].lyric,
				singerId: songData[key].singerId,
				title: songData[key].title,
				time: "4:32",
				singer: "Hồ Quang Hiếu, Huỳnh Văn",
				audio: songData[key].audio,

			}))

			songArray = songArray.filter(item => item.singerId.includes(id))

			setSongList(songArray)
		})
	},[])
	return (
		<>
			<div className="mt-[30px]">
				<Title text="Danh Sách Bài Hát"/>

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