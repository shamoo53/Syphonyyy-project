"use client"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, Vote, Bot, Wallet, Users, Zap, Lock, Globe, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm transform transition-all duration-1000 ease-out translate-y-0 opacity-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <Globe className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Syphonyy</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-300 hover:text-white transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">
              How it Works
            </Link>
            <Link href="#security" className="text-gray-300 hover:text-white transition-colors">
              Security
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link href="/signin">
              <Button variant="ghost" className="text-white hover:bg-white/10">
                Sign In
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge
            className={`mb-6 bg-purple-500/20 text-purple-300 border-purple-500/30 transform transition-all duration-1000 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
          >
            AI-Powered DAO Governance on Stellar
          </Badge>
          <h1
            className={`text-5xl md:text-7xl font-bold text-white mb-6 leading-tight transform transition-all duration-1000 ease-out delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          >
            Redefine
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
              {" "}
              Decentralized{" "}
            </span>
            Governance
          </h1>
          <p
            className={`text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed transform transition-all duration-1000 ease-out delay-400 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          >
            Combining smart contract automation, secure escrow protection, and intelligent decision-making to
            revolutionize DAO board management on the Stellar blockchain.
          </p>
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-1000 ease-out delay-600 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          >
            <Link href="/signup">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-3 hover:scale-105 transform transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25"
              >
                Launch Your DAO
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-3 bg-transparent hover:scale-105 transform transition-all duration-300 hover:shadow-2xl hover:shadow-white/10"
            >
              View Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Powerful Features</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Everything you need to run a modern, efficient, and secure DAO
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 hover:scale-105 transform transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 group">
              <CardHeader>
                <Vote className="w-12 h-12 text-purple-400 mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" />
                <CardTitle className="text-white group-hover:text-purple-300 transition-colors duration-300">
                  On-Chain Voting
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Transparent, immutable voting with real-time governance tracking
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 hover:scale-105 transform transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 group">
              <CardHeader>
                <Bot className="w-12 h-12 text-blue-400 mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" />
                <CardTitle className="text-white group-hover:text-blue-300 transition-colors duration-300">
                  AI Automation
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Intelligent proposal generation, optimization, and decision-making assistance
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 hover:scale-105 transform transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20 group">
              <CardHeader>
                <Shield className="w-12 h-12 text-green-400 mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" />
                <CardTitle className="text-white group-hover:text-green-300 transition-colors duration-300">
                  Secure Escrow
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Trust-minimized escrow system protecting organizational assets
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 hover:scale-105 transform transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/20 group">
              <CardHeader>
                <Wallet className="w-12 h-12 text-yellow-400 mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" />
                <CardTitle className="text-white group-hover:text-yellow-300 transition-colors duration-300">
                  Multi-Sig Treasury
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Robust treasury management with multi-signature wallet support
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 hover:scale-105 transform transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20 group">
              <CardHeader>
                <Lock className="w-12 h-12 text-red-400 mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" />
                <CardTitle className="text-white group-hover:text-red-300 transition-colors duration-300">
                  Passkey Auth
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Passwordless authentication for enhanced security and user experience
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 hover:scale-105 transform transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20 group">
              <CardHeader>
                <Zap className="w-12 h-12 text-orange-400 mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" />
                <CardTitle className="text-white group-hover:text-orange-300 transition-colors duration-300">
                  Stellar Integration
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Built on Stellar with Rust & Soroban smart contracts for scalability
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">How Syphonyy Works</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">Streamlined workflow for efficient DAO governance</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group hover:scale-105 transform transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-2xl group-hover:shadow-purple-500/50 transition-all duration-500 animate-bounce">
                <Users className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                1. Create Your DAO
              </h3>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                Set up your decentralized organization with customizable governance parameters and member management
              </p>
            </div>

            <div className="text-center group hover:scale-105 transform transition-all duration-500">
              <div
                className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-2xl group-hover:shadow-blue-500/50 transition-all duration-500 animate-bounce"
                style={{ animationDelay: "0.2s" }}
              >
                <Bot className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                2. AI-Assisted Proposals
              </h3>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                Let AI help draft, optimize, and analyze proposals for better decision-making outcomes
              </p>
            </div>

            <div className="text-center group hover:scale-105 transform transition-all duration-500">
              <div
                className="w-16 h-16 bg-gradient-to-r from-green-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-2xl group-hover:shadow-green-500/50 transition-all duration-500 animate-bounce"
                style={{ animationDelay: "0.4s" }}
              >
                <Vote className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-green-300 transition-colors duration-300">
                3. Secure Voting
              </h3>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                Execute transparent on-chain voting with automated execution and secure fund management
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Enterprise-Grade Security</h2>
              <p className="text-gray-300 text-lg mb-8">
                Built with security-first principles, Syphonyy protects your DAO with multiple layers of protection
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-white">Rust & Soroban smart contracts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-white">Multi-signature wallet integration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-white">Passwordless passkey authentication</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-white">Input validation and rate limiting</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-white">Trust-minimized escrow system</span>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="w-full h-80 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl border border-white/10 flex items-center justify-center hover:from-purple-500/30 hover:to-blue-500/30 transition-all duration-500">
                <Shield className="w-32 h-32 text-white/20 group-hover:text-white/40 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 animate-pulse" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your DAO?</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join the future of decentralized governance with AI-powered automation and enterprise-grade security
          </p>
          <Link href="/signup">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-3 hover:scale-110 transform transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 animate-pulse hover:animate-none"
            >
              Start Building Your DAO
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/20 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Syphonyy</span>
              </div>
              <p className="text-gray-400">AI-powered DAO governance platform on the Stellar blockchain</p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <div className="space-y-2">
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Features
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Pricing
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Documentation
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <div className="space-y-2">
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Careers
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <div className="space-y-2">
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Help Center
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
                //link
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Status
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Syphonyy. All rights reserveddfg.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
