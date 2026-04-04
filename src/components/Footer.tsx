import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'hsl(215 28% 17%)' }} className="text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-black text-lg">JS</span>
              </div>
              <span className="text-2xl font-extrabold tracking-tight">Jobber</span>
            </div>
            <p className="text-white/60 text-base leading-relaxed mb-6">
              Connecting employers and candidates with the right opportunities. Your career journey starts here.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* For Jobseekers */}
          <div>
            <h4 className="text-lg font-bold mb-5">For Jobseekers</h4>
            <ul className="space-y-3">
              {['Browse Jobs', 'Career Advice', 'Resume Builder', 'Salary Calculator', 'Job Alerts'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/60 hover:text-primary transition-colors text-base">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-lg font-bold mb-5">About Us</h4>
            <ul className="space-y-3">
              {['About Company', 'Our Team', 'Blog', 'Terms & Conditions', 'Privacy Policy'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/60 hover:text-primary transition-colors text-base">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/60">
                <MapPin size={18} className="shrink-0 mt-0.5 text-primary" />
                <span className="text-base">123 Business Street, Suite 100, New York, NY</span>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <Phone size={18} className="shrink-0 text-primary" />
                <span className="text-base">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <Mail size={18} className="shrink-0 text-primary" />
                <span className="text-base">info@jsjobber.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-white/40">© 2026 JS Jobber. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-white/40">
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
