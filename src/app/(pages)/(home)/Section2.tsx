"use client"
import Carditem from "@/app/components/card/Carditem";
import Title from "@/app/components/title/Title";
import { dbFirebase } from "@/app/FirebaseConfig";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function Section2 () {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const [categoryList, setCategoryList] = useState<any>();

	useEffect (() => {
		const categorieRef = ref(dbFirebase, "categories")
		onValue (categorieRef, snapshotCategory => {
		const categoryData = snapshotCategory.val();
		let categoryArray = Object.keys(categoryData).map(key => ({
				id: key,
				description: categoryData[key].description,
				image: categoryData[key].image,
				title: categoryData[key].title,
				link: `/categories/${key}`

			}))
			categoryArray = categoryArray.slice(0,5);

			setCategoryList(categoryArray)
		})
	},[])
	return (
		<>
			<div className="mt-[30px]">
				<Title text="Danh mục nổi bật"/>

				<div className="grid grid-cols-5 gap-[20px]">
					{categoryList && (
						<>
							{/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
							{categoryList.map((item: any) => (
								<Carditem key={item.id} image={item.image} title={item.title} description={item.description} link={item.link}/>
							))}
						</>
					)}

				</div>
			</div>
		</>
	)
}