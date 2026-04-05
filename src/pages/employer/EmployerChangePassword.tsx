import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Lock } from 'lucide-react';

const EmployerChangePassword = () => {
  const [form, setForm] = useState({ current: '', newPass: '', confirm: '' });
  const update = (key: string, value: string) => setForm(prev => ({ ...prev, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Password changed');
  };

  return (
    <div className="space-y-6 max-w-lg">
      <div>
        <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
          <Lock className="h-6 w-6 text-primary" /> Change Password
        </h1>
        <p className="text-sm text-muted-foreground mt-1">Update your account password</p>
      </div>

      <form onSubmit={handleSubmit}>
        <Card>
          <CardContent className="pt-6 space-y-4">
            <div className="space-y-1.5">
              <label className="text-sm font-medium">Current Password</label>
              <Input type="password" value={form.current} onChange={e => update('current', e.target.value)} required />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium">New Password</label>
              <Input type="password" value={form.newPass} onChange={e => update('newPass', e.target.value)} required />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium">Confirm New Password</label>
              <Input type="password" value={form.confirm} onChange={e => update('confirm', e.target.value)} required />
            </div>
            <Button type="submit" className="w-full font-semibold mt-2">Update Password</Button>
          </CardContent>
        </Card>
      </form>
    </div>
  );
};

export default EmployerChangePassword;
