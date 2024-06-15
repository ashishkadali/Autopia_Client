import React, { useState } from 'react'
import { coustmerServiceEntry } from '../../api/postApi';
import { onError, onSuccess } from './toaster';


export default function PopUpComponent({closepopup,mobileNumber}) {

    const [product,setProduct] = useState(null);
    const [typeofservice, setTypeOfService] = useState(null);
    const [brand,setBrand] = useState(null)
    const [fromDate,setFromDate] = useState(null);
    const [toDate, setToDate] = useState(null);
  
  const [flags ,setFlags] = useState({
      product :false,
      typeofservice : false
    });


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

      const resetState =()=>{
        console.log("hiiii");
        setFlags({})
        setProduct(null);
        setTypeOfService(null);
        setBrand(null);
        setFromDate(null);
        setToDate(null);
        closepopup()
      }

      const saveData =(e)=>{
        // e.preventDefault();
        try {
          const body= {}
          
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
         
            mobileNumber,
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
          coustmerServiceEntry(data).then((res)=>{
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
    <div className="popup-overlay">
    <div className="popup-content">
      <h4 className='mb-4'>Popup Title</h4>
     
      <div className="form-row mb-3 p-0">
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
                <div className="form-in">
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

          <div className="form-row mb-3 p-0">
            <h5 className="title">Warranty</h5>
            <div className="row mt-3">
              <div className="col-md-4">
                <div className="form-in">
                  <label className="d-flex align-items-center">Brand</label>
                  <input type="text" onChange={(e)=>{setBrand(e.target.value)}}/>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-in">
                  <label className="d-flex align-items-center">From</label>
                  <input type="date" onChange={(e)=>{setFromDate(e.target.value)}}/>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-in">
                <label className="d-flex align-items-center">To</label>
                <input type="date" onChange={(e)=>{setToDate(e.target.value)}}/>
                </div>
              </div>
            </div>
          </div>
        

          <div className="form-row mb-3 p-0">
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
                  <div className="form-in">
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
    </div>
  </div>
  )
}
