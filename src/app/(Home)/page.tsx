
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import RecentProject from "./components/RecentProject";
import Skills from "./components/Skills";
import GithubSection from "./components/GithubSection";


export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
       <main className="container mx-auto px-6 py-12 max-w-4xl">
          <HeroSection/>
          <GithubSection/>
          <RecentProject/>
          <Skills/>
          <Footer/>
       </main>
    </div>
  );
}
