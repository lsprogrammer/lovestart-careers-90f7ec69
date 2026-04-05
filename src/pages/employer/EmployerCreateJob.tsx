import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { PlusCircle, Eye } from 'lucide-react';

const categories = ['IT & Software', 'Design', 'Marketing', 'Sales', 'Finance', 'Healthcare', 'Education', 'Engineering', 'Legal', 'Human Resources'];
const workTypes = ['Full Time', 'Part Time', 'Contract', 'Remote', 'Internship', 'Freelance'];
const skills = ['React', 'Node.js', 'Python', 'Java', 'PHP', 'Angular', 'Vue.js', 'TypeScript', 'AWS', 'Docker', 'Kubernetes', 'SQL', 'MongoDB', 'GraphQL', 'REST API'];
const designations = ['Software Engineer', 'Senior Software Engineer', 'Lead Developer', 'Project Manager', 'Product Manager', 'Designer', 'Data Analyst', 'DevOps Engineer', 'QA Engineer', 'Business Analyst'];
const experienceOptions = ['Fresher', '1 Year', '2 Years', '3 Years', '4 Years', '5 Years', '6-8 Years', '8-10 Years', '10+ Years'];
const salaryOptions = ['₹1-3 LPA', '₹3-5 LPA', '₹5-8 LPA', '₹8-12 LPA', '₹12-18 LPA', '₹18-25 LPA', '₹25-40 LPA', '₹40+ LPA'];

