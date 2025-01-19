'use client';

import { useState } from 'react';

export default function PlayGame() {
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [diceValue, setDiceValue] = useState(0);

  const rollDice = () => {
    const newValue = Math.floor(Math.random() * 6) + 1;
    setDiceValue(newValue);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Game Header */}
      <header className="w-full p-4 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
            Ludo Masters
          </a>
          <div className="flex items-center gap-4">
            <span className="text-sm">Room Code: XYZ123</span>
            <a href="/" className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
              Leave Game
            </a>
          </div>
        </div>
      </header>

      {/* Game Area */}
      <main className="flex-1 container mx-auto p-4 flex flex-col lg:flex-row gap-8">
        {/* Game Board */}
        <div className="flex-1 flex justify-center items-center">
          <div className="aspect-square w-full max-w-[600px] bg-white dark:bg-gray-800 rounded-xl shadow-xl p-4">
            <div className="w-full h-full grid grid-cols-3 gap-2">
              {/* Red Home */}
              <div className="bg-red-100 dark:bg-red-900/30 rounded-tl-xl p-4">
                <div className="grid grid-cols-2 gap-2">
                  {[1,2,3,4].map(piece => (
                    <div key={`red-${piece}`} className="aspect-square bg-red-500 rounded-full animate-pulse"/>
                  ))}
                </div>
              </div>
              {/* Top Path */}
              <div className="bg-gray-100 dark:bg-gray-700/50"/>
              {/* Green Home */}
              <div className="bg-green-100 dark:bg-green-900/30 rounded-tr-xl p-4">
                <div className="grid grid-cols-2 gap-2">
                  {[1,2,3,4].map(piece => (
                    <div key={`green-${piece}`} className="aspect-square bg-green-500 rounded-full animate-pulse"/>
                  ))}
                </div>
              </div>
              {/* Middle Row */}
              <div className="bg-gray-100 dark:bg-gray-700/50"/>
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30"/>
              <div className="bg-gray-100 dark:bg-gray-700/50"/>
              {/* Yellow Home */}
              <div className="bg-yellow-100 dark:bg-yellow-900/30 rounded-bl-xl p-4">
                <div className="grid grid-cols-2 gap-2">
                  {[1,2,3,4].map(piece => (
                    <div key={`yellow-${piece}`} className="aspect-square bg-yellow-500 rounded-full animate-pulse"/>
                  ))}
                </div>
              </div>
              {/* Bottom Path */}
              <div className="bg-gray-100 dark:bg-gray-700/50"/>
              {/* Blue Home */}
              <div className="bg-blue-100 dark:bg-blue-900/30 rounded-br-xl p-4">
                <div className="grid grid-cols-2 gap-2">
                  {[1,2,3,4].map(piece => (
                    <div key={`blue-${piece}`} className="aspect-square bg-blue-500 rounded-full animate-pulse"/>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Game Controls */}
        <div className="w-full lg:w-80 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6">
          <div className="flex flex-col gap-6">
            {/* Player Turn Indicator */}
            <div className="text-center">
              <h2 className="text-xl font-bold mb-2">Current Turn</h2>
              <div className={`w-20 h-20 mx-auto rounded-full ${
                currentPlayer === 1 ? 'bg-red-500' :
                currentPlayer === 2 ? 'bg-green-500' :
                currentPlayer === 3 ? 'bg-yellow-500' : 'bg-blue-500'
              } animate-pulse`}/>
            </div>

            {/* Dice */}
            <div className="text-center">
              <button
                onClick={rollDice}
                className="w-24 h-24 bg-white dark:bg-gray-700 rounded-xl shadow-lg text-4xl font-bold hover:shadow-xl transition-shadow"
              >
                {diceValue || '🎲'}
              </button>
            </div>

            {/* Players List */}
            <div className="space-y-3">
              <h3 className="font-bold mb-4">Players</h3>
              {['Red Player', 'Green Player', 'Yellow Player', 'Blue Player'].map((player, index) => (
                <div key={player} className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${
                    index === 0 ? 'bg-red-500' :
                    index === 1 ? 'bg-green-500' :
                    index === 2 ? 'bg-yellow-500' : 'bg-blue-500'
                  }`}/>
                  <span>{player}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 