
# Emotional Fitness Website Developer Guide

## Project Overview
This is a React-based website for an emotional fitness coaching business. The site is built with React, TypeScript, Vite, and TailwindCSS, with UI components from shadcn/ui.

## Project Structure

```
src/
├── components/            # React components
│   ├── layout/            # Layout components (Header, Footer, etc.)
│   ├── sections/          # Page section components (Hero, Services, etc.)
│   ├── ui/                # UI components from shadcn/ui
│   └── Logo.tsx           # Logo component
├── hooks/                 # Custom React hooks
│   └── toast/             # Toast functionality implementation
├── integrations/          # Third-party integrations
│   └── supabase/          # Supabase client and types
├── lib/                   # Utility libraries
├── pages/                 # Page components
├── utils/                 # Utility functions and constants
├── App.tsx                # Main App component
└── main.tsx               # Application entry point
```

## Key Technologies

- **React**: UI library
- **TypeScript**: Type-safe JavaScript
- **Vite**: Build tool
- **TailwindCSS**: Utility-first CSS framework
- **shadcn/ui**: Component library
- **React Router**: Routing
- **React Query**: Data fetching
- **React Helmet Async**: SEO management
- **Supabase**: Backend-as-a-Service

## SEO Implementation

The project uses React Helmet Async for managing SEO tags across the site:

1. **SEO Component**: The `SEO.tsx` component centralizes all meta tag management
2. **Per-page SEO**: Each page imports and uses the SEO component with custom props
3. **robots.txt**: Controls search engine crawling behavior
4. **Metadata Constants**: SEO content is stored in `constants.ts` for easy updates

## Component Design Principles

1. **Single Responsibility**: Each component should do one thing well.
2. **Composability**: Prefer composition over inheritance.
3. **Reusability**: Components should be designed for reuse when possible.
4. **Isolation**: Components should be isolated from each other.

## Styling

- Use TailwindCSS utility classes for styling
- Follow the existing color scheme (brand-blue, brand-purple, brand-pink)
- Use gradient effects for emphasis
- Ensure all components are fully responsive

## Adding a New Page

1. Create a new file in the `pages/` directory
2. Add a route in `App.tsx`
3. Update navigation links in the Header component if needed
4. Add proper SEO implementation using the SEO component

Example:

```tsx
// src/pages/NewPage.tsx
import Header from "@/components/layout/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const NewPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <SEO 
        title="Page Title"
        description="Page description"
        keywords="keyword1, keyword2"
        canonical="https://emotionalfitness.com/page-path/"
      />
      <Header />
      {/* Page content */}
      <Footer />
    </div>
  );
};

export default NewPage;
```

## Adding a New Section

1. Create a new file in the `components/sections/` directory
2. Import and use it in a page component

## Toast Notifications

The project uses the shadcn/ui toast system with a customized implementation:

1. **Implementation**: The toast functionality is implemented in `src/hooks/toast/`
2. **Usage**: Import the toast functions from `@/hooks/use-toast`
3. **Components**: Toast UI components are in `@/components/ui/toast.tsx`
4. **Usage Example**:

```tsx
import { useToast } from "@/hooks/use-toast";

const Component = () => {
  const { toast } = useToast();
  
  const handleAction = () => {
    toast({
      title: "Success!",
      description: "Your action was completed successfully."
    });
  };
  
  return (
    <button onClick={handleAction}>Show Toast</button>
  );
};
```

## High-Level Prompts for Site Creation

The following structured prompts can be used to recreate this website with an AI assistant like Lovable:

1. **Project Setup and Configuration**:
   ```
   Create a new React website for an emotional fitness coaching business using TypeScript, Vite, TailwindCSS, and shadcn/ui. Set up the essential project structure with components, pages, and hooks directories. Configure build optimizations in vite.config.ts including Terser minification and code splitting.
   ```

2. **Core Pages and Navigation**:
   ```
   Create the main pages for the website: Home, About, Services, Testimonials, Pricing, FAQ, Contact, and legal pages (Privacy, Terms, Disclaimers). Implement a responsive header with navigation and a footer with social links and copyright information.
   ```

3. **Component Structure**:
   ```
   Set up a component hierarchy with layout components (Header, Footer), section components (Hero, Services, etc.), UI components, and reusable elements. Create an SEO component using React Helmet Async for metadata management.
   ```

4. **Styling and Brand Identity**:
   ```
   Implement a cohesive design system with a color palette of black background and accent colors (brand-blue, brand-purple, brand-pink). Use TailwindCSS for responsive styling with a focus on gradient effects and modern UI elements.
   ```

5. **Performance Optimization**:
   ```
   Implement performance optimizations including lazy loading for non-critical components, image optimization, code splitting via React Router, and build optimizations (asset fingerprinting, chunk splitting).
   ```

6. **Error Handling and Monitoring**:
   ```
   Set up comprehensive error handling with error boundaries for each major section. Create a custom error monitoring hook for tracking issues in production.
   ```

7. **Toast Notification System**:
   ```
   Implement a toast notification system using shadcn/ui toast components with a custom hook implementation for consistent user feedback throughout the application.
   ```

8. **Documentation Creation**:
   ```
   Create comprehensive developer documentation (DEVELOPER_GUIDE.md) and standard operating procedures (STANDARD_OPERATING_PROCEDURES.md) for maintaining and extending the website.
   ```

## Deployment

The site is deployed using Lovable's publishing feature, which creates a production build and deploys it to a hosting service.

To deploy:
1. Click on "Share" in the Lovable interface
2. Click on "Publish"

## External Services

- **Calendly**: Used for booking sessions
- **Social Media**: Links to various social media platforms

## Constants and Configuration

Common values (URLs, text, etc.) are centralized in `src/utils/constants.ts` to make updates easier.

## Best Practices

1. **Keep Components Small**: Break large components into smaller, focused ones
2. **Use TypeScript**: Leverage TypeScript for type safety
3. **Document Your Code**: Add JSDoc comments to functions and components
4. **Follow Naming Conventions**: Use PascalCase for components, camelCase for variables
5. **Centralize Constants**: Put all constants in one place for easy updates
6. **Optimize Images**: Use compressed and appropriately sized images
7. **Accessibility**: Ensure the site is accessible (proper contrast, semantic HTML, etc.)
8. **SEO Optimization**: Use proper heading structure (h1, h2, etc.) and semantic HTML

## Custom Domain Setup

When connecting a custom domain:
1. Add the domain in Lovable's project settings
2. Set up the appropriate DNS records at your domain registrar
3. Wait for DNS propagation (can take 24-48 hours)
4. Verify connection in Lovable

## Troubleshooting

If you encounter issues:
1. Check the console for errors
2. Verify that all imports resolve correctly
3. Check that all required dependencies are installed
4. Ensure that all components receive their required props

## Performance Optimization

The site uses several techniques to optimize performance:
1. Image preloading for critical assets
2. Code splitting via React Router
3. Optimized TailwindCSS configuration
4. Responsive image handling
5. Build optimizations:
   - Terser minification
   - Console removal in production
   - Asset fingerprinting
   - Chunk splitting

## Error Monitoring

The project includes a custom error monitoring hook:
1. **Implementation**: The error monitoring is implemented in `src/hooks/use-error-monitoring.ts`
2. **Usage**: Import and use `useErrorMonitoring` in components that need error tracking