const EmployerCreateJob = () => {
  const [form, setForm] = useState({
    title: '', category: '', description: '', companyName: 'Microsoft', companyProfile: '',
    workType: '', contactName: '', contactNumber: '', companyWebsite: '', skill: '',
    designation: '', location: '', experience: '', salary: '', expirationDate: '',
    metaTitle: '', metaDescription: '', metaKeyword: '',
  });

  const update = (key: string, value: string) => setForm(prev => ({ ...prev, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Job posted', form);
  };

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
          <PlusCircle className="h-6 w-6 text-primary" /> Create New Job
        </h1>
        <p className="text-sm text-muted-foreground mt-1">Post a new job listing for candidates</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Job Info */}
        <Card>
          <CardHeader><CardTitle className="text-base">Job Information</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <Field label="Job Title" required>
              <Input value={form.title} onChange={e => update('title', e.target.value)} placeholder="e.g. Senior React Developer" required />
            </Field>
            <Field label="Category" required>
              <Select onValueChange={v => update('category', v)}>
                <SelectTrigger><SelectValue placeholder="Select Job Category" /></SelectTrigger>
                <SelectContent>{categories.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
              </Select>
            </Field>
            <Field label="Job Description" required>
              <Textarea value={form.description} onChange={e => update('description', e.target.value)} rows={5} placeholder="Enter job description, responsibilities, and details..." required />
            </Field>
          </CardContent>
        </Card>

        {/* Company Info */}
        <Card>
          <CardHeader><CardTitle className="text-base">Company Details</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <Field label="Company Name" required>
              <Input value={form.companyName} onChange={e => update('companyName', e.target.value)} placeholder="Company Name" required />
            </Field>
            <Field label="Company Profile" required>
              <Textarea value={form.companyProfile} onChange={e => update('companyProfile', e.target.value)} rows={3} placeholder="Brief description about the company..." required />
            </Field>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Contact Name" required>
                <Input value={form.contactName} onChange={e => update('contactName', e.target.value)} placeholder="Contact Name" required />
              </Field>
              <Field label="Contact Number" required>
                <Input value={form.contactNumber} onChange={e => update('contactNumber', e.target.value)} placeholder="e.g. 1236547895" required />
              </Field>
            </div>
            <Field label="Company Website">
              <Input value={form.companyWebsite} onChange={e => update('companyWebsite', e.target.value)} placeholder="e.g. https://www.google.com" />
              <p className="text-xs text-muted-foreground mt-1">Eg: https://www.google.com or https://google.com</p>
            </Field>
          </CardContent>
        </Card>

        {/* Job Requirements */}
        <Card>
          <CardHeader><CardTitle className="text-base">Job Requirements</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Work Type" required>
                <Select onValueChange={v => update('workType', v)}>
                  <SelectTrigger><SelectValue placeholder="Select Work Type" /></SelectTrigger>
                  <SelectContent>{workTypes.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}</SelectContent>
                </Select>
              </Field>
              <Field label="Skill">
                <Select onValueChange={v => update('skill', v)}>
                  <SelectTrigger><SelectValue placeholder="Select Skill" /></SelectTrigger>
                  <SelectContent>{skills.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
                </Select>
              </Field>
              <Field label="Designation" required>
                <Select onValueChange={v => update('designation', v)}>
                  <SelectTrigger><SelectValue placeholder="Choose Designation" /></SelectTrigger>
                  <SelectContent>{designations.map(d => <SelectItem key={d} value={d}>{d}</SelectItem>)}</SelectContent>
                </Select>
              </Field>
              <Field label="Location" required>
                <Input value={form.location} onChange={e => update('location', e.target.value)} placeholder="e.g. Mumbai, India" required />
              </Field>
              <Field label="Experience (In Years)" required>
                <Select onValueChange={v => update('experience', v)}>
                  <SelectTrigger><SelectValue placeholder="Choose Experience" /></SelectTrigger>
                  <SelectContent>{experienceOptions.map(e => <SelectItem key={e} value={e}>{e}</SelectItem>)}</SelectContent>
                </Select>
              </Field>
              <Field label="Annual Salary" required>
                <Select onValueChange={v => update('salary', v)}>
                  <SelectTrigger><SelectValue placeholder="Select Salary" /></SelectTrigger>
                  <SelectContent>{salaryOptions.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
                </Select>
              </Field>
            </div>
          </CardContent>
        </Card>

        {/* Additional Info */}
        <Card>
          <CardHeader><CardTitle className="text-base">Additional Information</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Company Logo">
                <Input type="file" accept=".gif,.jpg,.jpeg,.png" className="file:mr-3 file:rounded-md file:border-0 file:bg-primary/10 file:px-3 file:py-1 file:text-sm file:font-medium file:text-primary hover:file:bg-primary/20" />
                <p className="text-xs text-muted-foreground mt-1">Supported: gif, jpg, jpeg, png (Max 500KB, Min 250x250px)</p>
              </Field>
              <Field label="Add Expiration Date" required>
                <Input type="date" value={form.expirationDate} onChange={e => update('expirationDate', e.target.value)} required />
              </Field>
            </div>
          </CardContent>
        </Card>

        {/* SEO */}
        <Card>
          <CardHeader><CardTitle className="text-base">SEO Details</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <Field label="Meta Title">
              <Input value={form.metaTitle} onChange={e => update('metaTitle', e.target.value)} placeholder="Meta Title" />
            </Field>
            <Field label="Meta Description">
              <Textarea value={form.metaDescription} onChange={e => update('metaDescription', e.target.value)} rows={2} placeholder="Meta Description" />
            </Field>
            <Field label="Meta Keyword">
              <Input value={form.metaKeyword} onChange={e => update('metaKeyword', e.target.value)} placeholder="Meta Keyword" />
            </Field>
          </CardContent>
        </Card>

        <div className="flex gap-3">
          <Button type="submit" className="font-semibold px-6">Post Job</Button>
          <Button type="button" variant="outline" className="gap-2">
            <Eye className="h-4 w-4" /> Preview
          </Button>
        </div>
      </form>
    </div>
  );
};

const Field = ({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) => (
  <div className="space-y-1.5">
    <label className="text-sm font-medium">{label}{required && <span className="text-destructive ml-0.5">*</span>}</label>
    {children}
  </div>
);

export default EmployerCreateJob;
