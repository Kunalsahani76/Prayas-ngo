"use client"

import { useState, useEffect, Suspense } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { Progress } from "@/components/ui/progress"
import LoadingPage from "@/app/LoadingPage"

export function NavigationEvents() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isNavigating, setIsNavigating] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // This effect runs on initial page load
    const timeout = setTimeout(() => {
      setIsNavigating(false)
      setProgress(100)
    }, 500)

    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    // This effect runs when the URL changes (navigation)
    setIsNavigating(true)
    setProgress(0)
    
    // Start progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        // Speed up progress as it gets higher
        const increment = prev < 30 ? 5 : prev < 60 ? 8 : prev < 90 ? 3 : 1
        return Math.min(prev + increment, 99)
      })
    }, 100)

    // Simulate navigation end
    const timeout = setTimeout(() => {
      clearInterval(interval)
      setProgress(100)
      
      // Hide progress after completed
      const hideTimeout = setTimeout(() => {
        setIsNavigating(false)
      }, 200)
      
      return () => clearTimeout(hideTimeout)
    }, 600)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [pathname, searchParams])

  if (!isNavigating && progress === 100) {
    return null
  }

  return (
    <Suspense fallback={<LoadingPage />}>
       <Progress 
      value={progress} 
      className="fixed top-0 left-0 right-0 z-50 h-1 w-full rounded-none bg-transparent" 
      indicatorClassName="bg-primary transition-all duration-300 ease-in-out"
    />
      </Suspense>
   
  )
}