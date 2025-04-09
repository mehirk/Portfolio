"use client";

import { motion } from "framer-motion";
import { FormEvent, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { TiltCard } from "@/components/TiltCard";
import { AnimatedText } from "@/components/AnimatedText";
import { Loader2, MailIcon, CheckCircle } from "lucide-react";

// Types
interface FormInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.1 },
  }),
};

export function ContactSection() {
  const [form, setForm] = useState<FormInput>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormInput>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const validateForm = () => {
    const newErrors: Partial<FormInput> = {};

    if (!form.name.trim()) newErrors.name = "Name is required";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = "Valid email is required";
    }

    if (!form.subject.trim()) newErrors.subject = "Subject is required";
    if (!form.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    // Clear error when typing
    if (errors[name as keyof FormInput]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Simulated form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setForm({ name: "", email: "", subject: "", message: "" });
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Form fields configuration
  const formFields = [
    { id: "name", label: "Name", placeholder: "Your name" },
    { id: "email", label: "Email", type: "email", placeholder: "Your email" },
    { id: "subject", label: "Subject", placeholder: "Subject" },
    {
      id: "message",
      label: "Message",
      placeholder: "Your message",
      isTextarea: true,
      rows: 5,
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <AnimatedText
            text="Get In Touch"
            className="text-3xl md:text-4xl font-bold text-white justify-center"
            once={true}
          />
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="mb-10"
            variants={fadeIn}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <TiltCard
              className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 flex flex-col items-center text-center"
              glareOpacity={0.1}
              tiltFactor={8}
            >
              <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center mb-4">
                <MailIcon className="text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
              <p className="text-zinc-400">mehirk28@gmail.com</p>
              <a
                href="mailto:mehirk28@gmail.com"
                className="absolute inset-0"
                aria-label="Send email"
              ></a>
            </TiltCard>
          </motion.div>

          <motion.div
            variants={fadeIn}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <TiltCard
              className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-8 backdrop-blur-sm"
              glareOpacity={0.05}
              tiltFactor={2}
              perspective={2000}
            >
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <CheckCircle className="w-16 h-16 mx-auto text-emerald-400 mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Thank You!
                  </h3>
                  <p className="text-zinc-300">
                    Your message has been received. I'll get back to you soon.
                  </p>
                </motion.div>
              ) : !isClient ? (
                <div className="h-[400px] flex items-center justify-center">
                  <div className="animate-pulse flex flex-col items-center">
                    <div className="h-10 bg-zinc-800/50 w-1/2 mb-4 rounded"></div>
                    <div className="h-8 bg-zinc-800/50 w-3/4 mb-3 rounded"></div>
                    <div className="h-8 bg-zinc-800/50 w-2/3 rounded"></div>
                  </div>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {formFields.slice(0, 2).map((field, index) => (
                      <motion.div
                        key={field.id}
                        className="space-y-2"
                        custom={index + 2}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                      >
                        <Label htmlFor={field.id} className="text-zinc-200">
                          {field.label} <span className="text-red-400">*</span>
                        </Label>
                        <Input
                          id={field.id}
                          name={field.id}
                          type={field.type || "text"}
                          placeholder={field.placeholder}
                          value={form[field.id as keyof FormInput]}
                          onChange={handleChange}
                          className={`bg-zinc-800/50 border-zinc-700 text-white focus:ring-zinc-600 ${
                            errors[field.id as keyof FormInput]
                              ? "border-red-400"
                              : ""
                          }`}
                          aria-invalid={!!errors[field.id as keyof FormInput]}
                        />
                        {errors[field.id as keyof FormInput] && (
                          <p className="text-sm text-red-400 mt-1">
                            {errors[field.id as keyof FormInput]}
                          </p>
                        )}
                      </motion.div>
                    ))}
                  </div>

                  {formFields.slice(2).map((field, index) => (
                    <motion.div
                      key={field.id}
                      className="space-y-2"
                      custom={index + 4}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeIn}
                    >
                      <Label htmlFor={field.id} className="text-zinc-200">
                        {field.label} <span className="text-red-400">*</span>
                      </Label>
                      {field.isTextarea ? (
                        <Textarea
                          id={field.id}
                          name={field.id}
                          placeholder={field.placeholder}
                          rows={field.rows}
                          value={form[field.id as keyof FormInput]}
                          onChange={handleChange}
                          className={`bg-zinc-800/50 border-zinc-700 text-white focus:ring-zinc-600 ${
                            errors[field.id as keyof FormInput]
                              ? "border-red-400"
                              : ""
                          }`}
                          aria-invalid={!!errors[field.id as keyof FormInput]}
                        />
                      ) : (
                        <Input
                          id={field.id}
                          name={field.id}
                          type={field.type || "text"}
                          placeholder={field.placeholder}
                          value={form[field.id as keyof FormInput]}
                          onChange={handleChange}
                          className={`bg-zinc-800/50 border-zinc-700 text-white focus:ring-zinc-600 ${
                            errors[field.id as keyof FormInput]
                              ? "border-red-400"
                              : ""
                          }`}
                          aria-invalid={!!errors[field.id as keyof FormInput]}
                        />
                      )}
                      {errors[field.id as keyof FormInput] && (
                        <p className="text-sm text-red-400 mt-1">
                          {errors[field.id as keyof FormInput]}
                        </p>
                      )}
                    </motion.div>
                  ))}

                  <motion.div
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="relative overflow-hidden rounded"
                    variants={fadeIn}
                    custom={6}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <Button
                      type="submit"
                      className="w-full bg-zinc-800 hover:bg-zinc-700 text-white relative z-10"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                          Sending...
                        </span>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-500 opacity-0 hover:opacity-20 transition-opacity duration-300"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.4 }}
                    />
                  </motion.div>
                </form>
              )}
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
