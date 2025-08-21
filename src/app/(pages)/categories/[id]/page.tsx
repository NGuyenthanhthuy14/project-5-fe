import Section1 from "./Section1";
import Section2 from "./Section2";

//eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
export default async function SongsByCategoryPage({ params } : any) {
  const { id } = await params;

  return (
    <>
      {/* Section 1 */}
        <Section1 id= {id}/>
      {/* End section 1 */}
    
      {/* Section 2 */}
        <Section2 id= {id}/>
      {/* End section 2 */}
    </>
  );
}
