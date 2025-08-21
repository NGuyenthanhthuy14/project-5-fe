import Link from "next/link";
import { usePathname } from "next/navigation";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function SiderItem (props: any) {
	const pathname = usePathname();

	const { item, isLogin } = props;
	return (
		<>
			{(item.isLogin === isLogin || item.isLogin === undefined) && (
				<li className="mb-[30px]">
					<Link href={item.link} className={
						"items-center flex hover:text-[#00ADEF] capitalize " + 
						(pathname === item.link ? "text-[#00ADEF]" : "text-[#FFFFFF]")
						}>
						<span className="text-[20px] mr-[20px]">
							{item.icon}
						</span>
						<span className="text-[16px] font-[700]">
							{item.title}
						</span>
					</Link>
				</li>
			)}
		</>
	)
}