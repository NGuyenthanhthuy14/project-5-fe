"use client"
import Songitem2 from "@/app/components/song/Songitem2";
import Title from "@/app/components/title/Title";
import { authFirebase, dbFirebase } from "@/app/FirebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function Section1 () {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const [song, setSong] = useState<any>()

	useEffect (() => {
		onAuthStateChanged(authFirebase, (user) => {
			if (user) {
				const userId = user.uid;
				const songRef = ref(dbFirebase, "songs")
				onValue (songRef, (snapshotSong) => {
					const songData = snapshotSong.val();
					if (songData) {
						let songArray = Object.keys(songData).map (key => ({
							id: key,
							categoryId: songData[key].categoryId,
							image: songData[key].image,
							listen: songData[key].listen,
							lyric: songData[key].lyric,
							singerId: "",
							title: songData[key].title,
							time: "4:32",
							singer: "Hồ Quang Hiếu, Huỳnh Văn",
							audio: songData[key].audio,
							wishlist: songData[key].wishlist,
						}))

						songArray = songArray.filter(item => item.wishlist && item.wishlist[userId])
						setSong(songArray);
					}
				})
			}
			})
	},[])
	
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
				<Title text="Bài hát yêu thích"/>

				{/* List */}
				<div className="grid grid-cols-1 gap-[10px]">
					{song && (
						<>
							{/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
							{song.map ((item: any) => (
								<Songitem2 key={item.id} {...item}/>
							))}
						</>
					)}
				</div>
			</div>
		</>
	)
}