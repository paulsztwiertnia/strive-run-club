import PhotoGallery from "@/components/PhotoGallery";

export default function Activities() {
  const galleryImages = [
    "/STR-5-scaled.jpg",
    "/STR-6-scaled.jpg",
    "/STR-7-scaled.jpg",
    "/STR-8-scaled.jpg",
    "/STR-9-scaled.jpg",
    "/STR-10-scaled.jpg",
    "/STR-11-scaled.jpg",
    "/IMG_5732-scaled.jpg",
  ];

  const schedule = [
    {
      day: "Monday's Strive Social",
      distance: "3-5K",
      location: "Humber Bay Arch Bridge",
      time: "6:30 PM – 7:15 PM",
      focus: "3-5K run with pacing strategies, post-run recovery, and social time with fellow runners. Stay for hydration, body workout and a chance to connect with the Strive community!",
    },
    {
      day: "Wednesday's Strive Speed Work/Hill Training",
      distance: "",
      location: "High Park (Maple Leaf)",
      time: "6:30 PM – 7:30 PM",
      focus: "2-5k total interval sprints or hill repeats for strength & speed",
    },
    {
      day: "Sunday's Strive Long Run Recovery",
      distance: "5-10K",
      location: "Humber Bay Arch Bridge",
      time: "9:00 AM – 10:00 AM",
      focus: "Slow and steady – great for recovery",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-black">
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
            Events & <span className="text-[#C1FF72]">Activities</span>
          </h1>
          <p className="text-xl md:text-2xl font-light">
            Run Together, Thrive Together
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Join us every Sunday & Saturday morning for our signature 3-5K group run! Whether you&apos;re a seasoned runner or just getting started, our runs are designed for all experience levels. These social runs are a fantastic way to meet new people, enjoy the outdoors, and stay active without pressure. Everyone runs at their own pace, and we always have a coach bringing up the rear so no one gets left behind. Come join the fun, let&apos;s make running a part of your weekend tradition!
          </p>
        </div>

        {/* Schedule */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Weekly Schedule</h2>
            <div className="w-24 h-1 bg-[#C1FF72] mx-auto"></div>
          </div>

          <div className="space-y-6">
            {schedule.map((session, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-100 rounded-lg p-6 md:p-8 hover:border-[#C1FF72] transition-colors"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Left Column */}
                  <div className="md:col-span-1">
                    <h3 className="text-2xl font-bold mb-2">
                      {session.day} {session.distance && <span className="inline-block bg-black text-[#C1FF72] px-2 py-1 rounded ml-1">{session.distance}</span>}
                    </h3>
                    <div className="space-y-2 text-gray-700">
                      <div className="flex items-start space-x-2">
                        <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{session.location}</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{session.time}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="md:col-span-2">
                    <h4 className="font-semibold text-lg mb-2">Focus:</h4>
                    <p className="text-gray-700 leading-relaxed">{session.focus}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="mt-8 bg-[#C1FF72]/10 border-l-4 border-[#C1FF72] p-4 rounded">
            <p className="text-sm text-gray-700">
              <span className="font-semibold">*Note:</span> Location is subject to change. Follow us on Instagram for updates.
            </p>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Activity Highlights</h2>
            <div className="w-24 h-1 bg-[#C1FF72] mx-auto mb-4"></div>
            <p className="text-gray-600">Capturing moments from our weekly runs</p>
          </div>
          <PhotoGallery images={galleryImages} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Join Us?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            No registration needed—just show up and run!
          </p>
          <a
            href="/training"
            className="inline-block bg-[#C1FF72] text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#b3e866] transition-colors"
          >
            Explore Training Options
          </a>
        </div>
      </section>
    </div>
  );
}

