"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { StatisticsContent } from "@/components/statistics-content"

export default function StatisticsPage() {
  const router = useRouter()

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    if (isLoggedIn !== "true") {
      router.push("/login")
    }
  }, [router])

  return <StatisticsContent />
}
