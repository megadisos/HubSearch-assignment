import Layout from "../../../shared/layout/view";
import Products from "../../product-list/view/components/products";
import './styles/home.css'
function Home() {
  return (
    <Layout>
      {/* home image */}
     <div className="border-2 h-2/4 p-5 custom-bg" ></div>
     <div className="border-2 h-2/4"><Products /></div>
    </Layout>
  );
}

export default Home;
