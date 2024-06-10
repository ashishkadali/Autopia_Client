import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//https://blog.logrocket.com/using-react-toastify-style-toast-messages/ refernace
export function onSuccess(data){
    toast.success(data,{
        position: toast.POSITION.TOP_RIGHT
    })

}

export function onError(data){
    toast.error(data, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
        });
}