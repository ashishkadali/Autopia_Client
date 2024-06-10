import React, { useEffect, useMemo, useRef, useState } from 'react'
import LeftMenu from '../LeftMenu'
import { coustmerEntry } from '../../api/postApi';
import { onError, onSuccess } from '../utility/toaster';

export default function CoustmerEntry() {

  const [name,setName] = useState(null);
  const [email,setEmail] = useState(null);
  const [mobileNumber,setMobileNumber] = useState(null);
  const [carNumber,setCarNumber]=useState(null);
  const [carModel,setCarModel] = useState(null);
  const [carName,setCarName] = useState(null);
  const [product,setProduct] = useState(null);
  const [typeofservice, setTypeOfService] = useState(null);
  const [brand,setBrand] = useState(null)
  const [fromDate,setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

const [flags ,setFlags] = useState({
    name : false,
    email :false,
    mobileNumber :false,
    carNumber : false,
    carModel :false,
    carName :false,
    product :false,
    typeofservice : false
  });

console.log(name);

    const handelProduct = (value,isChecked) =>{
      if(isChecked){
        setProduct(value);
        const flagsData = {
          ...flags,
          product : false
        }
        setFlags(flagsData);
      }else{
        setProduct(null)
      }
    };

    function handelService(value,isChecked){
      
      if(isChecked){
        setTypeOfService(value)
        const flagsData = {
          ...flags,
          typeofservice : false
        }
        setFlags(flagsData);
      }else{
        setTypeOfService(null)
      }
    
    };

    const emailPattern = /[a-zA-Z0-9 _.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;

    const resetState =()=>{
      console.log("hiiii");
      setFlags({})
      setName(null);
      setEmail(null);
      setMobileNumber(null);
      setCarNumber(null);
      setCarModel(null);
      setCarName(null);
      setProduct(null);
      setTypeOfService(null);
      setBrand(null);
      setFromDate(null);
      setToDate(null);
     
    }

    const saveData =(e)=>{
      // e.preventDefault();
      try {
        const body= {}
      

        if (!name) {
          body.name = true;
      }
      if (!email || !emailPattern.test(email)) {
          body.email = true;
      }
      if (!mobileNumber || mobileNumber.length != 10) {
          body.mobileNumber = true;
      }
      if (!carModel) {
          body.carModel = true;
      }
      if (!carName) {
          body.carName = true;
      }
      if (!carNumber) {
          body.carNumber = true;
      }
      if (!product) {
          body.product = true;
      }
      if (!typeofservice) {
          body.typeofservice = true;
      }
      if(Object.keys(body).length > 0){
          setFlags(body);
          return;
      }
        const data ={
          name,
          email,
          mobileNumber,
          carModel,
          carName,
          carNumber,
          product,
          brand,
          typeofservice,
        };
        if(fromDate){
          data.fromDate = new Date(fromDate)
  
        }
        if(toDate){
          data.toDate = new Date(toDate)
        }
        
        console.log(data);
        coustmerEntry(data).then((res)=>{
          if(res.status == 200){
            resetState();
            onSuccess(res.data)
          }else if(res.status == 401){
            onError(res.data)
          }
        })
      } catch (error) {
        console.log(error);
      }
  
    }
  

  return (
  <>
    <LeftMenu/>

    <div className="rightBody p-4">
        {/* <form onSubmit={saveData}> */}
          <div className="form-row mb-4">
            <h5 className="title">Basic Details</h5>
            <div className="row">
              <div className="col-md-6">
                <div className="form-in mb-3">
                  <label>Name</label>
                  <input type="text" placeholder="Enter Name.."  value={name} onChange={(e)=>{setName(e.target.value)}}/>
                </div>
                {flags.name && <p style={{color : 'red'}} >Enter the feild </p>}
              </div>
              <div className="col-md-6">
                <div className="form-in mb-3">
                  <label>Email</label>
                  <input type="text" placeholder="Enter Email.." value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                {flags.email && <p style={{color : 'red'}} >Enter the feild </p>}

                </div>
              </div>
              <div className="col-md-6">
                <div className="form-in">
                  <label>Mobile Number</label>
                  <input type="text" placeholder="Enter Mobile Number.." value={mobileNumber}  onChange={(e)=>{setMobileNumber(e.target.value)}}/>
                {flags.mobileNumber && <p style={{color : 'red'}} >Enter the valid number </p>}

                </div>
              </div>
              <div className="col-md-6">
                <div className="form-in">
                  <label>Car Name</label>
                  <input type="text" placeholder="Enter Car Model.." value={carName}  onChange={(e)=>{setCarName(e.target.value)}}/>
                    {flags.carName && <p style={{color : 'red'}} >Enter the feild </p>}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-in">
                  <label>Car Model</label>
                  <input type="text" placeholder="Enter Car Model.." value={carModel} onChange={(e)=>{setCarModel(e.target.value)}}/>
                  {flags.carModel && <p style={{color : 'red'}} >Enter the feild </p>}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-in">
                  <label>Car Number</label>
                  <input type="text" placeholder="Enter Car Model.." value={carNumber} onChange={(e)=>{setCarNumber(e.target.value)}}/>
                  {flags.carNumber && <p style={{color : 'red'}} >Enter the feild </p>}
                </div>
              </div>
            </div>
          </div>

          <div className="form-row mb-4">
            <h5 className="title">Product</h5>
            {flags.product && <p style={{color : 'red'}} >Select one feild </p>}

            <div className="row mt-3">
              <div className="col-md-3">
                <div className="form-in">
                  <label className="d-flex align-items-center">
                    <input type="radio" value="PPF" name="product" onChange={(e)=>handelProduct(e.target.value, e.target.checked )}/> PPF
                  </label>
                  
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-in mb-3">
                  <label className="d-flex align-items-center"><input type="radio" name="product" value="Ceramic" onChange={(e)=>handelProduct(e.target.value, e.target.checked )}/> Ceramic</label>
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-in">
                  <label className="d-flex align-items-center"><input type="radio" name="product" value="Waterwash" onChange={(e)=>handelProduct(e.target.value, e.target.checked )}/> Water Wash</label>
                </div>
              </div>
            </div>
          
          </div>

          <div className="form-row mb-4">
            <h5 className="title">Warranty</h5>
            <div className="row mt-3">
              <div className="col-md-3">
                <div className="form-in">
                  <label className="d-flex align-items-center">Brand <input type="text" onChange={(e)=>{setBrand(e.target.value)}}/></label>
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-in mb-3">
                  <label className="d-flex align-items-center">From <input type="date" onChange={(e)=>{setFromDate(e.target.value)}}/> </label>
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-in">
                <label className="d-flex align-items-center">TO <input type="date" onChange={(e)=>{setToDate(e.target.value)}}/> </label>
                </div>
              </div>
            </div>
          </div>
        

          <div className="form-row mb-4">
              <h5 className="title">Types of Services</h5>
              {flags.typeofservice && <p style={{color : 'red'}} >Select one feild </p>}

              <div className="row mt-3">
                <div className="col-md-3">
                  <div className="form-in">
                    <label className="d-flex align-items-center">
                      <input type="radio" value="instalation" name="service" onChange={(e)=> handelService(e.target.value, e.target.checked)}/> Instalation</label>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-in mb-3">
                    <label className="d-flex align-items-center" ><input type="radio" name="service" value="maintance" onChange={(e)=> handelService(e.target.value, e.target.checked)}/> Maintance</label>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-in">
                    <label className="d-flex align-items-center"><input type="radio" name="service" value="repair" onChange={(e)=> handelService(e.target.value, e.target.checked)}/> Repair</label>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-in">
                    <label className="d-flex align-items-center"><input type="radio" name="service" value="clean" onChange={(e)=> handelService(e.target.value, e.target.checked)}/> Clean</label>
                  </div>
                </div>
              </div>
          </div>

          <div className="btn-row d-flex justify-content-end">
            <button className="btn-cancel me-2"  onClick={resetState}>Cancel</button>
            <button className="btn-add" onClick={saveData} >Add</button>
          </div>
      {/* </form> */}
      


    </div>
  </>

  )
}
