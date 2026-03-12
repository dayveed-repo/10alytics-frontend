"use client";
import AuthLayout from "@/app/components/AuthLayout";
import CustomInput from "@/app/components/CustomInput";
import { setClientCookie } from "@/app/lib/cookies";
import { useAuthStore } from "@/app/store/authStore";
import { Loader2 } from "lucide-react";
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const setAuth = useAuthStore((s) => s.setAuth);
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });
  const [processing, setprocessing] = useState(false);
  const router = useRouter();

  async function handleLogin() {
    if (!formData.email) {
      return toast.error("Failed to Login, Email is equired");
    }

    if (!formData.password) {
      return toast.error("Failed to Login, Password is equired");
    }
    setprocessing(true);

    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === "success") {
          setAuth(res.token, res.user);
          setClientCookie("apiToken", res.token);
          setClientCookie(
            "apiTokenExp",
            `${moment().add(1, "days").unix() * 1000}`,
          );
          router.push("/dashboard");
          return toast.success("Login successful");
        } else {
          setprocessing(false);
          return toast.error(
            `Failed to login: ${res.error || "An error occured"}`,
          );
        }
        // store cookie via Next.js route
      })
      .catch((error) => {
        setprocessing(false);
        console.log("Login error", error);
        return toast.success(`Failed to login`);
      });
  }
  return (
    <AuthLayout title="Welcome Back, Login">
      <Toaster />
      <div className="space-y-4">
        <CustomInput
          label="Email"
          onChange={(val) => setformData({ ...formData, email: val })}
          value={formData.email}
        />

        <CustomInput
          label="Password"
          onChange={(val) => setformData({ ...formData, password: val })}
          value={formData.password}
          type="password"
        />
      </div>

      <button className="base-button w-full mt-10" onClick={handleLogin}>
        {processing ? (
          <Loader2 className="h-5 w-5 animate-spin mx-auto" />
        ) : (
          "Login"
        )}
      </button>

      <p className="mt-3 text-gray-600 text-sm text-center">
        Don't have an account?{" "}
        <Link className="hover:underline text-primary" href="/signup">
          Signup
        </Link>
      </p>
    </AuthLayout>
  );
};

export default Login;
