import useSWR from "swr";
import {fetcher} from "@/lib/utils";
import Loading from "@/components/Loading";
import React from "react";

const Articles = ({ articles }) => {
    // const {data, error} = useSWR("/artilcles", fetcher);
    // console.log("data", data);
    if (error) return <div>No se pudo cargar la lista de artículos</div>;
    if (!data) return <Loading/>;
    return (
        <ul>
            {articles.map((article) => (
                <li>
                    <Link href={`/myproducts/${article.id}`}>{article.title}</Link>
                </li>
            ))}
        </ul>
    );
};


export default Articles;







export async function getStaticProps() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/user`);
    const data = await res.json();

    const articles = data;
    console.log("data", data);

    return {
        props: {
            articles,
        },
    };
}




