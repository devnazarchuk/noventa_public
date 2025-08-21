# 🥖 Noventa Bakery - Modern Web Application

> **Artisan Bakery Website & E-commerce Platform**  
> Built with Next.js 15, TypeScript, and modern web technologies

## 🚀 Project Overview

Noventa Bakery is a comprehensive web application for a traditional German bakery established in 1928. The platform features a modern, responsive design with multi-language support (German/English), e-commerce capabilities, user authentication, and a fitness program integration.

## ✨ Key Features

- **🌐 Multi-language Support** - German (DE) and English (EN)
- **🛒 E-commerce Platform** - Product catalog, reviews, ratings
- **👤 User Management** - Authentication via Clerk, user profiles, reviews
- **🏃 Fitness Program** - Specialized fitness baker program with events
- **📱 Responsive Design** - Mobile-first approach with Tailwind CSS
- **⚡ Performance Optimized** - Next.js 15 with Turbo, image optimization
- **🔒 Secure Authentication** - JWT-based auth with Clerk integration
- **🗺️ Store Locator** - Interactive map with store locations
- **📊 Review System** - Product reviews, comments, and reactions

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Hook Form** - Form handling
- **Zustand** - State management

### Backend & Database
- **MongoDB** - NoSQL database with Mongoose ODM
- **PostgreSQL** - SQL database with Drizzle ORM
- **Next.js API Routes** - Serverless API endpoints
- **JWT** - JSON Web Token authentication

### Authentication & Services
- **Clerk** - User authentication and management
- **Cloudinary** - Image and media management
- **Leaflet** - Interactive maps

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Git hooks
- **Bundle Analyzer** - Performance monitoring

## 📁 Project Structure

```
noventa/
├── app/                          # Next.js App Router
│   ├── (auth)/                  # Authentication routes
│   ├── about/                   # Company information
│   ├── api/                     # API endpoints
│   ├── careers/                 # Job opportunities
│   ├── components/              # Reusable components
│   ├── contact/                 # Contact information
│   ├── data/                    # Centralized data
│   ├── esg/                     # Sustainability
│   ├── fitness-baker/           # Fitness program
│   ├── products/                # Product catalog
│   ├── profile/                 # User profiles
│   ├── reviews/                 # Review system
│   ├── services/                # Customer services
│   ├── stores/                  # Store locator
│   └── translations/            # Language files
├── components/                   # Shared components
├── lib/                         # Utilities and helpers
├── public/                      # Static assets
└── supabase/                    # Database configuration
```

## 🎯 Core Functionality

### Product Management
- **Centralized Product Data** - Single source of truth in `app/data/products.ts`
- **Category System** - Bread, rolls, pastries, coffee, healthy options
- **Multi-language Support** - German and English product descriptions
- **Image Management** - High-quality product images with optimization

### User Experience
- **Responsive Design** - Mobile-first approach
- **Accessibility** - WCAG compliant with custom settings
- **Performance** - Optimized images, lazy loading, bundle splitting
- **SEO Optimized** - Meta tags, structured data, sitemap

### Authentication & Profiles
- **Secure Login** - Clerk-based authentication
- **User Profiles** - Personal information and preferences
- **Review System** - User-generated content with moderation
- **Social Features** - Comments, reactions, and sharing

## 🌍 Internationalization

The application supports multiple languages through a comprehensive translation system:

- **German (DE)** - Primary language for German market
- **English (EN)** - International audience support
- **Dynamic Switching** - Language toggle in header
- **Localized Content** - Product names, descriptions, and UI elements

## 🚀 Getting Started

### Prerequisites
- Node.js 22.14.0+
- npm or yarn
- MongoDB instance
- PostgreSQL database (optional)

### Installation

1. **Clone the repository**
   ```bash
   git clone git@github.com:devnazarchuk/noventa_public.git
   cd noventas_public
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment setup**
   ```bash
   cp .env.example .env.local
   # Configure your environment variables
   ```

4. **Database setup**
   ```bash
   npm run mongodb:seed    # Seed MongoDB
   npm run db:seed         # Seed PostgreSQL (if using)
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

### Available Scripts

```bash
npm run dev              # Start development server
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run ESLint
npm run lint:fix         # Fix linting issues
npm run type-check       # TypeScript type checking
npm run format:write     # Format code with Prettier
npm run analyze          # Analyze bundle size
```

## 🔧 Configuration

### Environment Variables

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret

# Database
MONGODB_URI=your_mongodb_connection_string
DATABASE_URL=your_postgres_connection_string

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### Next.js Configuration

The application uses advanced Next.js 15 features:
- **Turbo Mode** - Faster development builds
- **Bundle Analyzer** - Performance monitoring
- **Image Optimization** - WebP/AVIF support
- **Security Headers** - XSS protection, content security

## 📊 Performance Features

- **Image Optimization** - Next.js Image component with WebP/AVIF
- **Code Splitting** - Automatic bundle optimization
- **Lazy Loading** - Components and images loaded on demand
- **Service Worker** - Offline capabilities and caching
- **Bundle Analysis** - Performance monitoring tools

## 🔒 Security Features

- **Authentication** - Secure user management via Clerk
- **JWT Tokens** - Secure API communication
- **Input Validation** - Zod schema validation
- **Security Headers** - XSS protection, CSRF prevention
- **Rate Limiting** - API abuse prevention

## 🧪 Testing & Quality

- **TypeScript** - Compile-time error checking
- **ESLint** - Code quality and consistency
- **Prettier** - Code formatting standards
- **Husky** - Pre-commit hooks
- **Bundle Analysis** - Performance monitoring

## 📱 Mobile & Accessibility

- **Responsive Design** - Mobile-first approach
- **Touch Optimized** - Mobile-friendly interactions
- **Accessibility** - WCAG 2.1 AA compliance
- **Screen Reader** - ARIA labels and semantic HTML
- **Keyboard Navigation** - Full keyboard support

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
vercel --prod
```

### Manual Deployment
```bash
npm run build
npm run start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

### Code Standards
- Follow TypeScript best practices
- Use Prettier for formatting
- Follow ESLint rules
- Write meaningful commit messages

## 📄 License

This project is proprietary software for Noventa Bakery. All rights reserved.

## 📞 Support

For technical support or questions:
- **Development Team** - Internal development support
- **Documentation** - Check code comments and this README
- **Issues** - Report bugs via internal channels

## 🔮 Future Roadmap

- **PWA Features** - Offline capabilities, push notifications
- **Advanced Analytics** - User behavior tracking
- **AI Integration** - Product recommendations
- **Mobile App** - React Native companion app
- **E-commerce** - Online ordering and payment processing

---

**Built with ❤️ by devnazarchuk**  
*Since 1928 - Tradition meets Innovation*

