export default function FAQ() {
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
        <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
        
        <div className="max-w-3xl space-y-6">
          {[
            {
              q: "How do I start a game?",
              a: "Click on 'Play Now' to join a random game, or 'Create Room' to start a new game and invite friends."
            },
            {
              q: "Can I play with my friends?",
              a: "Yes! Create a room and share the room code with your friends to play together."
            },
            {
              q: "Is the game free to play?",
              a: "Yes, Ludo Masters is completely free to play."
            },
            {
              q: "How does the ranking system work?",
              a: "Rankings are based on your win rate and total number of games played."
            },
            {
              q: "What happens if I lose connection?",
              a: "You can rejoin the game within 30 seconds. After that, an AI will take over."
            }
          ].map((item, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-2">{item.q}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.a}</p>
            </div>
          ))}
        </div>
      </main>


    </div>
  );
} 