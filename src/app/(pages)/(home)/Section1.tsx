
"use client"
import Songitem from "@/app/components/song/Songitem";
import Title from "@/app/components/title/Title";
import { dbFirebase } from "@/app/FirebaseConfig";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function Section1() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [dataFinal, setDataFinal] = useState<any>()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [singerList, setSingerList] = useState<any>()

  useEffect(() => {
  const singerRef = ref(dbFirebase, "singers");
  const songRef = ref(dbFirebase, "songs");

  onValue(singerRef, snapshotSinger => {
    const singerData = snapshotSinger.val();
    const singerArray = Object.keys(singerData).map(key => ({
      id: key,
      description: singerData[key].description,
      image: singerData[key].image,
      title: singerData[key].title
    }))
    setSingerList(singerArray);

    onValue(songRef, snapshotSong => {
      const songData = snapshotSong.val();
      if (songData && singerArray.length) {
        let songArray = Object.keys(songData).map(key => {
          const nameSinger = (songData[key].singerId || [])
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .map((item: any) => singerArray.find(s => s.id === item)?.title || "")
            .join(", ");

          return {
            id: key,
            image: songData[key].image,
            title: songData[key].title,
            singer: nameSinger,
            listen: songData[key].listen,
            singerId: songData[key].singerId,
            link: `/song/${key}`,
            audio: songData[key].audio,
            wishlist: songData[key].wishlist,
          };
        });

        songArray = songArray.slice(0, 3);
        setDataFinal(songArray);
      }
    });
  });
}, []);

	return(
		<>
			<div className="flex items-start">
        <div className="w-[534px]">
          <div 
            className="flex w-full items-center rounded-[15px] bg-cover"
            style={{backgroundImage:"url('/demo/background-1.svg')"}}
            >
              <div className="flex-1 ml-[30px] mr-[34px]  ">
                <div className="text-[32px] font-[700] text-[#FFFFFF] mb-[6px]">
                  Nhạc EDM
                </div>

                <div className="font-[500] text-[14px] text-[#FFFFFF]">
                  Top 100 Nhạc Electronic/Dance Âu Mỹ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Top 100 Nhạc Electronic/Dance Âu Mỹ
                </div>
              </div>

              <div className="mt-[48px] mr-[22px] w-[215px]">
                <img src="/demo/image-2.svg" className="h-auto w-full"/>
              </div>
          </div>
        </div>
        <div className="flex-1 ml-[20px]">

          <Title text="Nghe nhiều"/>

          <div className="grid grid-cols-1 gap-[12px]" song-list="">
            {/* Item */}
            {dataFinal && (
              <>
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                {dataFinal.map((item : any)=> (
                  <Songitem
                    key = {item.id}
                    id={item.id}
                    image={item.image}
                    title= {item.title}
                    singer= {item.singer}
                    listen={item.listen}
                    link={item.link}
                    audio={item.audio}
                    wishlist={item.wishlist}
                  />
                ))}
              </>
            )}
            {/* End item */}
          </div>
        </div>
      </div>
		</>
	)
}

