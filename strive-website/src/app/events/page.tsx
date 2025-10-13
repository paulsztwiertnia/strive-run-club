import PhotoGallery from "@/components/PhotoGallery";

export default function Events() {
  const galleryImages = [
    "/STR-1-scaled.jpg",
    "/STR-2-scaled.jpg",
    "/STR-3-scaled.jpg",
    "/STR-4-scaled.jpg",
    "/STR-5-scaled.jpg",
    "/STR-6-scaled.jpg",
    "/STR-7-scaled.jpg",
    "/STR-8-scaled.jpg",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-black">
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
            Community <span className="text-[#C1FF72]">Events</span>
          </h1>
          <p className="text-xl md:text-2xl font-light">
            Run, Connect, Celebrate
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-12">
          <div className="text-center mb-12">
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              We believe in building a community both on and off the running path. Throughout the year, we organize fun events for our members to come together, celebrate progress, and support each other. Here&apos;s what we have planned for the future:
            </p>
          </div>

          {/* Event Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Charity Runs */}
            <div className="bg-white border-2 border-gray-100 rounded-lg p-8 hover:border-[#C1FF72] transition-colors">
              <div className="w-16 h-16 bg-[#C1FF72] rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Charity Runs</h3>
              <p className="text-gray-700 leading-relaxed text-center">
                We love giving back to the community. A few times a year, we organize charity runs to raise funds for local causes. It&apos;s a great way to make our miles count for something bigger.
              </p>
            </div>

            {/* Guest Speaker Series */}
            <div className="bg-white border-2 border-gray-100 rounded-lg p-8 hover:border-[#C1FF72] transition-colors">
              <div className="w-16 h-16 bg-[#C1FF72] rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Guest Speaker Series</h3>
              <p className="text-gray-700 leading-relaxed text-center">
                We invite guest coaches, nutritionists, and mental health advocates to talk about topics that enhance our running journey. Come and learn, ask questions, and connect with experts in wellness and fitness.
              </p>
            </div>
          </div>

          {/* Upcoming Events Section */}
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Tuned for Upcoming Events</h3>
            <p className="text-gray-700 mb-6">
              Follow us on Instagram for the latest announcements about our community events, charity runs, and special gatherings.
            </p>
            <a
              href="https://www.instagram.com/strive_runners?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              className="inline-flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Follow on Instagram</span>
            </a>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Event Highlights</h2>
            <div className="w-24 h-1 bg-[#C1FF72] mx-auto mb-4"></div>
            <p className="text-gray-600">Memories from our past events and gatherings</p>
          </div>
          <PhotoGallery images={galleryImages} />
        </div>
      </section>
    </div>
  );
}

