
# Employer Dashboard — Full Build Plan

## Overview
Redesign the employer dashboard with a modern sidebar layout and all sub-pages, using static mock data. Follows the JS Jobber green theme.

## Layout
- **SidebarProvider** wrapping a collapsible sidebar + main content area
- Header inside dashboard with SidebarTrigger + user info
- No global Header/Footer inside dashboard (standalone layout)

## Sidebar Navigation (from screenshot)
### Quick Links
1. **Create New Job** — Form page to post a new job
2. **Manage Jobs** — Table listing posted jobs with status
3. **Payment History** — Table of past payments
4. **Favourite List** — Saved/bookmarked candidates
5. **Import Jobseekers** — Upload/import page

### My Dashboard
6. **My Profile** — Profile overview (as shown in screenshot: profile card, email, phone, address, other details, plan details)
7. **Edit Profile** — Form to edit profile details
8. **Change Password** — Password change form
9. **Change Logo** — Logo upload form
10. **Mail History** — Email/notification history table

### Account
11. **Logout** — Action (redirect to home)
12. **Delete Account** — Confirmation dialog

## Pages to Create
- `src/pages/employer/EmployerDashboard.tsx` — Layout wrapper with sidebar
- `src/components/employer/EmployerSidebar.tsx` — Sidebar component
- `src/pages/employer/EmployerProfile.tsx` — My Profile page
- `src/pages/employer/EmployerEditProfile.tsx` — Edit Profile form
- `src/pages/employer/EmployerManageJobs.tsx` — Jobs table
- `src/pages/employer/EmployerCreateJob.tsx` — Post job form
- `src/pages/employer/EmployerPaymentHistory.tsx` — Payment table
- `src/pages/employer/EmployerFavourites.tsx` — Favourites list
- `src/pages/employer/EmployerImportJobseekers.tsx` — Import page
- `src/pages/employer/EmployerChangePassword.tsx` — Password form
- `src/pages/employer/EmployerChangeLogo.tsx` — Logo upload
- `src/pages/employer/EmployerMailHistory.tsx` — Mail history table

## Routes
All under `/employer/dashboard/*` using nested routing.

## Design
- Clean, modern cards with proper spacing
- Green primary accents consistent with brand
- Responsive — sidebar collapses on mobile
- shadcn/ui components (Table, Card, Button, Input, etc.)
