import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Briefcase,
  Calendar,
  MapPin,
  DollarSign,
  Clock,
  Share2,
  Bookmark,
  Building2,
  User,
  Phone,
  Globe,
  ChevronRight,
  CheckCircle2,
  Star,
  ArrowRight,
} from 'lucide-react';

const JOB_DATA = {
  title: 'Staff Software Engineer, Firmware Systems Architecture',
  company: 'Tesla',
  companyLogo: 'https://jobberbackend.logicspice.com/public/files/joblogo/UAk7FmNzT8.jpeg',
  experience: '7-10 Year',
  location: 'Palo Alto, California, USA',
  postedDate: 'April 01, 2024',
  category: 'Engineering',
  subCategory: '',
  jobType: 'Full Time',
  salary: '$20,000 - $25,000',
  recruiterName: 'William N. Henry',
  companyContact: '405-398895052',
  website: 'https://tesla.com',
  designation: 'Electronic engineer',
  skills: ['Computer Literacy', 'Data Analysis', 'Problem Solving', 'Team Work'],
  description: {
    whatToExpect: [
      "We are the team responsible for designing Tesla's vehicle controller architecture. In the early phase of a program, we determine where to put power, communications, sensors, actuators and compute in a new (or updated) vehicle. As a vehicle is brought up, we work with teams across the vehicle software organization to help bring their systems to life. We play a significant role in shaping Tesla's future.",
      "This isn't just a system engineering role, we also write software ranging from embedded C real-time controls to Python-based fleet analytics-- whatever is necessary to get the job done. We are about to launch a new Ethernet-based communication network in Cybertruck.",
      "We're looking for an experienced engineer to join our team and take responsibility for the architecture of one of the many future vehicle programs we're currently designing (some announced, some not). If you match the background we're looking for and are excited about making a direct impact on future Tesla products, we'd love to talk to you.",
    ],
    whatYoullDo: [
      'Work cross organizationally (Low Voltage, Chassis, HV, Powertrain, etc.) to make design decisions on controller architecture, representing the firmware org',
      'Conduct Hazard Analysis Risk Assessment (HARA) to identify the top safety requirements in a system',
      'Conduct Failure Mode and Effects Analysis (FMEA) to analyze a system\'s robustness',
      'Prototype embedded software to evaluate concepts on various vehicle systems',
      'Develop scripts to analyze fleet performance of existing systems to make precise software/hardware improvements on existing and future vehicles (Python)',
      'Solve hard, undefined problems with limited direction',
    ],
    whatYoullBring: [
      'Experience leading a technical effort from concept to production',
      'Experience developing real-time safety-critical software (C/C++)',
      'Experience with mechatronics principles (actuators, power management, board design, etc.)',
      'Experience writing clear requirements, system diagrams',
      'Understanding of safety critical development frameworks (DO-178, ISO 26262, IEC 62304, etc.)',
      'Understanding of communication technologies (Ethernet, CAN, Serial, etc.)',
      'Experience with big data analytics (pyspark, jupityrhub) (Python)',
      'Experience with safety analysis (HARA, FTA, FMEA, FHA, etc.)',
      'Experience validating complex systems (Note: this is not a validation role but understanding this part of the process is important to the success of the job)',
      'Understanding of embedded technologies (SPI, UART, I2C, PMIC, etc.)',
    ],
    benefits: [
      'Aetna PPO and HSA plans > 2 medical plan options with $0 payroll deduction',
      'Family-building, fertility, adoption and surrogacy benefits',
      'Dental (including orthodontic coverage) and vision plans, both have options with a $0 paycheck contribution',
      'Company Paid (Health Savings Account) HSA Contribution when enrolled in the High Deductible Aetna medical plan with HSA',
      'Healthcare and Dependent Care Flexible Spending Accounts (FSA)',
      'LGBTQ+ care concierge services',
      '401(k) with employer match, Employee Stock Purchase Plans, and other financial benefits',
      'Company paid Basic Life, AD&D, short-term and long-term disability insurance',
      'Employee Assistance Program',
      'Sick and Vacation time (Flex time for salary positions), and Paid Holidays',
      'Back-up childcare and parenting support resources',
      'Voluntary benefits to include: critical illness, hospital indemnity, accident insurance, theft & legal services, and pet insurance',
      'Weight Loss and Tobacco Cessation Programs',
      'Tesla Babies program',
      'Commuter benefits',
      'Employee discounts and perks program',
    ],
    expectedCompensation: '$104,000 - $348,000/annual salary + cash and stock awards + benefits',
    compensationNote: 'Pay offered may vary depending on multiple individualized factors, including market location, job-related knowledge, skills, and experience. The total compensation package for this position may also include other elements dependent on the position offered. Details of participation in these benefit plans will be provided if an employee receives an offer of employment.',
  },
};

