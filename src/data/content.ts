export type Link = {
  label: string
  href: string
}

export type TextSegment = {
  text: string
  href?: string
}

export type JobPoint = string | TextSegment[]

export type Job = {
  role: string
  company: string
  companyUrl?: string
  period: string
  location?: string
  current?: boolean
  summary?: string
  points: JobPoint[]
}

export type Project = {
  title: string
  period?: string
  href: string
  description: string
  tags: string[]
}

export type EducationEntry = {
  qualification: string
  period: string
  result: string
  details?: string
}

export type Certification = {
  name: string
  year: string
}

export type SkillGroup = {
  label: string
  items: string[]
}

export type NavItem = {
  id: string
  label: string
}

export const site = {
  firstName: 'Adhin',
  lastName: 'Babu',
  role: 'Full stack and mobile developer',
  location: 'Waterloo, Ontario',
  email: 'adhinbabu1998@gmail.com',
  github: 'https://github.com/jobastin',
  githubLabel: 'github.com/jobastin',
  about:
    'I design and build complete web and mobile products, from the interface to the backend, and deliver them on time. I work directly with clients to turn requirements into working software, coordinate team efforts as a project lead, and collaborate closely as a team player. My experience spans freelance client projects and a global multinational organization. I hold a Master of Computer Applications and a postgraduate diploma in Mobile Solutions Development.',
} satisfies {
  firstName: string
  lastName: string
  role: string
  location: string
  email: string
  github: string
  githubLabel: string
  about: string
}

export const nav: NavItem[] = [
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
]

