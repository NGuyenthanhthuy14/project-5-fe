"use client"
import CardInfo from "@/app/components/card/CardInfo";
import { dbFirebase } from "@/app/FirebaseConfig";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function Section1 (props: {
	id: string
}) {
	const { id } = props
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const [songList, setSongList] = useState<any>();
	
		useEffect(() => {
			const songRef = ref(dbFirebase, "songs/" + id)
	
			onValue (songRef, snapshotSong => {
				const songData = snapshotSong.val();
				if (songData) {
					setSongList({
						image: songData.image,
						title: songData.title,
						description: "Tăng Duy Tân",
					})
				}
			})
		},[])
	return (
		<>
		{/* Card Info */}
			{songList && (
				<CardInfo image={songList.image} title={songList.title} description={songList.description}/>
			)}
      
		</>
	)
}