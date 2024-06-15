import React, { useContext, useState } from 'react'
// import { Data } from '../context/DataProvider'


const About = () => {
  // const context = useContext(Data)
  

const [formData,setFormData]=useState({
  title:"",
  description:"",
  thumbnail:"",
});


const handelInputChange =(ev) =>{
  const {name , value} = ev.target
  setFormData({
    ...formData,
    [name]:value,
  });
};

const handelThumbnail=(ev)=>{
  if(ev.target.files){
    setFormData({
      ...formData,
      thumbnail:ev.target.files[0]
    })
  }}

const onFormSubmit =(ev) =>{
  debugger
  ev.preventDefault();
  if(formData.title && formData.description && formData.thumbnail)
    {
      const form = new FormData();
      form.append("title", formData.title);
      form.append("description", formData.description);
      form.append("thumbnail", formData.thumbnail);


      fetch("http://localhost:4001/category",{
        method: "POST",
        body: form,
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) =>{
        console.log(error);
      })
    }
}

  return (
    // <div>
    //   Count: {context.count}
    // </div>
    <>
    <form onSubmit={onFormSubmit }>

      <div>
        <label >title</label>
        <input type="text" name="title" onChange={handelInputChange} />
      </div>
      <div>
        <label >description</label>
        <input type="text" name='description' onChange={handelInputChange} />
      </div>
      <div>
        <label>thumbnail</label>
      <input type="file" name="thumbnail" onChange={handelThumbnail} />
      </div>
      <div>
         <input type="submit"  value="Save"/>
      </div>
    </form>
    </>
  )
}

export default About