import React from 'react'

export const Item = ({ element,containerEl,setWindow, toggleWindowPortal, isShowWindowPortal, externalWindow, counter, setIsShowWindowPortal }) => {

    const newPortal = (outerText) => {
        toggleWindowPortal(outerText)
        // window.open('', '', 'width=600,height=400,left=200,top=200')?.document.body.appendChild(containerEl);
        // STEP 4: append the container <div> (that has props.children appended to it) to the body of the new window

    }

    return(
        <div>
            <div onClick={event=> newPortal(event.target.outerText) } >
                <div>{element?.name}</div>
            </div>
        </div>

    );
}
