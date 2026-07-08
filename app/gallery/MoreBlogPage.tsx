// app/blogs/page.tsx
import Link from "next/link";

export default function MoreBlogPage() {
  return (
    <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-12">MORE BLOGS</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Blog Post 1 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gray-100 h-48"></div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Mission smile 1k: Outdoor charity
              </h2>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
              </p>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Learn more
                </Link>
                <Link
                  href="#"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gray-100 h-48"></div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Weekly excursions
              </h2>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
              </p>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Learn more
                </Link>
                <Link
                  href="#"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gray-100 h-48"></div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Monthly public awareness
              </h2>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
              </p>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Learn more
                </Link>
                <Link
                  href="#"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 bg-gray-100 rounded-lg p-8 text-center">
          <p className="text-lg font-medium text-gray-800 mb-6">
            You can contribute to provide a place for children with special needs!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="#"
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Join as a donor
            </Link>
            <Link
              href="#"
              className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors"
            >
              Donate
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}