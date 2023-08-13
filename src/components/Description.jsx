import CartIcon from "./CartIcon"

export default function Description({quantity, add, minus, product, addToCart}) {

  return (
    <div className='p-5 lg:mx-10 lg:w-2/6'>
        <div className="">
            <p className='text-orange font-semibold tracking-widest'>{product.company}</p>
            <h1 className='py-3'>{product.name}</h1>
            <p className='text-dark-grayish-blue leading-relaxed '>
                {product.description}
            </p>
            <p className="flex items-center my-2">
                <span className="text-3xl font-bold">
                    {`$${product.price}`}
                </span>  
                <span className="text-orange font-bold py-0.5 px-2 m-5 rounded bg-pale-orange items-center">
                    {`${product.discount}%`}
                </span>  
                <span className="text-grayish-blue font-bold line-through w-full text-right">
                    {`$${product.oldPrice}`}
                </span> 
            </p>
        </div>
        

        
        <div className="lg:flex">
            {/* QUANTITY */}
            <div className="flex flex-row bg-light-grayish-blue px-5 py-3 items-center rounded-lg lg:w-2/3">
                <button onClick={minus} className=" w-full text-orange text-left font-bold text-3xl hover:opacity-75">-</button>
                <div className="w-full text-center font-bold">{quantity}</div>
                <button onClick={add} className="w-full text-orange text-right font-bold text-3xl hover:opacity-75">+</button>  
            </div>

            {/* ADD TO CART */}
            <button onClick={addToCart} className="w-full px-5 py-3 mt-3 lg:mt-0 lg:ml-2 rounded-lg bg-orange shadow-2xl shadow-pale-orange hover:opacity-75">
                <span className="flex flex-row items-center justify-center text-pale-orange">
                    <CartIcon fill={"hsl(25, 100%, 94%)"} />
                    <p className="pl-5">Add to cart</p>
                </span>
            </button>
        </div>        
    </div>
  )
}