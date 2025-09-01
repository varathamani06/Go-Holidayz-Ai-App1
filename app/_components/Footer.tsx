"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Mail, Phone, Home, DollarSign, Globe, MapPin, Github } from "lucide-react";

export default function Footer() {
  return (
    // shadow-lg p-8 rounded-2xl
    <footer className="bg-white dark:bg-gray-900 z-100 border shadow-2xl rounded-2xl bottom-0 left-0 w-full">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand + About */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Image src="/logo.svg" alt="logo" width={40} height={40} />
            <span className="font-bold text-xl text-gray-800">GO HolidayZ AI</span>
          </div>
          <p className="text-gray-600 text-sm">
            Your personal AI-powered holiday buddy 😎✈️  
            Plan trips, explore destinations, and create unforgettable adventures!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
         <ul className="space-y-2 text-gray-600">
      <li>
        <Link href="/" className="flex items-center gap-2 hover:text-primary">
          <Home size={18} /> Home
        </Link>
      </li>
      <li>
        <Link href="/Pricing" className="flex items-center gap-2 hover:text-primary">
          <DollarSign size={18} /> Pricing
        </Link>
      </li>
      <li>
        <Link href="/contact-us" className="flex items-center gap-2 hover:text-primary">
          <Mail size={18} /> Contact Us
        </Link>
      </li>
      <li>
        <Link href="/Create-new-trip" className="flex items-center gap-2 hover:text-primary">
          <Globe size={18} /> Create Trip
        </Link>
      </li>
    </ul>
        </div>

        {/* Popular Destinations */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Popular Destinations</h3>
          <ul className="space-y-2 text-gray-600">
      <li className="flex items-center gap-2"><MapPin size={18} /> Paris, France</li>
      <li className="flex items-center gap-2"><MapPin size={18} /> New York, USA</li>
      <li className="flex items-center gap-2"><MapPin size={18} /> Tokyo, Japan</li>
      <li className="flex items-center gap-2"><MapPin size={18} /> Dubai, UAE</li>
    </ul>
        </div>

        {/* Contact Info */}
        <div>
  <h3 className="font-semibold text-lg mb-4">Contact Us</h3>

  <p className="flex items-center gap-2 text-gray-600 text-sm">
    <Mail size={16} />
    <a
      href="mailto:varathamani067@gmail.com"
      className="hover:text-primary"
    >
      varathamani067@gmail.com
    </a>
  </p>

  <p className="flex items-center gap-2 text-gray-600 text-sm mt-2">
    <Phone size={16} />
    <a
      href="tel:+919150133692"
      className="hover:text-primary"
    >
      +91 9150133692
    </a>
  </p>

  {/* Socials */}
  <div className="flex gap-4 mt-4">
    <Link href="#">
      <Facebook className="text-gray-600 hover:text-primary" size={20} />
    </Link>
    <Link href="#">
      <Instagram className="text-gray-600 hover:text-primary" size={20} />
    </Link>
    <Link href="#">
      <Twitter className="text-gray-600 hover:text-primary" size={20} />
    </Link>
    <Link href="https://github.com/varathamani06?tab=repositories" target="_blank">
      <Github className="text-gray-600 hover:text-primary" size={20} />
    </Link>
  </div>
</div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t py-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} GO HolidayZ AI. All rights reserved.
      </div>
    </footer>
  );
}
