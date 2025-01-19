export default function ReportBug() {
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
        <h1 className="text-4xl font-bold mb-8">Report a Bug</h1>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Bug Type</label>
                <select className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600">
                  <option>Game Mechanics</option>
                  <option>Visual Glitch</option>
                  <option>Connection Issue</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <textarea
                  className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600 h-32"
                  placeholder="Please describe the bug in detail..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Steps to Reproduce</label>
                <textarea
                  className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600 h-32"
                  placeholder="1. First step&#10;2. Second step&#10;3. ..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Device & Browser Info</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
                  placeholder="e.g., iPhone 13, Chrome 98"
                />
              </div>
              
              <button className="w-full px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                Submit Report
              </button>
            </form>
          </div>
        </div>
      </main>

    </div>
  );
} 