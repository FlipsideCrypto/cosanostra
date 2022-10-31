import { useEffect, useState } from 'react';

const useScroll = () => { 
    const [scroll, setScroll] = useState(0); 
    const handleScroll = () => { 
        setScroll(window.scrollY); 
    }; 

    useEffect(() => { 
        window.addEventListener('scroll', handleScroll); 
        return () => { 
        window.removeEventListener('scroll', handleScroll); 
        }; 
    }, []); 

    return scroll; 
}

export default useScroll;