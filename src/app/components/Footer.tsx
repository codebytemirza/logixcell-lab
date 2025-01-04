import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const companyLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
    { label: 'Careers', href: '/careers' },
  ];

  const serviceLinks = [
    { label: 'AI Solutions', href: '/services#ai' },
    { label: 'Web Development', href: '/services#web' },
    { label: 'Chatbot Services', href: '/services#chatbot' },
    { label: 'Machine Learning', href: '/services#ml' },
  ];

  const socialLinks = [
    { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'LinkedIn' },
    { label: 'Twitter', href: 'https://twitter.com', icon: 'Twitter' },
    { label: 'GitHub', href: 'https://github.com', icon: 'GitHub' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Image
                src="/assets/images/logo.png"
                alt="Logixcell Lab Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-xl font-bold">Logixcell Lab</span>
            </div>
            <p className="text-gray-300 mb-6">
              Transforming ideas into intelligent solutions with cutting-edge AI and web technologies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  aria-label={social.label}
                >
                  <span className="sr-only">{social.label}</span>
                  {/* You can replace these with actual icons */}
                  <div className="w-6 h-6 flex items-center justify-center border rounded-full">
                    {social.icon[0]}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                1234 Technology Drive
                <br />
                Silicon Valley, CA 94025
              </p>
              <p>
                <a 
                  href="tel:+1234567890" 
                  className="hover:text-white transition-colors duration-200"
                >
                  +1 (234) 567-890
                </a>
              </p>
              <p>
                <a 
                  href="mailto:info@logixcell.com" 
                  className="hover:text-white transition-colors duration-200"
                >
                  info@logixcell.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm">
              © {currentYear} Logixcell Lab. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link 
                href="/privacy" 
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;