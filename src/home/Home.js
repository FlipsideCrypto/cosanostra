import { useEffect } from 'react';

import useMousePosition from '../hooks/useMousePosition';

const Home = () => {
	const [ref, mousePosition] = useMousePosition();

    useEffect(() => {
		document.documentElement.style.setProperty('--x', `${mousePosition.left}%`);
		document.documentElement.style.setProperty('--y', `${mousePosition.top}%`);
	}, [mousePosition]);

    return (
        <div className="content" ref={ref}>
            <div className="content__layer__text">
            <div className="container">
                    <h1>a collective building value-driven on-chain primitives.</h1>
                </div>
            </div>
            <div className="content__layer__one"></div>
        </div>
    );
}

export default Home;