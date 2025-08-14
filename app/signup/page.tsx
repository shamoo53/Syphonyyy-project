"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Globe, ArrowLeft, Mail, User, Building, Shield } from "lucide-react";
import Link from "next/link";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organizationName: "",
    role: "",
    agreeToTerms: false,
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    window.location.href = "/dashboard";
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="w-full max-w-md"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center space-x-2 mb-6 text-white hover:text-purple-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to home</span>
          </Link>

          <div className="flex items-center justify-center space-x-2 mb-4">
            <motion.div
              initial={{ rotate: -10, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center"
            >
              <Globe className="w-6 h-6 text-white" />
            </motion.div>
            <span className="text-2xl font-bold text-white">Syphonyy</span>
          </div>

          <h1 className="text-3xl font-bold text-white mb-2">
            Create Your Account
          </h1>
          <p className="text-gray-300">Join the future of DAO governance</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader className="space-y-1">
              <CardTitle className="text-white">Sign up for Syphonyy</CardTitle>
              <CardDescription className="text-gray-300">
                Enter your information to create your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  {
                    id: "firstName",
                    icon: User,
                    placeholder: "John",
                    label: "First Name",
                    delay: 0.5,
                  },
                  {
                    id: "lastName",
                    icon: User,
                    placeholder: "Doe",
                    label: "Last Name",
                    delay: 0.6,
                  },
                  {
                    id: "email",
                    icon: Mail,
                    placeholder: "john@example.com",
                    label: "Email",
                    delay: 0.7,
                    type: "email",
                  },
                  {
                    id: "organizationName",
                    icon: Building,
                    placeholder: "Your DAO or Organization",
                    label: "Organization Name",
                    delay: 0.8,
                  },
                  {
                    id: "role",
                    icon: Shield,
                    placeholder: "e.g., Founder, Board Member, Developer",
                    label: "Your Role",
                    delay: 0.9,
                  },
                ].map((field, idx) => (
                  <motion.div
                    key={field.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: field.delay }}
                    className={idx < 2 ? "grid grid-cols-2 gap-4" : ""}
                  >
                    {idx < 2 ? (
                      <>
                        {idx === 0 && (
                          <div className="space-y-2">
                            <Label htmlFor="firstName" className="text-white">
                              {field.label}
                            </Label>
                            <div className="relative">
                              <field.icon className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                              <Input
                                id={field.id}
                                placeholder={field.placeholder}
                                value={
                                  formData[
                                    field.id as keyof typeof formData
                                  ] as string
                                }
                                onChange={(e) =>
                                  handleInputChange(field.id, e.target.value)
                                }
                                className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                                required
                              />
                            </div>
                          </div>
                        )}
                        {idx === 1 && (
                          <div className="space-y-2">
                            <Label htmlFor="lastName" className="text-white">
                              {field.label}
                            </Label>
                            <div className="relative">
                              <field.icon className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                              <Input
                                id={field.id}
                                placeholder={field.placeholder}
                                value={
                                  formData[
                                    field.id as keyof typeof formData
                                  ] as string
                                }
                                onChange={(e) =>
                                  handleInputChange(field.id, e.target.value)
                                }
                                className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                                required
                              />
                            </div>
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="space-y-2">
                        <Label htmlFor={field.id} className="text-white">
                          {field.label}
                        </Label>
                        <div className="relative">
                          <field.icon className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id={field.id}
                            type={field.type || "text"}
                            placeholder={field.placeholder}
                            value={
                              formData[
                                field.id as keyof typeof formData
                              ] as string
                            }
                            onChange={(e) =>
                              handleInputChange(field.id, e.target.value)
                            }
                            className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                            required
                          />
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="flex items-center space-x-2"
                >
                  <Checkbox
                    id="terms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) =>
                      handleInputChange("agreeToTerms", checked as boolean)
                    }
                    className="border-white/20 data-[state=checked]:bg-purple-600"
                  />
                  <Label htmlFor="terms" className="text-sm text-gray-300">
                    I agree to the{" "}
                    <Link
                      href="#"
                      className="text-purple-400 hover:text-purple-300 underline"
                    >
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="#"
                      className="text-purple-400 hover:text-purple-300 underline"
                    >
                      Privacy Policy
                    </Link>
                  </Label>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                >
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                    disabled={isLoading || !formData.agreeToTerms}
                  >
                    {isLoading ? "Creating Account..." : "Create Account"}
                  </Button>
                </motion.div>
              </form>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="mt-6 text-center"
              >
                <p className="text-gray-300">
                  Already have an account?{" "}
                  <Link
                    href="/signin"
                    className="text-purple-400 hover:text-purple-300 underline"
                  >
                    Sign in
                  </Link>
                </p>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Security Notice */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="mt-6 text-center"
        >
          <p className="text-sm text-gray-400">
            🔒 Your data is protected with enterprise-grade security
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
