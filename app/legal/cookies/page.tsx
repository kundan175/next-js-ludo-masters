export default function CookiePolicy() {
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
        <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
        
        <div className="max-w-3xl space-y-8">
          <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">What Are Cookies</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Cookies are small text files that are placed on your computer by websites that you visit.
              They are widely used to make websites work more efficiently and provide a better user experience.
            </p>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">How We Use Cookies</h2>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>To remember your preferences</li>
              <li>To understand how you use our website</li>
              <li>To keep you signed in</li>
              <li>To improve our service</li>
            </ul>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Managing Cookies</h2>
            <p className="text-gray-600 dark:text-gray-300">
              You can control and/or delete cookies as you wish. You can delete all cookies that are
              already on your computer and you can set most browsers to prevent them from being placed.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
} 