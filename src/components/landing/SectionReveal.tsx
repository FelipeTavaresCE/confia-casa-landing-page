import { useEffect, useRef, useState } from 'react'
import type { ComponentPropsWithoutRef, CSSProperties, ElementType, ReactNode } from 'react'

type SectionRevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  as?: ElementType
} & ComponentPropsWithoutRef<'section'>

export function SectionReveal({
  children,
  className = '',
  delay = 0,
  as: Component = 'section',
  ...props
}: SectionRevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current

    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.16, rootMargin: '0px 0px -72px 0px' },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <Component
      ref={ref}
      className={`reveal-section ${isVisible ? 'is-visible' : ''} ${className}`.trim()}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
      {...props}
    >
      {children}
    </Component>
  )
}
