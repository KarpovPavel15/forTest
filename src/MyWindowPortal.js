import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'

export const MyWindowPortal = ({isShowWindowPortal, children, containerEl,externalWindow}) => {

    useEffect(()=>{
       !isShowWindowPortal && window?.close();
    },[isShowWindowPortal])

    useEffect(()=>{
        window.open('', '', 'width=600,height=400,left=200,top=200')?.document.body.appendChild(containerEl);
        // STEP 4: append the container <div> (that has props.children appended to it) to the body of the new window

    },[])

    return ReactDOM.createPortal(children, containerEl);
}
