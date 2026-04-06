import { Outlet } from 'react-router-dom';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';

const AdminDashboard = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen w-full bg-muted/30">
        <div className="flex min-h-screen w-full flex-col">
          <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-border bg-background px-4">
            <div className="flex items-center gap-3">
              <SidebarTrigger />
              <Link to="/" className="text-xl font-bold italic text-primary">
                JS Jobber
              </Link>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-primary">
                Admin <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </header>

          <div className="flex flex-1">
            <AdminSidebar />
            <main className="min-w-0 flex-1 bg-muted/30 p-4 md:p-6 lg:p-7">
              <Outlet />
            </main>
          </div>
        </div>
        <Footer />
      </div>
    </SidebarProvider>
  );
};

export default AdminDashboard;

