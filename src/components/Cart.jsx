import {
  Collapse,
  Card,
  CardBody,
} from "@material-tailwind/react";
import { useState } from "react";
 
export default function Cart({showCart, cart, deleteProduct}) {
  
  return (
    <>
      <Collapse className="fixed top-20 z-50 md:w-[400px] md:right-[5%] " open={showCart}>
        <Card className="my-4 mx-4 z-20 text-black shadow-lg rounded">
          <CardBody className="h-[250px]">
              <h5 className="pb-5">Cart</h5>
              <hr />
              {cart.length > 0 ? 
                cart.map((p) => 
                    <div key={p.id}>
                        <div className="flex my-5 ">
                          <img className="w-14 mr-5 rounded-lg" src="../src/assets/images/image-product-1-thumbnail.jpg" alt="product thumbnail" />
                          <div className="text-dark-grayish-blue">
                            <p>{p.name}</p>
                            <p>{`$${p.price} x ${p.quantity} `} <span className="font-bold  text-black">{`$${p.price * p.quantity}`}</span></p>
                            
                            </div>
                          
                            <button onClick={() => deleteProduct(p.id)} className="m-auto">
                              <img className="h-5 " src="../src/assets/images/icon-delete.svg" alt="delete icon" />
                            </button>
                          
                          
                        </div> 
                        <button className="w-full px-5 py-3 mt-3 rounded-lg bg-orange shadow-2xl shadow-pale-orange text-pale-orange">Checkout</button>
                    </div>
                )
                : 
                    <p className="my-20 text-center text-dark-grayish-blue font-bold">Your cart is empty.</p> 
                 }
          </CardBody>
        </Card>
      </Collapse>
    </>
  );
}