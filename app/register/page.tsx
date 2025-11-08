"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  ArrowLeft,
  Mail,
  Lock,
  User,
  UserPlus,
  Building2,
  Briefcase,
  Rocket,
  Phone,
  ExternalLink,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const roles = [
  { id: "founder", label: "Founder", icon: Rocket },
  { id: "professional", label: "Professional", icon: Briefcase },
  { id: "student", label: "Student", icon: User },
  { id: "recruiter", label: "Recruiter", icon: Building2 },
];

function RegisterForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const plan = searchParams.get("plan");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "founder",
    countryCode: "",
    phoneNumber: "",
    socialMediaUrl: "",
    agreeToTerms: false,
  });

  // Set role based on plan parameter
  useEffect(() => {
    if (plan === "pro") {
      setFormData((prev) => ({ ...prev, userType: "founder" }));
    }
  }, [plan]);

  const validateForm = () => {
    // Validate full name (Required)
    if (!formData.fullName || !formData.fullName.trim()) {
      return "Full name is required";
    }
    if (formData.fullName.trim().length < 2) {
      return "Full name must be at least 2 characters";
    }
    if (formData.fullName.trim().length > 100) {
      return "Full name cannot exceed 100 characters";
    }

    // Check if full name contains only letters, spaces, and common punctuation
    const nameRegex = /^[a-zA-Z\s\-\.\']+$/;
    if (!nameRegex.test(formData.fullName.trim())) {
      return "Full name can only contain letters, spaces, hyphens, dots, and apostrophes";
    }

    // Validate email (Required)
    if (!formData.email || !formData.email.trim()) {
      return "Email address is required";
    }
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!emailRegex.test(formData.email.trim())) {
      return "Please enter a valid email address";
    }

    // Validate country code (Required)
    if (!formData.countryCode || !formData.countryCode.trim()) {
      return "Country code is required";
    }
    const cleanCountryCode = formData.countryCode.replace(/[^\d]/g, "");
    if (cleanCountryCode.length !== 2) {
      return "Country code must be exactly 2 digits";
    }

    // Validate phone number (Required)
    if (!formData.phoneNumber || !formData.phoneNumber.trim()) {
      return "Phone number is required";
    }
    const cleanPhone = formData.phoneNumber.replace(/[^\d]/g, "");
  

    // Validate user type (Required)
    if (!formData.userType) {
      return "Please select your role";
    }
    const validUserTypes = ["founder", "professional", "student", "recruiter"];
    if (!validUserTypes.includes(formData.userType)) {
      return "Please select a valid role";
    }

    // Validate password (Required)
    if (!formData.password) {
      return "Password is required";
    }
    if (formData.password.length < 6) {
      return "Password must be at least 6 characters long";
    }
    if (formData.password.length > 128) {
      return "Password cannot exceed 128 characters";
    }
    // Check for at least one letter and one number
    if (!/(?=.*[a-zA-Z])(?=.*\d)/.test(formData.password)) {
      return "Password must contain at least one letter and one number";
    }

    // Validate password confirmation (Required)
    if (!formData.confirmPassword) {
      return "Please confirm your password";
    }
    if (formData.password !== formData.confirmPassword) {
      return "Passwords do not match";
    }

    // Validate social media URL (Optional but if provided must be valid)
    if (formData.socialMediaUrl && formData.socialMediaUrl.trim()) {
      try {
        const url = new URL(formData.socialMediaUrl.trim());
        // Check if it's a valid HTTP/HTTPS URL
        if (!["http:", "https:"].includes(url.protocol)) {
          return "Social media URL must start with http:// or https://";
        }
      } catch {
        return "Please enter a valid URL for social media (e.g., https://linkedin.com/in/username)";
      }
    }

    // Validate terms agreement (Required)
    if (!formData.agreeToTerms) {
      return "You must agree to the Terms of Service and Privacy Policy to continue";
    }

    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    console.log("handleSubmit called"); // Debug log
    e.preventDefault();
    e.stopPropagation(); // Prevent event bubbling

    // Ensure we don't call NextAuth
    if (e.target !== e.currentTarget) {
      console.log("Event target mismatch, returning"); // Debug log
      return;
    }

    setIsLoading(true);
    setError(null);

    console.log("Form submitted with data:", formData); // Debug log

    // Validate form
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      setIsLoading(false);
      return;
    }

    try {
      console.log("Calling registration API..."); // Debug log

      const requestPayload = {
        fullName: formData.fullName.trim(),
        email: formData.email.trim().toLowerCase(),
        userType: formData.userType,
        password: formData.password,
        phoneNumber: `+${formData.countryCode.trim()}${formData.phoneNumber.trim()}`,
        socialMediaUrl: formData.socialMediaUrl.trim() || undefined,
      };

      console.log("Request payload:", requestPayload); // Debug log

      // Call registration API
      const response = await fetch(
        "https://growthlabserver.vercel.app/api/auth/register",
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(requestPayload),
        }
      );

      console.log("Response status:", response.status); // Debug log
      console.log("Response headers:", response.headers); // Debug log

      const data = await response.json();
      console.log("Response data:", data); // Debug log

      if (!response.ok) {
        // Use the backend's error message if available
        const errorMessage =
          data.message || `HTTP error! status: ${response.status}`;
        throw new Error(errorMessage);
      }

      if (data.success) {
        // Store token and user data
        if (data.data && data.data.token) {
          localStorage.setItem("token", data.data.token);
          localStorage.setItem("user", JSON.stringify(data.data.user));
        }

        // Show success message
        setIsSuccess(true);
      } else {
        setError(data.message || "Registration failed. Please try again.");
      }
    } catch (err: any) {
      console.error("Registration error:", err); // Debug log
      if (err.name === "TypeError" && err.message.includes("fetch")) {
        setError(
          "Cannot connect to server. Please make sure the backend server is running"
        );
      } else {
        setError(
          err.message ||
            "Network error. Please check your connection and try again."
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialSignIn = async (
    provider: "google" | "linkedin" | "apple"
  ) => {
    // Temporarily disabled - will implement after registration API is working
    setError(
      `Social sign-in with ${provider} is temporarily disabled. Please use email registration.`
    );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Success Component
  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle className="text-green-600" size={48} />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-3xl font-bold text-gray-900 mb-4"
              >
                Thank you for your registration!
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-xl text-gray-600 mb-8"
              >
                We will get back to you soon
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="space-y-4"
              >
                <Link
                  href="/"
                  className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Back to Home
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to home</span>
          </Link>

          {/* Register Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <UserPlus className="text-white" size={32} />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Join GrowthLab
              </h1>
              <p className="text-gray-600">
                Create your account and start connecting with innovators
              </p>
            </div>

            {/* Form Instructions */}
            <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-700">
                � <strong>Registration Requirements:</strong> All fields marked
                with <span className="text-red-500">*</span> are required.
                Password must be 6+ characters with letters and numbers.
              </p>
            </div>

            {/* Social Sign Up Options - Temporarily Disabled */}
            <div className="space-y-3 mb-6 opacity-30 pointer-events-none">
              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                  {error}
                </div>
              )}
              <button
                type="button"
                onClick={() => handleSocialSignIn("google")}
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-3 px-4 py-3 border-2 border-gray-300 rounded-lg hover:border-gray-400 transition-colors bg-white text-gray-700 font-medium shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Continue with Google
              </button>

              <button
                type="button"
                onClick={() => handleSocialSignIn("linkedin")}
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-3 px-4 py-3 border-2 border-gray-300 rounded-lg hover:border-gray-400 transition-colors bg-white text-gray-700 font-medium shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#0077B5">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Continue with LinkedIn
              </button>

              <button
                type="button"
                onClick={() => handleSocialSignIn("apple")}
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-3 px-4 py-3 border-2 border-gray-300 rounded-lg hover:border-gray-400 transition-colors bg-black text-white font-medium shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                Continue with Apple
              </button>
            </div>

            {/* Divider */}
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or continue with email
                </span>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              noValidate
              action="javascript:void(0)"
            >
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="John Doe"
                    required
                    minLength={2}
                    maxLength={100}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-3">
                  {/* Country Code */}
                  <div className="w-24">
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
                        +
                      </span>
                      <input
                        id="countryCode"
                        name="countryCode"
                        type="tel"
                        value={formData.countryCode}
                        onChange={handleChange}
                        className="w-full pl-6 pr-2 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-center"
                        placeholder="91"
                        required
                        minLength={2}
                        maxLength={2}
                        pattern="[0-9]{2}"
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div className="flex-1">
                    <div className="relative">
                      <Phone
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        size={20}
                      />
                      <input
                        id="phoneNumber"
                        name="phoneNumber"
                        type="tel"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="1234567890"
                        required
                        minLength={10}
                        maxLength={10}
                        pattern="[0-9]{10}"
                      />
                    </div>
                  </div>
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  Country code (2 digits) + Phone number (10 digits) - e.g., +91
                  for India, +1 for USA
                </p>
              </div>

              {/* Social Media URL */}
              <div>
                <label
                  htmlFor="socialMediaUrl"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  LinkedIn URL / Social Media URL
                  <span className="text-gray-400 text-xs ml-1">(Optional)</span>
                </label>
                <div className="relative">
                  <ExternalLink
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <input
                    id="socialMediaUrl"
                    name="socialMediaUrl"
                    type="url"
                    value={formData.socialMediaUrl}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="https://linkedin.com/in/johndoe"
                  />
                </div>
              </div>

              {/* User Type Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  I am a... <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {roles.map((role) => {
                    const Icon = role.icon;
                    return (
                      <label
                        key={role.id}
                        className={`flex items-center space-x-3 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                          formData.userType === role.id
                            ? "border-primary bg-primary/5"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <input
                          type="radio"
                          name="userType"
                          value={role.id}
                          checked={formData.userType === role.id}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <Icon
                          className={
                            formData.userType === role.id
                              ? "text-primary"
                              : "text-gray-400"
                          }
                          size={24}
                        />
                        <span className="font-medium text-gray-700">
                          {role.label}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Lock
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Create a password"
                    required
                    minLength={6}
                  />
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  Minimum 6 characters with at least one letter and one number
                </p>
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Confirm Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Lock
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Confirm your password"
                    required
                  />
                </div>
              </div>

              {/* Terms */}
              <div>
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        agreeToTerms: e.target.checked,
                      })
                    }
                    className="mt-1 rounded border-gray-300 text-primary focus:ring-primary focus:ring-offset-0"
                    required
                  />
                  <span className="ml-2 text-sm text-gray-600">
                    I agree to the{" "}
                    <Link
                      href="/terms"
                      className="text-primary hover:underline"
                    >
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/privacy"
                      className="text-primary hover:underline"
                    >
                      Privacy Policy
                    </Link>
                    <span className="text-red-500 ml-1">*</span>
                  </span>
                </label>
                {!formData.agreeToTerms && (
                  <p className="mt-1 text-xs text-gray-500">
                    Required: You must agree to continue
                  </p>
                )}
              </div>

              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                  {error}
                </div>
              )}

              <button
                type="button"
                disabled={isLoading}
                onClick={async (e) => {
                  console.log(
                    "Direct button click - bypassing form submission"
                  ); // Debug log
                  e.preventDefault();
                  e.stopPropagation();

                  // Call registration directly, bypassing any form interceptors
                  setIsLoading(true);
                  setError(null);

                  // Validate form
                  const validationError = validateForm();
                  if (validationError) {
                    setError(validationError);
                    setIsLoading(false);
                    return;
                  }

                  try {
                    console.log("Direct API call - bypassing NextAuth"); // Debug log

                    const requestPayload = {
                      fullName: formData.fullName.trim(),
                      email: formData.email.trim().toLowerCase(),
                      userType: formData.userType,
                      password: formData.password,
                      phoneNumber: `+${formData.countryCode.trim()}${formData.phoneNumber.trim()}`,
                      socialMediaUrl:
                        formData.socialMediaUrl.trim() || undefined,
                    };

                    console.log("Direct request payload:", requestPayload); // Debug log

                    const response = await fetch(
                      "https://growthlabserver.vercel.app/api/auth/register",
                      {
                        method: "POST",
                        mode: "cors",
                        headers: {
                          "Content-Type": "application/json",
                          Accept: "application/json",
                        },
                        body: JSON.stringify(requestPayload),
                      }
                    );

                    console.log("Direct API response status:", response.status); // Debug log

                    const data = await response.json();
                    console.log("Direct API response data:", data); // Debug log

                    if (!response.ok) {
                      // Use the backend's error message if available
                      const errorMessage =
                        data.message ||
                        `HTTP error! status: ${response.status}`;
                      throw new Error(errorMessage);
                    }

                    if (data.success) {
                      if (data?.data && data?.data?.token) {
                        localStorage.setItem("token", data.data.token);
                        localStorage.setItem(
                          "user",
                          JSON.stringify(data.data.user)
                        );
                      }
                      setIsSuccess(true);
                    } else {
                      setError(
                        data.message || "Registration failed. Please try again."
                      );
                    }
                  } catch (err: any) {
                    console.error("Direct registration error:", err);
                    if (
                      err.name === "TypeError" &&
                      err.message.includes("fetch")
                    ) {
                      setError(
                        "Cannot connect to server. Please make sure the backend server is running"
                      );
                    } else {
                      setError(
                        err.message ||
                          "Network error. Please check your connection and try again."
                      );
                    }
                  } finally {
                    setIsLoading(false);
                  }
                }}
                className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Creating Account..." : "Create Account"}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-primary font-semibold hover:underline"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function RegisterPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-gray-600">Loading...</p>
          </div>
        </div>
      }
    >
      <RegisterForm />
    </Suspense>
  );
}
