import React from 'react'
import { GetStaticProps } from 'next'
import prisma from '../../lib/prisma'
import Layout from  '../components/Layout'

export const getStaticProps: GetStaticProps = async () => {
    const feed = [
        {
            id: "1",
            title: "Hello"
        }
    ];
    return {
        props: {feed},
        revalidate: 10
    }
}

type Props = {

}

const Test: React.FC<Props> = (props) => {
    return (<Layout>
        <div>
            <h1>Test</h1>
        </div>
    </Layout>)
}

export default Test