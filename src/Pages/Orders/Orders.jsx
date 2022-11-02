import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import OrdersRow from "./OrdersRow";

const Orders = () => {
   const { user } = useContext(AuthContext);
   const [orders, setOrder] = useState([]);

   useEffect(() => {
      fetch(`http://localhost:5000/orders?email=${user.email}`)
         .then((res) => res.json())
         .then((data) => setOrder(data));
   }, [user.email]);

   return (
      <div>
         <h1 className="text-5xl">you have orders: {orders.length}</h1>
         <div className="overflow-x-auto w-full">
            <table className="table w-full">
               <thead>
                  <tr>
                     <th>
                        <label>
                           <input type="checkbox" className="checkbox" />
                        </label>
                     </th>
                     <th>Name</th>
                     <th>Job</th>
                     <th>Favorite Color</th>
                     <th></th>
                  </tr>
               </thead>
               <tbody>
                  {orders.map((order) => (
                     <OrdersRow key={order._id} order={order} />
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default Orders;
