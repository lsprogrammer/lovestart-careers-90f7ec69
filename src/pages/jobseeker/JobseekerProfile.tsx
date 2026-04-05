import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { User, GraduationCap, Briefcase, Star, FileText, Phone, Mail, MapPin, Edit } from 'lucide-react';

const JobseekerProfile = () => {
  return (
    <div className="space-y-6 max-w-4xl">
      <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
        <User className="h-6 w-6" /> My Profile
      </h1>

      {/* Profile Card */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg">
            <User className="h-5 w-5 text-primary" /> Profile
          </CardTitle>
          <Button variant="outline" size="sm" className="gap-1">
            <Edit className="h-3.5 w-3.5" /> Edit
          </Button>
        </CardHeader>
        <CardContent>
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-2xl">
              G
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-bold text-foreground">Gib bon</h2>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><Phone className="h-3.5 w-3.5" /> 3214569875</span>
                <span className="flex items-center gap-1"><Mail className="h-3.5 w-3.5" /> Gibbons3@gmail.com</span>
              </div>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <MapPin className="h-3.5 w-3.5" /> Jaipur
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Education */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg">
            <GraduationCap className="h-5 w-5 text-primary" /> Education
          </CardTitle>
          <Button variant="outline" size="sm" className="gap-1">
            <Edit className="h-3.5 w-3.5" /> Edit
          </Button>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
            <li>I have Passed B.Tech - Bachelor of Technology in 2022 from Amity University.</li>
            <li>I have Passed Post Graduation in 2024 from Amity University.</li>
          </ul>
        </CardContent>
      </Card>

      {/* Experience */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Briefcase className="h-5 w-5 text-primary" /> Experience
          </CardTitle>
          <Button variant="outline" size="sm" className="gap-1">
            <Edit className="h-3.5 w-3.5" /> Edit
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-1 text-sm text-muted-foreground">
            <p className="font-medium text-foreground">Frontend Engineer at Logicspice</p>
            <p>March 2021 - January 2024</p>
            <p>Industry: Information Technology</p>
            <p>Functional Area: Web Development</p>
          </div>
          <Separator />
          <div className="space-y-1 text-sm text-muted-foreground">
            <p className="font-medium text-foreground">Senior Developer at Google</p>
            <p>January 2024 - December 2024</p>
            <p>Industry: Information & Technology</p>
            <p>Functional Area: Web Development</p>
          </div>
        </CardContent>
      </Card>

      {/* Skills */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Star className="h-5 w-5 text-primary" /> Skills
          </CardTitle>
          <Button variant="outline" size="sm" className="gap-1">+ Add</Button>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {['EFIS/Glass Cockpit', 'Old Classic Gauges', 'Jet Management', 'Turbine'].map((skill) => (
              <Badge key={skill} variant="secondary" className="px-3 py-1">{skill}</Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* About Yourself */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg">
            <User className="h-5 w-5 text-primary" /> About Yourself
          </CardTitle>
          <Button variant="outline" size="sm" className="gap-1">
            <Edit className="h-3.5 w-3.5" /> Edit
          </Button>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            I am professional web developer and interested in this field.
          </p>
        </CardContent>
      </Card>

      {/* Current Plan */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <FileText className="h-5 w-5 text-primary" /> Current Jobseeker Plan
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-3">No Plan Available</p>
          <Button size="sm" className="bg-primary hover:bg-primary/90">Choose A Plan</Button>
        </CardContent>
      </Card>

      {/* CV Documents */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <FileText className="h-5 w-5 text-primary" /> CV Document/Certificate
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <div className="flex gap-4">
              <span className="font-medium text-foreground w-28">Certificates:</span>
              <span className="text-muted-foreground">Not Available</span>
            </div>
            <div className="flex gap-4">
              <span className="font-medium text-foreground w-28">Documents:</span>
              <span className="text-muted-foreground">Not Available</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <Button variant="destructive">Delete Account</Button>
        <Button variant="outline">Change Password</Button>
      </div>
    </div>
  );
};

export default JobseekerProfile;
