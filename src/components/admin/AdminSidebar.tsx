import { ChevronDown, Circle } from 'lucide-react';
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
import { adminMenuItems } from '@/lib/admin-menu';

export function AdminSidebar() {
  const { state } = useSidebar();
  const collapsed = state === 'collapsed';
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;
  const hasActiveChild = (children?: { url: string }[]) =>
    children?.some((child) => currentPath.startsWith(child.url)) ?? false;

  return (
    <Sidebar collapsible="icon" layout="sticky" className="border-r border-sidebar-border bg-sidebar">
      <SidebarContent className="bg-[hsl(219,29%,23%)] text-sidebar-primary-foreground pt-3">
        <SidebarGroup className="px-2">
          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {adminMenuItems.map((item) =>
                item.children ? (
                  <Collapsible
                    key={item.title}
                    defaultOpen={hasActiveChild(item.children)}
                    className="group/collapsible"
                  >
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton className="h-11 rounded-none border-b border-white/10 px-3 text-sidebar-primary-foreground/90 hover:bg-white/10 hover:text-sidebar-primary-foreground data-[state=open]:bg-white/10">
                          <item.icon className="h-4 w-4" />
                          {!collapsed && (
                            <>
                              <span className="flex-1 text-[15px]">{item.title}</span>
                              <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                            </>
                          )}
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub className="ml-0 mr-0 mt-0 rounded-none border-l-0 bg-[hsl(211,24%,18%)] px-0 py-0">
                          {item.children.map((child) => (
                            <SidebarMenuSubItem key={child.title}>
                              <SidebarMenuSubButton asChild>
                                <NavLink
                                  to={child.url}
                                  end
                                  className="flex h-11 items-center gap-3 rounded-none border-b border-white/5 px-5 text-sm text-sidebar-primary-foreground/85 hover:bg-white/5 hover:text-sidebar-primary-foreground"
                                  activeClassName="bg-white/10 text-[hsl(var(--primary))] font-medium"
                                >
                                  <Circle className="h-3.5 w-3.5" />
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
                        className="h-11 rounded-none border-b border-white/10 px-3 text-sidebar-primary-foreground/90 hover:bg-white/10 hover:text-sidebar-primary-foreground"
                        activeClassName="bg-white/10 text-sidebar-primary-foreground font-medium"
                      >
                        <item.icon className="h-4 w-4" />
                        {!collapsed && <span className="text-[15px]">{item.title}</span>}
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

