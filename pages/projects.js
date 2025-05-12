export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Example Project Card */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Face Recognition App</h3>
            <p className="text-gray-700">A secure web app using AWS, face_recognition library, and DynamoDB.</p>
            <a
              href="https://github.com/yourusername/face-recognition-app"
              className="text-blue-600 mt-3 inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>

          {/* Add more projects here */}
        </div>
      </div>
    </div>
  );
}
