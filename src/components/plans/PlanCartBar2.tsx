// import { useCart } from "@/Contexts/CartContext";

// function PlanCartBar2() {
//   const { cart, clearCart } = useCart();
//   let data;
//   let minutes;
//   let sms;
//   let price;
//   if (cart) {
//     data = cart.data_usable / 1024;
//     minutes = cart.minutes_usable;
//     sms = cart.sms_usable;
//     price = cart.price;
//   }
//   return (
//     <div className="pink-bg">
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="col-md-4 col-6">
//             <p className="m-0 p-0 mt-3">
//               <span className="fs-2 fw-bold">${price}</span>
//               <span>
//                 <sub>USD</sub>
//               </span>
//             </p>
//             <p className="fs-6">No package selected.</p>
//           </div>
//           <div className="col-md-4 col-6 text-center">
//             <button className="my_btn my_btn_colored my-3">Buy Now</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PlanCartBar2;
