import HeroBanner from "@/components/HeroBanner"
import ProductCard from "@/components/ProductCard"
import Wrapper from "@/components/Wrapper"
import { fetchDataFromApi } from "@/utils/api";




export default function Home( {products}) {


  return (
    <>
      <main >
        <HeroBanner />
        <Wrapper>
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
                                  <div className="text-[28px] md:text-[34px] bg-gradient-to-r from-indigo-600 via-pink-600 to-pink-400 bg-clip-text text-transparent mb-5 font-semibold leading-tight">
                                  “I'm more of the sneaker-wearing, computer geek type.”
                                  </div>
                                  <div className="text-md md:text-xl">
                                      A lightweight Nike Zoom X midsole is combined with
                                      increased stack heights to help provide cushioning
                                      during extended stretches of running.
                                  </div>
          </div>

          {/* product card starts */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0 ">
                    
          {products?.data?.map((product) => (
                        <ProductCard key={product?.id} data={product} />
                    ))}
                   
          </div>
          
        </Wrapper>

      </main>
  
    </>
  )
}

export async function getStaticProps() {
  const products = await fetchDataFromApi("/api/products?populate=*");

  return {
      props: { products },
  };
}