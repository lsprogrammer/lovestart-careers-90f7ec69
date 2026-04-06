import { Building2, Briefcase, Users, Wrench } from 'lucide-react';
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
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const statsCards = [
  {
    title: 'Employers',
    value: 26,
    icon: Building2,
    tone: 'bg-primary/10 text-primary',
  },
  {
    title: 'Jobseeker',
    value: 368,
    icon: Users,
    tone: 'bg-secondary text-foreground',
  },
  {
    title: 'Jobs',
    value: 30,
    icon: Briefcase,
    tone: 'bg-accent/10 text-accent',
  },
  {
    title: 'Skills',
    value: 79,
    icon: Wrench,
    tone: 'bg-muted text-muted-foreground',
  },
];

const employerChartData = [
  { month: 'Aug', count: 0 },
  { month: 'Sep', count: 0 },
  { month: 'Oct', count: 0 },
  { month: 'Nov', count: 5 },
  { month: 'Dec', count: 0 },
  { month: 'Jan', count: 0 },
  { month: 'Feb', count: 0 },
  { month: 'Mar', count: 6 },
];

const jobseekerChartData = [
  { month: 'Aug', count: 0 },
  { month: 'Sep', count: 0 },
  { month: 'Oct', count: 1 },
  { month: 'Nov', count: 12 },
  { month: 'Dec', count: 0 },
  { month: 'Jan', count: 0 },
  { month: 'Feb', count: 4 },
  { month: 'Mar', count: 9 },
];

const employerRows = [
  {
    company: 'ls',
    name: 'Rohan Pednekar',
    position: '',
    email: 'rohan.shekhar@logicspice.com',
    plan: 'Silver (1 Job Posting) Monthly',
    created: 'Apr 01, 2026',
  },
  {
    company: 'Tree service and landscaping',
    name: 'Abel Gomez',
    position: '',
    email: 'katocha1988@gmail.com',
    plan: '',
    created: 'Mar 18, 2026',
  },
  {
    company: 'Juliet',
    name: 'Juliet Boadu',
    position: '',
    email: 'nyarkojulietabena@gmail.com',
    plan: '',
    created: 'Mar 15, 2026',
  },
  {
    company: 'Chichi',
    name: 'Chioma Jacintha',
    position: '',
    email: 'jacinthachioma2@gmail.com',
    plan: '',
    created: 'Mar 15, 2026',
  },
];

const jobseekerRows = [
  {
    name: 'Walt Ond',
    email: 'williamgrey@gmail.com',
    phone: '',
    location: '',
    created: 'Apr 05, 2026',
  },
  {
    name: 'sandeep kumar',
    email: 'ibbons3@gmail.com',
    phone: '7075836440',
    location: 'Hyderabad,',
    created: 'Apr 01, 2026',
  },
  {
    name: 'praveen kumar',
    email: 'ghodkekarsandeep@gmail.com',
    phone: '',
    location: '',
    created: 'Apr 01, 2026',
  },
  {
    name: 'Anil Moud',
    email: 'anil.moud@gmail.com',
    phone: '',
    location: '',
    created: 'Mar 23, 2026',
  },
  {
    name: 'Egor Zabudschii',
    email: 'egor.zabudschii543@gmail.com',
    phone: '',
    location: '',
    created: 'Mar 15, 2026',
  },
];

const chartCardClass = 'rounded-2xl border-border shadow-sm';
const tableCardClass = 'rounded-2xl border-border shadow-sm';

const AdminHome = () => {
  return (
    <div className="space-y-7">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-sm text-muted-foreground">Here is the information about all the records</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {statsCards.map((stat) => (
          <Card key={stat.title} className="rounded-2xl border-border shadow-sm">
            <CardContent className="flex items-center justify-between p-5">
              <div>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
              </div>
              <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${stat.tone}`}>
                <stat.icon className="h-6 w-6" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <Card className={chartCardClass}>
          <CardHeader>
            <CardTitle className="text-lg">Employer</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={290}>
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

        <Card className={chartCardClass}>
          <CardHeader>
            <CardTitle className="text-lg">Jobseeker</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={290}>
              <LineChart data={jobseekerChartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" fontSize={12} stroke="hsl(var(--muted-foreground))" />
                <YAxis fontSize={12} stroke="hsl(var(--muted-foreground))" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="count" stroke="hsl(var(--primary))" name="Jobseeker" strokeWidth={2} dot={{ r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card className={tableCardClass}>
        <CardHeader className="flex flex-row items-center justify-between gap-3">
          <CardTitle className="text-lg">Employer List</CardTitle>
          <Button size="sm">View All</Button>
        </CardHeader>
        <CardContent className="overflow-x-auto">
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
              {employerRows.map((row) => (
                <TableRow key={`${row.company}-${row.email}`}>
                  <TableCell className="font-medium">{row.company || '—'}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.position || '—'}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.plan || '—'}</TableCell>
                  <TableCell>{row.created}</TableCell>
                  <TableCell>⋯</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card className={tableCardClass}>
        <CardHeader className="flex flex-row items-center justify-between gap-3">
          <CardTitle className="text-lg">Jobseeker List</CardTitle>
          <Button size="sm">View All</Button>
        </CardHeader>
        <CardContent className="overflow-x-auto">
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
              {jobseekerRows.map((row) => (
                <TableRow key={`${row.name}-${row.email}`}>
                  <TableCell className="font-medium">{row.name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.phone || '—'}</TableCell>
                  <TableCell>{row.location || '—'}</TableCell>
                  <TableCell>{row.created}</TableCell>
                  <TableCell>⋯</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminHome;

