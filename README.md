# AI SDR Landing Page

A modern, world-class landing page for AI SDR (Sales Development Representative) platform built with Next.js 15, TypeScript, and Tailwind CSS.

##  Features

- **Modern & Minimalistic UI**: Clean, professional design with smooth animations
- **SEO Optimized**: Full metadata, Open Graph, and Twitter Cards implementation
- **Performance Focused**: Fast loading times with Next.js 15 App Router
- **Responsive Design**: Mobile-first approach, works perfectly on all devices
- **Accessibility**: WCAG compliant with proper semantic HTML
- **Type-Safe**: Built with TypeScript for reliability

##  Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

##  Installation & Setup

1. **Navigate to project directory**
```bash
cd aisdr-landing
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open your browser**
Visit [http://localhost:3000](http://localhost:3000) to see the landing page.

##  Project Structure

```
aisdr-landing/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx             # Main page component
│   └── globals.css          # Global styles
├── components/
│   ├── Navbar.tsx           # Navigation bar
│   ├── Hero.tsx             # Hero section
│   ├── Features.tsx         # Features showcase
│   ├── HowItWorks.tsx       # Process explanation
│   ├── Benefits.tsx         # Benefits & stats
│   ├── Technology.tsx       # Tech stack info
│   ├── CTA.tsx              # Call-to-action section
│   └── Footer.tsx           # Footer
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

##  Tech Stack

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Smooth animations
- **Lucide React**: Modern icon library

##  SEO Features

- Comprehensive meta tags
- Open Graph protocol
- Twitter Card support
- Semantic HTML structure
- Optimized for search engines
- Schema.org markup ready

##  Deployment

### Deploy to Vercel (Recommended)
```bash
npm run build
vercel deploy
```

### Deploy to SiteGround
1. Build the project:
```bash
npm run build
```

2. Upload the `.next` folder and all necessary files to your SiteGround hosting

3. Set up Node.js environment in SiteGround control panel

4. Run the production server:
```bash
npm start
```

##  Customization

### Update Colors
Edit `tailwind.config.ts` to change the color scheme.

### Update Content
Edit component files in the `components/` directory to update text, images, and functionality.

### Update SEO
Edit `app/layout.tsx` to update meta tags, titles, and descriptions.

## 🔧 Build Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint


