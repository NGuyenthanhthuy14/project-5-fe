"use client"
import CardInfo from "@/app/components/card/CardInfo";
import { dbFirebase } from "@/app/FirebaseConfig";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";


export default function Section1 (props : {
	id: string,
})  
{
	const { id } = props;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const [categoryList, setCategoryList] = useState<any>();
		useEffect (() => {
			const categorieRef = ref(dbFirebase, "categories/" + id)
			onValue (categorieRef, snapshotCategory => {
				const categoryData = snapshotCategory.val();
				if (categoryData) {
					setCategoryList({
						image: categoryData.image,
						title: categoryData.title,
						description: categoryData. description
					})
				}
			})
		},[])

		console.log(categoryList)


	return (
		<>
			{categoryList && (
				<CardInfo
				image= {categoryList.image}
				title= {categoryList.title}
				description= {categoryList.description}
				/>
			)}
		</>
	)
}