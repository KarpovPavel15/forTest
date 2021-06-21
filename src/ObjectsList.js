import React, { useEffect,useState } from 'react'
import { Item } from './Item';
import { MyWindowPortal } from './MyWindowPortal';

export const ObjectsList = ({objects,containerEl, toggleWindowPortal,currentObject, isShowWindowPortal, counter, setIsShowWindowPortal}) => {
    let externalWindow = null
    const setWindow = value => {
        externalWindow=value
    }

    return (
        <div>
            {objects?.map(el => <Item containerEl={containerEl} setWindow={setWindow} currentObject={currentObject} element={el} toggleWindowPortal={toggleWindowPortal} isShowWindowPortal={isShowWindowPortal} externalWindow={externalWindow}
                                         counter={counter}
                                         setIsShowWindowPortal={setIsShowWindowPortal}/>)}
            {isShowWindowPortal && (
                <MyWindowPortal containerEl={containerEl} isShowWindowPortal={isShowWindowPortal} externalWindow={externalWindow} setWindow={setWindow}>
                    <div style={{backgroundColor:`${currentObject?.backgroundColor}`}} >
                        <div>{currentObject?.name}</div>
                        <div>{currentObject?.type}</div>
                        <button onClick={() => {
                            externalWindow?.close()
                            setIsShowWindowPortal(false)
                        }} >
                            Close me!
                        </button>
                    </div>

                </MyWindowPortal>
            )}
        </div>
    );
}
