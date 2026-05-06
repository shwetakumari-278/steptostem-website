"use client";

import Header from "@/components/Header";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />

      {/* Spacer for fixed header */}
      <div className="h-24 md:h-28" />

      <div className="relative min-h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/asset/theme2.jpg"
            alt="Privacy Policy Background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/70 to-white/85" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 py-16">
          {/* Page Title */}
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Privacy Policy – STEMxLearning
          </h1>
          <p className="text-sm text-gray-500 mb-10">
            Last updated: January 2026
          </p>

          {/* Content */}
          <div className="space-y-8 text-gray-700 leading-relaxed text-base">
            <p>
              STEMxLearning (“we”, “our”, “us”) respects your privacy and is
              committed to protecting the personal information you share with
              us. This Privacy Policy explains how we collect, use, and
              safeguard your information when you interact with our website,
              advertisements, and services.
            </p>

            {/* Section */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                1. Information We Collect
              </h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Parent/guardian name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Child’s age</li>
                <li>
                  Any information you voluntarily provide through our forms or
                  messages
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                2. How We Use Your Information
              </h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Contact you regarding AI & Coding demo classes</li>
                <li>Share details about our programs and schedules</li>
                <li>Respond to your inquiries and requests</li>
                <li>Improve our services and communication</li>
              </ul>
              <p className="mt-2">
                We do not sell or rent your personal information.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                3. Advertising & Lead Forms
              </h2>
              <p>
                If you submit your details through advertisements on platforms
                such as Facebook or Instagram, your information is collected
                securely through Meta’s lead forms and shared with us only for
                the purposes mentioned above.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                4. Data Sharing
              </h2>
              <p>
                We do not share your personal data with third parties, except:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>When required by law</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights or users</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                5. Data Security
              </h2>
              <p>
                We take reasonable measures to protect your information from
                unauthorized access, misuse, or disclosure. However, no online
                system is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                6. Your Rights
              </h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Request access to your personal data</li>
                <li>Ask for corrections or updates</li>
                <li>Request deletion of your information</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                7. Children’s Privacy
              </h2>
              <p>
                Our programs are designed for students aged 7–18. All data
                collection and communication is intended for parents or legal
                guardians only.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                8. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with an updated date.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                9. Contact Us
              </h2>
              <p>
                Email:{" "}
                <span className="font-medium">
                  STEMxLearning.global@gmail.com
                </span>
              </p>
              <p>
                Website:{" "}
                <a
                  href="https://www.stemxlearning.com/"
                  className="text-blue-600 hover:underline"
                >
                  https://www.stemxlearning.com/
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
