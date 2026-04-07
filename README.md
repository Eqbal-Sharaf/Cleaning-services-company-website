# CleanPro Toronto - Professional Cleaning Services Website

A complete, production-ready website for a cleaning services company built with React, Tailwind CSS, and Supabase.

## 🚀 Quick Start

```bash
# 1. Install dependencies
pnpm install

# 2. Start development server
pnpm run dev

# 3. Open browser
http://localhost:5173
```

**⏰ Important:** Wait 60-90 seconds after starting the server for the backend to fully deploy before testing authentication or booking features.

## ✨ Features

### Customer-Facing Website
- 🎨 Modern, responsive design
- 📱 Mobile-friendly across all devices
- 🖼️ Professional high-quality images
- 📋 Complete service showcase
- 💬 Customer testimonials
- 📝 Booking form with validation
- ⚡ Smooth animations and transitions

### Admin Dashboard
- 🔐 Secure authentication system
- 📊 Booking management interface
- 📈 Statistics and analytics
- 🗑️ Delete bookings
- 👤 User profile display
- 🚪 Secure logout functionality

### Backend
- ☁️ Cloud-hosted on Supabase
- 🗄️ Key-value store database
- 🔒 Secure authentication
- 🌐 RESTful API endpoints
- ✅ CORS configured

## 📂 Project Structure

```
/
├── src/
│   ├── app/
│   │   ├── components/       # UI components
│   │   │   ├── Navbar.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── WhyChooseUs.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── BookingForm.tsx
│   │   │   └── Footer.tsx
│   │   ├── pages/            # Page components
│   │   │   ├── Home.tsx
│   │   │   ├── AdminLogin.tsx
│   │   │   ├── AdminDashboard.tsx
│   │   │   └── AdminSetupPage.tsx
│   │   ├── App.tsx           # Main app
│   │   └── routes.tsx        # Router config
│   ├── utils/
│   │   └── supabase/
│   │       ├── client.ts     # Supabase client
│   │       └── info.tsx      # Project config
│   └── styles/               # Styling
│       ├── index.css
│       ├── tailwind.css
│       └── theme.css
├── supabase/
│   └── functions/
│       └── server/
│           ├── index.tsx     # Backend API
│           └── kv_store.tsx  # Database utils
└── Documentation files       # Setup & troubleshooting guides
```

## 🔧 Setup Guide

### First Time Setup

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Start the server:**
   ```bash
   pnpm run dev
   ```

3. **Create your admin account:**
   - Visit: http://localhost:5173/admin/setup
   - Fill in your name, email, and password
   - Click "Create Admin Account"

4. **Log in:**
   - Visit: http://localhost:5173/admin/login
   - Enter your credentials
   - Access the dashboard

### Testing the System

1. **Test booking form:**
   - Go to homepage
   - Fill out the booking form
   - Submit and check for success message

2. **Check admin dashboard:**
   - Log in at /admin/login
   - View submitted bookings
   - Test delete functionality

## 📚 Documentation

- **[QUICK_START.md](./QUICK_START.md)** - Fast setup guide
- **[SETUP_INSTRUCTIONS.md](./SETUP_INSTRUCTIONS.md)** - Detailed installation guide
- **[TROUBLESHOOTING.md](./TROUBLESHOOTING.md)** - Common issues & solutions
- **[AUTH_FIXED.md](./AUTH_FIXED.md)** - New authentication system explained

## 🌐 Routes

### Public Routes
- `/` - Homepage
- `/admin/setup` - Create admin account (use once)
- `/admin/login` - Admin login

### Protected Routes (Requires Authentication)
- `/admin/dashboard` - Manage bookings

## 🛠️ Tech Stack

- **Frontend:** React 18, TypeScript
- **Styling:** Tailwind CSS v4
- **Routing:** React Router v7
- **UI Components:** Radix UI, Shadcn/ui
- **Icons:** Lucide React
- **Backend:** Supabase (Edge Functions, Auth, Storage)
- **Database:** Supabase KV Store
- **Build Tool:** Vite

## 🎨 Customization

### Change Company Name
Search and replace "CleanPro Toronto" throughout the codebase.

### Update Contact Info
Edit these files:
- `/src/app/components/BookingForm.tsx`
- `/src/app/components/Footer.tsx`

### Modify Services
Edit `/src/app/components/Services.tsx`

### Change Theme Colors
Edit `/src/styles/theme.css`

### Replace Images
Update image URLs in component files or use the Unsplash tool.

## 🔒 Security

- ✅ Authentication via Supabase Auth
- ✅ Secure session management
- ✅ Automatic token refresh
- ✅ Protected admin routes
- ✅ CORS configured properly
- ✅ Environment variables for sensitive data

## 📦 Build for Production

```bash
# Create production build
pnpm run build

# Preview production build
pnpm run preview
```

The build output will be in the `/dist` folder.

## 🐛 Troubleshooting

### Port already in use
Change the port in `vite.config.ts` or stop the conflicting process.

### Dependencies won't install
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Authentication not working
1. Clear browser localStorage (F12 → Application → Local Storage)
2. Wait 60-90 seconds after starting server
3. Create new admin account at /admin/setup

### Booking form not submitting
1. Wait 60-90 seconds for backend deployment
2. Hard refresh browser (Ctrl+Shift+R)
3. Check browser console for errors

For more detailed troubleshooting, see [TROUBLESHOOTING.md](./TROUBLESHOOTING.md)

## 📝 Notes

- Backend is cloud-hosted on Supabase (no local setup required)
- Sessions persist across browser restarts
- All booking data is stored securely
- Admin authentication uses industry-standard practices

## ✅ Features Included

- [x] Responsive navigation bar
- [x] Hero section with CTA
- [x] About us section with images
- [x] Services showcase
- [x] Why choose us section
- [x] Customer testimonials
- [x] Booking form with validation
- [x] Footer with contact info
- [x] Admin authentication system
- [x] Admin dashboard
- [x] Booking management
- [x] Statistics display
- [x] Delete functionality
- [x] Secure logout

## 🎉 Ready to Use!

Your CleanPro Toronto website is fully functional and ready for development or deployment. Follow the Quick Start guide above to get started!

---

**Need help?** Check the documentation files or the troubleshooting guide.
