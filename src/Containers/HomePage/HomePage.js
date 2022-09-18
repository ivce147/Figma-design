import React,{useEffect} from "react";
import mainpic from "../../assets/Images/Offer Banner.png";
import first from "../../assets/Images/first-banner.png";
import second from "../../assets/Images/second-banner.png";
import third from "../../assets/Images/third-banner.png";
import Sneakers from "../../Components/Sneakers/Sneakers"
import shipping from "../../assets/Images/shipping.png";
import support from "../../assets/Images/support.png";
import dollar from "../../assets/Images/dollar.png";
import Proba from "../../Components/Proba/Proba"
import { useProducts } from "../../Hooks/useProducts";
import { useNews } from "../../Hooks/useNews";
import "./HomePage.css";
import ReadMore from "../../Components/ReadMore/ReadMore";

function HomePage() {
  // const {useProducts} = useProduct(`https://dummyjson.com/products`);
  const {products,loading,setQueryParams} = useProducts();
  
  const {news,newsLoading} = useNews();
  // const [noElement,setNoElement] = useState(4)
  // const loadmore = () => {
  //   setNoElement(noElement + noElement);
  // }
  

  useEffect(()=>{
    setQueryParams({brand: "addidas"})
  },[]);

  return (
    <div className="home-page">
      <div>
        <img className="banner" src={mainpic} alt="banner" />
      </div>
      <div className="banner-bottom relative">
        <div className="absolute">
          <img className="width height m-right" src={first} alt="first" />

          <img className="width height m-right" src={second} alt="second" />

          <img className="width height" src={third} alt="third" />
        </div>
      </div>
      <h1>BEST SELLER</h1>
      {newsLoading && <h1>Loading...</h1>}
      <Proba/>
      <div>
      <button className="btn-sneakers">Load More</button>
      </div>
      <Sneakers/>
      <div className="shipping">
        <div className="free-shipping">
          <img src={shipping} alt="shipping" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="refund">
          <img src={dollar} alt="dollar" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="support">
          <img src={support} alt="support" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
      <h1>LATEST NEWS</h1>
      <ReadMore/>
      <h1>FEATURED PRODUCTS</h1>
    </div>
  );
}

export default HomePage;
