import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Lock } from 'lucide-react';

const JobseekerChangePassword = () => {
  return (
    <div className="space-y-6 max-w-lg">
      <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
        <Lock className="h-6 w-6" /> Change Password
      </h1>

      <Card>
        <CardHeader><CardTitle>Update Password</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2"><Label>Current Password</Label><Input type="password" placeholder="Enter current password" /></div>
          <div className="space-y-2"><Label>New Password</Label><Input type="password" placeholder="Enter new password" /></div>
          <div className="space-y-2"><Label>Confirm New Password</Label><Input type="password" placeholder="Confirm new password" /></div>
          <Button className="bg-primary hover:bg-primary/90">Update Password</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default JobseekerChangePassword;
