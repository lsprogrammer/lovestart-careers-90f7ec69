import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, MapPin, Building2, Trash2 } from 'lucide-react';

const savedJobs = [
  { id: 1, title: 'Senior React Developer', company: 'TechCorp', location: 'Bangalore', type: 'Full Time', salary: '₹15-25 LPA' },
  { id: 2, title: 'UI/UX Designer', company: 'DesignStudio', location: 'Remote', type: 'Contract', salary: '₹8-12 LPA' },
  { id: 3, title: 'Full Stack Engineer', company: 'StartupXYZ', location: 'Delhi', type: 'Full Time', salary: '₹12-18 LPA' },
];

const JobseekerSavedJobs = () => {
  return (
    <div className="space-y-6 max-w-4xl">
      <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
        <Heart className="h-6 w-6" /> Saved Jobs
      </h1>

      {savedJobs.map((job) => (
        <Card key={job.id}>
          <CardContent className="pt-6 flex items-start justify-between">
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground text-lg">{job.title}</h3>
              <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><Building2 className="h-3.5 w-3.5" /> {job.company}</span>
                <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {job.location}</span>
              </div>
              <div className="flex gap-2">
                <Badge variant="secondary">{job.type}</Badge>
                <Badge variant="outline">{job.salary}</Badge>
              </div>
            </div>
            <div className="flex gap-2">
              <Button size="sm" className="bg-primary hover:bg-primary/90">Apply Now</Button>
              <Button size="sm" variant="ghost" className="text-destructive"><Trash2 className="h-4 w-4" /></Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default JobseekerSavedJobs;
