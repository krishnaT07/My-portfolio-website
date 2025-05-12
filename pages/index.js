import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-purple-800 text-white px-6">
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center gap-10 py-20">
        {/* Left: Text Content */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I&apos;m [Your Name]</h1>
          <p className="text-lg md:text-xl mb-6">
            A passionate developer focused on AI, ML, and building powerful web experiences. Welcome to my digital space!
          </p>
          <div className="flex gap-4">
            <Link href="/projects" className="bg-white text-blue-800 font-semibold py-2 px-4 rounded-lg shadow hover:bg-blue-100 transition">
              View Projects
            </Link>
            <Link href="/contact" className="border border-white py-2 px-4 rounded-lg hover:bg-white hover:text-blue-800 transition">
              Contact Me
            </Link>
          </div>
        </div>

        {/* Right: Profile Image */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/profile.jpg" // Replace with your image path
            alt="Profile"
            width={300}
            height={300}
            className="rounded-full shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
}
