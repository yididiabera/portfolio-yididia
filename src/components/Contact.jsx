import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });

      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("contact@cyberpunk.dev");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 scroll-mt-20 bg-gray-800/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-sexy font-semibold mb-12 text-center">
          <span className="text-cyan-400">//</span> Get In Touch
        </h2>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  required
                />
                <div className="absolute inset-0 border border-cyan-400 rounded-lg opacity-0 pointer-events-none transition-opacity focus-within:opacity-30"></div>
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  required
                />
                <div className="absolute inset-0 border border-cyan-400 rounded-lg opacity-0 pointer-events-none transition-opacity focus-within:opacity-30"></div>
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  required
                ></textarea>
                <div className="absolute inset-0 border border-cyan-400 rounded-lg opacity-0 pointer-events-none transition-opacity focus-within:opacity-30"></div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`relative overflow-hidden px-6 py-3 rounded-lg font-sexy uppercase text-sm tracking-wider ${isSubmitting ? "bg-cyan-400/50" : "bg-cyan-400 hover:bg-cyan-300"} text-gray-900 transition-all`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <span className="mr-2">Sending</span>
                    <span className="inline-block w-4 h-4 border-2 border-gray-900 border-t-transparent rounded-full animate-spin"></span>
                  </span>
                ) : (
                  <>
                    <span className="relative z-10">Send Message</span>
                    <span className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity"></span>
                    {isSubmitting && (
                      <span className="absolute inset-0 bg-cyan-400 animate-progress"></span>
                    )}
                  </>
                )}
              </button>

              {submitStatus === "success" && (
                <div className="p-4 bg-gray-900 border border-cyan-400 rounded-lg text-cyan-400">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-8 h-full backdrop-blur-sm">
              <h3 className="text-xl font-sexy mb-6 text-cyan-400">
                Other Ways to Connect
              </h3>

              <div className="mb-8">
                <h4 className="text-gray-400 mb-2">Email</h4>
                <div className="flex items-center">
                  <span className="text-gray-300 mr-4">
                    contact@cyberpunk.dev
                  </span>
                  <button onClick={copyEmail} className="relative group">
                    <span className="absolute inset-0 bg-cyan-400 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity"></span>
                    <span className="relative px-3 py-1 bg-gray-800 text-cyan-400 text-xs rounded-full border border-cyan-400 group-hover:bg-cyan-400 group-hover:text-gray-900 transition-colors">
                      {isCopied ? "Copied!" : "Copy"}
                    </span>
                  </button>
                </div>
              </div>

              <div>
                <h4 className="text-gray-400 mb-4">Social Media</h4>
                <div className="flex space-x-4">
                  {["github", "twitter", "linkedin", "dribbble"].map(
                    (platform) => (
                      <a
                        key={platform}
                        href="#"
                        className="w-12 h-12 flex items-center justify-center bg-gray-800 rounded-full hover:bg-cyan-400 hover:text-gray-900 transition-colors group relative"
                      >
                        <span className="absolute inset-0 rounded-full border border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                        <span className="absolute inset-0 rounded-full border border-cyan-400 opacity-0 group-hover:opacity-50 group-hover:animate-ping transition-opacity"></span>
                        <span className="relative z-10">
                          {platform.charAt(0).toUpperCase()}
                        </span>
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
