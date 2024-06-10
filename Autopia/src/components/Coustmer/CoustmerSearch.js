import React, { useState } from 'react'
import LeftMenu from '../LeftMenu'
import { onError } from '../utility/toaster';
import { coustmerSearch } from '../../api/postApi';
import CousterSearchproducts from './CousterSearchproducts';

export default function CoustmerSearch() {
  const [search,setSearch] = useState(null);
  const [PPF,setPPF] =useState(null);
  const [Ceramic,setCeramic] = useState(null);
  const [Waterwash,setWaterwash] = useState(null);
  const [name,setName] = useState(null);
  const [email,setEmail] = useState(null);
  const [mobileNumber,setMobileNumber] = useState(null);
  const [carNumber,setCarNumber]=useState(null);
  const [carModel,setCarModel] = useState(null);
  const [carName,setCarName] = useState(null);


  const searchNumber =() =>{
    try {
      const regex = /^[0-9]{10}$/;
      // regex.test(search) == false
      if(search == null ){
        console.log("enter valid number");
        onError("enter valid number");
        return
      }

      const body = {
        "mobileNumber": search
      };
      
      coustmerSearch(body).then((res)=>{
        console.log(res);
        const details = res.data.details
        setPPF(res.data.PPF);
        setCeramic(res.data.Ceramic);
        setWaterwash(res.data.Waterwash);
        ///////////////////////////////////////////
        setName(details.name);
        setEmail(details.email);
        setMobileNumber(details.mobileNumber);
        setCarName(details.carName);
        setCarNumber(details.carNumber);
        setCarModel(details.carModel);
      
      }).catch((err)=>{
        console.log(err);
      })

    } catch (error) {
      if(error){
        console.log(error);
      }
    }
  }
  return (
    <>
    <LeftMenu/>
   
    <div className="rightBody p-4">
    <div className="form-row mb-4">
  
        <h5 className="title">Search</h5>
        <div className="col-md-3">
              <label>search</label>
              <input type="text"  value ={search} onChange={(e)=>setSearch(e.target.value)}placeholder="Search Number.."/>
              <button onClick={searchNumber}>search</button>
        </div>
        
        <div className="row">

          <div className="col-md-6">
            <div className="form-in mb-3">
              <label>Name</label>
                {name && <><p>{name}</p></>}
              {/* <input type="text" placeholder="Enter Name.."/> */}
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-in mb-3">
              <label>Email</label>
              {email && <><p>{email}</p></>}
              {/* <input type="text" placeholder="Enter Email.."/> */}
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-in">
              <label>Mobile Number</label>
              {mobileNumber && <><p>{mobileNumber}</p></>}
              {/* <input type="text" placeholder="Enter Mobile Number.."/> */}
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-in">
              <label>Car Name</label>
              {carName && <><p>{carName}</p></>}
              {/* <input type="text" placeholder="Enter Car Model.."/> */}
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-in">
              <label>Car Model</label>
              {carModel && <><p>{carModel}</p></>}
              {/* <input type="text" placeholder="Enter Car Model.."/> */}
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-in">
              <label>Car Number</label>
              {carNumber && <><p>{carNumber}</p></>}
              {/* <input type="text" placeholder="Enter Car Model.."/> */}
            </div>
          </div>
        </div>
    
    </div>

    <CousterSearchproducts PPF={PPF} Ceramic={Ceramic} Waterwash={Waterwash} number={mobileNumber}/>
    
  </div>
  </>
  )
}
