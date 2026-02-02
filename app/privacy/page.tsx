"use client";

import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Vybraa</title>
        <meta
          name="description"
          content="Read Vybraa's Privacy Policy to understand how we collect, use, and protect your personal information."
        />
      </Head>

      <main className="min-h-screen bg-white text-gray-900">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center"
              title="Go to Vybraa Homepage"
            >
              <Image
                src="/jpeg/logo.jpeg"
                alt="Vybraa Logo"
                width={48}
                height={48}
                className="w-12 h-12 rounded-full"
              />
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link
                href="/#features"
                className="text-gray-700 hover:text-[#F7B708] transition-colors"
              >
                Features
              </Link>
              <Link
                href="/#how-it-works"
                className="text-gray-700 hover:text-[#F7B708] transition-colors"
              >
                How It Works
              </Link>
              <Link
                href="/#ui-preview"
                className="text-gray-700 hover:text-[#F7B708] transition-colors"
              >
                App Preview
              </Link>
              <Link
                href="/#contact"
                className="text-gray-700 hover:text-[#F7B708] transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </nav>

        {/* Privacy Policy Content */}
        <section className="pt-24 pb-16 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#2e022e]">
                Privacy Policy
              </h1>
              <p className="text-lg text-gray-600">
                Effective Date: 1st September 2025
              </p>
            </motion.div>

            <motion.div
              className="prose prose-lg max-w-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-gray-50 rounded-2xl p-8 mb-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Vybraa (&quot;Vybraa,&quot; &quot;we,&quot; &quot;our,&quot;
                  or &quot;us&quot;) values your privacy. This Privacy Policy
                  explains how we collect, use, disclose, and protect your
                  information when you use our services, including our mobile
                  application, website, and related platforms (together, the
                  &quot;Services&quot;). By using Vybraa, you agree to the terms
                  of this Privacy Policy.
                </p>
              </div>

              <div className="space-y-8">
                {/* Section 1 */}
                <div>
                  <h2 className="text-2xl font-bold text-[#2e022e] mb-6">
                    1. Information We Collect
                  </h2>
                  <p className="text-gray-700 mb-4">
                    We collect the following categories of information when you
                    use Vybraa:
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-[#2e022e] mb-4">
                        1.1 Information You Provide Directly
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>
                          <strong>Account Information:</strong> Name, email
                          address, phone number, date of birth, username,
                          password.
                        </li>
                        <li>
                          <strong>Profile Details:</strong> Profile photo,
                          biography, artist or fan status, preferences,
                          interests.
                        </li>
                        <li>
                          <strong>Payment Information:</strong> Credit/debit
                          card details, bank account, wallet info (processed
                          securely by third-party payment providers; we do not
                          store full card details).
                        </li>
                        <li>
                          <strong>Content:</strong> Messages, voice/video
                          requests, uploads, interactions with artists/fans,
                          feedback, and support inquiries.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-[#2e022e] mb-4">
                        1.2 Information We Collect Automatically
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>
                          <strong>Device Information:</strong> IP address,
                          device type, operating system, browser type, unique
                          device identifiers.
                        </li>
                        <li>
                          <strong>Usage Data:</strong> Pages viewed, features
                          used, in-app activity, time spent, links clicked.
                        </li>
                        <li>
                          <strong>Location Data:</strong> Approximate location
                          derived from IP or with your consent, precise
                          geolocation.
                        </li>
                        <li>
                          <strong>Cookies & Tracking Technologies:</strong>{" "}
                          Session identifiers, analytics data, tracking pixels.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-[#2e022e] mb-4">
                        1.3 Information From Third Parties
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>
                          <strong>Social Media & Integrations:</strong> If you
                          link social accounts (e.g., Instagram, TikTok, X), we
                          may receive information from those platforms.
                        </li>
                        <li>
                          <strong>Partners & Vendors:</strong> Data from payment
                          processors, analytics providers, marketing partners.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Section 2 */}
                <div>
                  <h2 className="text-2xl font-bold text-[#2e022e] mb-6">
                    2. How We Use Your Information
                  </h2>
                  <p className="text-gray-700 mb-4">We use your data to:</p>
                  <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                    <li>Provide and improve our Services.</li>
                    <li>
                      Facilitate artist–fan interactions and transactions.
                    </li>
                    <li>Process payments and fulfill purchase requests.</li>
                    <li>Personalize recommendations, feed, and ads.</li>
                    <li>
                      Communicate with you (updates, security alerts,
                      promotions).
                    </li>
                    <li>
                      Monitor and prevent fraud, abuse, or violations of our
                      Terms.
                    </li>
                    <li>
                      Comply with legal obligations and regulatory requirements.
                    </li>
                  </ol>
                </div>

                {/* Section 3 */}
                <div>
                  <h2 className="text-2xl font-bold text-[#2e022e] mb-6">
                    3. How We Share Your Information
                  </h2>
                  <p className="text-gray-700 mb-4">
                    We do not sell your personal data. However, we may share
                    information in the following ways:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      <strong>Service Providers:</strong> Payment processors,
                      cloud hosting, analytics, customer support.
                    </li>
                    <li>
                      <strong>Artists & Fans:</strong> Limited profile details
                      necessary to complete interactions.
                    </li>
                    <li>
                      <strong>Business Transfers:</strong> In case of merger,
                      acquisition, or sale of assets.
                    </li>
                    <li>
                      <strong>Legal & Compliance:</strong> To comply with laws,
                      regulations, government requests, or enforce our Terms.
                    </li>
                    <li>
                      <strong>With Your Consent:</strong> If you explicitly
                      authorize sharing.
                    </li>
                  </ul>
                </div>

                {/* Section 4 */}
                <div>
                  <h2 className="text-2xl font-bold text-[#2e022e] mb-6">
                    4. Data Security
                  </h2>
                  <p className="text-gray-700">
                    We use encryption, secure servers, firewalls, and regular
                    audits to protect your data. However, no system is 100%
                    secure. Users are responsible for safeguarding their login
                    credentials.
                  </p>
                </div>

                {/* Section 5 */}
                <div>
                  <h2 className="text-2xl font-bold text-[#2e022e] mb-6">
                    5. Data Retention
                  </h2>
                  <p className="text-gray-700">
                    We retain your data for as long as your account is active or
                    as required by law. You may request deletion of your account
                    and data, subject to certain legal or operational
                    requirements.
                  </p>
                </div>

                {/* Section 6 */}
                <div>
                  <h2 className="text-2xl font-bold text-[#2e022e] mb-6">
                    6. Your Rights
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Depending on your jurisdiction (GDPR, CCPA, NDPR, etc.), you
                    may have rights to:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>Access your personal data.</li>
                    <li>Correct inaccurate or incomplete data.</li>
                    <li>
                      Request deletion (&quot;right to be forgotten&quot;).
                    </li>
                    <li>Restrict or object to processing.</li>
                    <li>Data portability (download your data).</li>
                    <li>Opt-out of marketing communications.</li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    Requests can be made at:{" "}
                    <a
                      href="mailto:support@vybraa.com"
                      className="text-[#F7B708] hover:underline"
                    >
                      support@vybraa.com
                    </a>
                    .
                  </p>
                </div>

                {/* Section 7 */}
                <div>
                  <h2 className="text-2xl font-bold text-[#2e022e] mb-6">
                    7. Children&apos;s Privacy
                  </h2>
                  <p className="text-gray-700">
                    Vybraa is not intended for children under 18 (or the minimum
                    legal age in your country). We do not knowingly collect data
                    from minors. If we learn that we have, we will delete it.
                  </p>
                </div>

                {/* Section 8 */}
                <div>
                  <h2 className="text-2xl font-bold text-[#2e022e] mb-6">
                    8. International Data Transfers
                  </h2>
                  <p className="text-gray-700">
                    Your data may be transferred and stored outside your country
                    of residence, including in countries that may not have the
                    same data protection laws. We ensure appropriate safeguards
                    (e.g., Standard Contractual Clauses) are in place.
                  </p>
                </div>

                {/* Section 9 */}
                <div>
                  <h2 className="text-2xl font-bold text-[#2e022e] mb-6">
                    9. Cookies and Tracking
                  </h2>
                  <p className="text-gray-700">
                    We use cookies and similar technologies to enhance your
                    experience, improve performance, and deliver targeted ads.
                    You can manage cookie preferences through your browser
                    settings.
                  </p>
                </div>

                {/* Section 10 */}
                <div>
                  <h2 className="text-2xl font-bold text-[#2e022e] mb-6">
                    10. Third-Party Links
                  </h2>
                  <p className="text-gray-700">
                    Our Services may contain links to third-party websites or
                    apps. We are not responsible for the privacy practices of
                    those sites.
                  </p>
                </div>

                {/* Section 11 */}
                <div>
                  <h2 className="text-2xl font-bold text-[#2e022e] mb-6">
                    11. Updates to This Policy
                  </h2>
                  <p className="text-gray-700">
                    We may update this Privacy Policy from time to time. Changes
                    will be posted with a new effective date. Continued use of
                    Vybraa constitutes acceptance of the updated policy.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Back to Home Button */}
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                href="/"
                className="inline-block bg-[#F7B708] text-black font-bold py-3 px-8 rounded-lg hover:bg-[#fce580] transition-colors shadow-lg hover:shadow-xl"
              >
                Back to Home
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#2e022e] text-white py-12 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center mb-4">
                  <Image
                    src="/jpeg/logo.jpeg"
                    alt="Vybraa Logo"
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <span className="text-xl font-bold">Vybraa</span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Africa&apos;s first fan-commerce engine connecting fans with
                  their favorite artists through personalized experiences.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Features</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>
                    <Link
                      href="/#features"
                      className="hover:text-[#F7B708] transition-colors"
                    >
                      Personalized Videos
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#features"
                      className="hover:text-[#F7B708] transition-colors"
                    >
                      Live Sessions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#features"
                      className="hover:text-[#F7B708] transition-colors"
                    >
                      Exclusive Merchandise
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#features"
                      className="hover:text-[#F7B708] transition-colors"
                    >
                      Behind-the-Scenes
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>
                    <Link
                      href="/#how-it-works"
                      className="hover:text-[#F7B708] transition-colors"
                    >
                      How It Works
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#ui-preview"
                      className="hover:text-[#F7B708] transition-colors"
                    >
                      App Preview
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#contact"
                      className="hover:text-[#F7B708] transition-colors"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/waitlist"
                      className="hover:text-[#F7B708] transition-colors"
                    >
                      Join Waitlist
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Legal</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>
                    <Link
                      href="/terms"
                      className="hover:text-[#F7B708] transition-colors"
                    >
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy"
                      className="hover:text-[#F7B708] transition-colors"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/delete-account"
                      className="hover:text-[#F7B708] transition-colors"
                    >
                      Delete Account
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-8 text-center">
              <p className="text-gray-300 text-sm">
                &copy; {new Date().getFullYear()} Vybraa. Built for the
                heartbeat of Africa. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
