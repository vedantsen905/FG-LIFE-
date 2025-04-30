// components/PrivacyPolicy.js
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar with fixed positioning */}
      <div className="fixed w-full z-50">
        <Navbar />
      </div>

      {/* Main content with padding to account for fixed navbar */}
      <main className="flex-grow pt-20"> {/* Adjust pt-20 based on your navbar height */}
        {/* Modern header with gradient */}
        <div className="bg-gradient-to-r from-teal-600 to-teal-500 text-white px-6 py-16 md:px-12">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold">Privacy Policy</h1>
            <p className="text-lg mt-3 opacity-90">
              Version 1.0 - <strong>01 Nov, 2024</strong>
            </p>
          </div>
        </div>

        {/* Main content container */}
        <div className="max-w-6xl mx-auto px-6 py-12 md:px-8 lg:flex lg:gap-8">
          {/* Left column - Main content (2/3 width) */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-semibold mb-6 text-gray-800 border-b pb-4">Privacy Policy</h2>
              
              <div className="space-y-8">
                {/* Introduction */}
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    At FG Life, we are committed to protecting the privacy of our users. This Privacy Policy outlines the
                    information we collect, how we use it and the measures we take to ensure its security. References in this
                    Privacy Policy to "we", "us" and "our" means, AIFP Personal Risk Ltd (FG Life). We protect your information
                    in accordance with the Privacy Act 2020 (the Act).
                  </p>
                </div>

                {/* Your Authorization */}
                <div className="border-t pt-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Your Authorisation</h3>
                  <p className="text-gray-700 leading-relaxed">
                    By providing us with your personal information or engaging us to provide you with our services, you consent
                    to the collection, use, storage and disclosure of personal information in accordance with this Privacy Policy.
                  </p>
                </div>

                {/* Information Collection */}
                <div className="border-t pt-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Information Collection and Use</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We collect personal information, such as name, address, phone number, email, and financial information from
                    you to provide financial advice and services. This information is used to provide personalised financial
                    advice and recommendation to meet your financial circumstances and goals.
                  </p>
                </div>

                {/* Why we collect */}
                <div className="border-t pt-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Why do we collect your Personal Information?</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    To provide you with our financial advice and recommendation for products and services that suit you for your
                    circumstances, needs and objectives, we need to collect your personal information.
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    We may also collect your personal information (including credit history and health status) on behalf of the
                    lenders, insurers and other providers of the Products that you may choose to apply for.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Under no circumstances do we sell your information or share it with third parties unless permitted by you.
                  </p>
                </div>

                {/* How we collect */}
                <div className="border-t pt-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">How do we collect your Information?</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Generally, we will collect your personal information directly from you. We may also collect your personal information from:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 leading-relaxed">
                    <li>with your authorisation, banks and employers;</li>
                    <li>product providers; and</li>
                    <li>any other person authorised by you.</li>
                  </ul>
                  <p className="text-gray-700 mb-2 leading-relaxed">
                    If you provide any personal information about anyone else to us (the Other Person), you confirm that:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
                    <li>the Other Person has authorised the disclosure to us and use of their information;</li>
                    <li>the Other Person knows their right to access and request correction of their personal information.</li>
                  </ul>
                </div>

                {/* Information Sharing */}
                <div className="border-t pt-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Information Sharing and Disclosure</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    We do not sell, rent, or share any personal information with third parties, except as necessary to provide
                    financial services or as required by law. We may disclose your personal information to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 leading-relaxed">
                    <li>Product Providers, third parties or others</li>
                    <li>Referral partners who can assist with your goals</li>
                    <li>Investors or entities involved in our business transitions</li>
                    <li>Government/regulatory bodies as required</li>
                    <li>Auditors for compliance and best practice</li>
                    <li>Credit agencies, employers, referees</li>
                    <li>Any other party authorised by you</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    We ensure all disclosed parties comply with the Privacy Act and uphold our privacy standards.
                  </p>
                </div>

                {/* International Disclosure */}
                <div className="border-t pt-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Do we disclose your Personal Information to anyone outside New Zealand?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We may use cloud storage to store your personal information. The cloud storage and the data centres may be
                    located outside New Zealand.
                  </p>
                </div>

                {/* Your Rights */}
                <div className="border-t pt-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Your Rights</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    You may access and request corrections for any of your personal information that we hold at any time.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    We rely on you to ensure the information we hold about you is accurate. If any of your personal information
                    changes, please contact us as soon as practicable via email at info@fglife.co.nz.
                  </p>
                </div>

                {/* Security */}
                <div className="border-t pt-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Security</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We take the security of our users' personal information seriously and use appropriate physical, technical,
                    and administrative safeguards to protect it from unauthorised access, use, or disclosure. This includes
                    encryption, secure servers, and firewalls.
                  </p>
                </div>

                {/* Updates */}
                <div className="border-t pt-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Updates to Privacy Policy</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws.
                    We encourage you to review this policy periodically for any updates.
                  </p>
                </div>

                {/* Contact */}
                <div className="border-t pt-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Contact Information</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    If you have any questions about this Privacy Policy or our information practices, please contact our Privacy Officer using the details below:
                  </p>
                  <p className="text-gray-700 text-md leading-relaxed">
                    <strong>Phone:</strong> 0800 344 700<br />
                    <strong>Email:</strong> compliance@fglife.co.nz<br />
                    <strong>Post:</strong> 430 Ulster Street, Beerescourt, Hamilton 3200
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Sticky sidebar (1/3 width) */}
          <div className="lg:w-1/3 mt-8 lg:mt-0">
            <div className="sticky top-28"> {/* Adjusted to account for navbar */}
              <div className="border border-gray-200 rounded-xl p-6 shadow-sm bg-white">
                <h4 className="text-xl font-semibold mb-4 text-gray-800">
                  How can you contact us about this notice?
                </h4>
                <p className="text-gray-700 mb-5 leading-relaxed">
                  If you have any questions or concerns about the privacy policy please contact us.
                </p>
                <div className="space-y-3 text-gray-700 text-sm leading-relaxed">
                  <p><strong className="text-gray-800">Email:</strong> info@fglife.co.nz</p>
                  <p><strong className="text-gray-800">Company:</strong> FG Life</p>
                  <div>
                    <strong className="text-gray-800">Address:</strong>
                    <p className="mt-1">430 Ulster Street, Beerescourt,<br />
                    Hamilton 3200, New Zealand</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}