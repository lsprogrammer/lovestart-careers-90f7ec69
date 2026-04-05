import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { PlusCircle } from 'lucide-react';

const EmployerCreateJob = () => {
  const [form, setForm] = useState({
    title: '', category: '', type: '', experience: '', salary: '', location: '', description: '', requirements: '',
  });

  const update = (key: string, value: string) => setForm(prev => ({ ...prev, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Job created', form);
  };

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
          <PlusCircle className="h-6 w-6 text-primary" /> Create New Job
        </h1>
        <p className="text-sm text-muted-foreground mt-1">Post a new job listing for candidates</p>
      </div>

      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader><CardTitle className="text-base">Job Details</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-sm font-medium">Job Title *</label>
              <Input value={form.title} onChange={e => update('title', e.target.value)} placeholder="e.g. Senior React Developer" required />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-sm font-medium">Category</label>
                <Select onValueChange={v => update('category', v)}>
                  <SelectTrigger><SelectValue placeholder="Select category" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="it">IT & Software</SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="sales">Sales</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium">Job Type</label>
                <Select onValueChange={v => update('type', v)}>
                  <SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="full-time">Full Time</SelectItem>
                    <SelectItem value="part-time">Part Time</SelectItem>
                    <SelectItem value="contract">Contract</SelectItem>
                    <SelectItem value="remote">Remote</SelectItem>
                    <SelectItem value="internship">Internship</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium">Experience</label>
                <Input value={form.experience} onChange={e => update('experience', e.target.value)} placeholder="e.g. 3-5 years" />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium">Salary Range</label>
                <Input value={form.salary} onChange={e => update('salary', e.target.value)} placeholder="e.g. $80,000 - $120,000" />
              </div>
              <div className="space-y-1.5 sm:col-span-2">
                <label className="text-sm font-medium">Location</label>
                <Input value={form.location} onChange={e => update('location', e.target.value)} placeholder="e.g. Mumbai, India" />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium">Job Description *</label>
              <Textarea value={form.description} onChange={e => update('description', e.target.value)} rows={5} placeholder="Describe the role, responsibilities..." required />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium">Requirements</label>
              <Textarea value={form.requirements} onChange={e => update('requirements', e.target.value)} rows={4} placeholder="List the required skills and qualifications..." />
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 flex gap-3">
          <Button type="submit" className="font-semibold">Publish Job</Button>
          <Button type="button" variant="outline">Save as Draft</Button>
        </div>
      </form>
    </div>
  );
};

export default EmployerCreateJob;
