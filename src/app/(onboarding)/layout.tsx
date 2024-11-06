import PageTransition from '@/components/common/animation/PageTransition'

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <PageTransition>
      {children}
    </PageTransition>
  )
}