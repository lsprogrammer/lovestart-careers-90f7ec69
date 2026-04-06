import { Building2, Users, Briefcase, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

const statsCards = [
  { title: 'Employers', value: 26, icon: Building2, color: 'text-orange-500', bg: 'bg-orange-50' },
  { title: 'Jobseeker', value: 368, icon: Users, color: 'text-primary', bg: 'bg-primary/10' },
  { title: 'Jobs', value: 30, icon: Briefcase, color: 'text-blue-500', bg: 'bg-blue-50' },
  { title: 'Skills', value: 79, icon: Award, color: 'text-purple-500', bg: 'bg-purple-50' },
];

const employerChartData = [
  { month: 'Aug', count: 0 },
  { month: 'Sep', count: 0 },
  { month: 'Oct', count: 2 },
  { month: 'Nov', count: 5 },
  { month: 'Dec', count: 1 },
  { month: 'Jan', count: 0 },
  { month: 'Feb', count: 0 },
  { month: 'Mar', count: 3 },
];

const jobseekerChartData = [
  { month: 'Aug', count: 0 },
  { month: 'Sep', count: 0 },
  { month: 'Oct', count: 2 },
  { month: 'Nov', count: 35 },
  { month: 'Dec', count: 8 },
  { month: 'Jan', count: 12 },
  { month: 'Feb', count: 5 },
];

const employers = [
  { company: 'ls', name: 'Rohan Pednekar', position: '', email: 'rohan.shekhar@logicspice.com', plan: 'Silver (1 Job Posting) Monthly', created: 'Apr 01, 2026' },
  { company: 'Tree service and landscaping', name: 'Abel Gomez', position: '', email: 'Katocha1988@gmail.com', plan: '', created: 'Mar 18, 2026' },
  { company: 'Juliet', name: 'Juliet Boadu', position: '', email: 'Nyarkojulietabena@gmail.com', plan: '', created: 'Mar 15, 2026' },
  { company: '', name: 'Chioma Jacintha', position: '', email: 'jacinthachioma2@gmail.com', plan: '', created: 'Mar 15, 2026' },
  { company: 'Chichi', name: 'Chioma Jacintha', position: '', email: 'Jacinthachioma2@gmail.com', plan: '', created: 'Mar 15, 2026' },
];

const jobseekers = [
  { name: 'Walt Ond', email: 'williamgrey@gmail.com', phone: '', location: '', created: 'Apr 05, 2026' },
  { name: 'sandeep kumar', email: 'ibbons3@gmail.com', phone: '7075836440', location: 'Hyderabad,', created: 'Apr 01, 2026' },
  { name: 'praveen kumar', email: 'ghodkekarsandeep@gmail.com', phone: '', location: '', created: 'Apr 01, 2026' },
  { name: 'Anil Moud', email: 'anil.moud@gmail.com', phone: '', location: '', created: 'Mar 23, 2026' },
  { name: 'Egor Zabudschii', email: 'egor.zabudschii543@gmail.com', phone: '', location: '', created: 'Mar 15, 2026' },
];

const AdminHome = () => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-primary">Dashboard</h1>
        <p className="text-muted-foreground text-sm">Here is the information about all the records</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsCards.map((stat) => (
          <Card key={stat.title} className="border shadow-sm">
            <CardContent className="flex items-center justify-between p-5">
              <div>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
              </div>
              <div className={`h-12 w-12 rounded-full ${stat.bg} flex items-center justify-center`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Employer</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={employerChartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" fontSize={12} stroke="hsl(var(--muted-foreground))" />
                <YAxis fontSize={12} stroke="hsl(var(--muted-foreground))" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="count" stroke="hsl(var(--primary))" name="Employer" strokeWidth={2} dot={{ r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Jobseeker</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={jobseekerChartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" fontSize={12} stroke="hsl(var(--muted-foreground))" />
                <YAxis fontSize={12} stroke="hsl(var(--muted-foreground))" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="count" stroke="hsl(217, 91%, 50%)" name="Jobseeker" strokeWidth={2} dot={{ r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Employer List */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg">Employer List</CardTitle>
          <Button size="sm" className="bg-primary hover:bg-primary/90">View All</Button>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Company Name</TableHead>
                  <TableHead>Full Name</TableHead>
                  <TableHead>Position</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Current Plan</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {employers.map((emp, idx) => (
                  <TableRow key={idx}>
                    <TableCell className="font-medium">{emp.company}</TableCell>
                    <TableCell>{emp.name}</TableCell>
                    <TableCell>{emp.position || '—'}</TableCell>
                    <TableCell className="text-sm">{emp.email}</TableCell>
                    <TableCell className="text-sm">{emp.plan || '—'}</TableCell>
                    <TableCell className="text-sm whitespace-nowrap">{emp.created}</TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        <Button size="icon" variant="outline" className="h-7 w-7 border-primary text-primary hover:bg-primary/10">✓</Button>
                        <Button size="icon" variant="outline" className="h-7 w-7 border-blue-500 text-blue-500 hover:bg-blue-50">✎</Button>
                        <Button size="icon" variant="outline" className="h-7 w-7 border-destructive text-destructive hover:bg-destructive/10">✕</Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Jobseeker List */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg">Jobseeker List</CardTitle>
          <Button size="sm" className="bg-primary hover:bg-primary/90">View All</Button>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Full Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {jobseekers.map((js, idx) => (
                  <TableRow key={idx}>
                    <TableCell className="font-medium">{js.name}</TableCell>
                    <TableCell className="text-sm">{js.email}</TableCell>
                    <TableCell className="text-sm">{js.phone || '—'}</TableCell>
                    <TableCell className="text-sm">{js.location || '—'}</TableCell>
                    <TableCell className="text-sm whitespace-nowrap">{js.created}</TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        <Button size="icon" variant="outline" className="h-7 w-7 border-primary text-primary hover:bg-primary/10">✓</Button>
                        <Button size="icon" variant="outline" className="h-7 w-7 border-blue-500 text-blue-500 hover:bg-blue-50">✎</Button>
                        <Button size="icon" variant="outline" className="h-7 w-7 border-destructive text-destructive hover:bg-destructive/10">✕</Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminHome;
