"use client"

import { useState } from "react"
import { ChevronRight, Monitor, Settings, Shield, Target, Users, Bell, RefreshCw, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import CommandCenterPage from "./command-center/page"
import AgentNetworkPage from "./agent-network/page"
import OperationsPage from "./operations/page"
import IntelligencePage from "./intelligence/page"
import SystemsPage from "./systems/page"

export default function TacticalDashboard() {
  const [activeSection, setActiveSection] = useState("overview")
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [notifications, setNotifications] = useState([
    { id: 1, type: "alert", message: "Agent G-078W requesting immediate extraction", time: "2 min ago" },
    { id: 2, type: "success", message: "Operation SHADOW PROTOCOL 75% complete", time: "5 min ago" },
    { id: 3, type: "warning", message: "Communication lost with Agent sn4ke_Sh4de", time: "12 min ago" },
  ])
  const [showNotifications, setShowNotifications] = useState(false)

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`${
          sidebarCollapsed ? "w-16" : "w-64 sm:w-70"
        } bg-neutral-900 border-r border-neutral-700 transition-all duration-300 fixed md:relative z-50 md:z-auto h-full md:h-auto ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        } ${!sidebarCollapsed ? "md:block" : ""}`}
      >
        <div className="p-3 sm:p-4">
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <div className={`${sidebarCollapsed ? "hidden" : "block"} transition-all duration-300`}>
              <h1 className="text-orange-500 font-bold text-base sm:text-lg tracking-wider animate-pulse">
                TACTICAL OPS
              </h1>
              <p className="text-neutral-500 text-xs">v2.1.7 CLASSIFIED</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="text-neutral-400 hover:text-orange-500 transition-all duration-300 hover:scale-110 hidden md:flex"
            >
              <ChevronRight
                className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${sidebarCollapsed ? "" : "rotate-180"}`}
              />
            </Button>
          </div>

          <nav className="space-y-1 sm:space-y-2">
            {[
              { id: "overview", icon: Monitor, label: "COMMAND CENTER" },
              { id: "agents", icon: Users, label: "AGENT NETWORK" },
              { id: "operations", icon: Target, label: "OPERATIONS" },
              { id: "intelligence", icon: Shield, label: "INTELLIGENCE" },
              { id: "systems", icon: Settings, label: "SYSTEMS" },
            ].map((item, index) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id)
                  setMobileMenuOpen(false)
                }}
                className={`w-full flex items-center ${sidebarCollapsed ? "justify-center" : "gap-2 sm:gap-3"} p-2 sm:p-3 rounded transition-all duration-300 transform hover:scale-105 ${
                  activeSection === item.id
                    ? "bg-orange-500 text-white shadow-lg shadow-orange-500/25"
                    : "text-neutral-400 hover:text-white hover:bg-neutral-800"
                } animate-fade-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <item.icon
                  className={`${sidebarCollapsed ? "w-6 h-6" : "w-4 h-4 sm:w-5 sm:h-5"} transition-all duration-300 hover:rotate-12`}
                />
                {!sidebarCollapsed && <span className="text-xs sm:text-sm font-medium">{item.label}</span>}
              </button>
            ))}
          </nav>

          {!sidebarCollapsed && (
            <div className="mt-4 sm:mt-6 space-y-1 sm:space-y-2 animate-slide-up">
              <h3 className="text-xs text-neutral-500 tracking-wider mb-2 sm:mb-3">QUICK ACTIONS</h3>
              <Button
                className="w-full bg-red-500/20 hover:bg-red-500/30 text-red-400 border border-red-500/30 text-xs transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25"
                size="sm"
              >
                EMERGENCY DEPLOY
              </Button>
              <Button
                className="w-full bg-orange-500/20 hover:bg-orange-500/30 text-orange-400 border border-orange-500/30 text-xs transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25"
                size="sm"
              >
                NEW MISSION
              </Button>
              <Button
                className="w-full bg-neutral-700 hover:bg-neutral-600 text-neutral-300 text-xs transition-all duration-300 hover:scale-105"
                size="sm"
              >
                PAUSE ALL OPS
              </Button>
            </div>
          )}

          {!sidebarCollapsed && (
            <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-neutral-800 border border-neutral-700 rounded animate-glow">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-xs text-white">SYSTEM ONLINE</span>
              </div>
              <div className="text-xs text-neutral-500 space-y-1">
                <div className="animate-fade-in">UPTIME: 72:14:33</div>
                <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
                  AGENTS: 847 ACTIVE
                </div>
                <div className="animate-fade-in" style={{ animationDelay: "400ms" }}>
                  MISSIONS: 23 ONGOING
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden animate-fade-in"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className={`flex-1 flex flex-col ${!sidebarCollapsed ? "md:ml-0" : ""}`}>
        {/* Top Toolbar */}
        <div className="h-14 sm:h-16 bg-neutral-800 border-b border-neutral-700 flex items-center justify-between px-3 sm:px-6">
          <div className="flex items-center gap-2 sm:gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-neutral-400 hover:text-orange-500 transition-all duration-300 hover:scale-110"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
            <div className="text-xs sm:text-sm text-neutral-400 animate-slide-right">
              <span className="hidden sm:inline">TACTICAL COMMAND / </span>
              <span className="text-orange-500 animate-pulse">
                {activeSection === "overview"
                  ? "COMMAND CENTER"
                  : activeSection === "agents"
                    ? "AGENT NETWORK"
                    : activeSection === "operations"
                      ? "OPERATIONS"
                      : activeSection === "intelligence"
                        ? "INTELLIGENCE"
                        : "SYSTEMS"}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="text-xs text-neutral-500 animate-fade-in hidden sm:block">
              LAST UPDATE: 05/06/2025 20:00 UTC
            </div>
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="text-neutral-400 hover:text-orange-500 relative transition-all duration-300 hover:scale-110"
                onClick={() => setShowNotifications(!showNotifications)}
              >
                <Bell className="w-4 h-4 animate-bounce" />
                {notifications.length > 0 && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                    <span className="text-xs text-white font-bold">{notifications.length}</span>
                  </div>
                )}
              </Button>

              {showNotifications && (
                <div className="absolute right-0 top-12 w-72 sm:w-80 bg-neutral-900 border border-neutral-700 rounded-lg shadow-xl z-50 animate-slide-down">
                  <div className="p-3 border-b border-neutral-700">
                    <h3 className="text-sm font-medium text-white">LIVE ALERTS</h3>
                  </div>
                  <div className="max-h-64 overflow-y-auto">
                    {notifications.map((notification, index) => (
                      <div
                        key={notification.id}
                        className="p-3 border-b border-neutral-800 hover:bg-neutral-800/50 transition-all duration-300 animate-fade-in"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div
                          className={`flex items-start gap-2 ${
                            notification.type === "alert"
                              ? "text-red-400"
                              : notification.type === "success"
                                ? "text-white"
                                : "text-orange-400"
                          }`}
                        >
                          <div
                            className={`w-2 h-2 rounded-full mt-2 animate-pulse ${
                              notification.type === "alert"
                                ? "bg-red-500"
                                : notification.type === "success"
                                  ? "bg-white"
                                  : "bg-orange-500"
                            }`}
                          ></div>
                          <div className="flex-1">
                            <p className="text-xs">{notification.message}</p>
                            <p className="text-xs text-neutral-500 mt-1">{notification.time}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 border-t border-neutral-700">
                    <Button
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white text-xs transition-all duration-300 hover:scale-105"
                      size="sm"
                    >
                      VIEW ALL ALERTS
                    </Button>
                  </div>
                </div>
              )}
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="text-neutral-400 hover:text-orange-500 transition-all duration-300 hover:scale-110 hover:rotate-180"
            >
              <RefreshCw className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-auto">
          {activeSection === "overview" && <CommandCenterPage />}
          {activeSection === "agents" && <AgentNetworkPage />}
          {activeSection === "operations" && <OperationsPage />}
          {activeSection === "intelligence" && <IntelligencePage />}
          {activeSection === "systems" && <SystemsPage />}
        </div>
      </div>
    </div>
  )
}
