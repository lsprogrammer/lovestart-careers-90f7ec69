import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Briefcase, Plus, Trash2 } from 'lucide-react';

const mockExperience = [
  { id: 1, role: 'Frontend Engineer', company: 'Logicspice', from: 'March 2021', to: 'January 2024', industry: 'Information Technology', area: 'Web Development' },
  { id: 2, role: 'Senior Developer', company: 'Google', from: 'January 2024', to: 'December 2024', industry: 'Information & Technology', area: 'Web Development' },
];

const JobseekerExperience = () => {
  const [experience] = useState(mockExperience);
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="space-y-6 max-w-3xl">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
          <Briefcase className="h-6 w-6" /> Experience
        </h1>
        <Button onClick={() => setShowForm(!showForm)} className="gap-1">
          <Plus className="h-4 w-4" /> Add Experience
        </Button>
      </div>

      {showForm && (
        <Card>
          <CardHeader><CardTitle>Add Experience</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2"><Label>Job Title</Label><Input placeholder="e.g. Software Engineer" /></div>
              <div className="space-y-2"><Label>Company</Label><Input placeholder="Company name" /></div>
              <div className="space-y-2"><Label>From</Label><Input type="month" /></div>
              <div className="space-y-2"><Label>To</Label><Input type="month" /></div>
              <div className="space-y-2"><Label>Industry</Label><Input placeholder="e.g. Information Technology" /></div>
              <div className="space-y-2"><Label>Functional Area</Label><Input placeholder="e.g. Web Development" /></div>
            </div>
            <div className="flex gap-2">
              <Button className="bg-primary hover:bg-primary/90">Save</Button>
              <Button variant="outline" onClick={() => setShowForm(false)}>Cancel</Button>
            </div>
          </CardContent>
        </Card>
      )}

      {experience.map((exp) => (
        <Card key={exp.id}>
          <CardContent className="pt-6 flex items-start justify-between">
            <div className="space-y-1">
              <p className="font-semibold text-foreground">{exp.role} at {exp.company}</p>
              <p className="text-sm text-muted-foreground">{exp.from} - {exp.to}</p>
              <p className="text-sm text-muted-foreground">Industry: {exp.industry}</p>
              <p className="text-sm text-muted-foreground">Functional Area: {exp.area}</p>
            </div>
            <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive">
              <Trash2 className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default JobseekerExperience;
