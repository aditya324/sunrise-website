import React from 'react';
import herosection from "../assets/images/herosection.jpg";
import Card from '../components/Card';

const Home = () => {
  return (
    <>
      {/* No margin-top needed on the container in this approach */}
      <div className="relative">
        <div className="flex justify-center">
          {/* <img
            src={herosection}
            alt="Hero Section"
            className="max-w-7xl h-[648.39px] absolute -bottom-[580px]" 
           
          /> */}
          hero section
        </div>
      </div>

      <div className="w-full flex justify-center items-center gap-4 p-4">
      <Card color="#5E4FA2" rotate="-19deg" number="8" text="years" />
      <Card color="#D95D39" rotate="13deg" number="250" text="clients" />
      <Card color="#008C76" rotate="-19deg" number="10m" text="impressions" />
      <Card color="#FFB400" rotate="13deg" number="400" text="projects" />
    </div>
    </>
  );
};

export default Home;
