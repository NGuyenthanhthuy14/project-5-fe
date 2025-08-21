import Link from "next/link";
import SiderMenu from "./SiderMenu";

export default function Sider() {
	return (
		<>
			<div className="bg-[#212121] w-[280px] h-[100vh] fixed">
				<div className="bg-[#1C1C1C] px-[56px] py-[25px]">
					<Link href="/">
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img src="/Logo.svg" alt="Logo" className="h-[42px] w-auto"/>
					</Link>
				</div>
				<SiderMenu/>
			</div>
		</>
	)
}