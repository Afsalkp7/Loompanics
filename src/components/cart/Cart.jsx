// import "./cart.css";
// const Cart = () => {
//   return (
//     <div className="cartHero">
//       <div className="cartHeading">
//         <span>Shopping Cart</span>
//         <p>Home / Cart</p>
//       </div>
//       <hr />
//       <div className="mainSection">
//         <div className="cartSection">
//           <div className="cartItem">
//             <div className="cartImage">
//               <img src="http://localhost:5173/src/assets/logo_without_bg.png" />
//             </div>
//             <div className="itemTitle">
//               <span className="title">Sample</span>
//               <br />
//               <span className="titleAuthor">Author</span>
//               <br />
//             </div>
//             <span className="titleAmount">₹ 499 /-</span>
//             <div className="cartCount">
//               <div className="increment"> + </div>
//               <span>2</span>
//               <div className="decrement"> - </div>
//             </div>
//             <div className="amountSection">
//               <div className="amount">
//                 <span>₹ 988 /-</span>
//               </div>
//               <div className="remove">
//                 <svg
//                   height="15pt"
//                   viewBox="-40 0 427 427.00131"
//                   width="15pt"
//                   xmlns="http://www.w3.org/2000/svg"
//                   id="fi_1214428"
//                 >
//                   <path d="m232.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"></path>
//                   <path d="m114.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"></path>
//                   <path d="m28.398438 127.121094v246.378906c0 14.5625 5.339843 28.238281 14.667968 38.050781 9.285156 9.839844 22.207032 15.425781 35.730469 15.449219h189.203125c13.527344-.023438 26.449219-5.609375 35.730469-15.449219 9.328125-9.8125 14.667969-23.488281 14.667969-38.050781v-246.378906c18.542968-4.921875 30.558593-22.835938 28.078124-41.863282-2.484374-19.023437-18.691406-33.253906-37.878906-33.257812h-51.199218v-12.5c.058593-10.511719-4.097657-20.605469-11.539063-28.03125-7.441406-7.421875-17.550781-11.5546875-28.0625-11.46875h-88.796875c-10.511719-.0859375-20.621094 4.046875-28.0625 11.46875-7.441406 7.425781-11.597656 17.519531-11.539062 28.03125v12.5h-51.199219c-19.1875.003906-35.394531 14.234375-37.878907 33.257812-2.480468 19.027344 9.535157 36.941407 28.078126 41.863282zm239.601562 279.878906h-189.203125c-17.097656 0-30.398437-14.6875-30.398437-33.5v-245.5h250v245.5c0 18.8125-13.300782 33.5-30.398438 33.5zm-158.601562-367.5c-.066407-5.207031 1.980468-10.21875 5.675781-13.894531 3.691406-3.675781 8.714843-5.695313 13.925781-5.605469h88.796875c5.210937-.089844 10.234375 1.929688 13.925781 5.605469 3.695313 3.671875 5.742188 8.6875 5.675782 13.894531v12.5h-128zm-71.199219 32.5h270.398437c9.941406 0 18 8.058594 18 18s-8.058594 18-18 18h-270.398437c-9.941407 0-18-8.058594-18-18s8.058593-18 18-18zm0 0"></path>
//                   <path d="m173.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"></path>
//                 </svg>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="checkoutSection">
//           <div className="checkoutHead">
//             <span className="checkoutTitle">Order Summery</span>
//             <div className="subTotal">
//               <span>Subtotal</span>
//               <span>₹ 988 /-</span>
//             </div>
//             <div className="discound">
//               <span>Discount</span>
//               <span>₹ 100 /-</span>
//             </div>
//             <div className="delivery">
//               <span>Delivery Charge</span>
//               <span>₹ 40 /-</span>
//             </div>
//             <div className="total">
//               <span>Order total</span>
//               <span>₹ 928 /-</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;



import "./cart.css";
const Cart = () => {
  return (
    <div className="cartHero">
      <div className="cartHeading">
        <span>Shopping Cart</span>
        <p>Home / Cart</p>
      </div>
      <hr />
      <div className="mainSection">
        <div className="cartSection">
        <div className="container">
  <table className="table table-xs">
    <thead>
      <tr>
        
      </tr>
    </thead>
    <tbody>
      <tr className="item-row">
        <td>
          <img src="http://localhost:5173/src/assets/logo_without_bg.png" alt="Item 1" />
        </td>
        <td>
          <p><strong>Item 1</strong></p>
        </td>
        <td className="text-right cartCount" title="Amount">
        <div className="increment"> + </div>3<div className="decrement"> - </div></td>
        <td className="text-right" title="Price">2.00</td>
        <td className="text-right" title="Total">6.00</td>
      </tr>
      <tr className="item-row item-row-last">
        <td>
          <img src="http://localhost:5173/src/assets/logo_without_bg.png" alt="Item 2" />
        </td>
        <td>
          <p><strong>Item 2</strong></p>
        </td>
        <td className="text-right" title="Amount">3</td>
        <td className="text-right" title="Price">4.00</td>
        <td className="text-right" title="Total">12.00</td>
      </tr>
      <tr className="total-row info">
        <td className="text-right" colSpan="4">Total</td>
        <td className="text-right">18.00</td>
      </tr>
    </tbody>
  </table>
</div>

        </div>
        <div className="checkoutSection">
          <div className="checkoutHead">
            <span className="checkoutTitle">Order Summary</span>
            <div className="subTotal">
              <span>Subtotal</span>
              <span>₹ 988 /-</span>
            </div>
            <div className="discound">
              <span>Discount</span>
              <span>₹ 100 /-</span>
            </div>
            <div className="delivery">
              <span>Delivery Charge</span>
              <span>₹ 40 /-</span>
            </div>
            <div className="total">
              <span>Order Total</span>
              <span>₹ 928 /-</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
