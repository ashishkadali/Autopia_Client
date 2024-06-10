import React, { memo, useState } from 'react';
import { onError, onSuccess } from './toaster';
import { coustomerMessage } from '../../api/postApi';

export const MessagePopUp = memo(({mobileNumber,tab,name,closePop})=>{

    console.log("MessagePopUp",mobileNumber,tab,name,closePop)

    const [messageInput,setMessageInput] = useState("Default");
    const [coustomMessage,setcoustomMessage] = useState("");
    const [DefaultMessage, setDefaultMessage] = useState(`Hi ${name}, maintance  of your car ${tab} is pending.`)

    const handelProduct = (value,isChecked) =>{
        if(isChecked){
            setMessageInput(value);
        }
    };

    const sendMessage=()=>{
        try {   
            const body ={
                mobileNumber : mobileNumber
            }

            if(messageInput == "Default"){
                body.message = DefaultMessage
            }else{

                if(coustomMessage.length == 0){
                    return onError("Cosutome input is Empty")
                }
                body.message = coustomMessage
            }

            coustomerMessage.then((res)=>{
                if(res.staus == 200){
                    onSuccess("Message Sent");
                    closePop();
                }
            })

            
        } catch (error) {
            if(error){
                console.log(error);
            }
        }
    }

    return (
        <div>
            <p>Number : {mobileNumber}</p>
            <div>
                <input type="radio" name="message" value="Coustome" onChange={(e)=>handelProduct(e.target.value, e.target.checked )} /> Coustome
                <input type="radio" name="message"  value ="Default" onChange={(e)=>handelProduct(e.target.value, e.target.checked )} /> Default

            </div>

            <div>
                {
                    messageInput == "Coustome" ? 
                    <>
                        <input type="text" placeholder='Enter Coustome Input..' value={coustomMessage} onChange={(e)=>setcoustomMessage(e.target.value)}></input>
                    </> : 
                    
                    <>
                        <p>{DefaultMessage}</p>
                    </>
                }
            </div>
            <div>
                <button onClick={()=>closePop()}>Cancel</button>
                <button onClick={()=>sendMessage}>Send</button>

            </div>
        </div>
      )
}) 