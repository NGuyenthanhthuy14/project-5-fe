"use client"
import Title from "@/app/components/title/Title";
import { dbFirebase } from "@/app/FirebaseConfig";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function Section2 (props: {
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
						lyric: songData.lyric,
					})
				}
			})
		},[])
	return (
		<>
		{songList && (
			<div className="mt-[30px]">
        <Title text="Lời Bài Hát"/>
        <div className="bg-[#212121] rounded-[15px] p-[20px] text-white font-[500] text-[14px]">
            {songList.lyric}
        </div>
      </div>
		)}
	
		</>
	)
}