import React, { useEffect, useState } from 'react'
import { useWindowScroll } from 'react-use';
import { BsBoxArrowInUp } from 'react-icons/bs';
const ScrollToTop = () => {
    const {y: pageYOffset} = useWindowScroll();
    const [visible,setVisible] = useState(false);
    useEffect(() => {
        if(pageYOffset > 400) {
            setVisible(true)
        }
        else{
            setVisible(false)
        }
    },[pageYOffset])
    const scrollToTop = () => window.scrollTo({top: 0, behavior: "smooth"})
    if(!visible) {
        return false;
    }
    return (
        <div className="scroll-to-top cursor-pointer text-center" onClick={scrollToTop} >
            <BsBoxArrowInUp className="icon" />
        </div>
    )
}

export default ScrollToTop;
