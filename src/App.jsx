import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import FeaturedServices from "./components/FeaturedServices";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <FeaturedServices />
      </main>
      <Footer />
    </div>
  );
}

export default App;
