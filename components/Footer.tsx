export default function Footer() {
  return (
    <footer className="mt-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text mb-4">
              Ludo Masters
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Experience the classic board game with beautiful animations and real-time multiplayer features.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/play" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 text-sm">
                  Play Now
                </a>
              </li>
              <li>
                <a href="/how-to-play" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 text-sm">
                  How to Play
                </a>
              </li>
              <li>
                <a href="/leaderboard" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 text-sm">
                  Leaderboard
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="/support/faq" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 text-sm">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/support/contact" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 text-sm">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/support/report-bug" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 text-sm">
                  Report Bug
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="/legal/privacy-policy" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/legal/terms" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 text-sm">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/legal/cookies" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 text-sm">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center">
         
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © 2024 Ludo Masters. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 