export const jobs: Job[] = [
  {
    role: 'Project lead and full stack developer (freelance)',
    company: 'Euro Experts Auto Services',
    companyUrl: 'https://euroexpert.ae/',
    period: 'February 2026 – Present',
    location: 'Dubai, UAE (remote)',
    current: true,
    summary:
      'An ISO-certified workshop for European and luxury vehicles.',
    points: [
      'Lead the project and coordinate meetings with the client and team members, keeping both sides aligned on progress and priorities.',
      [
        { text: 'Develop ' },
        {
          text: 'Backstage',
          href: 'https://github.com/madhaven/Backstage',
        },
        {
          text: ', a full stack web platform for the workshop, as part of a small team working in a single repository for backend, frontend, DevOps and documentation.',
        },
      ],
      'Build the API on ASP.NET Core (.NET 10) with a layered structure, Entity Framework Core with SQLite, JWT bearer authentication and structured logging with Serilog, documented through OpenAPI and Scalar.',
      'Integrate the backend with Meta (WhatsApp) APIs through typed HTTP clients, with in-memory caching and configuration-driven options.',
      'Create the user interface with React 19, Vite, Tailwind CSS 4 and shadcn/ui, and package the application with Docker.',
      'Plan and track work in GitHub Issues and collaborate through Git feature branching.',
    ],
  },
  {
    role: 'Web developer (contract)',
    company: 'Leen & Co',
    companyUrl: 'https://www.leenandco.uk/',
    period: 'January 2024 – November 2025',
    location: 'United Kingdom (remote)',
    summary: 'A UK event management company.',
    points: [
      'Rebuilt the company’s WordPress/WooCommerce site as a static React and TypeScript application built with Vite and Tailwind CSS, with a component-based service catalogue, a filterable photo gallery and automatic seasonal colour theming.',
      'Built responsive layouts tested from 320px phones to desktop and met WCAG AA, with full keyboard navigation, screen-reader support and reduced-motion handling.',
      'Added per-page SEO metadata and search-engine business data, and self-hosted optimised images and video with no tracking or third-party scripts.',
      'Developed an enquiry form integrated with a third-party form API, with client-side validation (future-only event dates, valid phone numbers) and accessible error messages, covered by unit tests.',
      'Set up a CI/CD pipeline from a private GitHub repository to Cloudflare Pages, so every push builds and deploys automatically.',
      'Migrated the domain’s DNS to Cloudflare with zero downtime, carrying over the MX, SPF, DKIM and DMARC records so company email kept working.',
      'Migrated content from the legacy WordPress database and adapted the Terms & Conditions and Privacy Policy for the new site and UK GDPR.',
      'Earlier, restored the company’s offline WordPress site after its hosting provider shut down: traced the outage to stale DNS records, identified the registrar through WHOIS/RDAP lookups, repointed the nameservers to a new host and resolved the resulting CDN and TLS certificate errors.',
      'Worked directly with the client on requirements, progress updates, new features and ongoing maintenance.',
    ],
  },
  {
    role: 'Lead developer, Android app',
    company: 'College final project',
    period: 'January 2023 – December 2023',
    location: 'Waterloo, Ontario (Canada)',
    points: [
      'Led the project team: wrote the project plan, scheduled and ran weekly meetings, kept timesheets, assigned tasks to team members and handled project submissions.',
      'Built the Android app in Java with Firebase as the backend and Google sign-in for authentication.',
      'Tested the app throughout development.',
      'Used Microsoft Azure for team management and the project board.',
    ],
  },
  {
    role: 'Associate, full stack developer',
    company: 'EY Technology Solutions',
    period: 'April 2022 – September 2022',
    location: 'India',
    points: [
      'Supported the design, development and maintenance of web-based applications using front-end and back-end technologies.',
      'Built responsive user interface components for compatibility across browsers and devices.',
      'Supported server-side development with business logic, data processing and integration workflows.',
      'Assisted with database design, data storage management and optimization for accuracy and performance.',
      'Coordinated with cross-functional teams to align technical work with business objectives and delivery timelines.',
      'Prepared technical inputs, progress updates and documentation for business meetings and presentations.',
      'Supported testing and validation to identify defects and ensure functional stability.',
      'Resolved technical issues by analyzing root causes and implementing corrective solutions.',
    ],
  },
  {
    role: 'Data operations intern',
    company: 'Gartner Inc.',
    period: 'June 2021 – December 2021',
    location: 'Bengaluru, India',
    summary:
      'Employed by ExcelGens Consulting Services Pvt. Ltd. and deputed to Gartner Inc. Full time, 40 hours per week.',
    points: [
      'Contributed to the design and development of a comprehensive data-harvesting mechanism for Gartner, streamlining the collection of large-scale structured data.',
      'Built and enhanced harvesting engines that collect data from job portals and corporate career pages.',
      'Used Gartner’s proprietary scripting language with JavaScript and Python to build and maintain automated data-collection scripts.',
      'Tested, debugged and optimized harvesting scripts to improve the accuracy and performance of data extraction.',
      'Collaborated with cross-functional teams to ensure data quality, completeness and timely delivery of harvested datasets.',
    ],
  },
]

