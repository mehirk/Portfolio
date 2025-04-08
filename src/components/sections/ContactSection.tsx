'use client';

import { motion } from 'framer-motion';
import { FormEvent, useState, memo, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

// Types
interface FormInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormFieldProps {
  id: keyof FormInput;
  label: string;
  type?: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  isTextarea?: boolean;
  rows?: number;
  delay?: number;
  error?: string;
}

// Form field component
const FormField = memo(({ 
  id, 
  label, 
  type = 'text', 
  value, 
  placeholder, 
  onChange, 
  isTextarea = false, 
  rows = 5,
  delay = 0,
  error
}: FormFieldProps) => {
  const baseClasses = "bg-zinc-800/50 border-zinc-700 text-white focus:ring-zinc-600";
  const errorClasses = error ? 'border-red-400' : '';
  
  const props = {
    id,
    name: id,
    placeholder,
    className: `${baseClasses} ${errorClasses}`,
    required: true,
    value,
    onChange,
    'aria-invalid': error ? true : false,
    'aria-describedby': error ? `${id}-error` : undefined,
    suppressHydrationWarning: true
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="space-y-2"
    >
      <Label htmlFor={id} className="text-zinc-200">
        {label} <span className="text-red-400">*</span>
      </Label>
      
      {isTextarea ? (
        <Textarea {...props} rows={rows} />
      ) : (
        <Input {...props} type={type} />
      )}
      
      {error && (
        <p id={`${id}-error`} className="text-sm text-red-400 mt-1">{error}</p>
      )}
    </motion.div>
  );
});

FormField.displayName = 'FormField';

// Success message component
const SuccessMessage = memo(() => (
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
));

SuccessMessage.displayName = 'SuccessMessage';

// Form loading placeholder
const FormLoadingPlaceholder = () => (
  <div className="h-[400px] flex items-center justify-center">
    <div className="animate-pulse flex flex-col items-center">
      <div className="h-10 bg-zinc-800/50 w-1/2 mb-4 rounded"></div>
      <div className="h-8 bg-zinc-800/50 w-3/4 mb-3 rounded"></div>
      <div className="h-8 bg-zinc-800/50 w-2/3 rounded"></div>
    </div>
  </div>
);

export function ContactSection() {
  const initialFormState = { name: '', email: '', subject: '', message: '' };
  const [formState, setFormState] = useState<FormInput>(initialFormState);
  const [errors, setErrors] = useState<Partial<FormInput>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    // Delay setting isClient to true to avoid hydration mismatch
    const timer = setTimeout(() => {
      setIsClient(true);
    }, 10);
    
    return () => clearTimeout(timer);
  }, []);
  
  const validateForm = (): boolean => {
    const validations = {
      name: formState.name.trim() ? '' : 'Name is required',
      email: !formState.email.trim() 
        ? 'Email is required' 
        : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email) 
          ? 'Valid email is required' 
          : '',
      subject: formState.subject.trim() ? '' : 'Subject is required',
      message: formState.message.trim() ? '' : 'Message is required'
    };
    
    const newErrors = Object.fromEntries(
      Object.entries(validations).filter(([_, value]) => value)
    );
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    
    if (errors[name as keyof FormInput]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulated form submission
    setTimeout(() => {
      setFormState(initialFormState);
      setIsSubmitting(false);
      setIsSuccess(true);
      
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1000);
  };

  const formFields = [
    { id: 'name' as const, label: 'Name', placeholder: 'Your name', delay: 0.1 },
    { id: 'email' as const, label: 'Email', type: 'email', placeholder: 'Your email', delay: 0.2 },
    { id: 'subject' as const, label: 'Subject', placeholder: 'Subject', delay: 0.3 },
    { id: 'message' as const, label: 'Message', placeholder: 'Your message', isTextarea: true, delay: 0.4 }
  ];

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
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
              <motion.a
                href="mailto:mehirk28@gmail.com"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                <p className="text-zinc-400">mehirk28@gmail.com</p>
              </motion.a>
              
              <motion.a
                href="tel:+19022238205"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.9999 16.9201V19.9201C22.0026 20.1986 21.9448 20.4743 21.8299 20.7294C21.7149 20.9846 21.5457 21.2137 21.3337 21.402C21.1217 21.5902 20.8724 21.7336 20.6036 21.8228C20.3349 21.912 20.0529 21.9452 19.7739 21.9201C16.6129 21.5857 13.5899 20.5342 10.9699 18.8501C8.55737 17.3148 6.52866 15.2861 5.00992 12.8701C3.32991 10.2399 2.27742 7.2135 1.94992 4.0501C1.92485 3.77212 1.95769 3.49032 2.04644 3.22173C2.13519 2.95315 2.27795 2.70426 2.46543 2.49261C2.65291 2.28096 2.88127 2.11217 3.13576 1.99761C3.39024 1.88306 3.66524 1.82568 3.94392 1.83011H6.94392C7.43323 1.82563 7.90748 2.00303 8.28273 2.32513C8.65798 2.64723 8.90199 3.09448 8.96992 3.5801C9.10058 4.53778 9.36358 5.47534 9.74992 6.3701C9.88563 6.6736 9.92421 7.00922 9.86103 7.33465C9.79784 7.66008 9.63584 7.95833 9.39992 8.1901L8.24992 9.3401C9.6534 11.8576 11.7349 13.9421 14.2499 15.3501L15.3999 14.2001C15.6317 13.9642 15.9299 13.8022 16.2553 13.739C16.5808 13.6758 16.9164 13.7144 17.2199 13.8501C18.1146 14.2364 19.0522 14.4994 19.9999 14.6301C20.4922 14.6992 20.944 14.9469 21.2662 15.3276C21.5885 15.7084 21.7612 16.1885 21.7499 16.6801L21.9999 16.9201Z" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                <p className="text-zinc-400">(902) 223-8205</p>
              </motion.a>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                whileHover={{ y: -5 }}
                className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.6569 16.6569C16.7202 17.5935 14.7616 19.5521 13.4138 20.8999C12.6327 21.681 11.3677 21.6814 10.5866 20.9003C9.26234 19.5761 7.34159 17.6553 6.34315 16.6569C3.21895 13.5327 3.21895 8.46734 6.34315 5.34315C9.46734 2.21895 14.5327 2.21895 17.6569 5.34315C20.781 8.46734 20.781 13.5327 17.6569 16.6569Z" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11Z" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">Location</h3>
                <p className="text-zinc-400">Wolfville, Nova Scotia</p>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-8 backdrop-blur-sm"
            >
              {isSuccess ? (
                <SuccessMessage />
              ) : isClient ? (
                <form className="space-y-6" onSubmit={handleSubmit} suppressHydrationWarning>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {formFields.slice(0, 2).map(field => (
                      <FormField
                        key={field.id}
                        {...field}
                        value={formState[field.id]}
                        onChange={handleChange}
                        error={errors[field.id]}
                      />
                    ))}
                  </div>
                  
                  {formFields.slice(2).map(field => (
                    <FormField
                      key={field.id}
                      {...field}
                      value={formState[field.id]}
                      onChange={handleChange}
                      error={errors[field.id]}
                    />
                  ))}
                  
                  <motion.div
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="relative overflow-hidden rounded"
                  >
                    <Button 
                      type="submit" 
                      className="w-full bg-zinc-800 hover:bg-zinc-700 text-white relative z-10"
                      disabled={isSubmitting}
                      suppressHydrationWarning
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
              ) : (
                <FormLoadingPlaceholder />
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 