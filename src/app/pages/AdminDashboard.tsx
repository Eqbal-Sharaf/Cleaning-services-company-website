import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { LogOut, Trash2, Calendar, Clock, Mail, Phone, MapPin, User } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { toast } from "sonner";
import { projectId } from "/utils/supabase/info";
import { supabase } from "/src/utils/supabase/client";

interface Booking {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  address?: string;
  preferredDate?: string;
  preferredTime?: string;
  message?: string;
  createdAt: string;
  status: string;
}

export function AdminDashboard() {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [adminName, setAdminName] = useState("");

  useEffect(() => {
    checkAuthAndFetchBookings();
  }, []);

  const checkAuthAndFetchBookings = async () => {
    // Check if user is authenticated
    const { data: { session }, error } = await supabase.auth.getSession();
    
    if (error || !session) {
      toast.error("Please log in to access the dashboard");
      navigate("/admin/login");
      return;
    }

    // Get user info
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      setAdminName(user.user_metadata?.name || user.email || "");
    }

    // Fetch bookings
    await fetchBookings(session.access_token);
  };

  const fetchBookings = async (token: string) => {
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-5a568e58/bookings`,
        {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        }
      );

      if (response.status === 401) {
        toast.error("Session expired. Please log in again.");
        await supabase.auth.signOut();
        navigate("/admin/login");
        return;
      }

      const data = await response.json();

      if (response.ok) {
        setBookings(data.bookings);
      } else {
        toast.error(data.error || "Failed to fetch bookings");
        console.error("Fetch bookings error:", data.error);
      }
    } catch (error) {
      toast.error("An error occurred while fetching bookings");
      console.error("Error fetching bookings:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast.success("Logged out successfully");
    navigate("/admin/login");
  };

  const handleDeleteBooking = async (bookingId: string) => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      toast.error("Please log in again");
      navigate("/admin/login");
      return;
    }

    if (!confirm("Are you sure you want to delete this booking?")) {
      return;
    }

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-5a568e58/bookings/${bookingId}`,
        {
          method: "DELETE",
          headers: {
            "Authorization": `Bearer ${session.access_token}`
          }
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast.success("Booking deleted successfully");
        setBookings(bookings.filter(b => b.id !== bookingId));
      } else {
        toast.error(data.error || "Failed to delete booking");
        console.error("Delete booking error:", data.error);
      }
    } catch (error) {
      toast.error("An error occurred while deleting the booking");
      console.error("Error deleting booking:", error);
    }
  };

  const getServiceDisplayName = (service: string) => {
    const serviceMap: { [key: string]: string } = {
      residential: "Residential Cleaning",
      commercial: "Commercial Cleaning",
      deep: "Deep Cleaning",
      moveinout: "Move In/Out Cleaning"
    };
    return serviceMap[service] || service;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-sm text-gray-600">Welcome back, {adminName}</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" onClick={() => navigate("/")}>
                View Website
              </Button>
              <Button variant="destructive" onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Bookings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900">{bookings.length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Pending</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">
                {bookings.filter(b => b.status === 'pending').length}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">This Month</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">
                {bookings.filter(b => {
                  const bookingDate = new Date(b.createdAt);
                  const now = new Date();
                  return bookingDate.getMonth() === now.getMonth() &&
                         bookingDate.getFullYear() === now.getFullYear();
                }).length}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bookings List */}
        <Card>
          <CardHeader>
            <CardTitle>All Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="text-center py-12 text-gray-500">Loading bookings...</div>
            ) : bookings.length === 0 ? (
              <div className="text-center py-12 text-gray-500">No bookings yet</div>
            ) : (
              <div className="space-y-6">
                {bookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="border rounded-lg p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-gray-900">{booking.name}</h3>
                          <Badge variant="secondary">{getServiceDisplayName(booking.service)}</Badge>
                        </div>
                      </div>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDeleteBooking(booking.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Mail className="w-4 h-4" />
                        <span>{booking.email}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Phone className="w-4 h-4" />
                        <span>{booking.phone}</span>
                      </div>
                      {booking.address && (
                        <div className="flex items-center space-x-2 text-gray-600">
                          <MapPin className="w-4 h-4" />
                          <span>{booking.address}</span>
                        </div>
                      )}
                      {booking.preferredDate && (
                        <div className="flex items-center space-x-2 text-gray-600">
                          <Calendar className="w-4 h-4" />
                          <span>{booking.preferredDate}</span>
                          {booking.preferredTime && <span>at {booking.preferredTime}</span>}
                        </div>
                      )}
                    </div>

                    {booking.message && (
                      <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-700"><strong>Message:</strong> {booking.message}</p>
                      </div>
                    )}

                    <div className="mt-4 pt-4 border-t flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-3 h-3" />
                        <span>Submitted {formatDate(booking.createdAt)}</span>
                      </div>
                      <Badge variant={booking.status === 'pending' ? 'default' : 'secondary'}>
                        {booking.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}