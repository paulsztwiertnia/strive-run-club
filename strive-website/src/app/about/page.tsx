import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-black">
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
            About <span className="text-[#C1FF72]">Us</span>
          </h1>
          <p className="text-xl md:text-2xl font-light">
            Meet the heart behind Strive Run Club
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Founder</h2>
          <div className="w-24 h-1 bg-[#C1FF72] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="order-2 lg:order-1">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/coach-karim-2.png"
                alt="Karim Joe-Dewarder - Founder and Head Coach"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="order-1 lg:order-2 space-y-6">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2">
                Karim Joe-Dewarder
              </h3>
              <div className="inline-block bg-black px-4 py-2 rounded-lg mb-6">
                <p className="text-xl text-[#C1FF72] font-semibold">
                  Founder and Head Coach
                </p>
              </div>
            </div>

            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Karim is an experienced track and field athlete with a passion for community building. As the founder of Strive Run Club, he brings years of competitive running experience and a love for helping others achieve their goals.
              </p>

              <p>
                Karim is also a certified coach and currently works at William Osler Health System as an Addictions Worker, supporting individuals through their recovery journeys and promoting mental health and wellness. His professional work deepens his commitment to fostering resilience and well-being both on and off the track.
              </p>

              <p>
                Dedicated to creating inclusive environments, Karim ensures that every runner—whether new or experienced—feels supported and empowered to improve. He leads each session with high energy and positivity, inspiring others to push beyond their limits while keeping the focus on connection, growth, and fun.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Values</h2>
            <div className="w-24 h-1 bg-[#C1FF72] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="text-5xl mb-4">💪</div>
              <h3 className="text-2xl font-bold mb-3">Strength</h3>
              <p className="text-gray-600">
                Building physical and mental resilience through consistent training and support
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold mb-3">Community</h3>
              <p className="text-gray-600">
                Creating an inclusive space where everyone feels welcome and supported
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-3">Growth</h3>
              <p className="text-gray-600">
                Encouraging every member to push beyond their limits and achieve their goals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Our Community
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Experience the difference of training with a supportive, expert-led team
          </p>
          <a
            href="/activities"
            className="inline-block bg-[#C1FF72] text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#b3e866] transition-colors"
          >
            See Our Schedule
          </a>
        </div>
      </section>
    </div>
  );
}

