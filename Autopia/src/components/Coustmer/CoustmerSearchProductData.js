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
      <table className="custom-table">
        <thead>
            <th>S.NO</th>
            <th>Product</th>
            <th>Brand</th>
            <th>Service</th>
            <th>Service Date</th>
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
                )) : <div className="no-data">
                    No Data
                </div>
            }
        </tbody>
      </table>
      <>

      </>
    </>
  );
});
