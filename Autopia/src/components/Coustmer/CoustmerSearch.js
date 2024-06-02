import React from 'react'
import LeftMenu from '../LeftMenu'

export default function CoustmerSearch() {
  return (
    <>
    <LeftMenu/>
   
    <div className="rightBody p-4">
    <div className="form-row mb-4">
      <form>
        <h5 className="title">Search</h5>
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
            <div className="form-in">
              <label>Mobile Number</label>
              <input type="text" placeholder="Enter Mobile Number.."/>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-in">
              <label>Car Model</label>
              <input type="text" placeholder="Enter Car Model.."/>
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
              <label className="d-flex align-items-center"><input type="checkbox"/> Lorem Ipsum</label>
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-in mb-3">
              <label className="d-flex align-items-center"><input type="checkbox"/> Lorem Ipsum</label>
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-in">
              <label className="d-flex align-items-center"><input type="checkbox"/> Lorem Ipsum</label>
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-in">
              <label className="d-flex align-items-center"><input type="checkbox"/> Lorem Ipsum</label>
            </div>
          </div>
        </div>
      </form>
    </div>
    <div className="form-row mb-4">
      <form>
        <h5 className="title">Instant Repair</h5>
        <div className="row mt-3">
          <div className="col-md-3">
            <div className="form-in">
              <label className="d-flex align-items-center"><input type="checkbox"/> Lorem Ipsum</label>
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-in mb-3">
              <label className="d-flex align-items-center"><input type="checkbox"/> Lorem Ipsum</label>
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-in">
              <label className="d-flex align-items-center"><input type="checkbox"/> Lorem Ipsum</label>
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-in">
              <label className="d-flex align-items-center"><input type="checkbox"/> Lorem Ipsum</label>
            </div>
          </div>
        </div>
      </form>
    </div>

    <div className="btn-row d-flex justify-content-end">
      <button className="btn-cancel me-2" type="button">Cancel</button>
      <button className="btn-add" type="button">Add</button>
    </div>
  </div>
  </>
  )
}
