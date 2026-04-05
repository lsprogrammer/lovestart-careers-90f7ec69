import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Award } from 'lucide-react';

const JobseekerProfessionalReg = () => {
  return (
    <div className="space-y-6 max-w-3xl">
      <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
        <Award className="h-6 w-6" /> Professional Registration
      </h1>

      <Card>
        <CardHeader><CardTitle>Registration Details</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2"><Label>Registration Number</Label><Input placeholder="Enter registration number" /></div>
            <div className="space-y-2"><Label>Registration Body</Label><Input placeholder="e.g. Engineering Council" /></div>
            <div className="space-y-2"><Label>Registration Date</Label><Input type="date" /></div>
            <div className="space-y-2"><Label>Expiry Date</Label><Input type="date" /></div>
          </div>
          <Button className="bg-primary hover:bg-primary/90">Save Registration</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default JobseekerProfessionalReg;
