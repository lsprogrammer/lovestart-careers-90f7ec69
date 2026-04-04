

## JS Jobber — Homepage Redesign

**Style:** Modern & Bold with white background, green primary accent, large readable fonts, scroll animations, and hover effects throughout.

**Color Palette:**
- Primary: Green (#16A34A / emerald-600)
- Primary Dark: #15803D (hover states)
- Background: White (#FFFFFF)
- Text: Dark charcoal (#1E293B)
- Muted text: #64748B
- Light surfaces: #F8FAFC
- Accent borders: #E2E8F0

**Typography:** Inter font family throughout, generous sizing (hero heading ~48-56px, section headings ~32-36px, body ~16-18px)

---

### Header (Sticky)
- Logo "JS Jobber" on the left
- Nav links: Home, Jobs, Employers, Candidates, Pages, Contact
- Right side: Login & Sign Up buttons (green CTA)
- Clean white background with subtle bottom shadow on scroll
- Mobile hamburger menu

### Section 1: Hero Banner
- Large gradient overlay on a professional background image (CSS gradient simulating a corporate feel)
- Bold heading: "FIND TOP CANDIDATES" with subtitle
- Search bar with Job Title input + Location dropdown + green Search button
- Two toggle pills: "Job Search" / "Upload CV"
- Stats counters: Jobs Posted / Employers

### Section 2: How It Works (3 steps)
- Three icon cards in a row: Create Account → Search Jobs → Send Resume
- Cards with green icon circles, hover lift effect with shadow

### Section 3: Explore Categories
- 8 category cards in a 4×2 grid (Accounts, Education, Engineering, Business, etc.)
- Each card has an icon, title, subtitle, and job count link
- Hover: card lifts up with green accent border
- "Explore All Categories" green button below
- Scroll-triggered fade-in animation

### Section 4: Browse Jobs
- Tab filters: By Title, By Skills, By Category, Popular Searches
- Tag/chip-style clickable items
- Clean layout with hover color change on tags

### Section 5: Featured Jobs
- 6 job cards in a 3×2 grid
- Each card: company logo placeholder, job title, company name, location, job type badge, salary range
- Hover: card shadow deepens, slight scale
- "View All Jobs" green button
- Scroll-triggered staggered fade-in

### Section 6: Membership Plans
- 3 pricing cards: Silver, Gold, Platinum toggle (Monthly/Yearly)
- Center card (Gold) highlighted/elevated
- Feature lists with green checkmarks
- Hover: card lifts with green top border accent
- CTA buttons per plan

### Section 7: Top Employers
- Logo carousel/grid showing employer brand logos (placeholder logos with company names like Siemens, Google, Apple, Citi, etc.)
- Subtle grayscale → color on hover

### Section 8: Download App CTA
- Split layout: phone mockup illustration on left, text + App Store/Play Store badges on right
- Light green gradient background

### Footer
- Dark charcoal background (#1E293B)
- 4-column layout: Jobseekers links, About Us links, Quick Links, Follow Us (social icons)
- Bottom bar: copyright + language selector
- Clean spacing, white text, green hover on links

### Global Effects
- All cards: `transition-all duration-300 hover:shadow-lg hover:-translate-y-1`
- Scroll animations using Intersection Observer (fade-in-up on sections)
- Smooth scroll behavior
- Lucide icons throughout for consistency

