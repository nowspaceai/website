import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-gray-600 mb-6">Last updated: September 2024</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p className="text-gray-700 leading-relaxed">
          Welcome to NowSpace, LLC ("we," "our," or "us"). We are committed to protecting your personal 
          information and your right to privacy. This Privacy Policy explains how we collect, use, 
          disclose, and safeguard your information when you use our mobile application and related services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
        <p className="text-gray-700 mb-4">We collect information that you provide directly to us, including:</p>
        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
          <li>Personal information (e.g., name, email address, phone number)</li>
          <li>Profile information (e.g., profile picture, bio)</li>
          <li>Listing information (for hosts)</li>
          <li>Booking information (for guests)</li>
          <li>Payment information</li>
          <li>Communications with other users and our team</li>
        </ul>
        
        <p className="text-gray-700 mb-4">We also automatically collect certain information when you use our app, including:</p>
        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
          <li>Device information (e.g., IP address, device type, operating system)</li>
          <li>Usage data (e.g., features you use, time spent on the app)</li>
          <li>Location data (with your permission)</li>
        </ul>
        
        <p className="text-gray-700">
          For more information on what information we collect, please reach out to us at{' '}
          <a href="mailto:legal@nowspace.io" className="text-blue-600 hover:underline">
            legal@nowspace.io
          </a>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
        <p className="text-gray-700">
          If you have any questions about this Privacy Policy, please contact us at:{' '}
          <a href="mailto:legal@nowspace.io" className="text-blue-600 hover:underline">
            legal@nowspace.io
          </a>
        </p>
      </section>
    </div>
  );
}
