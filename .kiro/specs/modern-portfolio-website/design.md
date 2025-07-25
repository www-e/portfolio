# Design Document

## Overview

The modern portfolio website will be built using Next.js 15.4.4 with React 19, leveraging Tailwind CSS 4 for styling and Framer Motion for animations. The design follows a modern, interactive approach that showcases Omar Ashraf's full-stack development capabilities through advanced UI components, smooth animations, and responsive design patterns.

The architecture emphasizes performance, accessibility, and user experience while demonstrating technical proficiency through sophisticated visual effects including 3D transformations, smooth scrolling, and dynamic theming.

## Architecture

### Technology Stack
- **Framework**: Next.js 15.4.4 with App Router
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion 12.23.9
- **Icons**: Tabler Icons React, Lucide React
- **State Management**: React hooks (useState, useContext)
- **Type Safety**: TypeScript 5

### Project Structure
```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and theme variables
│   ├── layout.tsx         # Root layout with theme provider
│   └── page.tsx           # Main portfolio page
├── components/
│   ├── layout/            # Layout components
│   │   ├── navbar.tsx     # Main navigation component
│   │   └── footer.tsx     # Footer component
│   ├── sections/          # Page sections
│   │   ├── hero.tsx       # Hero section with 3D effects
│   │   ├── about.tsx      # About/professional summary
│   │   ├── skills.tsx     # Technical skills showcase
│   │   ├── experience.tsx # Professional experience
│   │   ├── projects.tsx   # Projects showcase
│   │   └── contact.tsx    # Contact information
│   ├── ui/                # Reusable UI components
│   │   ├── theme-provider.tsx
│   │   ├── theme-toggle.tsx
│   │   └── [existing components]
│   └── providers/         # Context providers
│       └── theme-provider.tsx
├── hooks/                 # Custom React hooks
│   ├── use-theme.ts       # Theme management hook
│   └── use-scroll.ts      # Scroll-based animations
├── lib/                   # Utilities and configurations
│   ├── utils.ts           # Utility functions
│   └── theme-config.ts    # Theme configuration
└── types/                 # TypeScript type definitions
    └── index.ts           # Global type definitions
```

## Components and Interfaces

### Theme Management System

#### ThemeProvider Component
```typescript
interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  systemTheme: 'light' | 'dark';
}
```

**Responsibilities:**
- Manage global theme state using React Context
- Persist theme preference in localStorage
- Detect system theme preference
- Provide theme values to all child components

#### Theme Configuration
```typescript
interface ThemeConfig {
  light: {
    primary: string;
    secondary: string;
    background: string;
    foreground: string;
    accent: string;
    muted: string;
  };
  dark: {
    primary: string;
    secondary: string;
    background: string;
    foreground: string;
    accent: string;
    muted: string;
  };
}
```

### Navigation System

#### Desktop Navigation (ResizableNavbar Enhancement)
- Enhance existing resizable navbar with theme integration
- Add smooth scroll-to-section functionality
- Implement active section highlighting
- Integrate theme toggle button

#### Mobile Navigation (Drawer Implementation)
```typescript
interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
  themeToggle: React.ReactNode;
}
```

**Features:**
- Slide-in drawer animation from right side
- Backdrop blur effect
- Theme toggle integration within drawer
- Touch-friendly navigation items
- Smooth close animations

### Hero Section

#### 3D Marquee Integration
- Utilize existing ThreeDMarquee component
- Display rotating showcase of technologies and skills
- Implement parallax scrolling effects
- Add interactive hover states

#### Professional Introduction Card
```typescript
interface HeroCardProps {
  name: string;
  title: string;
  location: string;
  summary: string;
  profileImage?: string;
}
```

**Features:**
- 3D card effect using existing CardContainer
- Animated text reveals
- Floating elements with subtle animations
- Responsive typography scaling

### Projects Showcase

#### Project Card Component
```typescript
interface ProjectCardProps {
  project: {
    id: string;
    name: string;
    description: string;
    technologies: string[];
    features: string[];
    techStack: string;
    category: 'web' | 'mobile' | 'ai' | 'fullstack';
  };
  onCardClick: (project: Project) => void;
}
```

**Features:**
- Grid layout with responsive breakpoints
- Hover animations with 3D transforms
- Technology badges with color coding
- Modal/drawer for detailed project information
- Filtering by project category

