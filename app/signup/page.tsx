// "use client"

// import type React from "react"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Checkbox } from "@/components/ui/checkbox"
// import { Globe, ArrowLeft, Mail, User, Building, Shield } from "lucide-react"
// import Link from "next/link"

// export default function SignUpPage() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     organizationName: "",
//     role: "",
//     agreeToTerms: false,
//   })

//   const [isLoading, setIsLoading] = useState(false)

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsLoading(true)

//     // Simulate API call
//     await new Promise((resolve) => setTimeout(resolve, 2000))

//     // Redirect to dashboard after successful signup
//     window.location.href = "/dashboard"
//   }

//   const handleInputChange = (field: string, value: string | boolean) => {
//     setFormData((prev) => ({ ...prev, [field]: value }))
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
//       <div className="w-full max-w-md">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <Link
//             href="/"
//             className="inline-flex items-center space-x-2 mb-6 text-white hover:text-purple-300 transition-colors"
//           >
//             <ArrowLeft className="w-4 h-4" />
//             <span>Back to home</span>
//           </Link>

//           <div className="flex items-center justify-center space-x-2 mb-4">
//             <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
//               <Globe className="w-6 h-6 text-white" />
//             </div>
//             <span className="text-2xl font-bold text-white">Syphonyy</span>
//           </div>

//           <h1 className="text-3xl font-bold text-white mb-2">Create Your Account</h1>
//           <p className="text-gray-300">Join the future of DAO governance</p>
//         </div>

//         <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
//           <CardHeader className="space-y-1">
//             <CardTitle className="text-white">Sign up for Syphonyy</CardTitle>
//             <CardDescription className="text-gray-300">Enter your information to create your account</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="space-y-2">
//                   <Label htmlFor="firstName" className="text-white">
//                     First Name
//                   </Label>
//                   <div className="relative">
//                     <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
//                     <Input
//                       id="firstName"
//                       placeholder="John"
//                       value={formData.firstName}
//                       onChange={(e) => handleInputChange("firstName", e.target.value)}
//                       className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-gray-400"
//                       required
//                     />
//                   </div>
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="lastName" className="text-white">
//                     Last Name
//                   </Label>
//                   <div className="relative">
//                     <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
//                     <Input
//                       id="lastName"
//                       placeholder="Doe"
//                       value={formData.lastName}
//                       onChange={(e) => handleInputChange("lastName", e.target.value)}
//                       className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-gray-400"
//                       required
//                     />
//                   </div>
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="email" className="text-white">
//                   Email
//                 </Label>
//                 <div className="relative">
//                   <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
//                   <Input
//                     id="email"
//                     type="email"
//                     placeholder="john@example.com"
//                     value={formData.email}
//                     onChange={(e) => handleInputChange("email", e.target.value)}
//                     className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-gray-400"
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="organizationName" className="text-white">
//                   Organization Name
//                 </Label>
//                 <div className="relative">
//                   <Building className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
//                   <Input
//                     id="organizationName"
//                     placeholder="Your DAO or Organization"
//                     value={formData.organizationName}
//                     onChange={(e) => handleInputChange("organizationName", e.target.value)}
//                     className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-gray-400"
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="role" className="text-white">
//                   Your Role
//                 </Label>
//                 <div className="relative">
//                   <Shield className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
//                   <Input
//                     id="role"
//                     placeholder="e.g., Founder, Board Member, Developer"
//                     value={formData.role}
//                     onChange={(e) => handleInputChange("role", e.target.value)}
//                     className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-gray-400"
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="flex items-center space-x-2">
//                 <Checkbox
//                   id="terms"
//                   checked={formData.agreeToTerms}
//                   onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
//                   className="border-white/20 data-[state=checked]:bg-purple-600"
//                 />
//                 <Label htmlFor="terms" className="text-sm text-gray-300">
//                   I agree to the{" "}
//                   <Link href="#" className="text-purple-400 hover:text-purple-300 underline">
//                     Terms of Service
//                   </Link>{" "}
//                   and{" "}
//                   <Link href="#" className="text-purple-400 hover:text-purple-300 underline">
//                     Privacy Policy
//                   </Link>
//                 </Label>
//               </div>

//               <Button
//                 type="submit"
//                 className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
//                 disabled={isLoading || !formData.agreeToTerms}
//               >
//                 {isLoading ? "Creating Account..." : "Create Account"}
//               </Button>
//             </form>

//             <div className="mt-6 text-center">
//               <p className="text-gray-300">
//                 Already have an account?{" "}
//                 <Link href="/signin" className="text-purple-400 hover:text-purple-300 underline">
//                   Sign in
//                 </Link>
//               </p>
//             </div>
//           </CardContent>
//         </Card>

//         {/* Security Notice */}
//         <div className="mt-6 text-center">
//           <p className="text-sm text-gray-400">🔒 Your data is protected with enterprise-grade security</p>
//         </div>
//       </div>
//     </div>
//   )
// }
