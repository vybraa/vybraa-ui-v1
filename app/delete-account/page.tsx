"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  supportTicketService,
  SupportTicketPriority,
  SupportTicketCategory,
} from "../services/supportTicketService";

const DELETION_STEPS = [
  {
    step: 1,
    title: "Send us an email",
    description:
      "Email us at support@vybraa.com from the email address linked to your Vybraa account. Use the subject line “Account deletion request” so we can process your request quickly.",
  },
  {
    step: 2,
    title: "Confirm your identity",
    description:
      "In your email, include your full name and the email address associated with your account. We may reply with a short verification step to protect your account.",
  },
  {
    step: 3,
    title: "We process your request",
    description:
      "Once we verify your identity, we will start the account and data deletion process. You will receive a confirmation email when the process has begun.",
  },
  {
    step: 4,
    title: "Deletion completed",
    description:
      "Within the timeline below, your account and the specified personal data will be removed from our systems. We will notify you when deletion is complete.",
  },
];

const DATA_DELETED = [
  "Email address and account login credentials",
  "Profile information (name, photo, bio, preferences)",
  // "App activity (requests, bookings, watch history)",
  "Stored JWT tokens and session data",
  "Messages and support correspondence linked to your account",
  "Device and usage identifiers associated with your account",
];

const DATA_RETAINED = [
  {
    item: "Financial and transaction records",
    reason: "Required for tax, accounting, and legal compliance (e.g., fraud prevention, disputes).",
    period: "Typically 7 years or as required by law.",
  },
  {
    item: "Anonymized or aggregated analytics",
    reason: "Non-identifiable data used to improve our services; cannot be linked back to you.",
    period: "Retained indefinitely in anonymized form.",
  },
  {
    item: "Legal and safety logs",
    reason: "Where we are legally obliged to keep records (e.g., regulatory requests, legal claims).",
    period: "As required by applicable law.",
  },
];

