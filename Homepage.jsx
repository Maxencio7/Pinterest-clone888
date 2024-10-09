import React from 'react';
import "/home/king888/Desktop/First Fix/pinterest-clone/pinterest-clone/app/globals.css"
import Header from "./components/Header"
import PinGrid from './components/PinGrid';

function PinterestHomepage() {
  return (
    
    <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
      <Header />
      <main className="mt-8">
        <PinGrid />
        
        
      </main>

    
    </div>
  );
}


export default PinterestHomepage;