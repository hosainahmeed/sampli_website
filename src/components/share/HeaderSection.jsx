'use client';
import LogoIcon from '@/app/components/shared/LogoIcon';
import { Button } from 'antd';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

function HeaderSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  console.log('pathNmae', pathname);
  const MenuLinks = [
    {
      title: 'Business owners',
      pathName: '/',
    },
    {
      title: 'For samplers',
      pathName: '/for-samplers',
    },
    {
      title: 'About Us',
      pathName: '/about-us',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      y: '100%',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const menuItemVariants = {
    closed: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <nav
      // className={`sticky top-0 z-50 w-full py-4 px-6 transition-all duration-300 ${
      //   scrolled ? 'bg-[#f8f8f8]' : 'bg-transparent'
      // }`}
      className='px-2'
    >
      <div className="area-xl  mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.div
          className="flex-shrink-0"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <LogoIcon />
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {MenuLinks.map((link, index) => (
            <motion.div
              key={link.title}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <Link
                href={link.pathName}
                className={`${
                  pathname === link.pathName
                    ? 'hover:text-gray-700 text-blue-600 font-semibold'
                    : 'hover:text-blue-600 text-gray-700'
                }   transition-colors`}
              >
                {link.title}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button>Login</Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button type="primary">Sign Up</Button>
          </motion.div>
        </div>

        <motion.button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          whileTap={{ scale: 0.9 }}
        >
          {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </motion.button>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="fixed inset-0 z-[999] bg-white md:hidden overflow-hidden"
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
            >
              <div className="flex justify-end p-6">
                <motion.button
                  onClick={toggleMenu}
                  className="text-gray-700 focus:outline-none"
                  aria-label="Close menu"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTimes size={24} />
                </motion.button>
              </div>
              <div className="flex flex-col items-center space-y-6 p-8">
                <LogoIcon />
                {MenuLinks.map((link, index) => (
                  <motion.div
                    key={link.title}
                    variants={menuItemVariants}
                    custom={index}
                  >
                    <Link
                      href={link.pathName}
                      className={`${
                        pathname === link.pathName
                          ? 'hover:text-gray-700 text-blue-600 font-semibold'
                          : 'hover:text-blue-600 text-gray-700'
                      }   transition-colors`}
                      onClick={closeMobileMenu}
                    >
                      {link.title}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  className="flex flex-col w-full gap-3 mt-4"
                  variants={menuItemVariants}
                >
                  <motion.div whileTap={{ scale: 0.95 }}>
                    <Button block size="large">
                      Login
                    </Button>
                  </motion.div>
                  <motion.div whileTap={{ scale: 0.95 }}>
                    <Button block type="primary" size="large">
                      Sign Up
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default HeaderSection;
