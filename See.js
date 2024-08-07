import React, { useEffect, useState } from 'react'
import data from './db.json'
import Pagination from './Pagination'

const See = () => {
  const[search,setSearch]=useState('')
  const [perpage,setPerpage]=useState([]);
  useEffect(()=>{
    setPerpage(data.slice(0,6));
  },[])
 const searchText=(e)=>{
  setSearch(e.target.value)
 }

   const pageHandler = (pageNumber)=>{
    setPerpage(data.slice((pageNumber*10)-10,pageNumber*10))
   } 
  
  return (
    <section className='py-4 cotainer'>
        <div className='row justify-content-center'>
          <div className='col-12 mb-5'>
            <div  className='mb-3 col-4 max-auto text-center'>
            <lebal className='form-lable h4'>Search</lebal>  
              <input type='text'className='form-control' value={search} onChange={ searchText}/>

              
            </div>
          </div>
            { perpage.//filter(item=>item.title.toString().toLowerCase().includes(search.toString().toLowerCase()))
            
            filter((val)=>{
            if(search===""){
  return val;
            } else if(
            val.title.toLowerCase().includes(search.toLowerCase())
          ){
            return val
         }
            })
            .map((item,index)=>{
                return(
                    <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>
                    <div className='card p-0 overflow-hidden h-100 shadow'>
                      <img src={item.img} className='card-img-top'/> 
                      <div className='card-body'>
                        <h5 className='card-title'>{item.title}</h5>
                        <p className='card-text'>{item.brand}</p>
                        <h6>{item.price}</h6>
                        </div> 
                    </div>
                    </div>
                )
            })

            }
       
        </div>
<Pagination data={data} pageHandler={pageHandler}/>
    </section>
  )
}

export default See
