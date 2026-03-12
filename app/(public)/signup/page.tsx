"use client";
import AuthLayout from "@/app/components/AuthLayout";
import CustomInput from "@/app/components/CustomInput";
import PasswordCriteria from "@/app/components/PasswordCriteria";
import { setClientCookie } from "@/app/lib/cookies";
import { useAuthStore } from "@/app/store/authStore";
import { Loader2 } from "lucide-react";
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Signup = () => {
  const [formData, setformData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });
  const [processing, setprocessing] = useState(false);
  const [passwordStatus, setpasswordStatus] = useState({
    length: false,
    uppercase: false,
    number: false,
    special: false,
  });
  const router = useRouter();

  async function handleSignup() {
    if (!formData.firstName) {
      return toast.error("Failed to Login, First Name is equired");
    }

    if (!formData.lastName) {
      return toast.error("Failed to Login, Last Name is equired");
    }

    if (!formData.email) {
      return toast.error("Failed to Login, Email is equired");
    }

    if (!formData.password) {
      return toast.error("Failed to Login, Password is equired");
    }

    if (!passwordStatus.length) {
      return toast.error(
        "Failed to Login, Password must be at least 6 characters long",
      );
    }
    if (!passwordStatus.uppercase) {
      return toast.error(
        "Failed to Login, Password must have at least one uppercase letter",
      );
    }

    if (!passwordStatus.number) {
      return toast.error(
        "Failed to Login, Password must have at least one number",
      );
    }

    if (!passwordStatus.special) {
      return toast.error(
        "Failed to Login, Password must have at least one special character",
      );
    }

    setprocessing(true);

    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
        firstName: formData.firstName,
        lastName: formData.lastName,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === "success") {
          router.push("/login");
          setprocessing(false);
          return toast.success("Signup successful");
        } else {
          setprocessing(false);
          return toast.error(
            `Failed to signup: ${res.error || "An error occured"}`,
          );
        }
        // store cookie via Next.js route
      })
      .catch((error) => {
        setprocessing(false);
        console.log("Signup error", error);
        return toast.success(`Failed to signup user`);
      });
  }
  return (
    <AuthLayout title="Welcome Back, Login">
      <Toaster />
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <CustomInput
            label="First Name"
            onChange={(val) => setformData({ ...formData, firstName: val })}
            value={formData.firstName}
          />

          <CustomInput
            label="Last Name"
            onChange={(val) => setformData({ ...formData, lastName: val })}
            value={formData.lastName}
          />
        </div>

        <CustomInput
          label="Email"
          onChange={(val) => setformData({ ...formData, email: val })}
          value={formData.email}
        />

        <CustomInput
          label="Password"
          onChange={(val) => {
            setformData({ ...formData, password: val });
            setpasswordStatus({
              length: val.length >= 8,
              uppercase: /[A-Z]/.test(val),
              number: /\d/.test(val),
              special: /[!@#$%^&*]/.test(val),
            });
          }}
          value={formData.password}
          type="password"
        />

        {!!formData.password && <PasswordCriteria rules={passwordStatus} />}
      </div>

      <button className="base-button w-full mt-10" onClick={handleSignup}>
        {processing ? (
          <Loader2 className="h-5 w-5 animate-spin mx-auto" />
        ) : (
          "Signup"
        )}
      </button>

      <p className="mt-3 text-gray-600 text-sm text-center">
        Already have an account?{" "}
        <Link className="hover:underline text-primary" href="/login">
          Login
        </Link>
      </p>
    </AuthLayout>
  );
};

export default Signup;
