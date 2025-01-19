export default function Leaderboard() {
  const topPlayers = [
    { name: "Player 1", wins: 150, rank: 1 },
    { name: "Player 2", wins: 145, rank: 2 },
    { name: "Player 3", wins: 130, rank: 3 },
    { name: "Player 4", wins: 120, rank: 4 },
    { name: "Player 5", wins: 110, rank: 5 },
  ];

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
        <h1 className="text-4xl font-bold mb-8">Leaderboard</h1>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-purple-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-4 text-left">Rank</th>
                <th className="px-6 py-4 text-left">Player</th>
                <th className="px-6 py-4 text-left">Wins</th>
              </tr>
            </thead>
            <tbody>
              {topPlayers.map((player) => (
                <tr key={player.rank} className="border-t border-gray-200 dark:border-gray-700">
                  <td className="px-6 py-4">#{player.rank}</td>
                  <td className="px-6 py-4">{player.name}</td>
                  <td className="px-6 py-4">{player.wins}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      <footer className="mt-auto py-6 text-center text-gray-600 dark:text-gray-400">
        <p>© 2024 Ludo Masters. All rights reserved.</p>
      </footer>
    </div>
  );
} 