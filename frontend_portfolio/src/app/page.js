//home page of the application (as in what is displayed in Localhost:3000/)
import { Typewriter } from './typewriter_text.tsx';
import "../styles/fonts.css";
// font imports


export default function Home() {
  return (
    <div className=''>
      <div>
        <h1 className="text-2xl font-light text-white"> Welcome </h1>
        <h1 className="text-4xl font-medium text-white funnel-display-font"> I'm Deydeepya.</h1>
        <h1 className="text-2xl font-normal italic antialiased  text-gray-400">(<Typewriter
          text={["CS Student", "Developer", "Artist","Gamer"]}
          speed={150}
          loop={true}
          className="text-2xl font-semibold italic antialiased text-gray-400" 
        />)</h1>
        <h2 className="text-4xl font-medium text-white">How may I assist you today?</h2>
      </div>
      <div>

      </div>
      <div>
        <button></button>
        <button></button>
      </div>
        


    </div> 
  );
}
