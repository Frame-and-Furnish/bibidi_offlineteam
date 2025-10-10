# Bibidi Offline Team Dashboard

A modern web application designed to help offline team members efficiently onboard service providers onto the Bibidi platform. This dashboard streamlines the process of registering professionals from various home service categories, making it easy to grow your service provider network.

![Bibidi Logo](./public/bibidi_logo.png)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Usage Guide](#usage-guide)
- [Key Functionalities](#key-functionalities)
- [Configuration](#configuration)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

The Bibidi Offline Team Dashboard is built to support offline team representatives who visit service providers in person to onboard them onto the platform. The application provides:

- **Landing Page**: Showcases the value proposition for service providers
- **Authentication System**: Secure login and registration for team members
- **Service Provider Management**: Complete CRUD operations for managing service providers
- **Onboarding Forms**: Comprehensive forms with basic and advanced sections
- **Dashboard Analytics**: Real-time statistics and insights
- **Team Management**: Collaboration features for offline team members
- **Map Integration**: Geographic visualization of service provider locations

## ✨ Features

### For Service Providers
- **Door-to-Door Onboarding**: Representatives come to service providers' locations
- **Multi-Category Support**: Supports 10+ service categories including:
  - Plumbing, Painting, Electrical, Carpentry
  - HVAC, Roofing, Landscaping, Gardening
  - Masonry, Cleaning, Handyman services, and more
- **Fair Pricing**: Transparent commission structure (2%)
- **Instant Leads**: Start receiving customer requests immediately
- **Profile Management**: Detailed profiles with images, bio, and verification

### For Offline Team
- **Comprehensive Dashboard**: View all onboarded providers at a glance
- **Smart Filters**: Filter by category, status (active/pending), and search
- **Dual View Modes**: Switch between list and grid views
- **Statistics Tracking**: Monitor total onboarded, pending approvals, and earnings
- **Quick Actions**: Edit, view, and delete service provider records
- **Responsive Design**: Works seamlessly on desktop and mobile devices

### Advanced Onboarding Features
- **Profile Picture Upload**: Visual identification for providers
- **Government ID Verification**: Secure document upload (front and back)
- **Full Address Collection**: Complete location details with postal code
- **Professional Bio**: Space for experience and specialization details
- **Multi-City Support**: Coverage across 17+ cities in British Columbia

## 🛠️ Tech Stack

### Frontend Framework
- **Next.js 15.5.4** - React framework with App Router
- **React 19.1.0** - UI library
- **TypeScript 5** - Type-safe development

### UI Components & Styling
- **Tailwind CSS 4** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
  - Avatar, Badge, Button, Card, Dialog
  - Dropdown Menu, Select, Form components
- **Lucide React** - Icon library
- **React Icons** - Additional icon support
- **class-variance-authority** - Component variant management

### Form Management & Validation
- **React Hook Form 7.64.0** - Performant form handling
- **Zod 4.1.12** - Schema validation
- **@hookform/resolvers** - Form resolver integration

### Maps & Location
- **Leaflet 1.9.4** - Interactive map library
- **React Leaflet 5.0.0** - React wrapper for Leaflet
- **@types/leaflet** - TypeScript definitions

### Development Tools
- **ESLint 9** - Code linting
- **PostCSS** - CSS processing
- **Turbopack** - Fast bundler (Next.js)

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v20 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/bibidi_offlineteam.git
   cd bibidi_offlineteam
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables** (if needed)
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_API_URL=your_api_url
   ```

### Running the Application

#### Development Mode
```bash
npm run dev
# or
yarn dev
```

The application will start at `http://localhost:3000`

#### Production Build
```bash
npm run build
npm start
# or
yarn build
yarn start
```

#### Linting
```bash
npm run lint
# or
yarn lint
```

## 📁 Project Structure

```
bibidi_offlineteam/
├── public/                      # Static assets
│   ├── bibidi_logo.png         # Company logo
│   └── *.svg                   # SVG icons
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (auth)/            # Authentication routes
│   │   │   ├── login/         # Login page
│   │   │   └── register/      # Registration page
│   │   ├── dashboard/         # Dashboard routes
│   │   │   ├── page.tsx       # Main dashboard
│   │   │   ├── serviceprovider/ # Service provider onboarding
│   │   │   ├── team/          # Team management
│   │   │   └── settings/      # Settings page
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Landing page
│   │   └── globals.css        # Global styles
│   ├── components/            # React components
│   │   ├── dashboard/         # Dashboard-specific components
│   │   │   ├── DashboardLayout.tsx  # Dashboard layout wrapper
│   │   │   ├── Sidebar.tsx          # Navigation sidebar
│   │   │   └── TeamMap.tsx          # Map visualization
│   │   └── ui/                # Reusable UI components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── form.tsx
│   │       ├── input.tsx
│   │       └── ... (more UI components)
│   └── lib/                   # Utility functions
│       └── utils.ts           # Helper utilities
├── components.json            # UI component configuration
├── next.config.ts             # Next.js configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Project dependencies
```

## 📖 Usage Guide

### 1. Authentication

**Login:**
- Navigate to `/login`
- Enter your team member credentials
- Access the dashboard upon successful authentication

**Register:**
- Navigate to `/register`
- Fill in the registration form
- Create your offline team account

### 2. Dashboard Overview

After logging in, you'll see:
- **Total Onboarded**: Count of active service providers
- **Pending Approvals**: Providers awaiting verification
- **Wallet Balance**: Earnings from commission (2% of total provider earnings)

### 3. Adding a Service Provider

1. Click **"Add Service Provider"** button
2. Fill in the **Basic Information** section:
   - Full Name (required)
   - Email Address (required)
   - Mobile Number (required)
   - Service Category (required)
   - City (required)
   - Price per Hour (required)

3. Optionally expand **Advanced Section** to add:
   - Profile picture
   - Full address
   - Professional bio
   - Government ID documents (front and back)

4. Click **"Onboard Service Provider"** to save

### 4. Managing Service Providers

**Filter Options:**
- Search by name, email, or category
- Filter by service category
- Filter by status (All, Active, Pending)

**View Modes:**
- **List View**: Tabular format with all details
- **Grid View**: Card-based layout

**Actions:**
- **View**: See complete provider details
- **Edit**: Update provider information
- **Delete**: Remove provider from system

### 5. Team Collaboration

- Navigate to `/dashboard/team` to:
  - View team members
  - Track performance metrics
  - Visualize team locations on map

## 🔑 Key Functionalities

### Service Provider Onboarding
The core feature allows team members to:
- Collect comprehensive provider information
- Upload verification documents
- Set pricing and availability
- Track onboarding status

### Dashboard Analytics
- Real-time statistics
- Earnings tracking with commission calculation
- Visual data representation
- Status monitoring (active vs. pending)

### Map Integration
- Geographic visualization of service providers
- Team member location tracking
- Service area coverage analysis

### Document Management
- Secure file upload system
- Support for images and PDFs
- Preview functionality
- File size validation (5MB for images, 10MB for documents)

## ⚙️ Configuration

### Tailwind CSS
The project uses Tailwind CSS 4 with custom configuration. Modify `tailwind.config.js` to customize:
- Colors
- Spacing
- Typography
- Breakpoints

### Next.js
Configure Next.js settings in `next.config.ts`:
- Image optimization
- Environment variables
- Build settings
- Turbopack options

### Component Library
UI components are configured via `components.json` using shadcn/ui conventions.

## 📜 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Create production build |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint for code quality |

## 🤝 Contributing

We welcome contributions to improve the Bibidi Offline Team Dashboard! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Development Guidelines
- Follow TypeScript best practices
- Write meaningful commit messages
- Add comments for complex logic
- Test thoroughly before submitting
- Ensure ESLint passes without errors

## 📄 License

This project is part of the Bibidi platform and is proprietary software. All rights reserved.

---

## 🌐 Support & Contact

For support, questions, or feedback:
- **Email**: hello@bibidi.ca
- **Documentation**: [bibidi.ca](https://bibidi.ca)
- **Community**: Join our team chat

---

## 🙏 Acknowledgments

Built with ❤️ by the Bibidi development team for offline team members who work tirelessly to grow our service provider network.

**Supported Cities**: Kelowna, Vernon, Penticton, Summerland, Kamloops, Lake Country, West Kelowna, Merritt, Hope, Chilliwack, Salmon Arm, Revelstoke, Golden, Osoyoos, Oliver, Armstrong, Enderby

---

*Last Updated: October 2025*
