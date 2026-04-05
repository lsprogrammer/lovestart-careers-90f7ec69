import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Search,
  X,
  MapPin,
  Calendar,
  Briefcase,
  DollarSign,
  Clock,
  ChevronLeft,
  ChevronRight,
  Building2,
} from 'lucide-react';

const JOBS_DATA = [
  { id: 1, title: 'Accounts Manager', salary: 'USD1000-USD2000/Year', experience: '1 Years', posted: '4 Days Ago', company: 'Sandeep', location: 'Secunderabad, Telang...', type: 'Full Time' },
  { id: 2, title: 'Senior Accountant', salary: 'USD1000-USD2000/Year', experience: '0 Years', posted: '5 Days Ago', company: 'PRAVEEN', location: 'Secunderabad, Telang...', type: 'Full Time' },
  { id: 3, title: 'Accountant', salary: 'USD1000-USD2000/Year', experience: '0 Years', posted: '5 Days Ago', company: 'PRAVEEN', location: 'Secunderabad, Telang...', type: 'Full Time' },
  { id: 4, title: 'Software Developer II', salary: 'USD15000-USD20000/Year', experience: '1 Years', posted: '11 Days Ago', company: 'Sam Altman', location: 'New Hampshire, OH, U...', type: 'Full Time' },
  { id: 5, title: 'Software Developer', salary: 'USD10000-USD12000/Year', experience: '2 Years', posted: '13 Days Ago', company: 'Mayank', location: 'Denver, CO, USA', type: 'Full Time' },
  { id: 6, title: 'Medical Officer', salary: 'USD4000-USD5000/Year', experience: '2 Years', posted: '339 Days Ago', company: 'Michael Hussy', location: 'New Hampshire, OH, U...', type: 'Full Time' },
  { id: 7, title: 'Staff Software Engineer, Firm...', salary: 'USD20000-USD25000/Year', experience: '7 Years', posted: '734 Days Ago', company: 'William N. He...', location: 'Palo Alto, Californi...', type: 'Full Time' },
  { id: 8, title: 'Director - Inventory Replenish...', salary: 'USD12000-USD15000/Year', experience: '5 Years', posted: '734 Days Ago', company: 'Devin L. Oleary', location: 'Bengaluru, Karnataka...', type: 'Full Time' },
  { id: 9, title: 'Technical Engineer - Hardwar...', salary: 'USD15000-USD20000/Year', experience: '2 Years', posted: '734 Days Ago', company: 'Alexandra J. S...', location: 'Casablanca, Morocco', type: 'Full Time' },
  { id: 10, title: 'Senior Retail Account Manager', salary: 'USD7000-USD10000/Year', experience: '2 Years', posted: '734 Days Ago', company: 'Willa J. Hastings', location: 'Brazil, IN, USA', type: 'Full Time' },
  { id: 11, title: 'Certified Medical Assistant', salary: 'USD4000-USD5000/Year', experience: '2 Years', posted: '734 Days Ago', company: 'Mitchel Santner', location: 'Dallas, TX, USA', type: 'Full Time' },
  { id: 12, title: 'Software Engineer, Machine L...', salary: 'USD25000-USD30000/Year', experience: '5 Years', posted: '737 Days Ago', company: 'Lily Lambert', location: 'Singaparna, Tasikmal...', type: 'Full Time' },
];

const CATEGORIES = [
  'Any Category',
  'Accounting / Finance',
  'Education / Training',
  'Engineering',
  'Healthcare',
  'Information Technology',
  'Marketing',
  'Sales',
];

const SearchJob = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [location, setLocation] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const totalRecords = 29;

  const handleClear = () => {
    setKeyword('');
    setCategory('');
    setSubCategory('');
    setLocation('');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Banner */}
      <section className="pt-20">
        <div className="bg-primary/5 border-b border-primary/10">
          <div className="container mx-auto px-4 lg:px-8 py-4 flex items-center justify-between">
            <h1 className="text-xl font-bold text-foreground flex items-center gap-2">
              <Briefcase size={20} className="text-primary" />
              Jobs
            </h1>
            <nav className="text-sm text-muted-foreground">
              <a href="/" className="hover:text-primary transition-colors">Home</a>
              <span className="mx-1.5">/</span>
              <span className="text-primary font-medium">Jobs</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Search Filters */}
      <section className="container mx-auto px-4 lg:px-8 -mt-8">
        <div className="bg-card rounded-2xl shadow-xl border border-border p-5 md:p-6 flex flex-col md:flex-row gap-3 items-end">
          <div className="flex-1 w-full">
            <label className="text-xs font-semibold text-muted-foreground mb-1 block">Keyword</label>
            <Input
              placeholder="e.g. Developer, Designer"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="h-11"
            />
          </div>
          <div className="flex-1 w-full">
            <label className="text-xs font-semibold text-muted-foreground mb-1 block">Category</label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="h-11">
                <SelectValue placeholder="Any Category" />
              </SelectTrigger>
              <SelectContent>
                {CATEGORIES.map((cat) => (
                  <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex-1 w-full">
            <label className="text-xs font-semibold text-muted-foreground mb-1 block">Sub Category</label>
            <Select value={subCategory} onValueChange={setSubCategory}>
              <SelectTrigger className="h-11">
                <SelectValue placeholder="Sub Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sub Categories</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex-1 w-full">
            <label className="text-xs font-semibold text-muted-foreground mb-1 block">Location</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
              <Input
                placeholder="Enter Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="h-11 pl-9"
              />
            </div>
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <Button className="h-11 px-6 rounded-full font-semibold gap-2">
              <Search size={16} />
              Find Jobs
            </Button>
            <Button variant="outline" onClick={handleClear} className="h-11 px-5 rounded-full font-semibold gap-2">
              <X size={16} />
              Clear
            </Button>
          </div>
        </div>
      </section>

      {/* Results Header */}
      <section className="container mx-auto px-4 lg:px-8 mt-8">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <p className="text-muted-foreground text-sm">
            Showing <span className="font-semibold text-foreground">1-12</span> of <span className="font-semibold text-foreground">{totalRecords}</span> results
          </p>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="rounded-full gap-1"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            >
              <ChevronLeft size={16} /> Prev
            </Button>
            <Button
              size="sm"
              className="rounded-full gap-1"
              onClick={() => setCurrentPage((p) => p + 1)}
            >
              Next <ChevronRight size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* Job Cards Grid */}
      <section className="container mx-auto px-4 lg:px-8 py-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {JOBS_DATA.map((job) => (
            <a
              key={job.id}
              href="#"
              className="group bg-card border border-border rounded-2xl p-5 hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Top */}
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

              {/* Divider */}
              <div className="border-t border-border my-4" />

              {/* Bottom */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center shrink-0">
                    <Building2 size={18} className="text-muted-foreground" />
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
            </a>
          ))}
        </div>
      </section>

      {/* Bottom Pagination */}
      <section className="container mx-auto px-4 lg:px-8 pb-12">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <p className="text-muted-foreground text-sm">
            Showing <span className="font-semibold text-foreground">1-12</span> of <span className="font-semibold text-foreground">{totalRecords}</span> results
          </p>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="rounded-full gap-1"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            >
              <ChevronLeft size={16} /> Prev
            </Button>
            <Button
              size="sm"
              className="rounded-full gap-1"
              onClick={() => setCurrentPage((p) => p + 1)}
            >
              Next <ChevronRight size={16} />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SearchJob;
