import React, { useEffect, useState } from 'react'

export default function FormPay({handleMess}) {
  const getTT  = async(url) =>{
    const data = await fetch(url) ;
    return await data.json();
}
  const [listLocation , setListLocation] =useState({
    tp : [] , 
    qh : [] , 
    px : []
  })
const [location , setLocation] = useState({
  tp :{} , 
  qh : {} , 
  px : {}
});
useEffect(
  ()=>{
      getTT("https://api.mysupership.vn/v1/partner/areas/province")
      .then((result)=> {
         const data = result.results ; 
         setListLocation(prevState=>{

          return {
            ...prevState , 
            tp : data,
          }
         })
      if( location.tp.code){
        console.log("first1")
          getTT(`https://api.mysupership.vn/v1/partner/areas/district?province=${location.tp.code}`)
         .then((result)=> {
            const data = result.results ; 
            setListLocation(prevState=>{
   
             return {
               ...prevState , 
               qh : data,
             }
            })
          })
         }
      if( location.qh.code){
       console.log("first 2")
          getTT(`https://api.mysupership.vn/v1/partner/areas/commune?district=${location.qh.code}`)
          .then((result)=> {
             const data = result.results ; 
             setListLocation(prevState=>{
    
              return {
                ...prevState , 
                px : data,
              }
             })
           })
         }
         
        
      })
  }
  , [location])
  const handleOnchange =(e)=>{
    const value = e.target.value ; 
    const name = e.target.name ; 
    setLocation(prevState =>{
      return {
        ...prevState ,

        [name] : {
          code :  value
        }
      }
    })
    }
  return (
    <div className="formpay">
        
    <form action="">
        <div className="container" id="address">
        <div className="selectTp">
            <p>Thành phố</p>
            <select name="tp" className="select"  onChange={handleOnchange} id="TP">
              {
                listLocation.tp.map((item , index)=>{
                  return <option 
                  key={index}
                  className="option" 
                  value={item.code}>{item.name}</option>
                })
              }
            </select>
          
            </div>
            <div className="selectTp" >
                <p>Huyện(Quận)</p>
                <select name="qh" className="select"  onChange={handleOnchange} id="QH">
                {
                  listLocation.qh.map((item , index)=>{
                    return <option 
                    key={index}
                    className="option"
                     value={item.code}>{item.name}</option>
                  })
                }
                      </select>
              
                </div>
                <div className="selectTp">
                    <p>Phường (Xã)</p>
                    <select name="px" className="select" onChange={handleOnchange}  id="X">
                   {
                    listLocation.px.map((item , index)=>{
                      return <option
                      key={index} 
                      className="option"
                       value={item.code}>{item.name}</option>
                    })
                   }
                   </select>
                  
                    </div>
                    <div className="div">
                        <p >Địa chỉ</p>
                        <input type="text" name="" className="select" id="" />
                    </div>
                    </div>
                  
                    
    </form>
      <div className="pay">
    <button id="paybtn" onClick={()=>{
      handleMess("Pay Done")
    }}>Thanh toán</button>
</div>
</div>
  )
}
