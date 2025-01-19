export default function HowToPlay() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full p-4 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
            Ludo Masters
          </a>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">How to Play Ludo</h1>
        
        <div className="space-y-6 max-w-3xl">
          <section className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Basic Rules</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li>Each player has 4 tokens</li>
              <li>Roll a 6 to move a token out of home</li>
              <li>Move tokens clockwise around the board</li>
              <li>Land on opponent's token to send it back home</li>
              <li>Get all 4 tokens to the center to win</li>
            </ul>
          </section>

          <section className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Special Rules</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li>Roll a 6 to get an extra turn</li>
              <li>Three consecutive 6s voids all moves</li>
              <li>Must move if possible</li>
              <li>Safe squares protect tokens from capture</li>
            </ul>
          </section>
        </div>
      </main>

      <footer className="mt-auto py-6 text-center text-gray-600 dark:text-gray-400">
        <p>© 2024 Ludo Masters. All rights reserved.</p>
      </footer>
    </div>
  );
} 