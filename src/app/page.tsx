import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Sparkle decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="sparkle absolute top-20 left-[10%] w-2 h-2 bg-white rounded-full" />
        <div className="sparkle absolute top-40 right-[15%] w-3 h-3 bg-white rounded-full" style={{ animationDelay: '0.5s' }} />
        <div className="sparkle absolute top-60 left-[20%] w-2 h-2 bg-white rounded-full" style={{ animationDelay: '1s' }} />
        <div className="sparkle absolute bottom-40 right-[25%] w-2 h-2 bg-white rounded-full" style={{ animationDelay: '1.5s' }} />
        <div className="sparkle absolute bottom-60 left-[30%] w-3 h-3 bg-white rounded-full" style={{ animationDelay: '0.7s' }} />
      </div>

      <main className="flex flex-col items-center justify-center px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-[#5B8A72] mb-2 tracking-tight">
            Pufi World
          </h1>
          <p className="text-xl md:text-2xl text-[#8B7B6B] font-medium">
            A magical place for little ones
          </p>
        </div>

        {/* Pufi Character - Floating */}
        <div className="float-animation mb-8">
          <Image
            src="/images/pufi.png"
            alt="Pufi - a cute mint green blob character"
            width={280}
            height={280}
            priority
            className="drop-shadow-2xl"
          />
        </div>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-[#6B5B4B] text-center max-w-md mb-8 leading-relaxed">
          Join Pufi and friends on colorful adventures filled with songs, learning, and fun!
        </p>

        {/* YouTube Button */}
        <a
          href="https://www.youtube.com/@PufiWorld"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#FF0000] hover:bg-[#CC0000] text-white font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg flex items-center gap-3 mb-12"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
          Watch on YouTube
        </a>

        {/* Banner with all friends */}
        <div className="w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="/images/banner.png"
            alt="Pufi and Friends - five colorful blob characters"
            width={960}
            height={400}
            className="w-full h-auto"
          />
        </div>

        {/* Meet the Friends Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#5B8A72] mb-4">
            Meet the Friends!
          </h2>
          <p className="text-[#8B7B6B] text-lg max-w-lg mx-auto">
            Pufi, Rosie, Lulu, Sunny, and Bubbles are here to make learning fun for toddlers everywhere.
          </p>
        </div>

        {/* Coming Soon */}
        <div className="mt-16 bg-white/50 backdrop-blur-sm rounded-2xl p-8 text-center max-w-md">
          <h3 className="text-2xl font-bold text-[#5B8A72] mb-2">Coming Soon!</h3>
          <p className="text-[#6B5B4B]">
            New videos every week with songs, colors, numbers, and more adventures!
          </p>
        </div>

        {/* Footer */}
        <footer className="mt-20 text-center text-[#8B7B6B] text-sm">
          <p>Made with love for little ones everywhere</p>
          <Link href="/login" className="text-[#5B8A72] hover:underline mt-2 inline-block">
            Creator Login
          </Link>
        </footer>
      </main>
    </div>
  );
}
