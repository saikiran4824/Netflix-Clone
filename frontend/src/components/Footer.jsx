import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Footer Top Section: Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-6">
          <div>
            <h3 className="text-xl font-bold mb-2">About</h3>
            <ul>
              <li><a href="#" className="hover:text-gray-400">About Us</a></li>
              <li><a href="#" className="hover:text-gray-400">Careers</a></li>
              <li><a href="#" className="hover:text-gray-400">Press</a></li>
              <li><a href="#" className="hover:text-gray-400">Investor Relations</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Help</h3>
            <ul>
              <li><a href="#" className="hover:text-gray-400">FAQ</a></li>
              <li><a href="#" className="hover:text-gray-400">Support</a></li>
              <li><a href="#" className="hover:text-gray-400">Account</a></li>
              <li><a href="#" className="hover:text-gray-400">Redeem Gift Cards</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Terms & Policies</h3>
            <ul>
              <li><a href="#" className="hover:text-gray-400">Terms of Use</a></li>
              <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-400">Cookie Preferences</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-facebook-square text-2xl"></i>
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-instagram text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section: Copyright */}
        <div className="text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Netflix SAIKIRAN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
