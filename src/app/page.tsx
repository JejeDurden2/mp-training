export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <main className="text-center px-4">
        <h1 className="text-5xl font-bold mb-4 text-gray-900">
          Welcome to Your App
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl">
          A modern, production-ready landing page built with Next.js, TypeScript, and Tailwind CSS
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#features"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Get Started
          </a>
          <a
            href="#about"
            className="px-6 py-3 bg-white text-indigo-600 rounded-lg hover:bg-gray-50 transition-colors border border-indigo-600"
          >
            Learn More
          </a>
        </div>
      </main>
    </div>
  );
}
