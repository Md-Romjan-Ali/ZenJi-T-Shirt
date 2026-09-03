"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiClock, FiSend, FiCheckCircle } from "react-icons/fi";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="w-full bg-white dark:bg-[#050505] text-neutral-900 dark:text-neutral-100 py-20 px-6 sm:px-10 lg:px-16 transition-colors duration-300 font-sans">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top Header */}
        <div className="space-y-3 pb-6 border-b border-red-600 dark:border-red-600">
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight italic text-neutral-950 dark:text-white">
            CONTACT US
          </h2>
          <p className="text-xs font-mono font-bold tracking-[0.25em] text-red-600 dark:text-red-500 uppercase">
            REACH OUT TO THE WARRIOR SQUAD
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <h3 className="text-2xl font-black uppercase tracking-tight italic text-neutral-950 dark:text-white">
                NEED HELP WITH YOUR DROP?
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                Have questions regarding order tracking, upcoming releases, or sizing? Drop us a line and our support team will get back to you within 24 hours.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-4 font-mono text-xs">
              
              <div className="flex items-start gap-4 p-4 rounded-xl bg-neutral-50 dark:bg-[#0a0a0a] border border-neutral-200 dark:border-neutral-800">
                <div className="p-2 rounded-lg bg-red-100/60 dark:bg-neutral-900 text-red-600 dark:text-red-500">
                  <FiMail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase text-neutral-500 tracking-widest block">EMAIL SUPPORT</span>
                  <a href="mailto:support@zenji.com.au" className="font-bold text-sm text-neutral-900 dark:text-white hover:text-red-600 dark:hover:text-red-500 transition-colors">
                    support@zenji.com.au
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-neutral-50 dark:bg-[#0a0a0a] border border-neutral-200 dark:border-neutral-800">
                <div className="p-2 rounded-lg bg-red-100/60 dark:bg-neutral-900 text-red-600 dark:text-red-500">
                  <FiMapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase text-neutral-500 tracking-widest block">LOCATION</span>
                  <span className="font-bold text-sm text-neutral-900 dark:text-white">
                    Australia (Sydney, Melbourne & National)
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-neutral-50 dark:bg-[#0a0a0a] border border-neutral-200 dark:border-neutral-800">
                <div className="p-2 rounded-lg bg-red-100/60 dark:bg-neutral-900 text-red-600 dark:text-red-500">
                  <FiClock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase text-neutral-500 tracking-widest block">RESPONSE TIME</span>
                  <span className="font-bold text-sm text-neutral-900 dark:text-white">
                    Mon - Fri: 9:00 AM – 5:00 PM AEST
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-neutral-50 dark:bg-[#0a0a0a] p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 space-y-6">
            
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-3"
              >
                <FiCheckCircle className="w-12 h-12 text-red-600 dark:text-red-500 mx-auto" />
                <h4 className="text-xl font-bold uppercase tracking-wide text-neutral-900 dark:text-white">
                  MESSAGE DISPATCHED
                </h4>
                <p className="text-xs font-mono text-neutral-500">
                  Thank you for reaching out. We will get back to your inbox shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-500">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ren Tanaka"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white dark:bg-[#111111] border border-neutral-300 dark:border-neutral-800 rounded-xl text-xs font-medium text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-red-600 transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-500">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white dark:bg-[#111111] border border-neutral-300 dark:border-neutral-800 rounded-xl text-xs font-medium text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-red-600 transition-all"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-500">
                    SUBJECT
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Order Inquiry / Size Guide"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-white dark:bg-[#111111] border border-neutral-300 dark:border-neutral-800 rounded-xl text-xs font-medium text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-red-600 transition-all"
                  />
                </div>

                {/* Message Input */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-500">
                    MESSAGE *
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-white dark:bg-[#111111] border border-neutral-300 dark:border-neutral-800 rounded-xl text-xs font-medium text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-red-600 transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-neutral-950 text-white dark:bg-white dark:text-black font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-red-600 dark:hover:bg-red-600 dark:hover:text-white transition-colors duration-300 shadow-md group"
                >
                  <FiSend className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  <span>SEND MESSAGE</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}