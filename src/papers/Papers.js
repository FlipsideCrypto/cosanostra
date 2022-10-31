import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

import { fetchPapers } from "../hooks/usePapers";

import Meta from '../seo/Meta';

import useMousePosition from '../hooks/useMousePosition';

const Papers = () => {
    const title = "papers | cosanostra";
    const description = "research & development of primitive & protocol for on-chain organizations, defi, and web3. explore value-driven on-chain primitives by crypto developers & value-creating products by web3 operators.";

    const query = useQuery("papers", fetchPapers);

	const [ref, mousePosition] = useMousePosition();

    useEffect(() => {
		document.documentElement.style.setProperty('--x', `${mousePosition.left}%`);
		document.documentElement.style.setProperty('--y', `${mousePosition.top}%`);
	}, [mousePosition]);

    return (
        <>
            <Meta title={title} description={description} />

            <div className="paper" ref={ref}>
                <div className="content mini">
                    <div className="content__layer__text">
                        <div className="container">
                            <h1>Research papers published by the cosanostra collective.</h1>
                        </div>
                    </div>
                    <div className="content__layer__one"></div>
                </div>

                <div className="container">
                    <div className="papers__list">
                        {query?.data && query?.data.map((paper, index) => (
                            <Link to={`/papers/${paper.filename}`} key={index}>
                                <h2>{paper.attributes.title}</h2>
                                <p>{paper.attributes.description}</p>
                                <p>{paper.attributes.date} | {paper.attributes.author}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Papers;