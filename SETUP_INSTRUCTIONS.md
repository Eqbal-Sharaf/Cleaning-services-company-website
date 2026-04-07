# CleanPro Toronto - Local Development Setup Guide

This guide will help you get the CleanPro Toronto cleaning services website running on your local computer.

## ⚠️ IMPORTANT: Recent Fixes Applied

**The following issues have been fixed:**
- ✅ CORS errors when submitting booking forms
- ✅ "Session expired" authentication errors
- ✅ Admin dashboard not loading bookings properly

**After starting the server, please wait 60-90 seconds for the backend to fully deploy before testing the booking form or admin login.**

## Prerequisites

Before you begin, make sure you have the following installed on your computer:

1. **Node.js** (version 18 or higher)
   - Download from: https://nodejs.org/
   - To check if installed, run: `node --version`

2. **pnpm** (package manager)
   - Install globally: `npm install -g pnpm`
   - To check if installed, run: `pnpm --version`

3. **Git** (optional, for version control)
   - Download from: https://git-scm.com/

## Installation Steps

### Step 1: Navigate to Your Project Directory

Open your terminal/command prompt and navigate to the project folder:

```bash
cd path/to/your/project
```

### Step 2: Install Dependencies

Run the following command to install all required packages:

```bash
pnpm install
```

This will install all the necessary dependencies including React, Tailwind CSS, and other libraries.

### Step 3: Start the Development Server

To start the frontend development server, run:

```bash
pnpm run dev
```

The website should now be running at: **http://localhost:5173**

Open your browser and visit this URL to see your website!

## Backend Setup (Supabase)

The backend is already configured and running on Supabase cloud. Here's what you need to know:

### Already Configured:
- ✅ Supabase database
- ✅ API endpoints for bookings
- ✅ Authentication system
- ✅ Environment variables

### What Works Out of the Box:
1. **Customer booking submissions** - Forms will save to the database
2. **Admin authentication** - Login/signup functionality
3. **Admin dashboard** - View and manage bookings

## Setting Up Your First Admin Account

1. Start your development server (if not already running)
2. Open your browser and go to: **http://localhost:5173/admin/setup**
3. Fill in the form with:
   - Your name
   - Your email address
   - A secure password (minimum 6 characters)
4. Click "Create Admin Account"
5. You'll see a success message when the account is created

## Logging into the Admin Dashboard

1. Go to: **http://localhost:5173/admin/login**
2. Enter the email and password you created
3. Click "Sign In"
4. You'll be redirected to the admin dashboard where you can:
   - View all booking requests
   - See booking details (name, email, phone, service type, etc.)
   - Delete bookings
   - Track statistics

## Project Structure

```
/src/app/
├── components/          # Reusable UI components
│   ├── Navbar.tsx      # Navigation bar
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About us section
│   ├── Services.tsx    # Services showcase
│   ├── WhyChooseUs.tsx # Why choose us section
│   ├── Testimonials.tsx # Customer reviews
│   ├── BookingForm.tsx # Contact/booking form
│   ├── Footer.tsx      # Footer section
│   └── ui/             # UI components (buttons, cards, etc.)
├── pages/              # Page components
│   ├── Home.tsx        # Main homepage
│   ├── AdminLogin.tsx  # Admin login page
│   ├── AdminDashboard.tsx # Admin dashboard
│   └── AdminSetupPage.tsx # First-time admin setup
├── App.tsx             # Main app component
└── routes.tsx          # Route configuration

/supabase/functions/server/
├── index.tsx           # Backend API routes
└── kv_store.tsx        # Database utilities (DO NOT EDIT)

/src/styles/
├── index.css           # Global styles
├── tailwind.css        # Tailwind imports
└── theme.css           # Theme configuration
```

## Available Routes

### Public Routes:
- `/` - Homepage (main website)
- `/admin/setup` - Create first admin account
- `/admin/login` - Admin login page

### Protected Routes (Requires Login):
- `/admin/dashboard` - Admin dashboard to manage bookings

## Testing the Website

### Test the Booking Form:
1. Go to the homepage: http://localhost:5173
2. Scroll down to the "Book Your Cleaning Service" section
3. Fill out the form with:
   - Full name
   - Email
   - Phone number
   - Service type (select from dropdown)
   - Optional: Address, preferred date/time, message
4. Click "Request Free Quote"
5. You should see a success message

### Check the Admin Dashboard:
1. Log in to the admin dashboard
2. You should see the booking you just submitted
3. View details and test the delete functionality

## Common Issues & Solutions

### Issue: Port 5173 is already in use
**Solution:** The port might be occupied by another application. Either:
- Stop the other application using that port
- Or change the port in `vite.config.ts`

### Issue: Dependencies not installing
**Solution:** 
```bash
# Clear the cache and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Issue: White screen or errors in browser
**Solution:**
- Open browser developer console (F12)
- Check for error messages
- Make sure all dependencies are installed
- Try clearing browser cache

### Issue: Admin login not working
**Solution:**
- Make sure you created an admin account first at `/admin/setup`
- Check that you're using the correct email and password
- Check browser console for error messages

## Customization Tips

### Change Company Name:
Search for "CleanPro Toronto" in the codebase and replace with your company name.

### Update Contact Information:
Edit the `BookingForm.tsx` and `Footer.tsx` components to update:
- Phone number
- Email address
- Service area
- Business hours

### Modify Services:
Edit `src/app/components/Services.tsx` to add, remove, or modify service offerings.

### Change Colors/Theme:
Edit `src/styles/theme.css` to customize colors and styling.

### Add More Images:
You can replace any image URL in the components with your own images or use the Unsplash integration.

## Building for Production

When you're ready to deploy your website:

```bash
pnpm run build
```

This creates an optimized production build in the `/dist` folder.

## Need Help?

If you encounter any issues:
1. Check the browser console for errors (Press F12)
2. Check the terminal for error messages
3. Make sure all prerequisites are installed
4. Verify that all dependencies installed successfully

## Important Notes

- The Supabase backend is hosted in the cloud and doesn't require local setup
- All booking data is stored securely in the Supabase database
- The admin authentication system is fully functional
- Environment variables are pre-configured (no need to add API keys)

## Quick Start Summary

```bash
# 1. Install dependencies
pnpm install

# 2. Start development server
pnpm run dev

# 3. Open browser to http://localhost:5173

# 4. Set up admin account at /admin/setup

# 5. Start using the website!
```

---

**Congratulations! Your CleanPro Toronto website should now be running on your local machine!** 🎉