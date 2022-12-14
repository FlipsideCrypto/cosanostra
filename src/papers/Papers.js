import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

import { fetchPapers } from "../hooks/usePapers";

import Meta from '../seo/Meta';

import Title from '../title/Title';

import useMousePosition from '../hooks/useMousePosition';

const Papers = () => {
    const title = "papers | cosanostra";
    const description = "research & development of primitive & protocol for on-chain organizations, defi, and web3. explore value-driven on-chain primitives by crypto developers & value-creating products by web3 operators.";

    const pageTitle = "Research papers published by the cosanostra collective.";

    const query = useQuery("papers", fetchPapers);

	const [ref, mousePosition] = useMousePosition();

    return (
        <>
            <Meta title={title} description={description} />

            <div className="paper" ref={ref}>
                <Title title={pageTitle} mousePosition={mousePosition} />

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