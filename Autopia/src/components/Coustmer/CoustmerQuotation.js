import React from 'react'
import LeftMenu from '../LeftMenu'


export default function CoustmerQuotation() {
  return (
    <>
    <LeftMenu/>
   
    <div className="rightBody p-4">
      <div className="form-row mb-4">
        <form>
          <h5 className="title">Price per Sft</h5>
          <div className="row">
            <div className="col-md-6">
              <div className="form-in mb-3">
                <label>Name</label>
                <input type="text" placeholder="Enter Price.."/>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-in mb-3">
                <label>Total Sft</label>
                <input type="text" placeholder="Enter Price.."/>
              </div>
            </div>
          </div>
        </form>
      </div>
    <div className="form-row mb-4">
      <form>
        <h5 className="title">Types of Services</h5>
        <div className="row mt-3">
          <div className="col-md-3">
            <div className="form-in">
              <label className="d-flex align-items-center"><input type="checkbox"/> PPF</label>
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-in mb-3">
              <label className="d-flex align-items-center"><input type="checkbox"/> Ceramic</label>
            </div>
          </div>
        </div>
      </form>
    </div>
    <div className="form-row mb-4">
      <form>
        <h5 className="title">Name</h5>
        <div className="row">
          <div className="col-md-6">
            <div className="form-in mb-3">
              <label>Name</label>
              <input type="text" placeholder="Enter Name.."/>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-in mb-3">
              <label>Email</label>
              <input type="text" placeholder="Enter Email.."/>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-in mb-3">
              <label>Mobile</label>
              <input type="text" placeholder="Enter Mobile Number.."/>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-in mb-3">
              <label>Car Model</label>
              <input type="text" placeholder="Enter Car Model.."/>
            </div>
          </div>
        </div>
      </form>
    </div>
      <div className="btn-row d-flex justify-content-end">
        <button className="btn-add" type="button" data-toggle="modal" data-target="#myModal">Create Quotation</button>
      </div>
        {/* Modal  */}
        <div class="modal sucuss-popup" id="myModal" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
           
            <div class="modal-body">
              <p>Coming Soon..</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn-add" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
     </div>
     </>
  )
}
