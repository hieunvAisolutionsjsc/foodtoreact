import React, { useState } from 'react'
import Food from '../../../common/food';

export default function FormAdd(props) {
  const {  handleOpenAdd , isAdd , setListFood ,  handleSubmit} = props;
  const food = new Food()
  const [dataForm , setDataForm ] = useState({

  })
  const handleOnchange =(e)=>{
    const name = e.target.attributes["name"].value ; 
    if(e.target.attributes["type"].value === "file"){
      const file = e.target.files[0];
      const reader = new FileReader();
    reader.addEventListener("load", function (result) {
      // convert image file to base64 string
      setDataForm(prevState =>{
        return {
          ...prevState , 
          [name] :  result.target.result,
        }
      })
      }
    )
  
    if (file) {
      reader.readAsDataURL(file);
    }
     }
  else{
    setDataForm(prevState =>{
      return {
        ...prevState , 
        [name] :  e.target.value,
      }
    })
  }
  console.log(dataForm)
  }
  const handleSubmitAdd =(e )=>{
    e.preventDefault();
 
    const dataSRes = {
        name : dataForm.nameres , 
        adddress : dataForm.address
    }
    delete dataForm.nameres ; 
    delete dataForm.adddress ; 
    const newData = {...dataForm , dataSRes};
    console.log("first")
    setListFood(prevState=>{
      
      const data = [ ...prevState ,newData]
        return data;
    })
   
    food.setFood(newData) ; 
    handleOpenAdd()
}
  
  return (
    <div className={ isAdd === true ? "formadd addactive" : "formadd"  } id="formadd">
   
    <div className="container"  >
        <form action="" id="formadd" onSubmit={e=> e.preventDefault()} >
           <div className="formadd__item file ">
            <label htmlFor= "bigfile">Chose image(big)</label >
             <input type="file"  
                   name="imgbig"
                   id="d"
                   onChange={handleOnchange} />
             <div className="file__img" id="imgbig">
             {
              dataForm.imgbig && <img src={dataForm.imgbig}  />
             }
             </div>
           </div>
           <div className="formadd__item file ">
            <label htmlFor="smailfile" >Chose image(smail)</label >
             <input type="file" 
                    name="imgsmail" 
                    id="" 
                    className="form__input2"
                    onChange={handleOnchange}
                    />
             <div className="file__img smail" id="imgsmail">
             {
              dataForm.imgsmail && <img src={dataForm.imgsmail}  />
             }
             </div>
           </div>
           <div className="formadd__item">
            <input type="text"
                    className="form__input" 
                    id="name" 
                    name="name" 
                    placeholder=""
                     required=""
                     onChange={handleOnchange}
                     />
<label htmlFor="" className="form__label">Name</label>
           </div>
           <div className="formadd__item">
           
            <input type="text"
                    className="form__input" 
                    id="dc" 
                    name="dc" 
                    placeholder="" 
                    required="" 
                    onChange={handleOnchange}
                    />
            <label htmlFor="" className="form__label"> Describe(Full)</label>
           </div>
           <div className="formadd__item">
           
            <input type="text" 
                   className="form__input" 
                   id="dc2" 
                   name="dc2" 
                   placeholder="" 
                   required=""
                   onChange={handleOnchange}
                   />
            <label htmlFor="" className="form__label">Describe(Short)</label>
           </div>
           <div className="formadd__item">
           
            <input type="number" 
                   className="form__input" 
                   id="price" 
                   name="price" 
                   placeholder="" 
                   required="" 
                   onChange={handleOnchange}
                   />
            <label htmlFor="" className="form__label">Price </label>
           </div>
           <div className="formadd__item">
           
            <input type="text"
             className="form__input" 
             id="contry" 
             name="contry" 
             placeholder="" 
             required="" 
             onChange={handleOnchange}
             />
            <label htmlFor="" className="form__label"> Country</label>
           </div>
       
           <div className="ncc">
            <p>
                Restaurant</p>
           <div className="formadd__item">
            <input type="text"
                   className="form__input" 
                   id="adress" 
                   name="address" 
                   placeholder="" 
                   required=""
                   onChange={handleOnchange}
                   />
<label htmlFor="" className="form__label"> Address</label>
           </div>
           <div className="formadd__item">
            
            <input type="text" 
                   className="form__input" 
                   id="nameres" 
                   name="nameres" 
                   placeholder="" 
                   required=""
                   onChange={handleOnchange}
                    />
            <label htmlFor="" className="form__label">Name</label>
           </div>
        </div>
           <div className="formadd__item btn">
              <button type="submit" onClick={handleSubmitAdd}>Save</button>
              <button id="cancel" onClick={handleOpenAdd}>Cancel</button>
           </div>
        </form>
    </div>
</div>
  )
}
