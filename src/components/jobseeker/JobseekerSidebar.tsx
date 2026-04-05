import {
  User,
  UserCog,
  GraduationCap,
  Briefcase,
  Award,
  Video,
  FileText,
  FilePlus,
  CreditCard,
  Bell,
  Heart,
  ClipboardList,
  Search,
  Mail,
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

const profileLinks = [
  { title: 'My Profile', url: '/jobseeker/dashboard/profile', icon: User },
  { title: 'Edit Profile', url: '/jobseeker/dashboard/edit-profile', icon: UserCog },
  { title: 'Education', url: '/jobseeker/dashboard/education', icon: GraduationCap },
  { title: 'Experience', url: '/jobseeker/dashboard/experience', icon: Briefcase },
  { title: 'Professional Registration', url: '/jobseeker/dashboard/professional-registration', icon: Award },
  { title: 'Upload a Video CV', url: '/jobseeker/dashboard/upload-video-cv', icon: Video },
  { title: 'Make A CV', url: '/jobseeker/dashboard/make-cv', icon: FileText },
  { title: 'Add CV Documents', url: '/jobseeker/dashboard/cv-documents', icon: FilePlus },
];

const quickLinks = [
  { title: 'Payment History', url: '/jobseeker/dashboard/payment-history', icon: CreditCard },
  { title: 'Manage Alerts', url: '/jobseeker/dashboard/manage-alerts', icon: Bell },
  { title: 'Saved Jobs', url: '/jobseeker/dashboard/saved-jobs', icon: Heart },
  { title: 'Applied Jobs', url: '/jobseeker/dashboard/applied-jobs', icon: ClipboardList },
  { title: 'Search Jobs', url: '/jobseeker/dashboard/search-jobs', icon: Search },
];

const settingLinks = [
  { title: 'Mail History', url: '/jobseeker/dashboard/mail-history', icon: Mail },
  { title: 'Change Password', url: '/jobseeker/dashboard/change-password', icon: Lock },
  { title: 'Change Photo', url: '/jobseeker/dashboard/change-photo', icon: Image },
];

export function JobseekerSidebar() {
  const { state } = useSidebar();
  const collapsed = state === 'collapsed';
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  return (
    <Sidebar collapsible="icon" className="border-r border-border">
      <SidebarContent className="pt-4">
        {!collapsed && (
          <div className="px-4 pb-4 mb-2 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                G
              </div>
              <div>
                <p className="font-semibold text-sm text-foreground">Gib bon</p>
                <p className="text-xs text-muted-foreground">Jobseeker</p>
              </div>
            </div>
          </div>
        )}

        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            My Profile
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {profileLinks.map((item) => (
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
            Setting
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {settingLinks.map((item) => (
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
