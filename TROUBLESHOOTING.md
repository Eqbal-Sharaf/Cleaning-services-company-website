# Troubleshooting Guide - CleanPro Toronto

## Issue: Booking Form Not Submitting / CORS Errors

### What I Fixed:

1. **Updated CORS configuration** in the server to properly handle requests from localhost
2. **Fixed authentication token validation** to prevent "session expired" errors
3. **Added proper token verification** before fetching bookings in the admin dashboard

### Steps to Resolve:

#### Step 1: Wait for Backend to Redeploy
The backend Supabase function needs time to redeploy with the new changes.
- **Wait 60-90 seconds** after the changes were made
- The server should automatically redeploy

#### Step 2: Clear Your Browser Data
1. Open your browser's Developer Tools (Press F12)
2. Go to the "Application" or "Storage" tab
3. Clear all localStorage data:
   - Find "Local Storage" in the left sidebar
   - Click on your localhost URL
   - Delete all items (especially `admin_access_token` and `admin_user`)
4. Refresh the page (Ctrl+R or Cmd+R)

#### Step 3: Test the Booking Form

1. Open http://localhost:5173 in your browser
2. Scroll to the booking form
3. Fill out the form with test data:
   - Name: Test User
   - Email: test@example.com
   - Phone: (416) 555-1234
   - Service: Select any service
   - (Optional fields can be left blank)
4. Click "Request Free Quote"
5. You should see a success message

**Expected Result:** Green success toast notification saying "Booking submitted successfully! We'll contact you soon."

#### Step 4: Test Admin Login

1. Go to http://localhost:5173/admin/setup
2. Create a new admin account with:
   - Name: Your name
   - Email: your@email.com
   - Password: A secure password (min 6 characters)
3. Click "Create Admin Account"
4. You should see a success message

#### Step 5: Access Admin Dashboard

1. Go to http://localhost:5173/admin/login
2. Enter the email and password you just created
3. Click "Sign In"
4. You should be redirected to the dashboard
5. You should see the test booking you submitted earlier

## Common Errors and Solutions

### Error: "Session expired. Please log in again"

**Cause:** The authentication token in localStorage is invalid or expired.

**Solution:**
1. Clear browser localStorage (see Step 2 above)
2. Log out completely
3. Log in again with your credentials

### Error: "Failed to fetch" in console

**Cause:** The backend server might still be deploying or CORS is not configured.

**Solution:**
1. Wait 60-90 seconds for the server to redeploy
2. Check if the health endpoint is working:
   - Visit: https://gorxsvirvrsktcohlkfp.supabase.co/functions/v1/make-server-5a568e58/health
   - You should see: `{"status":"ok"}`
3. If you don't see the "ok" status, wait a bit longer

### Error: "Unauthorized" (401) when fetching bookings

**Cause:** Invalid or missing authentication token.

**Solution:**
1. Log out of the admin dashboard
2. Clear localStorage
3. Log in again
4. If the issue persists, create a new admin account at /admin/setup

### Error: Booking form stays at "Submitting..."

**Cause:** CORS issue or network error.

**Solution:**
1. Open browser console (F12) and check for errors
2. Look for CORS-related errors
3. Wait for the backend to finish deploying (60-90 seconds)
4. Hard refresh the page (Ctrl+Shift+R or Cmd+Shift+R)
5. Try submitting again

## Testing Checklist

Use this checklist to verify everything is working:

- [ ] Health endpoint returns `{"status":"ok"}`
- [ ] Can create a new admin account at /admin/setup
- [ ] Can log in successfully at /admin/login
- [ ] Dashboard loads without errors
- [ ] Can submit a booking from the homepage form
- [ ] Submitted booking appears in the admin dashboard
- [ ] Can delete a booking from the dashboard
- [ ] Stats update correctly (Total Bookings, Pending, This Month)
- [ ] Can log out successfully

## Still Having Issues?

### Check Browser Console

1. Press F12 to open Developer Tools
2. Go to the "Console" tab
3. Look for red error messages
4. Check what the error says

### Check Network Tab

1. Press F12 to open Developer Tools
2. Go to the "Network" tab
3. Try to submit the booking form
4. Look at the request to the `/bookings` endpoint
5. Check:
   - Status code (should be 200)
   - Response (should show success)
   - Headers (should include CORS headers)

### Verify Environment

Make sure you're running the correct commands:

```bash
# Stop the server if running
# Press Ctrl+C in the terminal

# Restart the development server
pnpm run dev
```

### Test with a Different Browser

Sometimes browser cache can cause issues. Try:
- Chrome/Edge
- Firefox
- Safari
- Or use Incognito/Private mode

## Backend Logs

The backend logs all requests. If you have access to Supabase dashboard:

1. Go to your Supabase project
2. Navigate to Edge Functions
3. Click on "make-server-5a568e58"
4. Check the logs for any errors

You should see logs like:
- `New booking created: booking_xxxxx`
- `Retrieved X bookings for admin`
- `Booking deleted: booking_xxxxx`

## Contact Information

If you're still experiencing issues after following all these steps:

1. Note down the exact error message from the browser console
2. Check the Network tab to see the failed request details
3. Verify the backend health endpoint is responding

---

**Last Updated:** After fixing CORS and authentication issues
