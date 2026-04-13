"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { createClient } from "@/lib/supabase/client"

export default function ChangePasswordPage() {
  const router = useRouter()
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [passwordStrength, setPasswordStrength] = useState(0)

  useEffect(() => {
    checkAuthentication()
  }, [])

  const checkAuthentication = async () => {
    const supabase = createClient()
    const { data } = await supabase.auth.getSession()
    
    if (!data.session) {
      router.push("/login")
      return
    }
    
    setIsAuthenticated(true)
  }

  const calculatePasswordStrength = (password: string): number => {
    let strength = 0
    if (password.length >= 8) strength += 1
    if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength += 1
    if (password.match(/\d/)) strength += 1
    if (password.match(/[^a-zA-Z\d]/)) strength += 1
    return strength
  }

  const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value
    setNewPassword(password)
    setPasswordStrength(calculatePasswordStrength(password))
  }

  const getStrengthLabel = (strength: number) => {
    switch (strength) {
      case 0:
        return "Very Weak"
      case 1:
        return "Weak"
      case 2:
        return "Fair"
      case 3:
        return "Good"
      case 4:
        return "Strong"
      default:
        return ""
    }
  }

  const getStrengthColor = (strength: number) => {
    switch (strength) {
      case 0:
      case 1:
        return "bg-red-500"
      case 2:
        return "bg-yellow-500"
      case 3:
        return "bg-blue-500"
      case 4:
        return "bg-green-500"
      default:
        return "bg-gray-300"
    }
  }

  const validatePasswords = () => {
    if (!currentPassword) {
      setError("Current password is required")
      return false
    }
    if (!newPassword) {
      setError("New password is required")
      return false
    }
    if (newPassword.length < 8) {
      setError("New password must be at least 8 characters long")
      return false
    }
    if (newPassword === currentPassword) {
      setError("New password must be different from current password")
      return false
    }
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match")
      return false
    }
    return true
  }

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setSuccess("")

    if (!validatePasswords()) {
      return
    }

    setIsLoading(true)

    try {
      const supabase = createClient()

      // First, verify current password by attempting to sign in
      const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
        email: (await supabase.auth.getUser()).data.user?.email || "",
        password: currentPassword,
      })

      if (signInError) {
        setError("Current password is incorrect")
        setIsLoading(false)
        return
      }

      // Update password
      const { error: updateError } = await supabase.auth.updateUser({
        password: newPassword,
      })

      if (updateError) {
        setError(updateError.message || "Failed to update password")
        setIsLoading(false)
        return
      }

      setSuccess("Password changed successfully!")
      setCurrentPassword("")
      setNewPassword("")
      setConfirmPassword("")
      setPasswordStrength(0)

      // Redirect to dashboard after 2 seconds
      setTimeout(() => {
        router.push("/dashboard")
      }, 2000)
    } catch (err) {
      setError("An error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <div className="text-center">
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Change Password</h1>
          <p className="text-gray-600">Update your account password</p>
        </div>

        <form onSubmit={handleChangePassword} className="space-y-6">
          {/* Current Password */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Current Password</label>
            <div className="relative">
              <input
                type={showCurrentPassword ? "text" : "password"}
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0088cc] focus:border-transparent outline-none transition"
                placeholder="Enter your current password"
                disabled={isLoading}
              />
              <button
                type="button"
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 disabled:opacity-50"
                disabled={isLoading}
              >
                {showCurrentPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* New Password */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">New Password</label>
            <div className="relative">
              <input
                type={showNewPassword ? "text" : "password"}
                value={newPassword}
                onChange={handleNewPasswordChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0088cc] focus:border-transparent outline-none transition"
                placeholder="Enter new password"
                disabled={isLoading}
              />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 disabled:opacity-50"
                disabled={isLoading}
              >
                {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Password Strength Indicator */}
            {newPassword && (
              <div className="space-y-2">
                <div className="flex gap-1">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className={`h-2 flex-1 rounded-full transition-colors ${
                        passwordStrength >= i ? getStrengthColor(passwordStrength) : "bg-gray-200"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  Strength: <span className="font-medium">{getStrengthLabel(passwordStrength)}</span>
                </p>
              </div>
            )}

            {/* Password Requirements */}
            <div className="mt-3 space-y-1 text-sm">
              <div className="flex items-center gap-2">
                {newPassword.length >= 8 ? (
                  <Check size={16} className="text-green-600" />
                ) : (
                  <X size={16} className="text-gray-300" />
                )}
                <span className={newPassword.length >= 8 ? "text-gray-700" : "text-gray-400"}>
                  At least 8 characters
                </span>
              </div>
              <div className="flex items-center gap-2">
                {newPassword.match(/[a-z]/) && newPassword.match(/[A-Z]/) ? (
                  <Check size={16} className="text-green-600" />
                ) : (
                  <X size={16} className="text-gray-300" />
                )}
                <span
                  className={
                    newPassword.match(/[a-z]/) && newPassword.match(/[A-Z]/)
                      ? "text-gray-700"
                      : "text-gray-400"
                  }
                >
                  Mix of uppercase and lowercase
                </span>
              </div>
              <div className="flex items-center gap-2">
                {newPassword.match(/\d/) ? (
                  <Check size={16} className="text-green-600" />
                ) : (
                  <X size={16} className="text-gray-300" />
                )}
                <span className={newPassword.match(/\d/) ? "text-gray-700" : "text-gray-400"}>
                  At least one number
                </span>
              </div>
              <div className="flex items-center gap-2">
                {newPassword.match(/[^a-zA-Z\d]/) ? (
                  <Check size={16} className="text-green-600" />
                ) : (
                  <X size={16} className="text-gray-300" />
                )}
                <span className={newPassword.match(/[^a-zA-Z\d]/) ? "text-gray-700" : "text-gray-400"}>
                  At least one special character
                </span>
              </div>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0088cc] focus:border-transparent outline-none transition"
                placeholder="Re-enter new password"
                disabled={isLoading}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 disabled:opacity-50"
                disabled={isLoading}
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {confirmPassword && newPassword !== confirmPassword && (
              <p className="text-sm text-red-600">Passwords do not match</p>
            )}
            {confirmPassword && newPassword === confirmPassword && (
              <p className="text-sm text-green-600">Passwords match</p>
            )}
          </div>

          {/* Error Message */}
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-700 text-sm">
              <X size={16} className="flex-shrink-0" />
              {error}
            </div>
          )}

          {/* Success Message */}
          {success && (
            <div className="p-3 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2 text-green-700 text-sm">
              <Check size={16} className="flex-shrink-0" />
              {success}
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isLoading || !currentPassword || !newPassword || !confirmPassword}
            className="w-full bg-[#0088cc] hover:bg-[#0077b3] text-white font-bold py-2 rounded text-sm uppercase tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "UPDATING..." : "CHANGE PASSWORD"}
          </Button>
        </form>

        {/* Back to Dashboard Link */}
        <div className="mt-6 text-center">
          <button
            onClick={() => router.push("/dashboard")}
            className="text-[#0088cc] hover:underline text-sm"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  )
}
