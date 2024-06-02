import { BrowserRouter, Route, Routes } from "react-router-dom"
import React from 'react'
import CoustmerEntry from "./Coustmer/CoustmerEntry"
import CoustmerSearch from "./Coustmer/CoustmerSearch"
import CoustmerMessage from "./Coustmer/CoustmerMessage"
import CoustmerQuotation from "./Coustmer/CoustmerQuotation"

export default function Routers() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<CoustmerEntry/>}/>
            <Route path="/search" element={<CoustmerSearch/>}/>
            <Route path="/sendmessage" element={<CoustmerMessage/>}/>
            <Route path="/quotation" element={<CoustmerQuotation/>}/>
        </Routes>
    </BrowserRouter>
  )
}
