# Quick Start Guide - CleanPro Toronto

## 🚀 Getting Started in 3 Steps

### 1. Install & Run
```bash
# Install all dependencies
pnpm install

# Start the development server
pnpm run dev
```

**Your website will be available at:** http://localhost:5173

---

## 🔐 First-Time Admin Setup

### Create Your Admin Account
1. Visit: **http://localhost:5173/admin/setup**
2. Fill in:
   - **Name:** Your full name
   - **Email:** your@email.com
   - **Password:** At least 6 characters
3. Click **"Create Admin Account"**
4. Wait for success message ✅

---

## 📊 Access Admin Dashboard

### Login to Dashboard
1. Visit: **http://localhost:5173/admin/login**
2. Enter your email and password
3. Click **"Sign In"**
4. You'll be redirected to the dashboard

### What You Can Do:
- ✅ View all booking requests
- ✅ See customer details (name, email, phone, service type)
- ✅ Delete completed bookings
- ✅ Track statistics (total bookings, pending, monthly)

---

## 📝 Test the Booking Form

### Submit a Test Booking
1. Go to the homepage: **http://localhost:5173**
2. Scroll to the **"Book Your Cleaning Service"** section
3. Fill out the form:
   - Full Name: John Doe
   - Email: john@example.com
   - Phone: (416) 555-1234
   - Service Type: Select any service
   - (Other fields are optional)
4. Click **"Request Free Quote"**
5. Look for success message 🎉

### Verify It Works:
- Check the admin dashboard
- Your test booking should appear there

---

## 🌐 Important URLs

| Page | URL |
|------|-----|
| **Homepage** | http://localhost:5173 |
| **Admin Setup** (first time only) | http://localhost:5173/admin/setup |
| **Admin Login** | http://localhost:5173/admin/login |
| **Admin Dashboard** | http://localhost:5173/admin/dashboard |
| **Health Check** | https://gorxsvirvrsktcohlkfp.supabase.co/functions/v1/make-server-5a568e58/health |

---

## ⚠️ Common Issues

### Issue: "Session expired" when logging in
**Fix:** Clear your browser's localStorage and log in again
1. Press F12 → Application tab → Local Storage
2. Delete `admin_access_token` and `admin_user`
3. Log in again

### Issue: Booking form not submitting
**Fix:** 
1. Wait 60 seconds for the backend to deploy
2. Hard refresh your browser (Ctrl+Shift+R)
3. Try again

### Issue: Can't see bookings in dashboard
**Fix:**
1. Make sure you're logged in
2. Try logging out and logging in again
3. Submit a test booking from the homepage first

---

## 📂 Project Structure

```
/src/app/
├── pages/
│   ├── Home.tsx              ← Main website
│   ├── AdminLogin.tsx        ← Admin login page
│   ├── AdminDashboard.tsx    ← Admin dashboard
│   └── AdminSetupPage.tsx    ← Create first admin account
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── WhyChooseUs.tsx
│   ├── Testimonials.tsx
│   ├── BookingForm.tsx       ← Customer booking form
│   └── Footer.tsx
└── App.tsx                   ← Main app component
```

---

## 🛠️ Development Commands

```bash
# Install dependencies
pnpm install

# Start dev server (with hot reload)
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

---

## ✅ Testing Checklist

Before considering your setup complete, test:

- [ ] Homepage loads correctly
- [ ] All sections visible (Hero, About, Services, Why Choose Us, Testimonials, Booking, Footer)
- [ ] Can submit a booking via the form
- [ ] Can create an admin account
- [ ] Can log in to admin dashboard
- [ ] Submitted booking appears in dashboard
- [ ] Can delete a booking
- [ ] Can log out successfully

---

## 🎨 Customization

### Change Company Name
Search and replace "CleanPro Toronto" in all files

### Update Contact Info
Edit these files:
- `/src/app/components/BookingForm.tsx` (phone, email, hours)
- `/src/app/components/Footer.tsx` (footer info)

### Modify Services
Edit `/src/app/components/Services.tsx`

### Change Colors
Edit `/src/styles/theme.css`

---

## 📧 Support

If you encounter issues:
1. Check the **TROUBLESHOOTING.md** file
2. Look at browser console for errors (F12)
3. Verify backend is healthy at the health check URL

---

**You're all set! Enjoy your new cleaning services website!** 🎉
