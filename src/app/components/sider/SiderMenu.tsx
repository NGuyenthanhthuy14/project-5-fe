"use client"

import { authFirebase } from "@/app/FirebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { FaHeart, FaHouse, FaMusic, FaPodcast, FaRightFromBracket, FaUser, FaUserPlus } from "react-icons/fa6";
import SiderItem from "./SiderItem";

export default function SiderMenu () {
	
	const [isLogin, setIsLogin] = useState<boolean>();

	useEffect(() => {
		onAuthStateChanged(authFirebase, (user) => {
			if (user) {
				setIsLogin(true)
			}else {
				setIsLogin(false)
			}
		})
	},[])

	const menu = [
		{
			icon: <FaHouse/>,
			title: "Trang chủ",
			link: "/",
		},
		{
			icon: <FaMusic/>,
			title: "Danh mục bài hát",
			link: "/categories"
		},
		{
			icon: <FaPodcast/>,
			title: "Ca sĩ",
			link: "/singers"
		},
		{
			icon: <FaHeart/>,
			title: "Bài hát yêu thích",
			link: "/wishlist",
			isLogin: true
		},
		{
			icon: <FaRightFromBracket/>,
			title: "Đăng xuất",
			link: "/logout",
			isLogin: true
		},
		{
			icon: <FaUser/>,
			title: "Đăng nhập",
			link: "/login",
			isLogin: false
		},
		{
			icon: <FaUserPlus/>,
			title: "Đăng ký",
			link: "/register",
			isLogin: false
		},
	]
	return (
		<>
			<nav className="px-[20px] py-[30px]">
				<ul className="">
					{menu.map((item, key) => (
						<SiderItem item = {item} isLogin = {isLogin} key = {key} />
					))}
				</ul>
			</nav>
		</>
	)
}