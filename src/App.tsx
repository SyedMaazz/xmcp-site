import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";

export default function App() {
  return (
    <div className="min-h-screen bg-[#000000] text-white">
      <Navbar />
      <Hero />
      <TrustedBy />
    </div>
  );
}
