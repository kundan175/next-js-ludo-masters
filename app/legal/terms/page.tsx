export default function Terms() {
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
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="max-w-3xl space-y-8">
          <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 dark:text-gray-300">
              By accessing and using Ludo Masters, you accept and agree to be bound by the terms and
              provisions of this agreement.
            </p>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">2. User Conduct</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Users agree to use the service in a manner consistent with any and all applicable laws and
              regulations.
            </p>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">3. Intellectual Property</h2>
            <p className="text-gray-600 dark:text-gray-300">
              All content included on this site is the property of Ludo Masters or its content suppliers
              and protected by international copyright laws.
            </p>
          </section>
        </div>
      </main>

    </div>
  );
} 