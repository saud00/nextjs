import Head from "next/head";
import React from 'react'

export default function head({title , content}) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name={title} content={content}  />
            </Head>
        </div>
    )
}
