import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function App() {
  return (
    <div className="min-h-screen bg-[#000000] text-white">
      <Navbar />
      <Hero />

      <div className="h-[150vh]" />
    </div>
  );
}
