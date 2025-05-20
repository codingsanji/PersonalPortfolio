//Localhost:3000/artfolio
import './style.css';
import { SparklesCore } from './sparkles';
//import ThemeSwitch from "components/togglelight-dark/ThemeSwitch";

export default function Home() {
  return (
    <div className="relative z-10">
      {/*Background img*/}
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
          speed={1}
        />
      </div>

      {/* Actual scrollable content goes here */}
      <main className="relative z-10">
        
      </main>
    </div>
  );
}
