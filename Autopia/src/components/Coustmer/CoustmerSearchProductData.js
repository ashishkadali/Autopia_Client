import React, { memo } from 'react';

export const CustomerSearchProductData = memo(({ tab, data }) => {
    console.log(tab,data);

    function dateFormate(data){
        const date = new Date(data);
        const d = date.getDate();
        const m= date.getMonth();
        const y = date.getFullYear();

        return `${d}-${m}-${y}`
    }
    
  return (
    <>
      <table className="custom-table mb-3">
        <thead>
            <tr>
                <th>S.No</th>
                <th>Product</th>
                <th>Brand</th>
                <th>Service</th>
                <th>Service Date</th>
            </tr>
        </thead>
        <tbody>
            {
                data?.length >0 ? data.map((value,index)=>(
                    <>
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{value.product}</td>
                            <td>{value.brand ? value.brand : null }</td>
                            <td>{value.typeofservice}</td>
                            <td>{dateFormate(value.serviceDate)}</td>
                        </tr>
                    </>
                )) : <tr className="no-data">
                    <td colSpan={6} className="p-5">No Data</td>
                </tr>
            }
        </tbody>
      </table>
      <>

      </>
    </>
  );
});
