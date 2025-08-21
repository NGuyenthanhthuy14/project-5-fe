"use client"
import { useRouter, useSearchParams } from "next/navigation";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function Search() {
		const router = useRouter();
		const params = useSearchParams();
		const keyworDefault = params.get("keyword") || ""
		
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const handleSearch = (event : any) => {
		event.preventDefault();
		const keyword = event.target.keyword.value;
		if(keyword) {
			router.push(`/search?keyword=${keyword}`)
		}
	}
	return (
		<>
			{/* sticky: vị trí cố định để khi cuộn k bị mất nội dung */}
			<form 
				onSubmit={handleSearch}
				className="mt-[20px] bg-[#212121] rounded-[50px] sticky top-[20px] left-[20px] z-[999] py-[15px] px-[30px] flex items-center"
				>	
				<input 
					type="text" 
					name="keyword" 
					placeholder="Tìm kiếm..." 
					className="order-2 outline-none text-[16px] font-[600] text-[#FFFFFF] flex-1 bg-transparent"
					defaultValue={keyworDefault}
				/>

				<button 
					type="submit" 
					className="order-1 text-[22px] text-[#FFFFFF] mr-[20px]"
				>
					<FaMagnifyingGlass/>
				</button>
			</form>
		</>
	)
}