import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Mail, MapPin, Trash2 } from 'lucide-react';

const mockCandidates = [
  { id: 1, name: 'John Smith', position: 'Full Stack Developer', location: 'Mumbai, India', email: 'john@example.com', experience: '5 years' },
  { id: 2, name: 'Priya Sharma', position: 'UI/UX Designer', location: 'Delhi, India', email: 'priya@example.com', experience: '3 years' },
  { id: 3, name: 'Alex Johnson', position: 'DevOps Engineer', location: 'Bangalore, India', email: 'alex@example.com', experience: '7 years' },
  { id: 4, name: 'Sarah Lee', position: 'Marketing Specialist', location: 'Pune, India', email: 'sarah@example.com', experience: '4 years' },
];

const EmployerFavourites = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
        <Heart className="h-6 w-6 text-primary" /> Favourite List
      </h1>
      <p className="text-sm text-muted-foreground mt-1">Candidates you've saved for later</p>
    </div>

    <div className="grid gap-4 md:grid-cols-2">
      {mockCandidates.map(c => (
        <Card key={c.id}>
          <CardContent className="pt-5 pb-4">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  {c.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{c.name}</p>
                  <p className="text-sm text-muted-foreground">{c.position}</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive"><Trash2 className="h-4 w-4" /></Button>
            </div>
            <div className="mt-3 flex flex-wrap gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{c.location}</span>
              <span className="flex items-center gap-1"><Mail className="h-3 w-3" />{c.email}</span>
              <span>{c.experience} exp</span>
            </div>
            <div className="mt-3 flex gap-2">
              <Button size="sm" variant="outline" className="text-xs">View Profile</Button>
              <Button size="sm" className="text-xs">Contact</Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export default EmployerFavourites;
