import React, { useState } from 'react'
import { CustomerSearchProductData } from './CoustmerSearchProductData';
import PopUpComponent from '../utility/PopUpComponent';


export default function CousterSearchproducts({PPF,Ceramic,WaterWash,number}) {
    const [tab,setTab] = useState("PPF");
    const [openPopup,setOpenPopUp] = useState(false);


    function closepopup(){
      setOpenPopUp(!openPopup)
    }
  return (
    <>
        <div className="form-row mb-4">
        <h5 className="title">Types of Services</h5>
        <div className="tab-row">
          <ul class="nav nav-tabs">
            <li className={tab === "PPF" ? "active" : ""} onClick={()=>setTab("PPF")}><a data-toggle="tab" href="#home">PPF</a></li>
            <li  className={tab === "Ceramic" ? "active" : ""} onClick={()=>setTab("Ceramic")} ><a data-toggle="tab" href="#menu1">Ceramic</a></li>
            <li  className={tab === "WaterWash" ? "active" : ""} onClick={()=>setTab("WaterWash")}><a data-toggle="tab" href="#menu2">Water Wash</a></li>
          </ul>

        <div class="tab-content">
            <div class="">
            {tab=="PPF" ? 
             <CustomerSearchProductData tab={tab} data={PPF} /> : 
             tab =="Ceramic" ?  < CustomerSearchProductData tab={tab} data={Ceramic} /> :
            <CustomerSearchProductData tab={tab} data={WaterWash} /> 
            }
            </div>
        </div>

          {
            number!= null && number.length >0  &&
        <div className="btn-row d-flex justify-content-end">
          {/* <button className="btn-cancel me-2" type="button">Cancel</button> */}
          <button className="btn-add" type="button" onClick={()=>setOpenPopUp(!openPopup)}>Add</button>
        </div>
        }


          {
            openPopup && <PopUpComponent  closepopup={closepopup} mobileNumber ={number}/>
          }

      </div>
    </div>
  </>
  )
}
