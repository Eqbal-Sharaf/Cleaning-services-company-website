import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
import { createClient } from "npm:@supabase/supabase-js@2.47.15";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
    credentials: true,
  }),
);

// Health check endpoint
app.get("/make-server-5a568e58/health", (c) => {
  return c.json({ status: "ok" });
});

// Admin signup endpoint (create admin user)
app.post("/make-server-5a568e58/admin/signup", async (c) => {
  try {
    const { email, password, name } = await c.req.json();
    
    if (!email || !password || !name) {
      return c.json({ error: "Email, password, and name are required" }, 400);
    }

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
    );

    const { data, error } = await supabase.auth.admin.createUser({
      email,
      password,
      user_metadata: { name, role: 'admin' },
      // Automatically confirm the user's email since an email server hasn't been configured.
      email_confirm: true
    });

    if (error) {
      console.log(`Error creating admin user: ${error.message}`);
      return c.json({ error: error.message }, 400);
    }

    return c.json({ success: true, user: data.user });
  } catch (error) {
    console.log(`Error in admin signup: ${error}`);
    return c.json({ error: "Failed to create admin user" }, 500);
  }
});

// Submit booking endpoint
app.post("/make-server-5a568e58/bookings", async (c) => {
  try {
    const booking = await c.req.json();
    
    if (!booking.name || !booking.email || !booking.phone || !booking.service) {
      return c.json({ error: "Missing required fields" }, 400);
    }

    const bookingId = `booking_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const bookingData = {
      ...booking,
      id: bookingId,
      createdAt: new Date().toISOString(),
      status: 'pending'
    };

    await kv.set(`booking:${bookingId}`, bookingData);
    
    console.log(`New booking created: ${bookingId}`);
    return c.json({ success: true, bookingId, message: "Booking submitted successfully!" });
  } catch (error) {
    console.log(`Error submitting booking: ${error}`);
    return c.json({ error: "Failed to submit booking" }, 500);
  }
});

// Get all bookings (admin only)
app.get("/make-server-5a568e58/bookings", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
    );

    const { data: { user }, error } = await supabase.auth.getUser(accessToken);
    
    if (!user || error) {
      return c.json({ error: "Unauthorized - Please log in as admin" }, 401);
    }

    const bookings = await kv.getByPrefix('booking:');
    
    // Sort bookings by creation date (newest first)
    const sortedBookings = bookings.sort((a, b) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

    console.log(`Retrieved ${sortedBookings.length} bookings for admin`);
    return c.json({ bookings: sortedBookings });
  } catch (error) {
    console.log(`Error retrieving bookings: ${error}`);
    return c.json({ error: "Failed to retrieve bookings" }, 500);
  }
});

// Delete booking (admin only)
app.delete("/make-server-5a568e58/bookings/:id", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
    );

    const { data: { user }, error } = await supabase.auth.getUser(accessToken);
    
    if (!user || error) {
      return c.json({ error: "Unauthorized - Please log in as admin" }, 401);
    }

    const bookingId = c.req.param('id');
    await kv.del(`booking:${bookingId}`);
    
    console.log(`Booking deleted: ${bookingId}`);
    return c.json({ success: true, message: "Booking deleted successfully" });
  } catch (error) {
    console.log(`Error deleting booking: ${error}`);
    return c.json({ error: "Failed to delete booking" }, 500);
  }
});

Deno.serve(app.fetch);