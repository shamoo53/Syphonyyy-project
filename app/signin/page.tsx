// "use client"

// import type React from "react"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Separator } from "@/components/ui/separator"
// import { Globe, ArrowLeft, Mail, Fingerprint, Github, Chrome } from "lucide-react"
// import Link from "next/link"

// export default function SignInPage() {
//   const [email, setEmail] = useState("")
//   const [isLoading, setIsLoading] = useState(false)
//   const [usePasskey, setUsePasskey] = useState(false)

//   const handleEmailSignIn = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsLoading(true)

//     // Simulate API call
//     await new Promise((resolve) => setTimeout(resolve, 2000))

//     // Redirect to dashboard after successful signin
//     window.location.href = "/dashboard"
//   }

//   const handlePasskeySignIn = async () => {
//     setIsLoading(true)

//     // Simulate passkey authentication
//     await new Promise((resolve) => setTimeout(resolve, 1500))

//     // Redirect to dashboard after successful signin
//     window.location.href = "/dashboard"
//   }

//   const handleSocialSignIn = async (provider: string) => {
//     setIsLoading(true)

//     // Simulate social authentication
//     await new Promise((resolve) => setTimeout(resolve, 1500))

//     // Redirect to dashboard after successful signin
//     window.location.href = "/dashboard"
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

//           <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
//           <p className="text-gray-300">Sign in to your DAO governance platform</p>
//         </div>

//         <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
//           <CardHeader className="space-y-1">
//             <CardTitle className="text-white">Sign in to Syphonyy</CardTitle>
//             <CardDescription className="text-gray-300">Choose your preferred authentication method</CardDescription>
//           </CardHeader>
//           <CardContent className="space-y-4">
//             {/* Passkey Authentication */}
//             <Button
//               onClick={handlePasskeySignIn}
//               disabled={isLoading}
//               className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
//             >
//               <Fingerprint className="w-4 h-4 mr-2" />
//               {isLoading ? "Authenticating..." : "Sign in with Passkey"}
//             </Button>

//             <div className="relative">
//               <div className="absolute inset-0 flex items-center">
//                 <Separator className="w-full bg-white/10" />
//               </div>
//               <div className="relative flex justify-center text-xs uppercase">
//                 <span className="bg-slate-900 px-2 text-gray-400">Or continue with</span>
//               </div>
//             </div>

//             {/* Social Authentication */}
//             <div className="grid grid-cols-2 gap-4">
//               <Button
//                 variant="outline"
//                 onClick={() => handleSocialSignIn("github")}
//                 disabled={isLoading}
//                 className="border-white/20 text-white hover:bg-white/10"
//               >
//                 <Github className="w-4 h-4 mr-2" />
//                 GitHub
//               </Button>
//               <Button
//                 variant="outline"
//                 onClick={() => handleSocialSignIn("google")}
//                 disabled={isLoading}
//                 className="border-white/20 text-white hover:bg-white/10"
//               >
//                 <Chrome className="w-4 h-4 mr-2" />
//                 Google
//               </Button>
//             </div>

//             <div className="relative">
//               <div className="absolute inset-0 flex items-center">
//                 <Separator className="w-full bg-white/10" />
//               </div>
//               <div className="relative flex justify-center text-xs uppercase">
//                 <span className="bg-slate-900 px-2 text-gray-400">Or use email</span>
//               </div>
//             </div>

//             {/* Email Authentication */}
//             <form onSubmit={handleEmailSignIn} className="space-y-4">
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
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-gray-400"
//                     required
//                   />
//                 </div>
//               </div>

//               <Button
//                 type="submit"
//                 className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
//                 disabled={isLoading}
//               >
//                 {isLoading ? "Sending Magic Link..." : "Send Magic Link"}
//               </Button>
//             </form>

//             <div className="mt-6 text-center">
//               <p className="text-gray-300">
//                 Don't have an account?{" "}
//                 <Link href="/signup" className="text-purple-400 hover:text-purple-300 underline">
//                   Sign up
//                 </Link>
//               </p>
//             </div>
//           </CardContent>
//         </Card>

//         {/* Security Features */}
//         <div className="mt-6 space-y-2">
//           <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
//             <div className="flex items-center space-x-1">
//               <Fingerprint className="w-4 h-4" />
//               <span>Passkey Ready</span>
//             </div>
//             <div className="flex items-center space-x-1">
//               <Globe className="w-4 h-4" />
//               <span>Stellar Secure</span>
//             </div>
//           </div>
//           <p className="text-center text-xs text-gray-500">
//             Protected by enterprise-grade security and blockchain technology
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }
