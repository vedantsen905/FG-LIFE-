import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function TermsConditions() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Fixed Navbar */}
      <header className="fixed w-full z-50 shadow-sm">
        <Navbar />
      </header>

      {/* Main Content - Adjusted for navbar height */}
      <main className="flex-grow pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        {/* Modern Header with Gradient */}
        <div className="max-w-7xl mx-auto mb-12 text-center">
          <div className="bg-gradient-to-r from-teal-600 to-teal-500 rounded-2xl shadow-lg py-12 px-6">
            <h1 className="text-4xl font-bold text-white tracking-tight sm:text-5xl">
              Terms & Conditions
            </h1>
            <p className="mt-4 text-xl text-teal-100">
              Legal agreement for using our services
            </p>
          </div>
        </div>

        {/* Content Container */}
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            {/* Beautiful Content Layout */}
            <div className="p-8 md:p-12 lg:p-16">
              <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
                <div className="border-b pb-8">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">Website Usage Agreement</h2>
                  <p>
                    By accessing the FG Life Website/s ("Website"), you agree to be bound by the terms and conditions set out below. The domain name for the Website is owned by FG Life. The Website/s, content and information available through the Website/s are owned and operated by FG Life.
                  </p>
                </div>

                <div className="border-b pb-8">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information Accuracy</h2>
                  <p>
                    You may seek appropriate personalised financial advice from a qualified financial adviser that suits your circumstances and goals. While every effort is made to ensure the information on this website is up-to-date and correct, AIFP Personal Risk Limited (FG Life) makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk. The information on this website is subject to change at any time.
                  </p>
                </div>

                <div className="border-b pb-8">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ownership</h2>
                  <p>
                    By accessing the FG Life Website/s ("Website"), you agree to be bound by the terms and conditions set out below. The domain name for the Website is owned by FG Life. The Website/s, content and information available through the Website/s are owned and operated by FG Life.
                  </p>
                </div>

                <div className="border-b pb-8">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">Error Correction</h2>
                  <p>
                    FG Life Services will take action to correct any error or inaccuracy which is brought to its attention, within a reasonable time.
                  </p>
                </div>

                <div className="border-b pb-8">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">Intellectual Property</h2>
                  <p>
                    All materials on this website are protected by copyright and intellectual property laws and are the property of FG Life unless otherwise explicitly stated. The website may also contain a number of trademarks, logos and symbols which are either owned by FG Life or used with the approval of the respective trademark owner. Nothing on the website should be construed as granting any licence to use any trademark without the permission of the trademark owner.
                  </p>
                </div>

                <div className="border-b pb-8">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">Terms Updates</h2>
                  <p>
                    FG Life may amend these terms of use from time to time so you should check and read these terms of use regularly. By continuing to use this site after any such amendment, you are deemed to have agreed to the amended terms of use.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">Governing Law</h2>
                  <p>
                    This site and content has been prepared in accordance with the requirements of New Zealand law. These terms and any matters or disputes connected with this site will be governed by New Zealand laws and will be dealt with by New Zealand courts.
                  </p>
                </div>
              </div>
            </div>

            {/* Visual accent element */}
            <div className="h-2 bg-gradient-to-r from-teal-500 to-teal-300"></div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
}