"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Users, Shield, AlertTriangle, TrendingUp, Activity } from "lucide-react"

export default function CommandCenterPage() {
  return (
    <div className="p-3 sm:p-4 lg:p-6 space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="animate-slide-up">
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-wider">COMMAND CENTER</h1>
          <p className="text-xs sm:text-sm text-neutral-400">Real-time tactical operations overview</p>
        </div>
        <div className="flex items-center gap-2 sm:gap-4 animate-slide-left">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span className="text-xs text-white">LIVE</span>
          </div>
          <Badge className="bg-white/20 text-white animate-bounce text-xs">DEFCON 3</Badge>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <Card className="bg-neutral-900 border-neutral-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 animate-fade-in">
          <CardContent className="p-3 sm:p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-neutral-400 tracking-wider">ACTIVE OPERATIONS</p>
                <p className="text-lg sm:text-2xl font-bold text-white font-mono animate-count-up">23</p>
                <p className="text-xs text-white flex items-center gap-1 animate-slide-up">
                  <TrendingUp className="w-3 h-3 animate-bounce" />
                  <span className="hidden sm:inline">+2 from yesterday</span>
                  <span className="sm:hidden">+2</span>
                </p>
              </div>
              <Target className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500 animate-spin-slow" />
            </div>
          </CardContent>
        </Card>

        <Card
          className="bg-neutral-900 border-neutral-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/25 animate-fade-in"
          style={{ animationDelay: "200ms" }}
        >
          <CardContent className="p-3 sm:p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-neutral-400 tracking-wider">FIELD AGENTS</p>
                <p className="text-lg sm:text-2xl font-bold text-white font-mono animate-count-up">847</p>
                <p className="text-xs text-white flex items-center gap-1 animate-slide-up">
                  <Activity className="w-3 h-3 animate-pulse" />
                  <span className="hidden sm:inline">94% operational</span>
                  <span className="sm:hidden">94%</span>
                </p>
              </div>
              <Users className="w-6 h-6 sm:w-8 sm:h-8 text-white animate-pulse" />
            </div>
          </CardContent>
        </Card>

        <Card
          className="bg-neutral-900 border-neutral-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 animate-fade-in"
          style={{ animationDelay: "400ms" }}
        >
          <CardContent className="p-3 sm:p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-neutral-400 tracking-wider">THREAT LEVEL</p>
                <p className="text-lg sm:text-2xl font-bold text-orange-500 font-mono animate-glow">MED</p>
                <p className="text-xs text-orange-400 animate-blink">
                  <span className="hidden sm:inline">3 active threats</span>
                  <span className="sm:hidden">3 threats</span>
                </p>
              </div>
              <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500 animate-bounce" />
            </div>
          </CardContent>
        </Card>

        <Card
          className="bg-neutral-900 border-neutral-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/25 animate-fade-in"
          style={{ animationDelay: "600ms" }}
        >
          <CardContent className="p-3 sm:p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-neutral-400 tracking-wider">SYSTEM STATUS</p>
                <p className="text-lg sm:text-2xl font-bold text-white font-mono animate-count-up">98%</p>
                <p className="text-xs text-white">
                  <span className="hidden sm:inline">All systems nominal</span>
                  <span className="sm:hidden">Nominal</span>
                </p>
              </div>
              <AlertTriangle className="w-6 h-6 sm:w-8 sm:h-8 text-white animate-pulse" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
        {/* Agent Status Overview */}
        <Card className="lg:col-span-4 bg-neutral-900 border-neutral-700 animate-slide-up transition-all duration-300 hover:shadow-lg">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-neutral-300 tracking-wider">AGENT ALLOCATION</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6">
              <div className="text-center animate-fade-in">
                <div className="text-lg sm:text-2xl font-bold text-white font-mono animate-count-up">190</div>
                <div className="text-xs text-neutral-500">Active Field</div>
              </div>
              <div className="text-center animate-fade-in" style={{ animationDelay: "200ms" }}>
                <div className="text-lg sm:text-2xl font-bold text-white font-mono animate-count-up">990</div>
                <div className="text-xs text-neutral-500">Undercover</div>
              </div>
              <div className="text-center animate-fade-in" style={{ animationDelay: "400ms" }}>
                <div className="text-lg sm:text-2xl font-bold text-white font-mono animate-count-up">290</div>
                <div className="text-xs text-neutral-500">Training</div>
              </div>
            </div>

            <div className="space-y-2">
              {[
                { id: "G-078W", name: "VENGEFUL SPIRIT", status: "active" },
                { id: "G-079X", name: "OBSIDIAN SENTINEL", status: "standby" },
                { id: "G-080Y", name: "GHOSTLY FURY", status: "active" },
                { id: "G-081Z", name: "CURSED REVENANT", status: "compromised" },
              ].map((agent, index) => (
                <div
                  key={agent.id}
                  className="flex items-center justify-between p-2 bg-neutral-800 rounded hover:bg-neutral-700 transition-all duration-300 cursor-pointer hover:scale-105 animate-slide-right"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div
                      className={`w-2 h-2 rounded-full animate-pulse ${
                        agent.status === "active"
                          ? "bg-white"
                          : agent.status === "standby"
                            ? "bg-neutral-500"
                            : "bg-red-500"
                      }`}
                    ></div>
                    <div>
                      <div className="text-xs text-white font-mono">{agent.id}</div>
                      <div className="text-xs text-neutral-500 hidden sm:block">{agent.name}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Activity Log */}
        <Card
          className="lg:col-span-4 bg-neutral-900 border-neutral-700 animate-slide-up transition-all duration-300 hover:shadow-lg"
          style={{ animationDelay: "200ms" }}
        >
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-neutral-300 tracking-wider">ACTIVITY LOG</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 max-h-60 sm:max-h-80 overflow-y-auto">
              {[
                {
                  time: "25/06/2025 09:29",
                  agent: "gh0st_Fire",
                  action: "completed mission in",
                  location: "Berlin",
                  target: "zer0_Nigh",
                },
                {
                  time: "25/06/2025 08:12",
                  agent: "dr4g0n_V3in",
                  action: "extracted high-value target in",
                  location: "Cairo",
                  target: null,
                },
                {
                  time: "24/06/2025 22:55",
                  agent: "sn4ke_Sh4de",
                  action: "lost communication in",
                  location: "Havana",
                  target: null,
                },
                {
                  time: "24/06/2025 21:33",
                  agent: "ph4nt0m_R4ven",
                  action: "initiated surveillance in",
                  location: "Tokyo",
                  target: null,
                },
                {
                  time: "24/06/2025 19:45",
                  agent: "v0id_Walk3r",
                  action: "compromised security in",
                  location: "Moscow",
                  target: "d4rk_M4trix",
                },
              ].map((log, index) => (
                <div
                  key={index}
                  className="text-xs border-l-2 border-orange-500 pl-3 hover:bg-neutral-800 p-2 rounded transition-all duration-300 hover:scale-105 animate-slide-left"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-neutral-500 font-mono animate-fade-in text-xs">{log.time}</div>
                  <div className="text-white">
                    Agent <span className="text-orange-500 font-mono animate-glow">{log.agent}</span> {log.action}{" "}
                    <span className="text-white font-mono">{log.location}</span>
                    {log.target && (
                      <span>
                        {" "}
                        with agent <span className="text-orange-500 font-mono animate-glow">{log.target}</span>
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Encrypted Chat Activity */}
        <Card
          className="lg:col-span-4 bg-neutral-900 border-neutral-700 animate-slide-up transition-all duration-300 hover:shadow-lg"
          style={{ animationDelay: "400ms" }}
        >
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-neutral-300 tracking-wider">
              ENCRYPTED CHAT ACTIVITY
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 mb-4">
              <div className="absolute inset-0 border-2 border-white rounded-full opacity-60 animate-spin-slow"></div>
              <div className="absolute inset-2 border border-white rounded-full opacity-40 animate-spin-reverse"></div>
              <div className="absolute inset-4 border border-white rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute inset-6 border border-orange-500 rounded-full opacity-30 animate-ping"></div>
              {/* Grid lines */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-px bg-white opacity-30 animate-pulse"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-px h-full bg-white opacity-30 animate-pulse"></div>
              </div>
            </div>

            <div className="text-xs text-neutral-500 space-y-1 w-full font-mono">
              <div className="flex justify-between animate-fade-in">
                <span># 2025-06-17 14:23 UTC</span>
              </div>
              <div className="text-white animate-typing text-xs">
                {"[AGT:gh0stfire] ::: INIT >> ^^^ loading secure channel"}
              </div>
              <div className="text-orange-500 animate-glow text-xs">{"CH#2 | 1231.9082464.500...xR3"}</div>
              <div className="text-white animate-blink text-xs">{"KEY LOCKED"}</div>
              <div className="text-neutral-400 animate-fade-in text-xs" style={{ animationDelay: "1s" }}>
                {'MSG >> "...mission override initiated... awaiting delta node clearance"'}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Mission Activity Chart */}
        <Card
          className="lg:col-span-8 bg-neutral-900 border-neutral-700 animate-slide-up transition-all duration-300 hover:shadow-lg"
          style={{ animationDelay: "600ms" }}
        >
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-neutral-300 tracking-wider">
              MISSION ACTIVITY OVERVIEW
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-32 sm:h-48 relative">
              {/* Chart Grid */}
              <div className="absolute inset-0 grid grid-cols-6 sm:grid-cols-8 grid-rows-4 sm:grid-rows-6 opacity-20">
                {Array.from({ length: 32 }).map((_, i) => (
                  <div
                    key={i}
                    className="border border-neutral-700 animate-fade-in"
                    style={{ animationDelay: `${i * 20}ms` }}
                  ></div>
                ))}
              </div>

              <svg className="absolute inset-0 w-full h-full">
                <polyline
                  points="0,80 50,70 100,75 150,65 200,70 250,60 300,70 350,55"
                  fill="none"
                  stroke="#f97316"
                  strokeWidth="2"
                  className="animate-draw-line"
                />
                <polyline
                  points="0,100 50,95 100,90 150,85 200,90 250,95 300,85 350,80"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  className="animate-draw-line-delayed"
                />
                {/* Animated data points */}
                {[
                  { x: 50, y: 70 },
                  { x: 100, y: 75 },
                  { x: 150, y: 65 },
                  { x: 200, y: 70 },
                  { x: 250, y: 60 },
                  { x: 300, y: 70 },
                  { x: 350, y: 55 },
                ].map((point, index) => (
                  <circle
                    key={index}
                    cx={point.x}
                    cy={point.y}
                    r="3"
                    fill="#f97316"
                    className="animate-bounce"
                    style={{ animationDelay: `${index * 200}ms` }}
                  />
                ))}
              </svg>

              {/* Y-axis labels */}
              <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-neutral-500 -ml-5 font-mono">
                <span className="animate-fade-in">500</span>
                <span className="animate-fade-in" style={{ animationDelay: "200ms" }}>
                  400
                </span>
                <span className="animate-fade-in" style={{ animationDelay: "400ms" }}>
                  300
                </span>
                <span className="animate-fade-in" style={{ animationDelay: "600ms" }}>
                  200
                </span>
              </div>

              {/* X-axis labels */}
              <div className="absolute bottom-0 left-0 w-full flex justify-between text-xs text-neutral-500 -mb-6 font-mono">
                <span className="animate-slide-up">Jan 28, 2025</span>
                <span className="animate-slide-up hidden sm:inline" style={{ animationDelay: "300ms" }}>
                  Feb 28, 2025
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Mission Information */}
        <Card
          className="lg:col-span-4 bg-neutral-900 border-neutral-700 animate-slide-up transition-all duration-300 hover:shadow-lg"
          style={{ animationDelay: "800ms" }}
        >
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-neutral-300 tracking-wider">MISSION INFORMATION</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-4">
              <div className="animate-fade-in">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span className="text-xs text-white font-medium">Successful Missions</span>
                </div>
                <div className="space-y-2">
                  {[
                    { label: "High Risk Mission", value: "190" },
                    { label: "Medium Risk Mission", value: "426" },
                    { label: "Low Risk Mission", value: "920" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between text-xs animate-slide-right"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <span className="text-neutral-400">{item.label}</span>
                      <span className="text-white font-bold font-mono animate-count-up">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: "400ms" }}>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-red-500 font-medium">Failed Missions</span>
                </div>
                <div className="space-y-2">
                  {[
                    { label: "High Risk Mission", value: "190" },
                    { label: "Medium Risk Mission", value: "426" },
                    { label: "Low Risk Mission", value: "920" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between text-xs animate-slide-right"
                      style={{ animationDelay: `${(index + 3) * 100}ms` }}
                    >
                      <span className="text-neutral-400">{item.label}</span>
                      <span className="text-white font-bold font-mono animate-count-up">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
