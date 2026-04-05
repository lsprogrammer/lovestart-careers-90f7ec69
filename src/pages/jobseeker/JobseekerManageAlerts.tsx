import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Bell, Plus, Trash2 } from 'lucide-react';

const mockAlerts = [
  { id: 1, keyword: 'React Developer', location: 'Jaipur', active: true },
  { id: 2, keyword: 'Frontend Engineer', location: 'Remote', active: true },
  { id: 3, keyword: 'Full Stack Developer', location: 'Delhi', active: false },
];

const JobseekerManageAlerts = () => {
  const [alerts, setAlerts] = useState(mockAlerts);
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="space-y-6 max-w-3xl">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
          <Bell className="h-6 w-6" /> Manage Alerts
        </h1>
        <Button onClick={() => setShowForm(!showForm)} className="gap-1">
          <Plus className="h-4 w-4" /> Create Alert
        </Button>
      </div>

      {showForm && (
        <Card>
          <CardHeader><CardTitle>New Job Alert</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2"><Label>Keyword</Label><Input placeholder="e.g. React Developer" /></div>
              <div className="space-y-2"><Label>Location</Label><Input placeholder="e.g. Remote" /></div>
            </div>
            <div className="flex gap-2">
              <Button className="bg-primary hover:bg-primary/90">Save Alert</Button>
              <Button variant="outline" onClick={() => setShowForm(false)}>Cancel</Button>
            </div>
          </CardContent>
        </Card>
      )}

      {alerts.map((alert) => (
        <Card key={alert.id}>
          <CardContent className="pt-6 flex items-center justify-between">
            <div>
              <p className="font-semibold text-foreground">{alert.keyword}</p>
              <p className="text-sm text-muted-foreground">{alert.location}</p>
            </div>
            <div className="flex items-center gap-3">
              <Switch checked={alert.active} />
              <Button variant="ghost" size="icon" className="text-destructive">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default JobseekerManageAlerts;
