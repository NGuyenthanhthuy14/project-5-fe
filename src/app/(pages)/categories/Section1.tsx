"use client"
import Carditem from "@/app/components/card/Carditem";
import Title from "@/app/components/title/Title";
import { dbFirebase } from "@/app/FirebaseConfig";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function Section1 () {
	// const data = [
	// 	{
	// 		image: "/demo/image-6.svg",
	// 		title: "Nhạc Trẻ",
	// 		description: "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
	// 		link: ""
	// 	},
	// 	{
	// 		image: "/demo/image-7.svg",
	// 		title:"Pop Âu Mỹ",
	// 		description:"Top 100 Nhạc Pop Âu Mỹ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Top 100 Nhạc Pop Âu Mỹ",
	// 		link: ""
	// 	},
	// 	{
	// 		image: "/demo/image-8.svg",
	// 		title: "Nhạc EDM",
	// 		description: "Top 100 Nhạc Electronic/Dance Âu Mỹ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Top 100 Nhạc Electronic/Dance Âu Mỹ",
	// 		link: ""
	// 	},
	// 	{
	// 		image: "/demo/image-9.svg",
	// 		title: "Nhạc Trữ Tình",
	// 		description: "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
	// 		link: ""
	// 	},
	// 	{
	// 		image: "/demo/image-10.svg",
	// 		title: "Nhạc Hàn Quốc",
	// 		description: "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
	// 		link: ""
	// 	},
	// 	{
	// 		image: "/demo/image-6.svg",
	// 		title: "Nhạc Trẻ",
	// 		description: "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
	// 		link: ""
	// 	},
	// 	{
	// 		image: "/demo/image-7.svg",
	// 		title:"Pop Âu Mỹ",
	// 		description:"Top 100 Nhạc Pop Âu Mỹ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Top 100 Nhạc Pop Âu Mỹ",
	// 		link: ""
	// 	},
	// 	{
	// 		image: "/demo/image-8.svg",
	// 		title: "Nhạc EDM",
	// 		description: "Top 100 Nhạc Electronic/Dance Âu Mỹ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Top 100 Nhạc Electronic/Dance Âu Mỹ",
	// 		link: ""
	// 	},
	// 	{
	// 		image: "/demo/image-9.svg",
	// 		title: "Nhạc Trữ Tình",
	// 		description: "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
	// 		link: ""
	// 	},
	// 	{
	// 		image: "/demo/image-10.svg",
	// 		title: "Nhạc Hàn Quốc",
	// 		description: "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
	// 		link: ""
	// 	}
	// ]

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const [categoryList, setCategoryList] = useState<any>();
	
		useEffect (() => {
			const categorieRef = ref(dbFirebase, "categories")
			onValue (categorieRef, snapshotCategory => {
			const categoryData = snapshotCategory.val();
			const categoryArray = Object.keys(categoryData).map(key => ({
					id: key,
					description: categoryData[key].description,
					image: categoryData[key].image,
					title: categoryData[key].title,
					link: `/categories/${key}`
	
				}))
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