const RELATED_JOBS = [
  {
    id: 1,
    title: 'Technical Engineer - Hardware & Server',
    salary: 'USD15000-USD20000/Year',
    experience: '2 Years',
    posted: '734 Days Ago',
    company: 'Alexandra J. Scott',
    location: 'Casablanca, Morocco',
    type: 'Full Time',
    logo: 'https://jobberbackend.logicspice.com/public/files/joblogo/tSATYrYckZ.png',
    link: '/job-description/technical-engineer-hardware-server',
  },
  {
    id: 2,
    title: 'Software Engineer, Machine Learning',
    salary: 'USD25000-USD30000/Year',
    experience: '5 Years',
    posted: '737 Days Ago',
    company: 'Lily Lambert',
    location: 'Singaparna, Tasikmalaya',
    type: 'Full Time',
    logo: '',
    link: '/job-description/software-engineer-machine-learning',
  },
];

const JobDetail = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb */}
      <section className="pt-20">
        <div className="bg-primary/5 border-b border-primary/10">
          <div className="container mx-auto px-4 lg:px-8 py-4 flex items-center justify-between">
            <h1 className="text-xl font-bold text-foreground flex items-center gap-2">
              <Briefcase size={20} className="text-primary" />
              Job Details
            </h1>
            <nav className="text-sm text-muted-foreground flex items-center gap-1.5">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight size={14} />
              <Link to="/search-job" className="hover:text-primary transition-colors">Jobs</Link>
              <ChevronRight size={14} />
              <span className="text-primary font-medium truncate max-w-[200px]">Job Details</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Job Header Card */}
      <section className="container mx-auto px-4 lg:px-8 mt-6">
        <div className="bg-card rounded-2xl border border-border shadow-lg p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* Company Logo */}
            <div className="w-20 h-20 rounded-2xl border border-border bg-white flex items-center justify-center overflow-hidden shrink-0 shadow-sm">
              <img
                src={JOB_DATA.companyLogo}
                alt={JOB_DATA.company}
                className="w-full h-full object-contain p-2"
              />
            </div>

            {/* Job Info */}
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground leading-tight">
                {JOB_DATA.title}
              </h2>
              <div className="flex flex-wrap items-center gap-3 mt-3 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Building2 size={15} className="text-primary" />
                  {JOB_DATA.company}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock size={15} className="text-primary" />
                  {JOB_DATA.experience}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={15} className="text-primary" />
                  {JOB_DATA.location}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar size={15} className="text-primary" />
                  {JOB_DATA.postedDate}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 shrink-0">
              <Button variant="outline" size="icon" className="rounded-full w-10 h-10">
                <Share2 size={18} />
              </Button>
              <Button className="rounded-full px-6 font-semibold gap-2">
                Apply Now
              </Button>
              <Button variant="outline" className="rounded-full px-5 font-semibold gap-2">
                <Bookmark size={16} />
                Save Job
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Job Description */}
          <div className="lg:col-span-2 space-y-8">
            {/* Job Description */}
            <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-primary rounded-full" />
                Job Description
              </h3>

              {/* What to Expect */}
              <div className="mb-6">
                <h4 className="text-base font-bold text-foreground mb-3">What to Expect</h4>
                <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                  {JOB_DATA.description.whatToExpect.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>

              {/* What You'll Do */}
              <div className="mb-6">
                <h4 className="text-base font-bold text-foreground mb-3">What You'll Do</h4>
                <ul className="space-y-2">
                  {JOB_DATA.description.whatYoullDo.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* What You'll Bring */}
              <div className="mb-6">
                <h4 className="text-base font-bold text-foreground mb-3">What You'll Bring</h4>
                <ul className="space-y-2">
                  {JOB_DATA.description.whatYoullBring.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Compensation and Benefits */}
              <div className="mb-6">
                <h4 className="text-base font-bold text-foreground mb-3">Compensation and Benefits</h4>
                <p className="text-sm font-medium text-foreground mb-3">Benefits</p>
                <p className="text-sm text-muted-foreground mb-3">
                  Along with competitive pay, as a full-time Tesla employee, you are eligible for the following benefits at day 1 of hire:
                </p>
                <ul className="space-y-2">
                  {JOB_DATA.description.benefits.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Expected Compensation */}
              <div className="mb-6">
                <h4 className="text-base font-bold text-foreground mb-3">Expected Compensation</h4>
                <div className="bg-primary/5 border border-primary/10 rounded-xl p-4">
                  <p className="text-lg font-bold text-primary">{JOB_DATA.description.expectedCompensation}</p>
                </div>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  {JOB_DATA.description.compensationNote}
                </p>
              </div>
            </div>

            {/* Key Skills */}
            <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
              <h3 className="text-xl font-bold text-foreground mb-5 flex items-center gap-2">
                <div className="w-1 h-6 bg-primary rounded-full" />
                Key Skills Required
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {JOB_DATA.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 bg-primary/5 text-primary border border-primary/15 rounded-full px-4 py-2 text-sm font-medium"
                  >
                    <Star size={14} />
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Designation */}
            <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-primary rounded-full" />
                Designation
              </h3>
              <p className="text-base text-muted-foreground font-medium">{JOB_DATA.designation}</p>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Job Overview */}
            <div className="bg-card rounded-2xl border border-border p-6 sticky top-24">
              <h3 className="text-lg font-bold text-foreground mb-5 flex items-center gap-2">
                <div className="w-1 h-5 bg-primary rounded-full" />
                Job Overview
              </h3>
              <div className="space-y-4">
                {[
                  { icon: Calendar, label: 'Date Posted', value: JOB_DATA.postedDate },
                  { icon: Briefcase, label: 'Category', value: JOB_DATA.category },
                  { icon: Briefcase, label: 'Sub Category', value: JOB_DATA.subCategory || '—' },
                  { icon: Clock, label: 'Job Type', value: JOB_DATA.jobType },
                  { icon: DollarSign, label: 'Salary', value: JOB_DATA.salary },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon size={16} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                      <p className="text-sm font-semibold text-foreground">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="border-t border-border my-5" />

              {/* Contact Information */}
              <h3 className="text-lg font-bold text-foreground mb-5 flex items-center gap-2">
                <div className="w-1 h-5 bg-primary rounded-full" />
                Contact Information
              </h3>
              <div className="space-y-4">
                {[
                  { icon: Building2, label: 'Company Name', value: JOB_DATA.company },
                  { icon: User, label: 'Recruiter Name', value: JOB_DATA.recruiterName },
                  { icon: Phone, label: 'Company Contact', value: JOB_DATA.companyContact },
                  { icon: Globe, label: 'Website', value: JOB_DATA.website, isLink: true },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon size={16} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                      {item.isLink ? (
                        <a
                          href={item.value}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-primary hover:underline"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-semibold text-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Jobs */}
      <section className="container mx-auto px-4 lg:px-8 pb-12">
        <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
          <div className="w-1 h-7 bg-primary rounded-full" />
          Related Jobs
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {RELATED_JOBS.map((job) => (
            <Link
              key={job.id}
              to={job.link}
              className="group bg-card border border-border rounded-2xl p-5 hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1 mb-1">
                  {job.title}
                </h3>
                <p className="text-primary font-semibold text-sm flex items-center gap-1.5 mb-3">
                  <DollarSign size={14} />
                  {job.salary}
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1 border border-border rounded-full px-2.5 py-1">
                    <Briefcase size={12} /> {job.experience}
                  </span>
                  <span className="inline-flex items-center gap-1 border border-border rounded-full px-2.5 py-1">
                    <Calendar size={12} /> {job.posted}
                  </span>
                </div>
              </div>
              <div className="border-t border-border my-4" />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center shrink-0 overflow-hidden">
                    {job.logo ? (
                      <img src={job.logo} alt={job.company} className="w-full h-full object-contain p-1" />
                    ) : (
                      <Building2 size={18} className="text-muted-foreground" />
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-sm text-foreground truncate">{job.company}</p>
                    <p className="text-xs text-muted-foreground truncate flex items-center gap-1">
                      <MapPin size={11} /> {job.location}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-semibold bg-primary/10 text-primary rounded-full px-3 py-1 shrink-0">
                  {job.type}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JobDetail;
