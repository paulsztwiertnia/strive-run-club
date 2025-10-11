import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
        <Image
            src="/STR-1-scaled.jpg"
            alt="Strive Run Club in action"
            fill
            className="object-cover brightness-50"
          priority
        />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Welcome to <span className="text-[#C1FF72]">Strive Run Club</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            Run, Connect, Thrive Together
          </p>
          <Link
            href="/activities"
            className="inline-block bg-[#C1FF72] text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#b3e866] transition-colors"
          >
            Join Our Next Run
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-12">
          {/* Intro */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              More Than Just Running
            </h2>
            <div className="w-24 h-1 bg-[#C1FF72] mx-auto mb-8"></div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
              Our run club is more than just a community of runners—it&apos;s a family that supports and inspires each other to move towards our personal best, no matter our experience level. Whether you&apos;re training for your next marathon or taking your first steps towards running, our club is here to help you achieve your fitness goals while having fun along the way.
            </p>

            <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
              We host weekly runs that vary from 5km social jogs to more intense interval training sessions. Plus, we love celebrating our runs with community events, from ice cream socials to fitness workshops.
            </p>

            <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-12">
              Beyond running, we recognize the deep connection between physical and mental well-being. Our club fosters an environment where movement becomes a tool for stress relief, confidence building, and self-care. Through mindfulness-based runs, guided breathwork, and a supportive community, we aim to empower every member to strengthen both their body and mind.
            </p>

            <div className="text-center">
              <p className="text-2xl md:text-3xl font-semibold text-black">
                Come and join the movement—let&apos;s make every step count, together!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#C1FF72] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Community Focused</h3>
              <p className="text-gray-600">
                Join a supportive family that celebrates every milestone together
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#C1FF72] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">All Levels Welcome</h3>
              <p className="text-gray-600">
                From beginners to marathoners, everyone has a place here
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#C1FF72] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Mind & Body</h3>
              <p className="text-gray-600">
                Focus on mental wellness alongside physical fitness
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Check out our weekly schedule and join us for your first run
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/activities"
              className="inline-block bg-[#C1FF72] text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#b3e866] transition-colors"
            >
              View Schedule
            </Link>
            <Link
              href="/about"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
