import { Navbar, ProductInfo, ProductImages, Seo } from "../components";

export default function Home() {
  return (
    <div className="product-container">
      <Seo />
      <Navbar />
      <div className="container">
        <section className="product flex-ac-jc">
          <ProductImages phoneBtn />
          <ProductInfo />
        </section>
      </div>
    </div>
  );
}
