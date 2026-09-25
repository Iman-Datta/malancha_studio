import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  CheckCircle2,
  Sparkles,
  MessageSquare,
  AlertCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import SectionWrapper from "../ui/SectionWrapper";
import SectionHeading from "../ui/SectionHeading";

// Replace these placeholders with your actual keys from EmailJS
const EMAILJS_SERVICE_ID = "service_1u0rabk";
const EMAILJS_TEMPLATE_ID = "template_xc80xw8";
const EMAILJS_PUBLIC_KEY = "uhKp3BPri3s9npiMj";

export default function Contact() {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setIsSubmitting(false);
          setIsSubmitted(true);
        },
        (error) => {
          setIsSubmitting(false);
          console.error("FAILED...", error);
          setErrorMessage("Failed to send message. Please try again later.");
        },
      );
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setErrorMessage("");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <SectionWrapper
      id="contact"
      bg="bg-charcoal-800"
      className="section-padding py-24 md:py-32 relative overflow-hidden"
    >
      <SectionHeading
        eyebrow="Contact"
        title={
          <>
            Let's <span className="text-gradient-gold">Connect</span>
          </>
        }
        subtitle="Have a question, want to join or collaborate? Drop us a message below."
      />

      <div className="grid lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-stretch">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col justify-between glass-card p-8 space-y-8 border border-white/10 rounded-2xl relative overflow-hidden bg-gradient-to-b from-charcoal-900/80 to-charcoal-900/30"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary uppercase tracking-wider">
              <Sparkles size={14} />
              <span>Start a Conversation</span>
            </div>
            <h3 className="text-3xl font-bold text-white leading-tight">
              We'd love to hear from you.
            </h3>
            <p className="text-sm text-charcoal-400 leading-relaxed">
              Whether you are an aspiring artist, an established creative, or an
              organization looking to collaborate, reach out and let’s build
              something extraordinary together.
            </p>
          </div>

          <div className="relative z-10 p-5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center text-primary shrink-0">
              <MessageSquare size={20} />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold text-white">
                Quick Response
              </h4>
              <p className="text-xs text-charcoal-400 leading-relaxed">
                We review inquiries regularly and typically respond within 24–48
                hours.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 glass-card p-8 md:p-10 rounded-2xl border border-white/10 flex flex-col justify-center"
        >
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                ref={formRef}
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-charcoal-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="from_name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-xl bg-charcoal-900/60 border border-white/10 text-white placeholder-charcoal-500 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="from_email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-charcoal-900/60 border border-white/10 text-white placeholder-charcoal-500 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal-300 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    name="message"
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us about your project or inquiry..."
                    className="w-full px-4 py-3 rounded-xl bg-charcoal-900/60 border border-white/10 text-white placeholder-charcoal-500 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors resize-none"
                  />
                </div>

                {errorMessage && (
                  <div className="flex items-center gap-2 text-red-400 text-xs bg-red-500/10 border border-red-500/20 p-3 rounded-xl">
                    <AlertCircle size={16} />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full py-4 flex items-center justify-center gap-2 group text-base font-semibold transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="inline-block w-5 h-5 border-2 border-charcoal-900 border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send
                        size={18}
                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                      />
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mx-auto text-primary">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                <p className="text-sm text-charcoal-400 max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out. Your message has been sent
                  successfully, and our team will get back to you shortly.
                </p>
                <button
                  onClick={handleReset}
                  className="mt-4 px-6 py-2.5 rounded-xl border border-white/20 text-xs font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  Send Another Message
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
