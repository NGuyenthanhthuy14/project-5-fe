import Section3 from "./Section3";
import Section1 from "./Section1";
import Title from "@/app/components/title/Title";
import Section2 from "./section2";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function SongDetailPage({params}: any) {

  const { id } = await params
  
  return (
    <>
      {/* section1 */}
      <Section1 id={id}/>

      {/* Lời Bài Hát */}
      <Section2 id={id}/>

      {/* Danh mục bài hát */}
      <Section3 id={id}/>
    </>
  );
}
