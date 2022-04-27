


const ProductHero = () => {
    return(
        <div className="mb-5">
           <div className="heroContainer">
                <h1 className="text-center logo-name p-5">Modern Restaurant</h1>
                
                <div>
                    <h2 className="product-header d-flex justify-content-center align-items-center text-center">Our Product</h2>
                </div>
           </div>

            <div className="hero-bottom py-4 d-flex justify-content-between align-items-center fw-bold flex-wrap fs-4 ">
               <div>
                     With Modern Restaurant, you can order today and save 20% on delivery.
               </div>

               <div>
                  <a href="/contact">
                        <button className="orderBtn p-2 mt-3 text-center">Order Now</button>
                  </a>
               </div>
            </div>
        </div>
    )
}

export default ProductHero