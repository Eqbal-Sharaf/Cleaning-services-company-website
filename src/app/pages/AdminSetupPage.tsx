import { useNavigate } from "react-router";
import { Sparkles } from "lucide-react";
import { Button } from "../components/ui/button";
import { AdminSetup } from "../components/AdminSetup";

export function AdminSetupPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Sparkles className="w-16 h-16 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">CleanPro Toronto</h1>
          <p className="text-gray-600">Admin Account Setup</p>
        </div>

        <AdminSetup />

        <div className="text-center mt-8">
          <Button variant="outline" onClick={() => navigate("/admin/login")}>
            Go to Login
          </Button>
          <span className="mx-4 text-gray-400">|</span>
          <Button variant="outline" onClick={() => navigate("/")}>
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}
