export default function PrivacyPolicy() {
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
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="max-w-3xl space-y-8">
          <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            <p className="text-gray-600 dark:text-gray-300">
              We collect information that you provide directly to us, including when you create an account,
              participate in games, or contact us for support.
            </p>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>To provide and maintain our Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information</li>
            </ul>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Data Security</h2>
            <p className="text-gray-600 dark:text-gray-300">
              We implement appropriate security measures to protect your personal information.
            </p>
          </section>
        </div>
      </main>

    </div>
  );
} 