import Section2 from "./Section2";
import Section1 from "./Section1";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function SingerDetailPage({ params }: any) {
  const { id } = params

  return (
    <>
      <Section1 id={id}/>

      {/* Danh sách bài hát */}
      <Section2 id={id}/>
    </>
  );
}
