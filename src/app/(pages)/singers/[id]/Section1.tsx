"use client"
import CardInfo from "@/app/components/card/CardInfo";
import { dbFirebase } from "@/app/FirebaseConfig";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function Section1 (props : {
	id: string
}) {

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const [singerList, setSingerList] = useState<any>()
	const { id } = props

	useEffect (() => {
		const singerRef = ref(dbFirebase, "singers/" + id);

		onValue (singerRef, snapshotSinger => {
			const singerData = snapshotSinger.val();
			if (singerData) {
				setSingerList({
					image: singerData.image,
					title: singerData.title,
					description: singerData.description
				})

			}
		})
	},[])
	return (
		<>
			{singerList && (
				<>
					<CardInfo image={singerList.image} title={singerList.title} description={singerList.description}/>
				</>
			)}
		</>
	)
}