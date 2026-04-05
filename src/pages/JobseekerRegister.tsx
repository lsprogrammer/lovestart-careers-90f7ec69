import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User, ChevronDown, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import loginHero from '@/assets/login-hero.jpg';

const CATEGORIES = [
  'Information Technology',
  'Healthcare',
  'Finance & Banking',
  'Education',
  'Engineering',
  'Marketing & Sales',
  'Human Resources',
  'Design & Creative',
  'Legal',
  'Other',
];

const JobseekerRegister = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [category, setCategory] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Register submitted', { firstName, lastName, email, category });
  };

  const handleReset = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setCategory('');
    setAgreeTerms(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-muted/30">
      <Header />

      <main className="flex-1 flex items-center justify-center py-16 px-4">
        <div className="w-full max-w-4xl bg-background rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2">
          {/* Left – Hero Image */}
          <div className="hidden md:block relative">
            <img
              src={loginHero}
              alt="Professionals collaborating"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent" />
            <div className="relative z-10 flex flex-col justify-end h-full p-8 text-white">
              <h2 className="text-2xl font-bold mb-2">Start Your Journey</h2>
              <p className="text-white/80 text-sm leading-relaxed">
                Create your account to access thousands of job opportunities and take the next step in your career.
              </p>
            </div>
          </div>

          {/* Right – Registration Form */}
          <div className="p-8 sm:p-10 flex flex-col justify-center">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-foreground">Jobseeker Registration</h1>
              <p className="text-muted-foreground text-sm mt-1">Fill in your details to create an account</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name row */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label htmlFor="firstName" className="text-sm font-medium text-foreground">First Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                    <Input
                      id="firstName"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="pl-10 h-11"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="lastName" className="text-sm font-medium text-foreground">Last Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                    <Input
                      id="lastName"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="pl-10 h-11"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label htmlFor="regEmail" className="text-sm font-medium text-foreground">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                  <Input
                    id="regEmail"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 h-11"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <label htmlFor="regPassword" className="text-sm font-medium text-foreground">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                  <Input
                    id="regPassword"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10 h-11"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="space-y-1.5">
                <label htmlFor="confirmPassword" className="text-sm font-medium text-foreground">Confirm Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="pl-10 pr-10 h-11"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Category */}
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground">Select Category</label>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {CATEGORIES.map((cat) => (
                      <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Terms */}
              <div className="flex items-start gap-2">
                <Checkbox
                  id="terms"
                  checked={agreeTerms}
                  onCheckedChange={(v) => setAgreeTerms(v === true)}
                  className="mt-0.5"
                />
                <label htmlFor="terms" className="text-sm text-muted-foreground cursor-pointer leading-snug">
                  By signing up, you agree to our{' '}
                  <Link to="#" className="text-primary font-medium hover:underline">Terms & Conditions</Link>
                </label>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-1">
                <Button type="submit" className="flex-1 h-11 text-base font-semibold gap-2" disabled={!agreeTerms}>
                  Register <ArrowRight size={18} />
                </Button>
                <Button type="button" variant="outline" className="h-11 px-6 text-sm" onClick={handleReset}>
                  Reset
                </Button>
              </div>
            </form>

            <p className="text-center text-sm text-muted-foreground mt-6">
              Already a member?{' '}
              <Link to="/user/jobseeker-login" className="text-primary font-semibold hover:underline">
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default JobseekerRegister;