export default function DeleteAccountPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>("steps");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [submitError, setSubmitError] = useState<string | null>(null);

  const toggleSection = (id: string) => {
    setExpandedSection((prev) => (prev === id ? null : id));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("loading");
    setSubmitError(null);
    try {
      await supportTicketService.createSupportTicket({
        email: formData.email,
        subject: "Account deletion request",
        description: formData.message?.trim() || "I would like to request deletion of my Vybraa account and all associated personal data.",
        priority: SupportTicketPriority.LOW,
        category: SupportTicketCategory.ACCOUNT_SUPPORT,
      });
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setSubmitStatus("error");
      setSubmitError(err instanceof Error ? err.message : "Something went wrong. Please try again or email support@vybraa.com.");
    }
  };

  return (
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

      {/* Hero */}
      <section className="pt-24 pb-12 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#2e022e]">
              How to Delete Your Vybraa Account and Data
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              This page is for <strong>Vybraa App users</strong> who want to
              delete their account and associated personal data. We’ve made the
              process clear and straightforward.
            </p>
          </motion.div>

          {/* Timeline callout */}
          <motion.div
            className="bg-[#F7B708]/10 border border-[#F7B708]/30 rounded-2xl p-6 mb-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-gray-800 font-medium">
              <span className="text-[#2e022e] font-semibold">Estimated timeline:</span>{" "}
              We aim to complete account and data deletion within{" "}
              <strong>30 days</strong> of your verified request.
            </p>
          </motion.div>

          {/* Step-by-step (collapsible) */}
          <div className="space-y-4 mb-10">
            <button
              type="button"
              onClick={() => toggleSection("steps")}
              className="w-full flex items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-100 text-left"
            >
              <h2 className="text-xl font-bold text-[#2e022e]">
                Step-by-step: How to request account deletion
              </h2>
              <motion.span
                animate={{ rotate: expandedSection === "steps" ? 180 : 0 }}
                className="text-gray-500"
              >
                ▼
              </motion.span>
            </button>
            <AnimatePresence>
              {expandedSection === "steps" && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pl-4 pr-4 pb-4 space-y-6">
                    {DELETION_STEPS.map((item, idx) => (
                      <motion.div
                        key={item.step}
                        className="flex gap-4 p-4 rounded-xl bg-white border border-gray-100 hover:border-[#F7B708]/30 hover:shadow-md transition-all"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.08 }}
                      >
                        <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F7B708] text-black font-bold flex items-center justify-center">
                          {item.step}
                        </span>
                        <div>
                          <h3 className="font-semibold text-[#2e022e] mb-1">
                            {item.title}
                          </h3>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* What we delete */}
          <div className="space-y-4 mb-10">
            <button
              type="button"
              onClick={() => toggleSection("deleted")}
              className="w-full flex items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-100 text-left"
            >
              <h2 className="text-xl font-bold text-[#2e022e]">
                What we will delete
              </h2>
              <motion.span
                animate={{ rotate: expandedSection === "deleted" ? 180 : 0 }}
                className="text-gray-500"
              >
                ▼
              </motion.span>
            </button>
            <AnimatePresence>
              {expandedSection === "deleted" && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pl-4 pr-4 pb-4">
                    <p className="text-gray-700 mb-4">
                      When you request account deletion, we will remove the
                      following from our systems:
                    </p>
                    <ul className="space-y-2">
                      {DATA_DELETED.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-gray-700"
                        >
                          <span className="text-[#F7B708] mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* What we retain */}
          <div className="space-y-4 mb-10">
            <button
              type="button"
              onClick={() => toggleSection("retained")}
              className="w-full flex items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-100 text-left"
            >
              <h2 className="text-xl font-bold text-[#2e022e]">
                What we may keep (and why)
              </h2>
              <motion.span
                animate={{ rotate: expandedSection === "retained" ? 180 : 0 }}
                className="text-gray-500"
              >
                ▼
              </motion.span>
            </button>
            <AnimatePresence>
              {expandedSection === "retained" && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pl-4 pr-4 pb-4">
                    <p className="text-gray-700 mb-4">
                      For legal, financial, or safety reasons, we may retain
                      some data as follows:
                    </p>
                    <ul className="space-y-4">
                      {DATA_RETAINED.map((item, idx) => (
                        <li
                          key={idx}
                          className="p-4 rounded-xl bg-gray-50 border border-gray-100"
                        >
                          <h4 className="font-semibold text-[#2e022e] mb-1">
                            {item.item}
                          </h4>
                          <p className="text-gray-700 text-sm mb-2">
                            {item.reason}
                          </p>
                          <p className="text-gray-600 text-sm">
                            <strong>Retention:</strong> {item.period}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* CTA + Form */}
          <motion.section
            id="request-deletion"
            className="bg-gradient-to-br from-[#2e022e]/5 to-[#F7B708]/10 rounded-2xl p-8 border border-[#2e022e]/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-[#2e022e] mb-2">
              Request account deletion
            </h2>
            <p className="text-gray-700 mb-6">
              Use the form below to open an email to our support team with the
              subject “Account deletion request,” or email us directly at{" "}
              <a
                href="mailto:support@vybraa.com?subject=Account%20deletion%20request"
                className="text-[#F7B708] hover:underline font-medium"
              >
                support@vybraa.com
              </a>
              .
            </p>
            {submitStatus === "success" && (
              <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200 text-green-800">
                Your deletion request has been submitted. We will process it and contact you at {formData.email}.
              </div>
            )}
            {submitStatus === "error" && submitError && (
              <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 text-red-800">
                {submitError}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full name
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  placeholder="Your full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F7B708] focus:border-transparent transition-shadow"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email (linked to your Vybraa account) <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F7B708] focus:border-transparent transition-shadow"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message (optional)
                </label>
                <textarea
                  id="message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, message: e.target.value }))
                  }
                  placeholder="e.g. I would like to delete my Vybraa account and all associated data."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F7B708] focus:border-transparent transition-shadow resize-none"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={submitStatus === "loading"}
                  className="inline-block bg-[#F7B708] text-black font-bold py-3 px-8 rounded-lg hover:bg-[#fce580] transition-colors shadow-lg hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitStatus === "loading" ? "Submitting…" : "Submit request"}
                </button>
                <a
                  href="mailto:support@vybraa.com?subject=Account%20deletion%20request"
                  className="inline-block text-center border-2 border-[#2e022e] text-[#2e022e] font-bold py-3 px-8 rounded-lg hover:bg-[#2e022e] hover:text-white transition-colors"
                >
                  Or email directly
                </a>
              </div>
            </form>
          </motion.section>

          {/* Back to Home */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
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
          <div className="grid  z-30 md:grid-cols-4 gap-8 mb-8">
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
                  <Link href="/#features" className="hover:text-[#F7B708] transition-colors">
                    Personalized Videos
                  </Link>
                </li>
                <li>
                  <Link href="/#features" className="hover:text-[#F7B708] transition-colors">
                    Live Sessions
                  </Link>
                </li>
                <li>
                  <Link href="/#features" className="hover:text-[#F7B708] transition-colors">
                    Exclusive Merchandise
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link href="/#how-it-works" className="hover:text-[#F7B708] transition-colors">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="hover:text-[#F7B708] transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/waitlist" className="hover:text-[#F7B708] transition-colors">
                    Join Waitlist
                  </Link>
                </li>
              </ul>
            </div>
            <div className="z-30">
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link href="/terms" className="hover:text-[#F7B708] transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-[#F7B708] transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/delete-account" className="hover:text-[#F7B708] transition-colors">
                    Delete Account
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-300 text-sm">
              &copy; {new Date().getFullYear()} Vybraa. Built for the heartbeat
              of Africa. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
