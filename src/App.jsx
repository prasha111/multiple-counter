import { useCallback, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const schema = {
  count:10,
  pause:false
}
function App() {
  const [count, setCount] = useState(0)
  const [countData, setCountData] = useState(new Array(16).fill(schema))
  const [pauseData, setPauseData] = useState([])
  console.log(countData)
  useEffect(()=>{
    let sc = [];
   
     let timer =  setInterval(()=>{
        //   countData?.forEach((each, index)=>{
        //   if(each.count>0){
        //     let one = each;
        //     one.count = one.count-1
        //     sc.push(one)
        //   }
        // })
      setCountData((prev)=>{
        const one = prev.map((some,index)=>{
          if(some.count>0 && (some.pause === false) ){
              return {...some, count:some.count-1}
          }
          else{
            return {...some}
          }
        })
        return one
      })
        // for(let i = 0 ; i<countData.length;i++){
        //   if(countData[i].count>0){
        //     //let one = countData[i];
        //     countData[i].count = countData[i].count-1
        //     sc.push(countData[i])
           
        //   }
        // }
        console.log(sc, "sc")
        //setCountData(sc)
    
      },1000)
    return ()=>{
      clearInterval(timer)
    }
   
  }, [countData])
  const handleAdd = useCallback(()=>{
    console.log("clicl")
    setCountData((prev)=>{
      return [...prev,schema]
    })
  }, [])
  const handlePause = (i) =>{
    setCountData((prev)=>{
      let one = prev.map((some, index)=>{
        if(index === i){
          return {...some, pause:!some.pause}
        }
        else{
          return {...some, pause:some.pause}
        }
      })
      console.log(one, "on")
      return one
    })
  }
  console.log(countData,"c")
  return (
    <>
     <button onClick={handleAdd}>
        Add one
      </button>
      <div className='layout' >
     
       {countData.map((each, index)=>{
        return(
          <div onClick={()=>{handlePause(index)}} className='box'>
          {each.count}
          </div>
        )
       })}
      </div>
    </>
  )
}

export default App
