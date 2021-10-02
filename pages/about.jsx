import Link from "next/link"
import Card from "../components/Card"
import Title from "../components/Title"


export default function about({data}) {
    return (
        <div style={{width:"100%", display:"block"}}>
            <Title title="About Us" content="about page of nextjs" />
            {/* <Card data={data}/> */}
            <div style={{display:"flex", flexWrap:"wrap"}}>
                {data.map((val,ind)=>(<Card key={ind} val={val}/>))}
            </div>

            <div style={{ width:"100%", textAlign:"center", margin:"4vh auto"}}>
            <Link href="/" >
                Goback
            </Link>
            </div>

        </div>
    )
}

const token="80015969ed172d6a27896fbebec4111a88291912cd1bbab35983bdfcbb002429098a54601328a153aa767b62068ab110"

export const getStaticProps = async ()=>{
    // const res = await fetch(`https://airportdb.io/api/v1/airport/OPIS?apiToken=${token}`);
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
    const data = await res.json()
    return {
        props:{
            data
        }
    }
}