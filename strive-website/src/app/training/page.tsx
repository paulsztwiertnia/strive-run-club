import PhotoGallery from "@/components/PhotoGallery";

export default function Training() {
  const galleryImages = [
    "/STR-3-scaled.jpg",
    "/STR-4-scaled.jpg",
    "/IMG_6245-scaled.jpg",
    "/STR-9-scaled.jpg",
    "/STR-10-scaled.jpg",
    "/STR-11-scaled.jpg",
    "/coach-karim-2.png",
    "/STR-2-scaled.jpg",
  ];

  const strengthPackages = [
    {
      sessions: 5,
      hours: 5,
      price: 250,
      perHour: 50,
    },
    {
      sessions: 10,
      hours: 10,
      price: 450,
      perHour: 45,
    },
    {
      sessions: 15,
      hours: 15,
      price: 650,
      perHour: 43,
      featured: true,
    },
    {
      sessions: 20,
      hours: 20,
      price: 800,
      perHour: 40,
    },
  ];

  const runningPackages = [
    {
      sessions: 5,
      hours: 5,
      price: 275,
      perHour: 55,
    },
    {
      sessions: 10,
      hours: 10,
      price: 500,
      perHour: 50,
    },
    {
      sessions: 15,
      hours: 15,
      price: 725,
      perHour: 48,
      featured: true,
    },
    {
      sessions: 20,
      hours: 20,
      price: 950,
      perHour: 47,
    },
  ];

  const hybridPackages = [
    {
      sessions: 1,
      hours: 1,
      price: 60,
      perHour: 60,
      label: "Single Session",
    },
    {
      sessions: 5,
      hours: 5,
      price: 275,
      perHour: 55,
    },
    {
      sessions: 10,
      hours: 10,
      price: 500,
      perHour: 50,
      featured: true,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-black">
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
            Training <span className="text-[#C1FF72]">Sessions</span>
          </h1>
          <p className="text-xl md:text-2xl font-light">
            Push Your Limits
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Training for Speed and Endurance
          </h2>
          <div className="w-24 h-1 bg-[#C1FF72] mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Our weekly training sessions focus on helping members improve their speed, stamina, and overall running technique. Led by experienced coaches, these sessions incorporate a mix of sprints, intervals, hill runs, and endurance training to challenge runners at every level.
          </p>
        </div>

        {/* Training Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white border-2 border-gray-100 rounded-lg p-6 hover:border-[#C1FF72] transition-colors">
            <div className="text-4xl mb-4 text-center">⚡</div>
            <h3 className="text-xl font-bold mb-3 text-center">Speed Training</h3>
            <p className="text-gray-700 text-center">
              Want to shave seconds off your mile time? These sessions focus on high-intensity interval training to boost speed and leg turnover.
            </p>
          </div>

          <div className="bg-white border-2 border-gray-100 rounded-lg p-6 hover:border-[#C1FF72] transition-colors">
            <div className="text-4xl mb-4 text-center">🏃</div>
            <h3 className="text-xl font-bold mb-3 text-center">Endurance Training</h3>
            <p className="text-gray-700 text-center">
              For those looking to go the distance, our endurance workouts are perfect for building stamina and preparing for longer runs or races.
            </p>
          </div>

          <div className="bg-white border-2 border-gray-100 rounded-lg p-6 hover:border-[#C1FF72] transition-colors">
            <div className="text-4xl mb-4 text-center">💪</div>
            <h3 className="text-xl font-bold mb-3 text-center">Strength Training</h3>
            <p className="text-gray-700 text-center">
              Whether you&apos;re a beginner or an experienced athlete, our workouts focus on improving endurance, power, and injury prevention through weight training, resistance exercises, and bodyweight movements.
            </p>
          </div>
        </div>
      </section>

      {/* 1-on-1 Training Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">1-on-1 Training Sessions</h2>
            <div className="w-24 h-1 bg-[#C1FF72] mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Personalized training tailored to your goals, whether you&apos;re focusing on running, strength, or a combination of both.
            </p>
          </div>

          {/* Training Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">Running Focus</h3>
              <p className="text-gray-700">Speed, endurance, technique, and race preparation.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">Strength & Conditioning</h3>
              <p className="text-gray-700">Weight training, injury prevention, and muscle building.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">Hybrid Training</h3>
              <p className="text-gray-700">Combining running & strength for peak performance.</p>
            </div>
          </div>

          {/* Strength Training Packages */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-2">Strength Training Package</h3>
              <p className="text-gray-600">Gym-Based: Weight training, muscle building, injury prevention</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {strengthPackages.map((pkg, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-lg p-6 ${
                    pkg.featured
                      ? 'border-4 border-[#C1FF72] shadow-lg scale-105'
                      : 'border-2 border-gray-200'
                  } hover:shadow-md transition-all`}
                >
                  {pkg.featured && (
                    <div className="bg-[#C1FF72] text-black text-sm font-bold py-1 px-3 rounded-full inline-block mb-3">
                      BEST VALUE
                    </div>
                  )}
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">${pkg.price}</div>
                    <div className="text-gray-600 mb-4">
                      {pkg.sessions} Sessions ({pkg.hours} hours)
                    </div>
                    <div className="inline-block px-3 py-1 rounded-md">
                      <div className="text-lg font-semibold text-gray-700">
                        ${pkg.perHour}/hour
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Running Training Packages */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-2">Running Training Package</h3>
              <p className="text-gray-600">Outdoor & Track-Based: Endurance, speed drills, running form, and race preparation</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {runningPackages.map((pkg, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-lg p-6 ${
                    pkg.featured
                      ? 'border-4 border-[#C1FF72] shadow-lg scale-105'
                      : 'border-2 border-gray-200'
                  } hover:shadow-md transition-all`}
                >
                  {pkg.featured && (
                    <div className="bg-[#C1FF72] text-black text-sm font-bold py-1 px-3 rounded-full inline-block mb-3">
                      BEST VALUE
                    </div>
                  )}
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">${pkg.price}</div>
                    <div className="text-gray-600 mb-4">
                      {pkg.sessions} Sessions ({pkg.hours} hours)
                    </div>
                    <div className="inline-block px-3 py-1 rounded-md">
                      <div className="text-lg font-semibold text-gray-700">
                        ${pkg.perHour}/hour
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hybrid Training */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-2">Hybrid Training</h3>
              <p className="text-gray-600">Gym & Track-Based: Combining running and strength for peak performance</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {hybridPackages.map((pkg, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-lg p-6 ${
                    pkg.featured
                      ? 'border-4 border-[#C1FF72] shadow-lg scale-105'
                      : 'border-2 border-gray-200'
                  } hover:shadow-md transition-all`}
                >
                  {pkg.featured && (
                    <div className="bg-[#C1FF72] text-black text-sm font-bold py-1 px-3 rounded-full inline-block mb-3">
                      POPULAR
                    </div>
                  )}
                  <div className="text-center">
                    {pkg.label && (
                      <div className="text-sm font-semibold text-gray-600 mb-2 uppercase">
                        {pkg.label}
                      </div>
                    )}
                    <div className="text-3xl font-bold mb-2">${pkg.price}</div>
                    <div className="text-gray-600 mb-4">
                      {pkg.sessions} {pkg.sessions === 1 ? 'Session' : 'Sessions'} ({pkg.hours} {pkg.hours === 1 ? 'hour' : 'hours'})
                    </div>
                    <div className="inline-block px-3 py-1 rounded-md">
                      <div className="text-lg font-semibold text-gray-700">
                        ${pkg.perHour}/hour
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Training in Action</h2>
            <div className="w-24 h-1 bg-[#C1FF72] mx-auto mb-4"></div>
            <p className="text-gray-600">See our members pushing their limits</p>
          </div>
          <PhotoGallery images={galleryImages} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Level Up?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Book your 1-on-1 session today and start achieving your fitness goals
          </p>
          <a
            href="#"
            className="inline-block bg-[#C1FF72] text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#b3e866] transition-colors"
          >
            Contact Us to Book
          </a>
        </div>
      </section>
    </div>
  );
}

