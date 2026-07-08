import { MainLayout } from "@/components/layouts/main-layout"
import { PageTransition } from "@/components/page-transition"
import { Suspense } from "react"
import LoadingPage from "../LoadingPage"

export default function RouteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
     <Suspense fallback={<LoadingPage />}>
       <MainLayout>
      <PageTransition>{children}</PageTransition>
    </MainLayout>
      </Suspense>
    
  )
}