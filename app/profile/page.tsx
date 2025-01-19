export default function Profile() {
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
        <div className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <div className="text-center mb-8">
              <div className="w-32 h-32 bg-purple-100 dark:bg-purple-900/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">👤</span>
              </div>
              <h1 className="text-2xl font-bold">Player Name</h1>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-purple-50 dark:bg-gray-700 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold">150</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Games Played</div>
              </div>
              <div className="bg-purple-50 dark:bg-gray-700 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold">89</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Wins</div>
              </div>
              <div className="bg-purple-50 dark:bg-gray-700 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold">59%</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Win Rate</div>
              </div>
            </div>

            <div className="space-y-4">
              <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                Edit Profile
              </button>
              <button className="w-full px-4 py-2 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition-colors">
                Change Password
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-auto py-6 text-center text-gray-600 dark:text-gray-400">
        <p>© 2024 Ludo Masters. All rights reserved.</p>
      </footer>
    </div>
  );
} 