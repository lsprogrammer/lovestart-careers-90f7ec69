import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { GraduationCap, Plus, Trash2 } from 'lucide-react';

const mockEducation = [
  { id: 1, degree: 'B.Tech - Bachelor of Technology', year: '2022', institution: 'Amity University' },
  { id: 2, degree: 'Post Graduation', year: '2024', institution: 'Amity University' },
];

const JobseekerEducation = () => {
  const [education, setEducation] = useState(mockEducation);
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="space-y-6 max-w-3xl">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
          <GraduationCap className="h-6 w-6" /> Education
        </h1>
        <Button onClick={() => setShowForm(!showForm)} className="gap-1">
          <Plus className="h-4 w-4" /> Add Education
        </Button>
      </div>

      {showForm && (
        <Card>
          <CardHeader><CardTitle>Add Education</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Degree Level</Label>
                <Select>
                  <SelectTrigger><SelectValue placeholder="Select level" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bachelors">Bachelor's</SelectItem>
                    <SelectItem value="masters">Master's</SelectItem>
                    <SelectItem value="phd">PhD</SelectItem>
                    <SelectItem value="diploma">Diploma</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Degree Title</Label>
                <Input placeholder="e.g. B.Tech Computer Science" />
              </div>
              <div className="space-y-2">
                <Label>Institution</Label>
                <Input placeholder="University name" />
              </div>
              <div className="space-y-2">
                <Label>Year of Completion</Label>
                <Input type="number" placeholder="2024" />
              </div>
            </div>
            <div className="flex gap-2">
              <Button className="bg-primary hover:bg-primary/90">Save</Button>
              <Button variant="outline" onClick={() => setShowForm(false)}>Cancel</Button>
            </div>
          </CardContent>
        </Card>
      )}

      {education.map((edu) => (
        <Card key={edu.id}>
          <CardContent className="pt-6 flex items-center justify-between">
            <div>
              <p className="font-semibold text-foreground">{edu.degree}</p>
              <p className="text-sm text-muted-foreground">{edu.institution} • {edu.year}</p>
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

export default JobseekerEducation;
