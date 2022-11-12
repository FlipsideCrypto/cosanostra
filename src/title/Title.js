import { useEffect } from 'react';

const Title = ({ title, mousePosition }) => {
    useEffect(() => {
        document.documentElement.style.setProperty('--x', `${mousePosition.left}%`);
        document.documentElement.style.setProperty('--y', `${mousePosition.top}%`);
    }, [mousePosition]);

    return (
        <div className="content mini">
            <div className="content__layer__text">
                <div className="container">
                    <h1>{title}</h1>
                </div>
            </div>
            <div className="content__layer__one"></div>
        </div>
    )
}

export default Title;