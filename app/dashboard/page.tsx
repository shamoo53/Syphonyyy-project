"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Globe,
  Vote,
  Wallet,
  Users,
  Bot,
  TrendingUp,
  Shield,
  Plus,
  MoreHorizontal,
  CheckCircle,
  AlertCircle,
  DollarSign,
  Activity,
  Calendar,
  Settings,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock data
  const daoStats = {
    totalMembers: 247,
    activeProposals: 8,
    treasuryValue: 125000,
    votingPower: 85,
  }

  const recentProposals = [
    {
      id: 1,
      title: "Increase Marketing Budget for Q2",
      status: "active",
      votes: { for: 156, against: 23, abstain: 12 },
      timeLeft: "2 days",
      aiScore: 92,
    },
    {
      id: 2,
      title: "Partnership with DeFi Protocol XYZ",
      status: "passed",
      votes: { for: 189, against: 45, abstain: 8 },
      timeLeft: "Completed",
      aiScore: 88,
    },
    {
      id: 3,
      title: "Treasury Diversification Strategy",
      status: "pending",
      votes: { for: 0, against: 0, abstain: 0 },
      timeLeft: "5 days",
      aiScore: 95,
    },
  ]

  const treasuryAssets = [
    { symbol: "XLM", amount: 45000, value: 5400, change: 2.5 },
    { symbol: "USDC", amount: 75000, value: 75000, change: 0.1 },
    { symbol: "BTC", amount: 1.2, value: 42000, change: -1.2 },
    { symbol: "ETH", amount: 15, value: 30000, change: 3.8 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Syphonyy</span>
            </div>
            <Badge className="bg-green-500/20 text-green-300 border-green-500/30">TechDAO</Badge>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <Settings className="w-5 h-5" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder-user.jpg" alt="User" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Sign out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Welcome back, John</h1>
          <p className="text-gray-300">Here's what's happening with your DAO today</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="bg-white/5 border-white/10">
            <TabsTrigger value="overview" className="data-[state=active]:bg-purple-600">
              Overview
            </TabsTrigger>
            <TabsTrigger value="proposals" className="data-[state=active]:bg-purple-600">
              Proposals
            </TabsTrigger>
            <TabsTrigger value="treasury" className="data-[state=active]:bg-purple-600">
              Treasury
            </TabsTrigger>
            <TabsTrigger value="members" className="data-[state=active]:bg-purple-600">
              Members
            </TabsTrigger>
            <TabsTrigger value="ai-insights" className="data-[state=active]:bg-purple-600">
              AI Insights
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-300">Total Members</CardTitle>
                  <Users className="h-4 w-4 text-blue-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">{daoStats.totalMembers}</div>
                  <p className="text-xs text-green-400">+12% from last month</p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-300">Active Proposals</CardTitle>
                  <Vote className="h-4 w-4 text-purple-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">{daoStats.activeProposals}</div>
                  <p className="text-xs text-yellow-400">3 ending soon</p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-300">Treasury Value</CardTitle>
                  <DollarSign className="h-4 w-4 text-green-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">${daoStats.treasuryValue.toLocaleString()}</div>
                  <p className="text-xs text-green-400">+5.2% this week</p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-300">Voting Power</CardTitle>
                  <TrendingUp className="h-4 w-4 text-orange-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">{daoStats.votingPower}%</div>
                  <p className="text-xs text-gray-400">Your influence</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Recent Proposals</CardTitle>
                  <CardDescription className="text-gray-300">Latest governance activity</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentProposals.slice(0, 3).map((proposal) => (
                    <div key={proposal.id} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                      <div className="flex-1">
                        <h4 className="text-white font-medium">{proposal.title}</h4>
                        <div className="flex items-center space-x-4 mt-1">
                          <Badge
                            className={
                              proposal.status === "active"
                                ? "bg-blue-500/20 text-blue-300"
                                : proposal.status === "passed"
                                  ? "bg-green-500/20 text-green-300"
                                  : "bg-yellow-500/20 text-yellow-300"
                            }
                          >
                            {proposal.status}
                          </Badge>
                          <span className="text-sm text-gray-400">{proposal.timeLeft}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-white">AI Score: {proposal.aiScore}%</div>
                        <div className="text-xs text-gray-400">
                          {proposal.votes.for + proposal.votes.against + proposal.votes.abstain} votes
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">AI Recommendations</CardTitle>
                  <CardDescription className="text-gray-300">Intelligent governance insights</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
                    <div className="flex items-start space-x-3">
                      <Bot className="w-5 h-5 text-purple-400 mt-0.5" />
                      <div>
                        <h4 className="text-white font-medium">Optimize Voting Schedule</h4>
                        <p className="text-sm text-gray-300 mt-1">
                          Consider scheduling the treasury proposal during peak member activity hours for better
                          participation.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                    <div className="flex items-start space-x-3">
                      <Shield className="w-5 h-5 text-blue-400 mt-0.5" />
                      <div>
                        <h4 className="text-white font-medium">Security Alert</h4>
                        <p className="text-sm text-gray-300 mt-1">
                          Enable multi-signature requirements for proposals above $50K threshold.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                    <div className="flex items-start space-x-3">
                      <TrendingUp className="w-5 h-5 text-green-400 mt-0.5" />
                      <div>
                        <h4 className="text-white font-medium">Engagement Boost</h4>
                        <p className="text-sm text-gray-300 mt-1">
                          Member engagement is up 23% this month. Great time to propose important initiatives.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="proposals" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">Proposals</h2>
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                <Plus className="w-4 h-4 mr-2" />
                New Proposal
              </Button>
            </div>

            <div className="space-y-4">
              {recentProposals.map((proposal) => (
                <Card key={proposal.id} className="bg-white/5 border-white/10 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <CardTitle className="text-white">{proposal.title}</CardTitle>
                        <Badge
                          className={
                            proposal.status === "active"
                              ? "bg-blue-500/20 text-blue-300"
                              : proposal.status === "passed"
                                ? "bg-green-500/20 text-green-300"
                                : "bg-yellow-500/20 text-yellow-300"
                          }
                        >
                          {proposal.status}
                        </Badge>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Share</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    <CardDescription className="text-gray-300">
                      AI Confidence Score: {proposal.aiScore}% • {proposal.timeLeft}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-400">{proposal.votes.for}</div>
                          <div className="text-sm text-gray-400">For</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-red-400">{proposal.votes.against}</div>
                          <div className="text-sm text-gray-400">Against</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-gray-400">{proposal.votes.abstain}</div>
                          <div className="text-sm text-gray-400">Abstain</div>
                        </div>
                      </div>

                      {proposal.status === "active" && (
                        <div className="flex space-x-2">
                          <Button className="flex-1 bg-green-600 hover:bg-green-700">Vote For</Button>
                          <Button className="flex-1 bg-red-600 hover:bg-red-700">Vote Against</Button>
                          <Button
                            variant="outline"
                            className="flex-1 border-white/20 text-white hover:bg-white/10 bg-transparent"
                          >
                            Abstain
                          </Button>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="treasury" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">Treasury Management</h2>
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                <Wallet className="w-4 h-4 mr-2" />
                Manage Assets
              </Button>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Asset Portfolio</CardTitle>
                  <CardDescription className="text-gray-300">Current treasury holdings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {treasuryAssets.map((asset) => (
                      <div key={asset.symbol} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-bold">{asset.symbol[0]}</span>
                          </div>
                          <div>
                            <div className="text-white font-medium">{asset.symbol}</div>
                            <div className="text-sm text-gray-400">{asset.amount.toLocaleString()} tokens</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-white font-medium">${asset.value.toLocaleString()}</div>
                          <div className={`text-sm ${asset.change >= 0 ? "text-green-400" : "text-red-400"}`}>
                            {asset.change >= 0 ? "+" : ""}
                            {asset.change}%
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Recent Transactions</CardTitle>
                  <CardDescription className="text-gray-300">Latest treasury activity</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                          <TrendingUp className="w-4 h-4 text-green-400" />
                        </div>
                        <div>
                          <div className="text-white font-medium">Received Payment</div>
                          <div className="text-sm text-gray-400">From Partnership Deal</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-green-400 font-medium">+$15,000</div>
                        <div className="text-sm text-gray-400">2 hours ago</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center">
                          <Activity className="w-4 h-4 text-red-400" />
                        </div>
                        <div>
                          <div className="text-white font-medium">Marketing Expense</div>
                          <div className="text-sm text-gray-400">Q2 Campaign Budget</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-red-400 font-medium">-$8,500</div>
                        <div className="text-sm text-gray-400">1 day ago</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                          <Wallet className="w-4 h-4 text-blue-400" />
                        </div>
                        <div>
                          <div className="text-white font-medium">Asset Rebalancing</div>
                          <div className="text-sm text-gray-400">Portfolio Optimization</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-blue-400 font-medium">Rebalanced</div>
                        <div className="text-sm text-gray-400">3 days ago</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="members" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">DAO Members</h2>
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                <Plus className="w-4 h-4 mr-2" />
                Invite Members
              </Button>
            </div>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Member Overview</CardTitle>
                <CardDescription className="text-gray-300">Active community members and their roles</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Alice Johnson", role: "Founder", votingPower: 15.2, status: "online" },
                    { name: "Bob Smith", role: "Core Developer", votingPower: 12.8, status: "online" },
                    { name: "Carol Davis", role: "Community Manager", votingPower: 8.5, status: "offline" },
                    { name: "David Wilson", role: "Advisor", votingPower: 6.3, status: "online" },
                    { name: "Eve Brown", role: "Contributor", votingPower: 4.1, status: "offline" },
                  ].map((member, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={`/placeholder-user.jpg`} alt={member.name} />
                          <AvatarFallback>
                            {member.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="text-white font-medium">{member.name}</div>
                          <div className="text-sm text-gray-400">{member.role}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <div className="text-white font-medium">{member.votingPower}%</div>
                          <div className="text-sm text-gray-400">Voting Power</div>
                        </div>
                        <div
                          className={`w-2 h-2 rounded-full ${member.status === "online" ? "bg-green-400" : "bg-gray-400"}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ai-insights" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">AI Insights</h2>
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                <Bot className="w-4 h-4 mr-2" />
                Generate Report
              </Button>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Governance Health Score</CardTitle>
                  <CardDescription className="text-gray-300">AI-powered analysis of DAO performance</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-400 mb-2">87/100</div>
                    <p className="text-gray-300">Excellent governance health</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">Member Engagement</span>
                        <span className="text-white">92%</span>
                      </div>
                      <Progress value={92} className="h-2" />
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">Proposal Quality</span>
                        <span className="text-white">85%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">Decision Speed</span>
                        <span className="text-white">78%</span>
                      </div>
                      <Progress value={78} className="h-2" />
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">Treasury Management</span>
                        <span className="text-white">94%</span>
                      </div>
                      <Progress value={94} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Smart Recommendations</CardTitle>
                  <CardDescription className="text-gray-300">AI-generated suggestions for improvement</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5" />
                      <div>
                        <h4 className="text-white font-medium">Proposal Timing Optimization</h4>
                        <p className="text-sm text-gray-300 mt-1">
                          Schedule important votes on Tuesdays and Wednesdays for 23% higher participation rates.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
                    <div className="flex items-start space-x-3">
                      <AlertCircle className="w-5 h-5 text-purple-400 mt-0.5" />
                      <div>
                        <h4 className="text-white font-medium">Member Retention Strategy</h4>
                        <p className="text-sm text-gray-300 mt-1">
                          Implement quarterly member appreciation events to improve retention by an estimated 15%.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                    <div className="flex items-start space-x-3">
                      <TrendingUp className="w-5 h-5 text-green-400 mt-0.5" />
                      <div>
                        <h4 className="text-white font-medium">Treasury Diversification</h4>
                        <p className="text-sm text-gray-300 mt-1">
                          Consider allocating 20% of treasury to stable yield-generating assets for consistent returns.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                    <div className="flex items-start space-x-3">
                      <Calendar className="w-5 h-5 text-yellow-400 mt-0.5" />
                      <div>
                        <h4 className="text-white font-medium">Governance Calendar</h4>
                        <p className="text-sm text-gray-300 mt-1">
                          Establish a predictable governance schedule to increase member preparation and participation.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Predictive Analytics</CardTitle>
                <CardDescription className="text-gray-300">
                  AI forecasts for upcoming governance decisions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 rounded-lg bg-white/5">
                    <div className="text-2xl font-bold text-blue-400 mb-2">94%</div>
                    <div className="text-sm text-gray-300">Predicted approval rate for next marketing proposal</div>
                  </div>

                  <div className="text-center p-4 rounded-lg bg-white/5">
                    <div className="text-2xl font-bold text-green-400 mb-2">156</div>
                    <div className="text-sm text-gray-300">Expected voters for treasury diversification proposal</div>
                  </div>

                  <div className="text-center p-4 rounded-lg bg-white/5">
                    <div className="text-2xl font-bold text-purple-400 mb-2">72h</div>
                    <div className="text-sm text-gray-300">Optimal voting period for maximum participation</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
