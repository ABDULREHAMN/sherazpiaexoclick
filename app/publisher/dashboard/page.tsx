"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { DashboardContent } from "@/components/dashboard-content"

export default function DashboardPage() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isChecking, setIsChecking] = useState(true)

  useEffect(() => {
    // Check authentication status
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    
    if (isLoggedIn !== "true") {
      // Not authenticated - redirect to login immediately
      router.push("/login")
    } else {
      // Authenticated - show dashboard
      setIsAuthenticated(true)
    }
    
    setIsChecking(false)
  }, [router])

  // While checking authentication, show nothing (don't expose dashboard)
  if (isChecking || !isAuthenticated) {
    return null
  }

  return <DashboardContent />
}
