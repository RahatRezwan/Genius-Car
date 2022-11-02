import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const Orders = () => {
   const { user } = useContext(AuthContext);
   const [orders, setOrder] = useState({});

   useEffect(() => {
      fetch(`http://localhost:5000/orders?email=${user.email}`)
         .then((res) => res.json())
         .then((data) => setOrder(data));
   }, [user?.email]);

   return (
      <div>
         <h1 className="text-5xl">you have orders: {orders.length}</h1>
      </div>
   );
};

export default Orders;
