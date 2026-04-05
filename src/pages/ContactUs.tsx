import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'info@jsjobber.com', sub: 'We reply within 24 hours' },
  { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', sub: 'Mon-Fri, 9am-6pm EST' },
  { icon: MapPin, label: 'Location', value: '123 Business Street, Suite 100', sub: 'New York, NY 10001' },
  { icon: Clock, label: 'Working Hours', value: 'Monday - Friday', sub: '9:00 AM - 6:00 PM EST' },
];

const ContactUs = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (field: string, value: string) => setForm(prev => ({ ...prev, [field]: value }));

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-background pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <MessageSquare size={16} />
            Get In Touch
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">Contact Us</h1>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ArrowRight size={14} />
            <span className="text-primary font-medium">Contact Us</span>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="container mx-auto px-4 lg:px-8 -mt-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {contactInfo.map(({ icon: Icon, label, value, sub }) => (
            <div key={label} className="bg-card rounded-2xl border border-border p-6 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 text-center group">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon size={24} className="text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-1">{label}</h3>
              <p className="text-foreground font-medium text-sm">{value}</p>
              <p className="text-muted-foreground text-xs mt-1">{sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Form + Map */}
      <section className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Form */}
          <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
            <h2 className="text-2xl font-extrabold text-foreground mb-2">Send Us a Message</h2>
            <p className="text-muted-foreground mb-8">Fill out the form and we'll get back to you as soon as possible.</p>
            <div className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-semibold text-foreground mb-1.5 block">Name *</label>
                  <Input placeholder="Your full name" value={form.name} onChange={e => handleChange('name', e.target.value)} className="h-12 rounded-xl" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-foreground mb-1.5 block">Email *</label>
                  <Input type="email" placeholder="your@email.com" value={form.email} onChange={e => handleChange('email', e.target.value)} className="h-12 rounded-xl" />
                </div>
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground mb-1.5 block">Subject</label>
                <Select onValueChange={v => handleChange('subject', v)}>
                  <SelectTrigger className="h-12 rounded-xl">
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="support">Technical Support</SelectItem>
                    <SelectItem value="billing">Billing Question</SelectItem>
                    <SelectItem value="partnership">Partnership</SelectItem>
                    <SelectItem value="feedback">Feedback</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground mb-1.5 block">Message *</label>
                <Textarea placeholder="Write your message here..." rows={5} value={form.message} onChange={e => handleChange('message', e.target.value)} className="rounded-xl resize-none" />
              </div>
              <Button className="w-full h-12 rounded-xl text-base font-bold gap-2">
                <Send size={18} />
                Send Message
              </Button>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-border shadow-sm min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596552044!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '100%' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
