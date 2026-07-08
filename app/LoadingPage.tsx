import Logo from '@/components/ui/logo'
import React from 'react'

const LoadingPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-gray-800">
      {/* Logo / Brand Name */}
      <Logo />

      {/* Loader */}
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  )
}

export default LoadingPage
