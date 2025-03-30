'use client';

import { motion } from 'framer-motion';
import { FormEvent, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

// Form input interface
interface FormInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Form input component
interface FormFieldProps {
  id: string;
  label: string;
  type?: string;
  value: string;
  placeholder: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  isTextarea?: boolean;
  rows?: number;
  delay?: number;
  error?: string;
}

const FormField = ({ 
  id, 
  label, 
  type = 'text', 
  value, 
  placeholder, 
  required = true, 
  onChange, 
  isTextarea = false, 
  rows = 5,
  delay = 0,
  error
}: FormFieldProps) => {
  const baseClasses = "bg-zinc-800/50 border-zinc-700 text-white focus:ring-zinc-600";
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="space-y-2"
    >
      <Label htmlFor={id} className="text-zinc-200">
        {label} {required && <span className="text-red-400">*</span>}
      </Label>
      
      {isTextarea ? (
        <Textarea
          id={id}
          name={id}
          rows={rows}
          placeholder={placeholder}
          className={`${baseClasses} ${error ? 'border-red-400' : ''}`}
          required={required}
          value={value}
          onChange={onChange}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${id}-error` : undefined}
        />
      ) : (
        <Input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          className={`${baseClasses} ${error ? 'border-red-400' : ''}`}
          required={required}
          value={value}
          onChange={onChange}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${id}-error` : undefined}
        />
      )}
      
      {error && (
        <p id={`${id}-error`} className="text-sm text-red-400 mt-1">
          {error}
        </p>
      )}
    </motion.div>
  );
};

export function ContactSection() {
  const [formState, setFormState] = useState<FormInput>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Partial<FormInput>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const validateForm = (): boolean => {
    const newErrors: Partial<FormInput> = {};
    
    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = 'Valid email is required';
    }
    
    if (!formState.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formState.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name as keyof FormInput]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulated API call
    setTimeout(() => {
      // In a real app, you'd send this to a backend endpoint
      console.log('Form submitted:', formState);
      
      // Reset form
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-black/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white text-center">Get In Touch</h2>
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-8 backdrop-blur-sm"
            >
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="text-emerald-400 mb-4">
                    <svg className="w-16 h-16 mx-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 11.0801V12.0001C21.9988 14.1565 21.3005 16.2548 20.0093 17.9819C18.7182 19.7091 16.9033 20.9726 14.8354 21.584C12.7674 22.1954 10.5573 22.122 8.53447 21.3747C6.51168 20.6274 4.78465 19.2462 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49707C5.79935 3.85783 7.69279 2.71538 9.79619 2.24015C11.8996 1.76491 14.1003 1.98234 16.07 2.86011" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                  <p className="text-zinc-300">Your message has been received. I'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      id="name"
                      label="Name"
                      placeholder="Your name"
                      value={formState.name}
                      onChange={handleChange}
                      delay={0.1}
                      error={errors.name}
                    />
                    <FormField
                      id="email"
                      label="Email"
                      type="email"
                      placeholder="Your email"
                      value={formState.email}
                      onChange={handleChange}
                      delay={0.2}
                      error={errors.email}
                    />
                  </div>
                  
                  <FormField
                    id="subject"
                    label="Subject"
                    placeholder="Subject"
                    value={formState.subject}
                    onChange={handleChange}
                    delay={0.3}
                    error={errors.subject}
                  />
                  
                  <FormField
                    id="message"
                    label="Message"
                    placeholder="Your message"
                    value={formState.message}
                    onChange={handleChange}
                    isTextarea={true}
                    delay={0.4}
                    error={errors.message}
                  />
                  
                  <motion.div
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="relative overflow-hidden rounded"
                  >
                    <Button 
                      type="submit" 
                      className="w-full bg-zinc-800 hover:bg-zinc-700 text-white relative z-10"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        'Send Message'
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
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 