import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full p-4 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
            Ludo Masters
          </h1>
          <nav className="hidden md:flex gap-6">
            <a href="/how-to-play" className="hover:text-purple-600 transition-colors">How to Play</a>
            <a href="/leaderboard" className="hover:text-purple-600 transition-colors">Leaderboard</a>
            <a href="/profile" className="hover:text-purple-600 transition-colors">Profile</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Hero Section */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Play Ludo Online
              <span className="block text-purple-600">With Friends!</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
              Experience the classic board game with beautiful animations and real-time multiplayer features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="/play" className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-colors shadow-lg hover:shadow-xl text-center">
                Play Now
              </a>
              <a href="/play" className="px-8 py-3 border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white rounded-full transition-all text-center">
                Create Room
              </a>
            </div>
          </div>

          {/* Game Preview */}
          <div className="flex-1 relative">
            <div className="aspect-square max-w-[500px] mx-auto bg-white dark:bg-gray-700 rounded-2xl shadow-2xl p-4 transform hover:rotate-3 transition-transform duration-300">
              {/* Placeholder for Ludo board preview */}
              <div className="w-full h-full rounded-xl bg-gradient-to-br from-purple-100 to-blue-100 dark:from-gray-600 dark:to-gray-500 flex items-center justify-center">
                <p className="text-xl font-semibold text-gray-500 dark:text-gray-300">
                  Ludo Board Preview
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {['Real-time Multiplayer', 'Beautiful Animations', 'Cross-platform Play'].map((feature) => (
            <div key={feature} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-3">{feature}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto py-6 text-center text-gray-600 dark:text-gray-400">
        <p>© 2024 Ludo Masters. All rights reserved.</p>
      </footer>
    </div>
  );
}