#### Project Detail Modal
```typescript
interface ProjectDetailProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}
```

### Scrolling Experience

#### Tracing Beam Integration
- Enhance existing TracingBeam component
- Add section progress indicators
- Implement smooth scroll behavior
- Create intersection observer for section detection

#### Scroll-based Animations
```typescript
interface ScrollAnimationProps {
  children: React.ReactNode;
  animationType: 'fadeIn' | 'slideUp' | 'scaleIn';
  delay?: number;
  threshold?: number;
}
```

### Professional Information Sections

#### Skills Showcase
```typescript
interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
    icon?: string;
  }[];
}
```

**Features:**
- Animated skill bars or circular progress
- Category-based organization
- Interactive hover effects
- Responsive grid layout

#### Experience Timeline
```typescript
interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  achievements: string[];
  technologies: string[];
}
```

**Features:**
- Vertical timeline with animated reveals
- Company logos and descriptions
- Expandable achievement details
- Technology tag integration

## Data Models

### Portfolio Data Structure
```typescript
interface PortfolioData {
  personal: {
    name: string;
    title: string;
    location: string;
    email: string;
    phone: string;
    linkedin: string;
    portfolio: string;
    summary: string;
  };
  skills: SkillCategory[];
  experience: ExperienceItem[];
  projects: Project[];
  education: {
    degree: string;
    institution: string;
    location: string;
  };
  softSkills: string[];
}
```

### Project Data Model
```typescript
interface Project {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  techStack: string;
  category: ProjectCategory;
  image?: string;
  demoUrl?: string;
  githubUrl?: string;
  highlights: string[];
}
```

## Error Handling

### Theme System Error Handling
- Graceful fallback to system theme if localStorage fails
- Error boundaries for theme-dependent components
- Validation for theme configuration values

### Animation Error Handling
- Reduced motion support for accessibility
- Fallback static states for failed animations
- Performance monitoring for animation-heavy sections

### Data Loading Error Handling
- Loading states for all dynamic content
- Error states with retry mechanisms
- Graceful degradation for missing data

## Testing Strategy

### Unit Testing
- Theme provider functionality
- Navigation component interactions
- Project card click handlers
- Scroll-based animation triggers

### Integration Testing
- Theme switching across all components
- Mobile navigation drawer functionality
- Project modal opening and closing
- Responsive layout breakpoints

### Accessibility Testing
- Keyboard navigation support
- Screen reader compatibility
- Color contrast validation
- Focus management in modals

### Performance Testing
- Animation performance monitoring
- Bundle size optimization
- Image loading optimization
- Core Web Vitals compliance

## Responsive Design Strategy

### Breakpoint System
```css
/* Mobile First Approach */
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
2xl: 1536px /* 2X large devices */
```

### Component Responsiveness
- **Navigation**: Horizontal bar → Mobile drawer
- **Hero Section**: Full-width cards → Stacked layout
- **Projects Grid**: 3 columns → 2 columns → 1 column
- **Skills Section**: Multi-column → Single column
- **Typography**: Fluid scaling using clamp()

### Touch Interactions
- Increased touch targets (minimum 44px)
- Swipe gestures for project carousel
- Touch-friendly drawer interactions
- Haptic feedback considerations

## Performance Optimizations

### Code Splitting
- Lazy loading for project detail modals
- Dynamic imports for heavy animation components
- Route-based code splitting

### Image Optimization
- Next.js Image component usage
- WebP format with fallbacks
- Responsive image sizing
- Lazy loading implementation

### Animation Performance
- GPU-accelerated transforms
- RequestAnimationFrame usage
- Intersection Observer for scroll animations
- Reduced motion preferences

### Bundle Optimization
- Tree shaking for unused code
- Dynamic imports for large dependencies
- CSS purging for unused styles
- Compression and minification

## Accessibility Considerations

### Keyboard Navigation
- Tab order management
- Focus indicators
- Skip links implementation
- Escape key handling for modals

### Screen Reader Support
- Semantic HTML structure
- ARIA labels and descriptions
- Live regions for dynamic content
- Alternative text for images

### Visual Accessibility
- High contrast mode support
- Color-blind friendly palette
- Scalable text support
- Reduced motion preferences

### Interaction Accessibility
- Clear focus states
- Error message announcements
- Loading state communications
- Success feedback provision