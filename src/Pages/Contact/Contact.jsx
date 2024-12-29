import React from 'react';
import { Mail, Phone, MapPin, Printer } from 'lucide-react';
import { motion } from 'framer-motion';
import BlackNavbar from '../../components/BlackNavbar';
import AnotherBanner from '../Banner';
import Footer from '../../components/Footer';
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const ContactPage = () => {
  return (
    <>
    <div>
      <AnotherBanner/>
    <BlackNavbar/>
    </div>
    <div className="min-h-screen bg-white pt-[120px]">
      {/* Hero Section - Simplified */}
      <motion.div 
        className="h-64 relative bg-[#FCEDC6] mt-[2rem]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-6 h-full flex items-center justify-center">
          <motion.h1 
            className="text-3xl md:text-5xl font-archivo font-semibold"
            {...fadeIn}
          >
            Let's Connect
          </motion.h1>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 justify-center items-center">
          {/* Contact Form - Minimalistic */}
          <motion.div 
            className="space-y-8 "
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-light text-gray-900 tracking-wide">Send a Message</h2>
            <form className="space-y-6">
              <div className="space-y-4">
                <input
                  type="text"
                  className="w-full px-0 py-3 bg-transparent border-b border-gray-200 focus:border-gray-900 transition-colors duration-300 outline-none placeholder-gray-400"
                  placeholder="Your Name"
                />
                <input
                  type="email"
                  className="w-full px-0 py-3 bg-transparent border-b border-gray-200 focus:border-gray-900 transition-colors duration-300 outline-none placeholder-gray-400"
                  placeholder="Your Email"
                />
                <textarea
                  className="w-full px-0 py-3 bg-transparent border-b border-gray-200 focus:border-gray-900 transition-colors duration-300 outline-none placeholder-gray-400 min-h-32 resize-none"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="mt-8 px-8 py-3 bg-[#FFB700]  text-white text-sm tracking-wider hover:bg-[#a58533] font-semibold transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                SEND MESSAGE
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information - Refined */}
          <motion.div 
            className="space-y-12"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Office */}
            <div className="space-y-6">
              <h3 className="text-xl font-light text-gray-900 tracking-wide">Main Office</h3>
              <div className="space-y-4 text-gray-600">
                <motion.div 
                  className="flex items-start gap-4 group"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <MapPin className="w-5 h-5 mt-1 text-gray-400 group-hover:text-gray-900 transition-colors duration-300" />
                  <span>Duhabi – 3 (Inaruwa Road), Sunsari</span>
                </motion.div>
                <motion.div 
                  className="flex items-start gap-4 group"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <Phone className="w-5 h-5 mt-1 text-gray-400 group-hover:text-gray-900 transition-colors duration-300" />
                  <div>
                    <p>+977-(0) 25-540456 , +977-(0) 1-4112162</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-start gap-4 group"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <Printer className="w-5 h-5 mt-1 text-gray-400 group-hover:text-gray-900 transition-colors duration-300" />
                  <span>+977-(0) 25-540610</span>
                </motion.div>
                <motion.div 
                  className="flex items-start gap-4 group"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <Mail className="w-5 h-5 mt-1 text-gray-400 group-hover:text-gray-900 transition-colors duration-300" />
                  <span>info@forward.org.np</span>
                </motion.div>
              </div>
            </div>
             {/* Contact Persons - Simplified */}
             <div className="space-y-6">
              <h3 className="text-xl font-light text-gray-900 tracking-wide">Contact Persons</h3>
              <div className="space-y-4">
                <motion.div 
                  className="group"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-gray-900">Mr. Drabya Raj Chaudhary</p>
                  <p className="text-gray-500 text-sm">Executive Chairperson</p>
                </motion.div>
                <motion.div 
                  className="group"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-gray-900">Mr. Govind Chaudhary</p>
                  <p className="text-gray-500 text-sm">Programme Coordinator</p>
                </motion.div>
              </div>
            </div>

            {/* Liaison Office */}
            <div className="space-y-6">
              <h3 className="text-xl font-light text-gray-900 tracking-wide">Liaison Office</h3>
              <div className="space-y-4 text-gray-600">
                <motion.div 
                  className="flex items-start gap-4 group"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <MapPin className="w-5 h-5 mt-1 text-gray-400 group-hover:text-gray-900 transition-colors duration-300" />
                  <span>Gairigaun-9, Sinamangal Near Airport Cargo Office, Kathmandu</span>
                </motion.div>
                <motion.div 
                  className="flex items-start gap-4 group"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <Phone className="w-5 h-5 mt-1 text-gray-400 group-hover:text-gray-900 transition-colors duration-300" />
                  <span>+977-(0)1-4112162</span>
                </motion.div>
                <motion.div 
                  className="flex items-start gap-4 group"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <Printer className="w-5 h-5 mt-1 text-gray-400 group-hover:text-gray-900 transition-colors duration-300" />
                  <span>+977-(0)1-4223055</span>
                </motion.div>
                <motion.div 
                  className="flex items-start gap-4 group"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <Mail className="w-5 h-5 mt-1 text-gray-400 group-hover:text-gray-900 transition-colors duration-300" />
                  <span>info@forward.org.np</span>
                </motion.div>
              </div>
            </div>

           
          </motion.div>
        </div>

        {/* Map Section - Refined */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="w-full h-96 rounded-none overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d57097.5288316302!2d87.259538!3d26.565258!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef72612c26b923%3A0xd2f0e2766be60408!2sDuhabi%2C%20Nepal!5e0!3m2!1sen!2sus!4v1731166588652!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </div>
      <Footer/>
    </div>
    </>
  );
};

export default ContactPage;