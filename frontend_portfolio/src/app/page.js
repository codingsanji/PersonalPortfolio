//home page of the application (as in what is displayed in Localhost:3000/)

import { Typewriter } from './typewriter_text.tsx';

export default function Home() {
  return (
    <div>
      <Typewriter
        text={["Welcome to Deydeepya's Portfolio!" , "How may I assist you?"]}
        speed={100}
        loop={true}
        className="text-xl font-medium"
      />
    </div> 
  );
}
