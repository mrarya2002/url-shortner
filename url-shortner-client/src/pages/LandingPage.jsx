import React from 'react'
import { Link } from 'react-router-dom';
const LandingPage = () => {
  return (
    <>
     <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Shorten Links, Amplify Results</h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-6">
            Create short, memorable links and track their performance with detailed analytics.
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <Link to="/register" className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-700">Get Started Free</Link>
            <a href="#features" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md text-lg hover:bg-blue-50">Learn More</a>
          </div>
          <div className="flex justify-center">
            <input type="url" placeholder="Enter your long URL here..." className="border rounded-l-md px-4 py-2 w-72" />
            <button className="bg-blue-600 text-white px-4 rounded-r-md hover:bg-blue-700">Shorten</button>
          </div>
        </div>
      </section>

      <section id="features" className="py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Powerful Features for Link Management</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard title="Advanced Analytics" desc="Track clicks, geographic data, referrers, and device information." />
            <FeatureCard title="Secure & Reliable" desc="SSL encryption and 99.9% uptime guarantee for peace of mind." />
            <FeatureCard title="Lightning Fast" desc="Global CDN ensures fast redirection from anywhere in the world." />
            <FeatureCard title="Custom Domains" desc="Use your own domain for branded short links." />
            <FeatureCard title="Team Collaboration" desc="Manage access and share analytics with your team." />
            <FeatureCard title="API Access" desc="Integrate with your tools using our REST API." />
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 grid gap-6 lg:grid-cols-3 text-center">
          <Stat title="10M+" subtitle="Links shortened" />
          <Stat title="50K+" subtitle="Active users" />
          <Stat title="99.9%" subtitle="Uptime guarantee" />
        </div>
      </section>

      <section className="py-24 bg-blue-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Shortening?</h2>
        <p className="mb-6 text-lg max-w-xl mx-auto">
          Join thousands who trust LinkShort for efficient, reliable link management.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/register" className="bg-white text-blue-600 px-6 py-3 rounded hover:bg-blue-100 font-semibold">Start Free Trial</Link>
          <Link to="/login" className="border border-white px-6 py-3 rounded hover:bg-white hover:text-blue-600 font-semibold">Sign In</Link>
        </div>
      </section>

      <footer className="py-6 border-t text-center text-sm text-gray-500">
        © 2024 LinkShort. All rights reserved.
        <div className="flex justify-center gap-4 mt-2">
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </footer>
    </main>
    </>
  )
}

function FeatureCard({ title, desc }) {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}

function Stat({ title, subtitle }) {
  return (
    <div className="space-y-2">
      <div className="text-4xl font-bold">{title}</div>
      <div className="text-gray-500">{subtitle}</div>
    </div>
  );
}


export default LandingPage;
