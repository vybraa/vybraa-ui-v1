"use client";

import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>Terms and Conditions - Vybraa</title>
        <meta
          name="description"
          content="Read Vybraa's Terms and Conditions to understand the rules and guidelines for using our platform."
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

        {/* Terms Content */}
        <section className="pt-24 pb-16 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#2e022e]">
                Terms and Conditions
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
                  Welcome to Vybraa. These Terms and Conditions
                  (&quot;Terms&quot;) govern your access to and use of
                  Vybraa&apos;s website, mobile applications, and services
                  (collectively, the &quot;Platform&quot;). By using Vybraa, you
                  agree to these Terms. If you do not agree, you must not use
                  the Platform.
                </p>
              </div>

              <div className="space-y-8">
                {/* Section 1 */}
                <div>
                  <h2 className="text-2xl font-bold text-[#2e022e] mb-4">
                    1. Definitions
                  </h2>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      <strong>&quot;Platform&quot;</strong> – Vybraa&apos;s
                      website, app, and related services.
                    </li>
                    <li>
                      <strong>&quot;User&quot;</strong> – Any individual using
                      the Platform (fans and artists).
                    </li>
                    <li>
                      <strong>&quot;Artist&quot;</strong> – Verified creators
                      providing content, interactions, or services on Vybraa.
                    </li>
                    <li>
                      <strong>&quot;Fan&quot;</strong> – Users purchasing,
                      booking, or interacting with Artists through the Platform.
                    </li>
                    <li>
                      <strong>&quot;Content&quot;</strong> – All material
                      uploaded, created, or shared on Vybraa, including videos,
                      music, messages, and images.
                    </li>
                    <li>
                      <strong>&quot;Transaction&quot;</strong> – Any payment
                      made by Fans to Artists through Vybraa.
                    </li>
                  </ul>
                </div>

                {/* Section 2 */}
                <div>
                  <h2 className="text-2xl font-bold text-[#2e022e] mb-4">
                    2. Eligibility
                  </h2>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      • Users must be at least 18 years old or have parental
                      consent to use Vybraa.
                    </li>
                    <li>
                      • By creating an account, you confirm that all
                      registration details are accurate and up to date.
                    </li>
                    <li>
                      • Vybraa reserves the right to suspend or terminate
                      accounts that provide false information.
                    </li>
                  </ul>
                </div>

                {/* Section 3 */}
                <div>
                  <h2 className="text-2xl font-bold text-[#2e022e] mb-4">
                    3. Account Registration
                  </h2>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      • Users must create an account with a valid email, phone
                      number, and payment details.
                    </li>
                    <li>
                      • You are responsible for safeguarding your login
                      credentials.
                    </li>
                    <li>
                      • Vybraa is not liable for unauthorized account access
                      caused by your negligence.
                    </li>
                  </ul>
                </div>

                {/* Section 4 */}
                <div>
                  <h2 className="text-2xl font-bold text-[#2e022e] mb-4">
                    4. Services
                  </h2>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      • Fans can request personalized content, birthday
                      shoutouts, advice, or other experiences from Artists.
                    </li>
                    <li>
                      • Artists may set pricing, availability, and response
                      time.
                    </li>
                    <li>
                      • Vybraa provides the infrastructure for secure
                      communication and payment processing.
                    </li>
                  </ul>
                </div>

                {/* Section 5 */}
                <div>
                  <h2 className="text-2xl font-bold text-[#2e022e] mb-4">
                    5. Payments & Fees
                  </h2>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      • All payments are processed through Vybraa&apos;s secure
                      payment system.
                    </li>
                    <li>
                      • Vybraa charges a service fee [20%] on all Artist
                      earnings.
                    </li>
                    <li>
                      • Fans agree that payments are non-refundable once an
                      Artist has delivered the requested service.
                    </li>
                    <li>
                      • Artists are responsible for any applicable taxes on
                      their earnings.
                    </li>
                  </ul>
                </div>

                {/* Section 6 */}
                <div>
                  <h2 className="text-2xl font-bold text-[#2e022e] mb-4">
                    6. Intellectual Property
                  </h2>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Artists retain full ownership of their Content.</li>
                    <li>
                      • By uploading Content, Artists grant Vybraa a
                      non-exclusive, worldwide, royalty-free license to host,
                      display, and promote it within the Platform and
                      vybraa&apos;s social media platforms.
                    </li>
                    <li>
                      • Fans are prohibited from redistributing, recording, or
                      reselling Content without the Artist&apos;s consent.
                    </li>
                  </ul>
                </div>

                {/* Section 7 */}
                <div>
                  <h2 className="text-2xl font-bold text-[#2e022e] mb-4">
                    7. User Conduct
                  </h2>
                  <p className="text-gray-700 mb-4">Users agree NOT to:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      • Use Vybraa for illegal, fraudulent, or abusive purposes.
                    </li>
                    <li>• Harass, threaten, or exploit other Users.</li>
                    <li>
                      • Upload content that is obscene, defamatory, infringing,
                      or violates third-party rights.
                    </li>
                    <li>
                      • Circumvent Vybraa&apos;s payment system by arranging
                      off-platform transactions.
                    </li>
                  </ul>
                </div>

                {/* Section 8 */}
                <div>
                  <h2 className="text-2xl font-bold text-[#2e022e] mb-4">
                    8. Artist Obligations
                  </h2>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      • Artists must deliver content within the agreed
                      timeframe.
                    </li>
                    <li>
                      • Artists agree not to share harmful, misleading, or
                      plagiarized content.
                    </li>
                    <li>
                      • Artists must comply with local and international
                      copyright, trademark, and privacy laws.
                    </li>
                  </ul>
                </div>

                {/* Section 9 */}
                <div>
                  <h2 className="text-2xl font-bold text-[#2e022e] mb-4">
                    9. Fan Obligations
                  </h2>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      • Fans must respect Artists&apos; boundaries and privacy.
                    </li>
                    <li>
                      • Fans cannot demand services that violate laws or
                      Vybraa&apos;s community guidelines.
                    </li>
                    <li>
                      • Fans acknowledge that services are provided at the
                      Artist&apos;s discretion.
                    </li>
                  </ul>
                </div>

                {/* Section 10 */}
                <div>
                  <h2 className="text-2xl font-bold text-[#2e022e] mb-4">
                    10. Content Moderation
                  </h2>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      • Vybraa may review, remove, or restrict Content that
                      violates these Terms.
                    </li>
                    <li>
                      • Vybraa may suspend or terminate accounts engaged in
                      repeated or severe violations.
                    </li>
                  </ul>
                </div>

                {/* Section 11 */}
                <div>
                  <h2 className="text-2xl font-bold text-[#2e022e] mb-4">
                    11. Privacy & Data Protection
                  </h2>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      • Vybraa collects and processes personal data in line with
                      its Privacy Policy.
                    </li>
                    <li>
                      • Users consent to the use of cookies, analytics, and data
                      storage for platform optimization.
                    </li>
                    <li>
                      • Vybraa does not sell personal information to third
                      parties without consent.
                    </li>
                  </ul>
                </div>

                {/* Section 12 */}
                <div>
                  <h2 className="text-2xl font-bold text-[#2e022e] mb-4">
                    12. Disclaimers
                  </h2>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      • Vybraa provides the Platform &quot;as is&quot; and makes
                      no warranties regarding uninterrupted service, error-free
                      performance, or specific outcomes.
                    </li>
                    <li>
                      • Vybraa is not responsible for the quality, timeliness,
                      or content of services provided by Artists.
                    </li>
                  </ul>
                </div>

                {/* Section 13 */}
                <div>
                  <h2 className="text-2xl font-bold text-[#2e022e] mb-4">
                    13. Limitation of Liability
                  </h2>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      • Vybraa shall not be liable for indirect, incidental, or
                      consequential damages arising from use of the Platform.
                    </li>
                    <li>
                      • Vybraa&apos;s total liability to any User shall not
                      exceed the total fees paid to Vybraa by that User in the
                      past 6 months.
                    </li>
                  </ul>
                </div>

                {/* Section 14 */}
                <div>
                  <h2 className="text-2xl font-bold text-[#2e022e] mb-4">
                    14. Indemnification
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Users agree to indemnify and hold harmless Vybraa, its
                    affiliates, employees, and partners from any claims,
                    damages, or expenses resulting from:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• User&apos;s misuse of the Platform.</li>
                    <li>• Violation of these Terms.</li>
                    <li>• Infringement of third-party rights.</li>
                  </ul>
                </div>

                {/* Section 15 */}
                <div>
                  <h2 className="text-2xl font-bold text-[#2e022e] mb-4">
                    15. Suspension & Termination
                  </h2>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      • Vybraa may suspend or terminate accounts that violate
                      these Terms, applicable laws, or pose risks to the
                      Platform.
                    </li>
                    <li>
                      • Termination may result in loss of earnings or access to
                      content without refund.
                    </li>
                  </ul>
                </div>

                {/* Section 16 */}
                <div>
                  <h2 className="text-2xl font-bold text-[#2e022e] mb-4">
                    16. Refund Policy
                  </h2>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      • Payments are non-refundable once content is delivered.
                    </li>
                    <li>
                      • Refunds may only be issued at Vybraa&apos;s discretion
                      for failed or undelivered services.
                    </li>
                  </ul>
                </div>

                {/* Section 17 */}
                <div>
                  <h2 className="text-2xl font-bold text-[#2e022e] mb-4">
                    17. Dispute Resolution
                  </h2>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      • Users must first attempt to resolve disputes amicably
                      via Vybraa support.
                    </li>
                    <li>
                      • If unresolved, disputes shall be referred to arbitration
                      in Lagos, Nigeria, under Nigerian law.
                    </li>
                  </ul>
                </div>

                {/* Section 18 */}
                <div>
                  <h2 className="text-2xl font-bold text-[#2e022e] mb-4">
                    18. Governing Law
                  </h2>
                  <p className="text-gray-700">
                    These Terms shall be governed by the laws of the Federal
                    Republic of Nigeria and applicable international
                    regulations.
                  </p>
                </div>

                {/* Section 19 */}
                <div>
                  <h2 className="text-2xl font-bold text-[#2e022e] mb-4">
                    19. Changes to Terms
                  </h2>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      • Vybraa reserves the right to update these Terms at any
                      time.
                    </li>
                    <li>
                      • Continued use of the Platform after changes means
                      acceptance of the revised Terms.
                    </li>
                  </ul>
                </div>

                {/* Section 20 */}
                <div>
                  <h2 className="text-2xl font-bold text-[#2e022e] mb-4">
                    20. Contact
                  </h2>
                  <p className="text-gray-700 mb-4">
                    For questions or concerns about these Terms, contact:
                  </p>
                  <div className="bg-[#F7B708]/10 rounded-lg p-6">
                    <h3 className="font-bold text-[#2e022e] mb-2">
                      Vybraa Support Team
                    </h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Email:</strong>{" "}
                      <a
                        href="mailto:support@vybraa.com"
                        className="text-[#F7B708] hover:underline"
                      >
                        support@vybraa.com
                      </a>
                    </p>
                    <p className="text-gray-700">
                      <strong>Phone:</strong>{" "}
                      <a
                        href="tel:+2349068018564"
                        className="text-[#F7B708] hover:underline"
                      >
                        +2349068018564
                      </a>
                    </p>
                  </div>
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
