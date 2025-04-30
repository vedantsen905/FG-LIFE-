import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Disclaimer() {
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
              Disclaimer
            </h1>
            <p className="mt-4 text-xl text-teal-100">
              Important legal information about our website
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
                  <p>
                    The information provided and services described on this website is of a general nature and is not intended to be personalised financial advice on any particular situation. The information provided on this website is not intended to be a substitute for professional advice.
                  </p>
                </div>

                <div className="border-b pb-8">
                  <p>
                    You may seek appropriate personalised financial advice from a qualified financial adviser that suits your circumstances and goals. While every effort is made to ensure the information on this website is up-to-date and correct, AIFP Personal Risk Limited (FG Life) makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk. The information on this website is subject to change at any time.
                  </p>
                </div>

                <div className="border-b pb-8">
                  <p>
                    The information on this website is subject to change without notice and we do not guarantee the accuracy, completeness, or reliability of the information provided. The calculators or other interactive tools which may be used on this website from time to time are intended to be illustrative only. FG Life does not represent or warrant the accuracy, adequacy or completeness of any information provided by those calculators or other tools.
                  </p>
                </div>

                <div className="border-b pb-8">
                  <p>
                    FG Life and its director/s, employees, associates and contractors do not accept any liability arising in any way (including by reason of negligence) for errors in, or omissions from, the information and do not accept any loss or damage (including, without limitation loss of profits, business or data), however caused, which arise out of, or result from any reliance on, or inability to use or access, any information on the website or any other website which is linked to this website. This website may contain links to third-party websites. We are not responsible for the content or accuracy of those websites, and the inclusion of these links does not imply endorsement of those websites or their services.
                  </p>
                </div>

                <div className="border-b pb-8">
                  <p>
                    All materials on this website are protected by copyright and intellectual property laws and are the property of FG Life unless otherwise explicitly stated. The website may also contain a number of trademarks, logos and symbols which are either owned by FG Life or used with the approval of the respective trademark owner. Nothing on the website should be construed as granting any licence to use any trademark without the permission of the trademark owner.
                  </p>
                </div>

                <div>
                  <p>
                    Every effort is made to keep the website up and running smoothly. However, FG Life takes no responsibility for, and will not be liable for, any loss you may suffer due to the website being temporarily unavailable either during its planned maintenance or due to technical or other issues beyond our control.
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