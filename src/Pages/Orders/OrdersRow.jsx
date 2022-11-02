import React, { useEffect, useState } from "react";

const OrdersRow = ({ order }) => {
   const { _id, serviceName, customer, service } = order;
   const [orderService, setOrderService] = useState({});
   const serviceId = service;

   useEffect(() => {
      fetch(`http://localhost:5000/services/${serviceId}`)
         .then((res) => res.json())
         .then((data) => setOrderService(data));
   }, [serviceId]);

   /* handle delete */
   const handleDelete = (id) => {
      const proceed = window.confirm("Are you sure to cancel this order?");
      if (proceed) {
         fetch(`http://localhost:5000/orders/${id}`, {
            method: "DELETE",
         })
            .then((res) => res.json())
            .then((data) => {
               if (data.deletedCount === 1) {
                  alert("Order cancelled successfully");
               }
               console.log(data);
            });
      }
   };

   return (
      <tr>
         <th>
            <label>
               <button onClick={() => handleDelete(_id)} className="btn btn-ghost">
                  X
               </button>
            </label>
         </th>
         <td>
            <div className="flex items-center space-x-3">
               <div className="avatar">
                  <div className=" rounded w-20 h-20">
                     {orderService?.img && <img src={orderService?.img} alt="" />}
                  </div>
               </div>
               <div>
                  <div className="font-bold">{serviceName}</div>
                  <div className="text-sm opacity-50">{customer}</div>
               </div>
            </div>
         </td>
         <td>
            Zemlak, Daniel and Leannon
            <br />
            <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
         </td>
         <td>Purple</td>
         <th>
            <button className="btn btn-ghost btn-xs">details</button>
         </th>
      </tr>
   );
};

export default OrdersRow;
