import React from 'react';
import LandingPageCard from '../parts/landing-page-card';
import { FlipWords } from '../../../components/aceternity/flip-words';

const ICONS = [
  "/landing-page/pixel_white_github_.svg",
  "/landing-page/pixel_white_VS_Code_.svg",
  "/landing-page/pixel_white_Notion_.svg",
  "/landing-page/pixel_white_confluence_.svg",
  "/landing-page/pixel_white_Vercel_.svg",
  "/landing-page/pixel_white_Google_Drive_.svg",
];

const WORDS = [
  "workflow",
  "GitHub",
  "VS Code",
  "Notion",
  "Confluence",
  "Vercel",
  "Google Drive",
];

const LandingPageWorkflowCard = () => {
  return (
    <LandingPageCard>
      <div
        className="font-extrabold text-[3rem] text-center"
        style={{
          fontFeatureSettings: "'liga' off, 'clig' off",
          fontFamily: "Puffin Arcade",
        }}
      >
        Integrates with your <FlipWords words={WORDS} />
      </div>

      <div
        className="flex flex-wrap w-full gap-y-[2.5rem] my-[2.5rem] justify-center items-center"
      >
        {ICONS.map((icon, index) => (
          <img
            key={index}
            src={icon}
            alt="icon"
            className="w-[3.125rem] h-[3.125rem]"
            style={{
              flexBasis: 'calc(33.33% - 1rem)', // Adjust the width to fit 3 items per row
              margin: '0.5rem', // Optional: Add some margin between items
            }}
          />
        ))}
      </div>

      <div
        className="font-extrabold text-[3rem] text-center"
        style={{
          fontFeatureSettings: "'liga' off, 'clig' off",
          fontFamily: "Puffin Arcade",
        }}
      >
        ... and many more coming soon!
      </div>
    </LandingPageCard>
  );
};

export default LandingPageWorkflowCard;