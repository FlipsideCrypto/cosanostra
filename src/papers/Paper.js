import Markdown from 'markdown-to-jsx';

import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import { fetchPaper } from "../hooks/usePapers";

import Meta from '../seo/Meta';

import useMousePosition from '../hooks/useMousePosition';

import "./Paper.css"

const Paper = () => {
    const { slug } = useParams();

    const query = useQuery(["paper", `${slug}.md`], fetchPaper);

    const [ref, mousePosition] = useMousePosition();

    useEffect(() => {
		document.documentElement.style.setProperty('--x', `${mousePosition.left}%`);
		document.documentElement.style.setProperty('--y', `${mousePosition.top}%`);
	}, [mousePosition]);
    
    return (
        <>
            <Meta
                title={`${
                    query?.data?.attributes 
                    ? `${query?.data?.attributes?.title.toLowerCase()} | `
                    : ``
                }cosanostra`}
                description={`${
                    query?.data?.attributes?.description 
                    ? query?.data?.attributes?.description 
                    : query?.data?.content.slice(0, 200)
                }`}
            />

            <div className="paper" ref={ref}>
                <div className="container">
                    <div className="content mini">
                        <div className="content__layer__text">
                            <h1>{query?.data?.attributes?.title}</h1>
                        </div>
                        <div className="content__layer__one"></div>
                    </div>
                
                    <h4 className="attributes">{query?.data?.attributes?.date} | {query?.data?.attributes?.author}</h4>

                    {query?.data?.content && <Markdown className="markdown" options={{}}>
                        {query.data.content}
                    </Markdown>}
                </div>
            </div>
        </>
    );
}

export default Paper;