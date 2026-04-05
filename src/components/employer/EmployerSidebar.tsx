import {
  PlusCircle,
  Briefcase,
  CreditCard,
  Heart,
  Upload,
  Mail,
  User,
  UserCog,
  Lock,
  Image,
  LogOut,
  Trash2,
} from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { NavLink } from '@/components/NavLink';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';

const quickLinks = [
  { title: 'Create New Job', url: '/employer/dashboard/create-job', icon: PlusCircle },
  { title: 'Manage Jobs', url: '/employer/dashboard/manage-jobs', icon: Briefcase },
  { title: 'Payment History', url: '/employer/dashboard/payment-history', icon: CreditCard },
  { title: 'Favourite List', url: '/employer/dashboard/favourites', icon: Heart },
  { title: 'Import Jobseekers', url: '/employer/dashboard/import-jobseekers', icon: Upload },
];

const dashboardLinks = [
  { title: 'My Profile', url: '/employer/dashboard/profile', icon: User },
  { title: 'Edit Profile', url: '/employer/dashboard/edit-profile', icon: UserCog },
  { title: 'Change Password', url: '/employer/dashboard/change-password', icon: Lock },
  { title: 'Change Logo', url: '/employer/dashboard/change-logo', icon: Image },
  { title: 'Mail History', url: '/employer/dashboard/mail-history', icon: Mail },
];

export function EmployerSidebar() {
  const { state } = useSidebar();
  const collapsed = state === 'collapsed';
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  return (
    <Sidebar collapsible="icon" className="border-r border-border">
      <SidebarContent className="pt-4">
        {/* User info */}
        {!collapsed && (
          <div className="px-4 pb-4 mb-2 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                W
              </div>
              <div>
                <p className="font-semibold text-sm text-foreground">Walt Ond</p>
                <p className="text-xs text-muted-foreground">Employer</p>
              </div>
            </div>
          </div>
        )}

        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Quick Links
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {quickLinks.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end
                      className={`hover:bg-primary/5 transition-colors ${isActive(item.url) ? 'bg-primary/10 text-primary font-medium' : ''}`}
                      activeClassName="bg-primary/10 text-primary font-medium"
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            My Dashboard
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {dashboardLinks.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end
                      className={`hover:bg-primary/5 transition-colors ${isActive(item.url) ? 'bg-primary/10 text-primary font-medium' : ''}`}
                      activeClassName="bg-primary/10 text-primary font-medium"
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Account
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={() => navigate('/')}
                  className="hover:bg-primary/5 transition-colors cursor-pointer"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  {!collapsed && <span>Logout</span>}
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="hover:bg-destructive/10 text-destructive cursor-pointer">
                  <Trash2 className="mr-2 h-4 w-4" />
                  {!collapsed && <span>Delete Account</span>}
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
