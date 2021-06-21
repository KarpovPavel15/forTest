import './App.css';
import { useState } from 'react';
import { ObjectsList } from './ObjectsList';
import { SocketChat } from './socketChat';

function App() {
    const [counter,setCounter] = useState(0)
    const [isShowWindowPortal,setIsShowWindowPortal] = useState(false)
    const objects = [{name:"acv",type:"car", backgroundColor: "blue"},{name:"gdfgfdg",type:"mobile", backgroundColor: "white"},{name:"121313",type:"air", backgroundColor: "red"},{name:"nbvnvbn",type:"ship", backgroundColor: "black"}]
    // const externalWindow = null;
    const [currentInfo,setCurrentInfo] = useState([])
    const containerEl = document.createElement('div');

    const toggleWindowPortal = info => {
        setIsShowWindowPortal(!isShowWindowPortal);
        !isShowWindowPortal && setCounter(counter+1)
        setCurrentInfo(...objects.filter(el=>el.name===info))
    }

    return (
        <div>
            {/*<h1>Counter: {counter}</h1>*/}


            <ObjectsList containerEl={containerEl} currentObject={currentInfo} objects={objects} toggleWindowPortal={toggleWindowPortal} isShowWindowPortal={isShowWindowPortal}
                          counter={counter} setIsShowWindowPortal={setIsShowWindowPortal}/>
                          <SocketChat/>
        </div>
    );
}

export default App;
