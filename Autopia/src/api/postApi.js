import axios from "axios";


export async function coustmerEntry(data){
    try {
        const body ={ 
            headers  :{
                "Content-Type": "application/json",
            }   
        }
        const response = await axios.post("http://localhost:4200/coustomer/Entry",data,body);

        return response

        // if (response.status === 200) {
        //     return response;
        // }
        // else{
        //     console.log(response)
        // }
        
    } catch (error) {
        console.error("Error:", error);
    }

    
}

export async function coustmerSearch(data){
    try {
        const body ={ 
            headers  :{
                "Content-Type": "application/json",
            }   
        }
        const response = await axios.post("http://localhost:4200/coustomer/search",data,body);

        return response

        // if (response.status === 200) {
        //     return response;
        // }
        // else{
        //     console.log(response)
        // }
        
    } catch (error) {
        console.error("Error:", error);
    }

    
}

//

export async function coustmerServiceEntry(data){
    try {
        const body ={ 
            headers  :{
                "Content-Type": "application/json",
            }   
        }
        const response = await axios.post("http://localhost:4200/service/Entry",data,body);

        return response

        // if (response.status === 200) {
        //     return response;
        // }
        // else{
        //     console.log(response)
        // }
        
    } catch (error) {
        console.error("Error:", error);
    }

    
}


export async function coustomerExperyDetails(data){
    try {
        const body ={ 
            headers  :{
                "Content-Type": "application/json",
            }   
        }
        const response = await axios.post("http://localhost:4200/service/ExpireDetails",data,body);

        return response

        // if (response.status === 200) {
        //     return response;
        // }
        // else{
        //     console.log(response)
        // }
        
    } catch (error) {
        console.error("Error:", error);
    }

    
}

export async function coustomerMessage(data){
    try {
        const body ={ 
            headers  :{
                "Content-Type": "application/json",
            }   
        }
        const response = await axios.post("http://localhost:4200/service/message",data,body);

        return response

        // if (response.status === 200) {
        //     return response;
        // }
        // else{
        //     console.log(response)
        // }
        
    } catch (error) {
        console.error("Error:", error);
    }

    
}