import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, MapPin, Building2, Heart } from 'lucide-react';

const results = [
  { id: 1, title: 'Senior React Developer', company: 'TechCorp', location: 'Bangalore', type: 'Full Time', salary: '₹15-25 LPA', posted: '2 days ago' },
  { id: 2, title: 'Node.js Backend Developer', company: 'CloudInc', location: 'Remote', type: 'Full Time', salary: '₹12-20 LPA', posted: '3 days ago' },
  { id: 3, title: 'UI/UX Designer', company: 'DesignHub', location: 'Mumbai', type: 'Contract', salary: '₹8-14 LPA', posted: '1 day ago' },
];

const JobseekerSearchJobs = () => {
  return (
    <div className="space-y-6 max-w-4xl">
      <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
        <Search className="h-6 w-6" /> Search Jobs
      </h1>

      <Card>
        <CardContent className="pt-6">
          <div className="flex gap-3">
            <Input placeholder="Job title, skills, or company" className="flex-1" />
            <Input placeholder="Location" className="w-48" />
            <Button className="bg-primary hover:bg-primary/90 gap-1">
              <Search className="h-4 w-4" /> Search
            </Button>
          </div>
        </CardContent>
      </Card>

      {results.map((job) => (
        <Card key={job.id} className="hover:border-primary/30 transition-colors">
          <CardContent className="pt-6 flex items-start justify-between">
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground text-lg">{job.title}</h3>
              <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><Building2 className="h-3.5 w-3.5" /> {job.company}</span>
                <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {job.location}</span>
                <span>{job.posted}</span>
              </div>
              <div className="flex gap-2">
                <Badge variant="secondary">{job.type}</Badge>
                <Badge variant="outline">{job.salary}</Badge>
              </div>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="ghost"><Heart className="h-4 w-4" /></Button>
              <Button size="sm" className="bg-primary hover:bg-primary/90">Apply</Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default JobseekerSearchJobs;
