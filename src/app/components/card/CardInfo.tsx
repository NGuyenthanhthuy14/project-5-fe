// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
export default function CardInfo (props: any) {

	const {image, title, description} = props;

	return (
		<>
			{/* cardInfo */}
      <div className="flex items-center">
        <div className="w-[180px] aspect-square rounded-[15px] truncate">
          <img src={image} className="w-full h-full object-cover"/>
        </div>

        <div className="flex-1 ml-[20px]">
          <div className="font-[700] text-[35px] text-[#00ADEF] mb-[10px] ">
            {title}
          </div>

          <div className="font-[400] text-[14px] text-[#EFEEE0]">
            {description}
          </div>
        </div>
      </div>
		</>
	)
}