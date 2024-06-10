import React, { useCallback, useEffect, useState } from 'react'
import LeftMenu from '../LeftMenu'
import {coustomerExperyDetails } from '../../api/postApi';
import {MessagePopUp} from '../utility/MessagePopUp';


export default function CoustmerMessage() {
  const [startDate, setStartDate] = useState(null);
  const [endDate,setEndDate] = useState(null);
  const [PPF,setPPF] = useState(null);
  const [Ceramic,setCeramic] = useState(null);
  const [mobileNumber,setmobileNumber] = useState(null);
  const [ppfPopUp,setppfPopUp] = useState(false);
  const [tab,setTab] = useState(null);
  const [name,setName] = useState(null);
  
  function getExpiryData(){
    try {
      const event = new Date();
        // event.setMonth(event.getMonth() - 6); // here we are seting date to last 6th month
      const lastSixMonth = event.getMonth();
      const lastSixMonthYear = event.getFullYear();

      const defaultstartDate = new Date(lastSixMonthYear,lastSixMonth , 1);
      const defaultendDate = new Date(lastSixMonthYear, lastSixMonth+1, 1);

      const body ={
        startDate: defaultstartDate,
        endDate:defaultendDate
      }

      coustomerExperyDetails(body).then((res)=>{
          if(res.status == 200){
            console.log(res.data);
            if(res.data.PPF.length > 0){
              // setPPF(res.data.PPF);
            }
            if(res.data.Ceramic.length > 0){
              // setCeramic(res.data.Ceramic);
            }
          }

      });

    } catch (error) {
      if(error){
        console.log(error);
      }
    }
}

  useEffect(()=>{

    if(PPF ==null || Ceramic == null){

      getExpiryData()
    }
  },[PPF,Ceramic]);




  function dateFormate(data){
    const date = new Date(data);
    const d = date.getDate();
    const m= date.getMonth();
    const y = date.getFullYear();

    return `${d}-${m}-${y}`
}

const openPop=(mobileNumber,data,name)=>{
  setppfPopUp(!ppfPopUp);
  setTab(data)
  setmobileNumber(mobileNumber);
  setName(name)
}

const closePop = () =>{
  setppfPopUp(!ppfPopUp);
  setTab(null);
  setName(null)
}

// const SearchData = ()=>{
//   if(startDate != null && endDate!= null){
//     const body = {

//     }
    
//     body.startDate = new Date(startDate)
//     body.endDate = new Date(endDate)

//       coustomerExperyDetails(body).then((res)=>{
//               if(res.status == 200){
//                 console.log(res.data);
//                 if(res.data.PPF.length > 0){
//                   setPPF(res.data.PPF);
//                 }
//                 if(res.data.Ceramic.length > 0){
//                   setCeramic(res.data.Ceramic);
//                 }
//               }

//           });


//   }

// }

  return (
    <>
    <LeftMenu/>
    <div className="rightBody p-4">
      <input type="date" value={startDate} onChange={(e)=>setStartDate(e.target.value)}/>
      <input type="date" value={endDate} onChange={(e)=>setEndDate(e.target.value)}/>
      <button > Search</button>
      <div className="message-table">
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Person</th>
              <th>Car Name</th>
              <th>Car Number</th>
              <th>Mobile Number</th>
              <th>Type of Service</th>
              <th>Last Service Date</th>
              <th>Remainder</th>
            </tr>
          </thead>
          <tbody>
            
            {
              PPF !=null && PPF.length > 0 ? PPF.map((value,index)=>(
                <>
                  <tr key={value.mobileNumber}>
                    <td>{index+1}</td>
                    <td>{value.name}</td>
                    <td>{value.carName}</td>
                    <td style={{maxWidth: "300px"}}>{value.carNumber}</td>
                    <td>{value.mobileNumber}</td>
                    <td>{value.typeofservice}</td>
                    <td>{dateFormate(value.serviceDate)}</td>
                    <td><button type="button" className="btn-add" data-toggle="modal" data-target="#myModal" onClick={()=>openPop(value.mobileNumber,value.product,value.name)}>Send</button></td>
                  </tr>
                </>
              ))
              :
              <>
                <p>No data found</p>
              </>
            }
            {/* <tr>
              <td>1.</td>
              <td>Lamborgini</td>
              <td>Chandra</td>
              <td style={{maxWidth: "300px"}}>Ut enim ad minim veniam, quis nostrud exercitation ullamco.</td>
              <td>06:30pm</td>
              <td>01-30-2024</td>
              <td><button type="button" className="btn-add" data-toggle="modal" data-target="#myModal">Send</button></td>
            </tr> */}
          </tbody>
        </table>
      </div>

      <div className="message-table">
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Person</th>
              <th>Car Name</th>
              <th>Car Number</th>
              <th>Mobile Number</th>
              <th>Type of Service</th>
              <th>Last Service Date</th>
              <th>Remainder</th>
            </tr>
          </thead>
          <tbody>
            
            {
              Ceramic !=null && Ceramic.length > 0 ?
               Ceramic.map((value,index)=>(
                <>
                  <tr key={value.mobileNumber}>
                    <td>{index+1}</td>
                    <td>{value.name}</td>
                    <td>{value.carName}</td>
                    <td style={{maxWidth: "300px"}}>{value.carNumber}</td>
                    <td>{value.mobileNumber}</td>
                    <td>{value.typeofservice}</td>
                    <td>{dateFormate(value.serviceDate)}</td>
                    <td><button type="button" className="btn-add" data-toggle="modal" data-target="#myModal" onClick={()=>openPop(value.mobileNumber,value.product,value.name)}>Send</button></td>
                  </tr>
                </>
              )) 
              : 
              <>
                <p>NO DATA FOUND</p>
              </>
            }
            {/* <tr>
              <td>1.</td>
              <td>Lamborgini</td>
              <td>Chandra</td>
              <td style={{maxWidth: "300px"}}>Ut enim ad minim veniam, quis nostrud exercitation ullamco.</td>
              <td>06:30pm</td>
              <td>01-30-2024</td>
              <td><button type="button" className="btn-add" data-toggle="modal" data-target="#myModal">Send</button></td>
            </tr> */}
          </tbody>
        </table>
      </div>

     {/* Modal  */}
     {
      ppfPopUp && mobileNumber != null && name != null && <MessagePopUp mobileNumber={mobileNumber} tab={tab} name={name} closePop={closePop}/>
     }
      {/* <div class="modal sucuss-popup" id="myModal" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
            <div className="message-check">
              <i class="fa fa-check-circle-o" aria-hidden="true"></i>
            </div>
            <div class="modal-body">
              <p>Message sent secussfully</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn-add" data-dismiss="modal">Ok</button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  </>
)
}
