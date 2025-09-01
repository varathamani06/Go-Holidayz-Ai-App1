"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ Simple validation
    if (!form.name || !form.email || !form.message) {
      toast.error("⚠️ Please fill in all fields");
      return;
    }

    // 🔧 Replace with API call / email service
    console.log("Form submitted:", form);
    toast.success("🎉 Message sent successfully! We'll get back to you soon.");

    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center text-primary">
        Contact Us
      </h1>
      <p className="text-center text-gray-600 mb-10">
        Have questions, feedback, or suggestions? Fill out the form below and
        we’ll respond shortly.
      </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white shadow-lg p-8 rounded-2xl"
      >
        <div>
          <label className="block font-semibold mb-1">Your Name</label>
          <Input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="John Doe"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Email Address</label>
          <Input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Message</label>
          <Textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Write your message here..."
            rows={5}
          />
        </div>

        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>
    </div>
  );
}
