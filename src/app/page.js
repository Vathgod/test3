import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-5xl font-bold mb-4">Welcome to My Homepage</h1>
      <h2 className="text-2xl font-semibold mb-6">Hi, I am Alex Rivera</h2>

      <div className="bg-white text-gray-900 rounded-2xl shadow-xl p-6 w-full max-w-3xl space-y-6">
        <section>
          <h3 className="text-xl font-semibold mb-2">🧑‍💻 About Me</h3>
          <p>I am a king</p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2">🚀 Projects</h3>
          <ul className="list-disc list-inside">
            <li>Advanced Budget Tracker</li>
            <li>Personal Blog Platform</li>
            <li>AI-Powered Chatbot</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2">📫 Contact</h3>
          <p>Email: alex.rivera@example.com</p>
          <p>GitHub: github.com/alex-rivera</p>
        </section>
      </div>
    </div>
  );
}