export const projects: Project[] = [
  {
    title: 'Solo2Squad',
    href: 'https://github.com/jobastin/Solo2Squad',
    description:
      'An Android app that bridges the gap between sports and people, built with Java, Firebase and Stripe payments. Managed with Microsoft Azure Boards and covered by unit tests.',
    tags: [
      'Java',
      'Android Studio',
      'Firebase',
      'Stripe API',
      'Azure Boards',
      'Unit testing',
    ],
  },
  {
    title: 'Road Side Assistance',
    period: 'July 2020 – March 2021',
    href: 'https://github.com/jobastin/Road-Side-Assistance',
    description:
      'A travel app that helps drivers find nearby mechanic shops, petrol pumps, hospitals, police stations and accident-prone areas in one click, using live location or a map search. Admins manage service details and mechanic appointments, so help can be arranged quickly.',
    tags: ['PHP', 'JavaScript', 'Google Maps API', 'Stripe', 'PHP Mailer'],
  },
  {
    title: 'Online Class',
    period: 'January 2020 – August 2020',
    href: 'https://github.com/jobastin/Online-Class',
    description:
      'A web-based class management platform built during the pandemic for a school to run remote learning in one place. Staff manage classes, subjects and learning links, and students log in to reach them, with separate staff and student areas and a secure login. Used until classes returned in person.',
    tags: [],
  },
  {
    title: 'Hostel Management System',
    href: 'https://github.com/jobastin/Hostel-Management-System',
    description:
      'A web-based hostel management system with separate admin, hostel manager and student areas. Users register, log in and recover passwords by email, with checks for duplicate usernames and emails.',
    tags: ['PHP', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Speech Recognition',
    href: 'https://github.com/jobastin/Google-Speech-Recognization',
    description:
      'A Python script that transcribes recorded speech into text using Google’s speech recognition, tested with a sample audio file.',
    tags: ['Python'],
  },
]

export const education: EducationEntry[] = [
  {
    qualification: 'Postgraduate diploma, Mobile Solutions Development',
    period: 'September 2022 – December 2023',
    result: 'Distinction (83.61)',
    details:
      'Native iOS, Wear OS, UI design and web application development.',
  },
  {
    qualification: 'Master of Computer Applications (MCA)',
    period: 'August 2016 – August 2021',
    result: 'Distinction (GPA 8.11/10)',
  },
]

export const certifications: Certification[] = [
  { name: 'AWS Academy Cloud Foundations', year: '2021' },
  { name: 'Flutter App Development', year: '2020' },
  { name: 'Docker Basics', year: '2020' },
  { name: 'Red Hat Academy Webinar', year: '2020' },
  { name: 'Python Programming', year: '2019' },
]

export const publication = {
  title:
    'Analyzing and Adding Accident Prone Area’s in Kerala into Google Map Link',
  venue: 'National Conference on Emerging Computer Applications (NCECA)',
  year: '2021',
  url: 'https://www.academia.edu/76275119/Analyzing_and_Adding_Accident_Prone_Areas_in_Kerala_into_Google_Map',
}

export const skills: SkillGroup[] = [
  {
    label: 'Languages',
    items: [
      'C#',
      'JavaScript',
      'jQuery',
      'TypeScript',
      'Python',
      'Java',
      'Dart',
      'PHP',
      'VB',
      'SQL',
      'HTML5',
      'CSS3',
    ],
  },
  {
    label: 'Frameworks and UI',
    items: [
      'ASP.NET Core',
      'Angular',
      'React',
      'Vite',
      'Tailwind CSS',
      'shadcn/ui',
      'Flutter',
    ],
  },
  {
    label: 'Backend and APIs',
    items: [
      'REST APIs',
      'Entity Framework Core',
      'JWT authentication',
      'OpenAPI',
      'Scalar',
      'Serilog',
      'Third-party API integration',
      'Layered architecture',
    ],
  },
  {
    label: 'Data and storage',
    items: [
      'SQLite',
      'SQL Server',
      'MySQL',
      'DynamoDB',
      'Firebase',
      'Database design',
      'Query optimization',
      'Data processing',
    ],
  },
  {
    label: 'Cloud, DevOps and tools',
    items: [
      'Docker',
      'Microsoft Azure',
      'AWS',
      'Google Cloud',
      'Git',
      'GitHub',
      'GitHub Issues',
      'Azure DevOps',
      'Jira',
      'Confluence',
      'Feature branching',
    ],
  },
  {
    label: 'Leadership and collaboration',
    items: [
      'Project leadership',
      'Mentoring',
      'Knowledge sharing',
      'Client communication',
      'Requirements gathering',
      'Cross-functional teams',
      'Testing and validation',
      'Technical documentation',
      'Root-cause analysis',
    ],
  },
]

export const skillNote =
  'Experienced in leading small teams, mentoring, sharing knowledge with colleagues, coordinating directly with clients and owning delivery from requirements to release.'
