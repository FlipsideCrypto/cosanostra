import Markdown from 'markdown-to-jsx';

import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import { fetchPaper } from "../hooks/usePapers";

import Meta from '../seo/Meta';
import Title from '../title/Title';
import PaperCode from './PaperCode';

import useMousePosition from '../hooks/useMousePosition';

import "./Paper.css"

const Paper = () => {
    const { slug } = useParams();

    const query = useQuery(["paper", `${slug}.md`], fetchPaper);

    const [ref, mousePosition] = useMousePosition();

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
                    <Title title={query?.data?.attributes?.title} mousePosition={mousePosition} />
               
                    <h4 className="attributes">{query?.data?.attributes?.date} | {query?.data?.attributes?.author}</h4>

                    {query?.data?.content && <Markdown className="markdown" options={{
                        overrides: {
                            code: {
                                component: PaperCode,
                            }
                        }
                    }}>
                        {query.data.content}
                    </Markdown>}
                </div>
            </div>
        </>
    );
}

export default Paper;