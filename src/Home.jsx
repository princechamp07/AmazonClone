import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
        <div className="home__row">
            <Product
            id="21212"
            title="Mens Lace Up Sneakers"
            price={11.96}
            rating={5}
            image="https://img3.junaroad.com/uiproducts/20397167/zoom_0-1696990448.jpg"
            
            />
             <Product
            id="21212"
            title="Ozone Premium Anti-Burglary Heavy Safe Locker With Biometric Feature for Cash Document Jewellery"
            price={111.56}
            rating={5}
            image="https://m.media-amazon.com/images/I/91NMwd5Ik4L._AC_UL320_.jpg"
            
            />
        </div>

        <div className="home__row">
            <Product
            id="21212"
            title="AmazonBasics - Mini Backpack for Outdoor Use (12 l) (Black)"
            price={6.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/61VnaOrJFRL._AC_UL320_.jpg"
            
            />
             <Product
            id="21212"
            title="Amazon Brand - Solimo Plastic"
            price={11.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/61KAhEexZML._AC_UL320_.jpg"
            
            />
              <Product
            id="21212"
            title="Amazon Brand -soloimo ruby Bedsheet"
            price={8.56}
            rating={5}
            image="https://m.media-amazon.com/images/I/71UYUcljz9L._AC_UL320_.jpg"
            
            />
        </div>
        <div className="home__row">
            <Product
            id="21212"
            title="One Plus Nord CE 3 Lite 5G"
            price={38.96}
            rating={5}
            image="https://m.media-amazon.com/images/G/31/img23/Wireless/OnePlus/Nord/NordCE3Lite/8thMarch/001._CB580452598_.jpg"
            
            />
          
        </div>

        </div>
    );
}

export default Home;