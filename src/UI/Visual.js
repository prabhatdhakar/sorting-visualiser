import React,{useState} from "react";
import "./Visual.css";

const bubble = [9,8,6,5,3,1];
const idList = ["node1","node2","node3","node4","node5","node6"];
let classList = ["node","node","node","node","node","node"];

const Visual = () =>{
    
    const [list, setBubbleSort] = useState(bubble);
    const [cname,setClass] = useState(classList);
    const classHandler = (k) =>{
        const newClass = [...cname];
        for(let l=0;l<6;l++)
        {
            if(l==k)
            {
              newClass[k]=newClass[k]+" right-curve";
              newClass[k+1]=newClass[k+1]+" left-curve";
            }
        }
        setClass([...newClass]);
        
    }
    const bubbleSort = () =>{

        const newArray = [...list];

        const clearTime =(intervalId) => {
            clearInterval(intervalId);
        }

        let n=6;
        for(let i=0;i<n;i++)
        {
            let j=0;
          
            const intervalId = setInterval(()=>{  
                 if(newArray[j]>newArray[j+1])
                 {
                    classHandler(j);
                    
                    let temp;
                    temp = newArray[j];
                    newArray[j] = newArray[j+1];
                    newArray[j+1] = temp;
                    
                    temp = idList[j];
                    idList[j] = idList[j+1];
                    idList[j+1] = temp;
                    
                 }
                 
                setBubbleSort([...newArray]);
                j++;
                if(j>=n-i)
                {
                    clearTime(intervalId);
                }
             }, 2000);
            
        };     
    };
    return(
        <div className="main">
            <div className={cname[0]} id={idList[0]}>{list[0]}</div>
            <div className={cname[1]} id={idList[1]}>{list[1]}</div>
            <div className={cname[2]} id={idList[2]}>{list[2]}</div>
            <div className={cname[3]} id={idList[3]}>{list[3]}</div>            
            <div className={cname[4]} id={idList[4]}>{list[4]}</div>
            <div className={cname[5]} id={idList[5]}>{list[5]}</div>
            <button onClick={bubbleSort}>Click here</button>
        </div>
    );
}
export default Visual;