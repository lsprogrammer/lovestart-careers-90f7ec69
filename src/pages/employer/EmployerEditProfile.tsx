import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { UserCog } from 'lucide-react';

const EmployerEditProfile = () => {
  const [form, setForm] = useState({
    name: 'Walt Ond',
    email: 'Waltond2@gmail.com',
    phone: '1236547895',
    companyPhone: '1236547952',
    position: 'Developer',
    company: 'Microsoft',
    aboutCompany: 'Best Development Company',
    website: '',
    address: 'Cannaught Palace',
    city: 'Mumbai',
    state: 'Maharashtra',
    country: 'India',
  });

  const update = (key: string, value: string) => setForm(prev => ({ ...prev, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Profile updated', form);
  };

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
          <UserCog className="h-6 w-6 text-primary" /> Edit Profile
        </h1>
        <p className="text-sm text-muted-foreground mt-1">Update your profile information</p>
      </div>

      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-sm font-medium">Full Name</label>
                <Input value={form.name} onChange={e => update('name', e.target.value)} />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium">Email</label>
                <Input type="email" value={form.email} onChange={e => update('email', e.target.value)} />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium">Phone</label>
                <Input value={form.phone} onChange={e => update('phone', e.target.value)} />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium">Company Phone</label>
                <Input value={form.companyPhone} onChange={e => update('companyPhone', e.target.value)} />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-base">Company Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-sm font-medium">Position</label>
                <Input value={form.position} onChange={e => update('position', e.target.value)} />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium">Company</label>
                <Input value={form.company} onChange={e => update('company', e.target.value)} />
              </div>
              <div className="space-y-1.5 sm:col-span-2">
                <label className="text-sm font-medium">About Company</label>
                <Textarea value={form.aboutCompany} onChange={e => update('aboutCompany', e.target.value)} rows={3} />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium">Website</label>
                <Input value={form.website} onChange={e => update('website', e.target.value)} placeholder="https://" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-base">Address</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5 sm:col-span-2">
                <label className="text-sm font-medium">Address</label>
                <Input value={form.address} onChange={e => update('address', e.target.value)} />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium">City</label>
                <Input value={form.city} onChange={e => update('city', e.target.value)} />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium">State</label>
                <Input value={form.state} onChange={e => update('state', e.target.value)} />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium">Country</label>
                <Input value={form.country} onChange={e => update('country', e.target.value)} />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 flex gap-3">
          <Button type="submit" className="font-semibold">Save Changes</Button>
          <Button type="button" variant="outline">Cancel</Button>
        </div>
      </form>
    </div>
  );
};

export default EmployerEditProfile;
