import React from "react";

function About() {
  return (
    <div className="text-white flex flex-col items-center font-roboto mt-20 gap-10 mx-10">
      <div className="flex flex-col items-center gap-3 ">
        <h1 className="font-semibold text-2xl">About</h1>
        <h1 className="font-thin w-11/12">
          Chess Receipt was inspired by Receiptify, a popular tool that
          generates Spotify listening receipts. It allows you to generate and
          download PNG images of chess receipts. These receipts can be used to
          track your progress, analyze your performance, and share your stats
          with friends.
        </h1>
      </div>

      <div className="flex flex-col items-center gap-3 w-full">
        <h1 className="font-semibold text-2xl">Key Features</h1>

        <ul className="w-11/12">
          <li>
            <p>
              <span className="font-bold">Generate Chess Game Receipts: </span>
              Generate receipts for your chess games, including game name, date
              and time, players, result, moves, and analysis.
            </p>
          </li>

          <li>
            <p>
              <span className="font-bold">Download PNG Images: </span>
              Generate receipts for your chess games, including game name, date
              and time, players, result, moves, and analysis.
            </p>
          </li>

          <li>
            <p>
              <span className="font-bold">Track Your Progress: </span>
              Generate receipts for your chess games, including game name, date
              and time, players, result, moves, and analysis.
            </p>
          </li>

          <li>
            <p>
              <span className="font-bold">Share Your Games: </span>
              Generate receipts for your chess games, including game name, date
              and time, players, result, moves, and analysis.
            </p>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center gap-3">
        <h1 className="font-semibold text-2xl">Limitation</h1>
        <ul className="w-11/12">
          <li>
            <p>
              <span className="font-bold">Website Under Development: </span>
              Chess Receipt is still under development and may contain bugs or
              glitches.
            </p>
          </li>

          <li>
            <p>
              <span className="font-bold">Incomplete Player Statistics: </span>
              Player statistics may not always be fully populated or accurate.
            </p>
          </li>

          <li>
            <p>
              <span className="font-bold">Potential Crashes: </span>
              Occasional crashes may occur due to ongoing development and
              feature implementation.
            </p>
          </li>

          <li>
            <p>
              <span className="font-bold">Share Your Games: </span>
              Generate receipts for your chess games, including game name, date
              and time, players, result, moves, and analysis.
            </p>
          </li>
        </ul>
        <h1 className="font-thin w-11/12">
          I apologize for any inconvenience these limitations may cause. I
          continuously working to improve the stability, accuracy, and overall
          user experience of Chess Receipt. Please bear with me as I refine the
          app and address any outstanding issues.
        </h1>
      </div>
    </div>
  );
}

export default About;
