// function IndexPage() {
//     return <div>Hello World Next - Typescript - Express</div>;
// }

// export default IndexPage;

// pages/index.js

import React from 'react';
import fetch from 'isomorphic-unfetch'; // 서버/클라이언트에서 동작하는 fetch

const Home = ({ data }: any) => {
    return (
        <div>
            <h1>Server Side Rendering with Next.js</h1>
            <ul>
                {data.map((item: { id: React.Key | null | undefined; title: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
};

// 서버에서 데이터 가져오기
Home.getInitialProps = async () => {
    // 여기서는 간단한 예시로 JSONPlaceholder의 데이터를 가져옵니다.
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    return { data };
};

export default Home;


