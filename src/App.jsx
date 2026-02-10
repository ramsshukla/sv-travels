import React from 'react';
import banner from './assets/banner.jpg';
import logo from "./assets/logo-white-bg.png";


export default function SVTravels() {
  const phone = '+91 9729307904';
  const whatsapp = '9416307904';

  const services = [
    { title: 'Local Taxi', desc: 'Comfortable city rides across Ambala Cantt with clean vehicles and polite drivers.' },
    { title: 'Outstation Trips', desc: 'Safe and reliable intercity travel across North India at transparent pricing.' },
    { title: 'Tour Packages', desc: 'Curated trips to popular destinations with flexible plans and experienced drivers.' },
  ];

  const fleet = [
    { name: 'Swift Dzire', cap: '4 Seater', best: 'Local & short trips' },
    { name: 'Ertiga', cap: '6 Seater', best: 'Family travel' },
    { name: 'Innova', cap: '7 Seater', best: 'Long distance comfort' },
    { name: 'Tempo Traveller', cap: '12 Seater', best: 'Group tours' },
  ];

  const packages = [
    'Vaishno Devi Package',
    'Manali Tour Package',
    'Shimla Tour Package',
    'Amritsar Tour Package',
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1E293B] font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 shadow bg-white sticky top-0 z-50">
        {/* <h1 className="text-2xl font-bold text-[#0F172A]">SV Travels</h1> */}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="SV Travels Logo"
            className="h-10 w-auto object-contain"
          />
          <span className="text-xl font-bold text-gray-800">
            SV Travels
          </span>
        </div>

        <div className="space-x-6 hidden md:block">
          <a href="#services" className="hover:text-[#14B8A6]">Services</a>
          <a href="#fleet" className="hover:text-[#14B8A6]">Fleet</a>
          <a href="#packages" className="hover:text-[#14B8A6]">Packages</a>
          <a href="#contact" className="hover:text-[#14B8A6]">Contact</a>
        </div>
      </nav>

      {/* Hero with Banner */}
      <section
        className="h-[85vh] flex items-center justify-center text-center text-white relative"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 px-6">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">SV Travels</h2>
          <p className="text-xl md:text-2xl mb-6">Comfortable • Reliable • Affordable Travel from Ambala Cantt</p>
          <a href="#contact" className="bg-[#14B8A6] px-8 py-3 rounded-2xl text-lg">Book Your Ride</a>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 px-8">
        <h3 className="text-3xl font-bold text-center mb-10">Our Services</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div key={s.title} className="bg-white p-6 rounded-2xl shadow">
              <h4 className="text-xl font-semibold mb-4">{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Fleet */}
      <section id="fleet" className="py-16 px-8 bg-white">
        <h3 className="text-3xl font-bold text-center mb-10">Our Fleet</h3>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {fleet.map((v) => (
            <div key={v.name} className="p-6 border rounded-2xl">
              <h4 className="text-lg font-semibold">{v.name}</h4>
              <p className="text-sm mt-2">{v.cap}</p>
              <p className="text-sm">Best for: {v.best}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-16 px-8">
        <h3 className="text-3xl font-bold text-center mb-10">Popular Tour Packages</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((p) => (
            <div key={p} className="bg-white p-6 rounded-2xl shadow">
              <h4 className="text-xl font-semibold mb-4">{p}</h4>
              <p>Enjoy a comfortable and safe trip with SV Travels to {p.split(' ')[0]}.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-8 bg-[#0F172A] text-white text-center">
        <h3 className="text-3xl font-bold mb-6">Contact & Booking</h3>
        <p className="mb-4">Call us at {phone} or WhatsApp to book instantly.</p>
        <div className="flex justify-center gap-4">
          <a href={`https://wa.me/${whatsapp}`} className="bg-[#14B8A6] px-8 py-3 rounded-2xl text-lg">WhatsApp Now</a>
          <a href={`tel:${phone}`} className="border border-white px-8 py-3 rounded-2xl text-lg">Call Now</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-white text-sm">
        © {new Date().getFullYear()} SV Travels • Ambala Cantt. All rights reserved.
      </footer>
    </div>
  );
}
