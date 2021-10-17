import { useRouter } from 'next/router'
import React from 'react'

function Article({data}) {
    // const Router = useRouter();
    // const {id} = Router.query
    return (
        <div>
            <h2>{data.id}</h2>
            <div>{data.title}</div>
            <div>{data.body}</div>
        </div>
    )
}

export const getServerSideProps=async(context)=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const data = await res.json()
    console.log(data)
    return{
        props:{
            data
    }
}
}

export default Article
