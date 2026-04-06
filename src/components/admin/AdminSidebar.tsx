import {
  LayoutDashboard,
  Settings,
  Wrench,
  Building2,
  Users,
  FolderTree,
  MessageSquareWarning,
  Award,
  Tag,
  ChevronDown,
} from 'lucide-react';
import { NavLink } from '@/components/NavLink';
import { useLocation } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  useSidebar,
} from '@/components/ui/sidebar';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

const menuItems = [
  { title: 'Dashboard', url: '/admin/dashboard', icon: LayoutDashboard },
  {
    title: 'Configurations',
    icon: Wrench,
    children: [
      { title: 'General Settings', url: '/admin/dashboard/configurations/general' },
      { title: 'Email Settings', url: '/admin/dashboard/configurations/email' },
    ],
  },
  {
    title: 'Settings',
    icon: Settings,
    children: [
      { title: 'Site Settings', url: '/admin/dashboard/settings/site' },
      { title: 'Payment Settings', url: '/admin/dashboard/settings/payment' },
    ],
  },
  {
    title: 'Employers',
    icon: Building2,
    children: [
      { title: 'All Employers', url: '/admin/dashboard/employers' },
      { title: 'Pending Approval', url: '/admin/dashboard/employers/pending' },
    ],
  },
  {
    title: 'Jobseekers',
    icon: Users,
    children: [
      { title: 'All Jobseekers', url: '/admin/dashboard/jobseekers' },
      { title: 'Pending Approval', url: '/admin/dashboard/jobseekers/pending' },
    ],
  },
  {
    title: 'Categories',
    icon: FolderTree,
    children: [
      { title: 'Job Categories', url: '/admin/dashboard/categories' },
      { title: 'Sub Categories', url: '/admin/dashboard/categories/sub' },
    ],
  },
  { title: 'Swear Words', url: '/admin/dashboard/swear-words', icon: MessageSquareWarning },
  {
    title: 'Skills',
    icon: Award,
    children: [
      { title: 'Manage Skills', url: '/admin/dashboard/skills' },
    ],
  },
  {
    title: 'Designations',
    icon: Tag,
    children: [
      { title: 'Manage Designations', url: '/admin/dashboard/designations' },
    ],
  },
];

export function AdminSidebar() {
  const { state } = useSidebar();
  const collapsed = state === 'collapsed';
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;
  const hasActiveChild = (children?: { url: string }[]) =>
    children?.some((c) => isActive(c.url)) ?? false;

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <SidebarContent className="bg-[hsl(225,30%,22%)] text-white pt-2">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) =>
                item.children ? (
                  <Collapsible
                    key={item.title}
                    defaultOpen={hasActiveChild(item.children)}
                    className="group/collapsible"
                  >
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton className="text-white/80 hover:bg-white/10 hover:text-white">
                          <item.icon className="h-4 w-4" />
                          {!collapsed && (
                            <>
                              <span className="flex-1">{item.title}</span>
                              <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                            </>
                          )}
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.children.map((child) => (
                            <SidebarMenuSubItem key={child.title}>
                              <SidebarMenuSubButton asChild>
                                <NavLink
                                  to={child.url}
                                  end
                                  className="text-white/60 hover:text-white hover:bg-white/10"
                                  activeClassName="text-white bg-white/15 font-medium"
                                >
                                  <span>{child.title}</span>
                                </NavLink>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                ) : (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink
                        to={item.url!}
                        end
                        className="text-white/80 hover:bg-white/10 hover:text-white"
                        activeClassName="bg-white/15 text-white font-medium"
                      >
                        <item.icon className="h-4 w-4" />
                        {!collapsed && <span>{item.title}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
