import {
  Award,
  Building2,
  FolderTree,
  LayoutDashboard,
  MessageSquareWarning,
  Settings,
  Tag,
  Users,
  Wrench,
  type LucideIcon,
} from 'lucide-react';

export type AdminMenuChild = {
  title: string;
  url: string;
  path: string;
};

export type AdminMenuItem = {
  title: string;
  icon: LucideIcon;
  url?: string;
  path?: string;
  children?: AdminMenuChild[];
};

export const adminMenuItems: AdminMenuItem[] = [
  {
    title: 'Dashboard',
    icon: LayoutDashboard,
    url: '/admin/dashboard',
    path: '',
  },
  {
    title: 'Configurations',
    icon: Wrench,
    children: [
      {
        title: 'Change Username',
        url: '/admin/dashboard/configurations/change-username',
        path: 'configurations/change-username',
      },
      {
        title: 'Change Password',
        url: '/admin/dashboard/configurations/change-password',
        path: 'configurations/change-password',
      },
      {
        title: 'Change Email',
        url: '/admin/dashboard/configurations/change-email',
        path: 'configurations/change-email',
      },
      {
        title: 'Security Questions',
        url: '/admin/dashboard/configurations/security-questions',
        path: 'configurations/security-questions',
      },
      {
        title: 'Manage Plans',
        url: '/admin/dashboard/configurations/manage-plans',
        path: 'configurations/manage-plans',
      },
      {
        title: 'Set Contact Us Address',
        url: '/admin/dashboard/configurations/contact-address',
        path: 'configurations/contact-address',
      },
      {
        title: 'Slogan Text',
        url: '/admin/dashboard/configurations/slogan-text',
        path: 'configurations/slogan-text',
      },
      {
        title: 'Change Logo',
        url: '/admin/dashboard/configurations/change-logo',
        path: 'configurations/change-logo',
      },
    ],
  },
  {
    title: 'Settings',
    icon: Settings,
    children: [
      {
        title: 'Site Settings',
        url: '/admin/dashboard/settings/site',
        path: 'settings/site',
      },
      {
        title: 'Payment Settings',
        url: '/admin/dashboard/settings/payment',
        path: 'settings/payment',
      },
    ],
  },
  {
    title: 'Employers',
    icon: Building2,
    children: [
      {
        title: 'All Employers',
        url: '/admin/dashboard/employers',
        path: 'employers',
      },
      {
        title: 'Pending Approval',
        url: '/admin/dashboard/employers/pending',
        path: 'employers/pending',
      },
    ],
  },
  {
    title: 'Jobseekers',
    icon: Users,
    children: [
      {
        title: 'All Jobseekers',
        url: '/admin/dashboard/jobseekers',
        path: 'jobseekers',
      },
      {
        title: 'Pending Approval',
        url: '/admin/dashboard/jobseekers/pending',
        path: 'jobseekers/pending',
      },
    ],
  },
  {
    title: 'Categories',
    icon: FolderTree,
    children: [
      {
        title: 'Job Categories',
        url: '/admin/dashboard/categories',
        path: 'categories',
      },
      {
        title: 'Sub Categories',
        url: '/admin/dashboard/categories/sub',
        path: 'categories/sub',
      },
    ],
  },
  {
    title: 'Swear Words',
    icon: MessageSquareWarning,
    url: '/admin/dashboard/swear-words',
    path: 'swear-words',
  },
  {
    title: 'Skills',
    icon: Award,
    url: '/admin/dashboard/skills',
    path: 'skills',
  },
  {
    title: 'Designations',
    icon: Tag,
    url: '/admin/dashboard/designations',
    path: 'designations',
  },
];

export const adminSectionRoutes = adminMenuItems.flatMap((item) => {
  if (item.children) {
    return item.children.map((child) => child.path);
  }

  return item.path && item.path.length > 0 ? [item.path] : [];
});

export const getAdminMenuEntry = (pathname: string) => {
  for (const item of adminMenuItems) {
    if (item.url === pathname) {
      return { item, child: null };
    }

    const child = item.children?.find((entry) => entry.url === pathname);
    if (child) {
      return { item, child };
    }
  }

  return null;
};
