import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { User, Mail, Phone, MapPin, Building2, Crown } from 'lucide-react';

const EmployerProfile = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
          <User className="h-6 w-6 text-primary" /> My Profile
        </h1>
        <p className="text-sm text-muted-foreground mt-1">View and manage your employer profile</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Profile Card */}
        <Card>
          <CardHeader className="flex-row items-center justify-between pb-2">
            <CardTitle className="text-base">Your Profile</CardTitle>
            <span className="text-xs text-muted-foreground">Joined: March 1, 2024</span>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-2xl">
                W
              </div>
              <div>
                <p className="font-semibold text-foreground text-lg">Walt Ond</p>
                <p className="text-sm text-muted-foreground">Contact: 1236547895</p>
              </div>
            </div>
            <Button variant="outline" size="sm">Edit</Button>
          </CardContent>
        </Card>

        {/* Address */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" /> Address
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Badge variant="secondary" className="bg-primary/10 text-primary">Primary</Badge>
            <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm">
              <span className="text-muted-foreground">Address:</span>
              <span className="text-foreground">Cannaught Palace</span>
              <span className="text-muted-foreground">Location:</span>
              <span className="text-foreground">Mumbai, Maharashtra, India</span>
            </div>
            <Button variant="outline" size="sm">Change Address</Button>
          </CardContent>
        </Card>

        {/* Email */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" /> Email Address
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Badge variant="secondary" className="bg-primary/10 text-primary">Primary</Badge>
            <p className="text-sm text-foreground">Waltond2@gmail.com</p>
            <Button variant="outline" size="sm">Change Email</Button>
          </CardContent>
        </Card>

        {/* Other Details */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <Building2 className="h-4 w-4 text-primary" /> Other Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm">
              <span className="text-muted-foreground">Position:</span>
              <span className="text-foreground">Developer</span>
              <span className="text-muted-foreground">Company:</span>
              <span className="text-foreground">Microsoft</span>
              <span className="text-muted-foreground">About Company:</span>
              <span className="text-foreground">Best Development Company</span>
              <span className="text-muted-foreground">URL:</span>
              <span className="text-foreground">—</span>
            </div>
            <Button variant="outline" size="sm">Change Details</Button>
          </CardContent>
        </Card>

        {/* Phone */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" /> Phone Number
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Badge variant="secondary" className="bg-primary/10 text-primary">Primary</Badge>
            <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm">
              <span className="text-muted-foreground">Contact Number:</span>
              <span className="text-foreground">1236547895</span>
              <span className="text-muted-foreground">Company Contact:</span>
              <span className="text-foreground">1236547952</span>
            </div>
            <Button variant="outline" size="sm">Change Contact Number</Button>
          </CardContent>
        </Card>

        {/* Plan Details */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <Crown className="h-4 w-4 text-primary" /> Available Plan Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <p className="text-sm"><span className="text-muted-foreground">Plan Name:</span> <span className="font-medium text-foreground">Advanced</span></p>
              <Button variant="outline" size="sm">Change Plan</Button>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-foreground">Available Features</p>
              <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm">
                <span className="text-muted-foreground">No. of Job Post:</span>
                <span className="text-foreground">Unlimited</span>
                <span className="text-muted-foreground">Resume Download:</span>
                <span className="text-foreground">Unlimited</span>
                <span className="text-muted-foreground">Candidate View:</span>
                <span className="text-foreground">Unlimited</span>
                <span className="text-muted-foreground">Candidate Search:</span>
                <span className="text-foreground">Yes</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EmployerProfile;
