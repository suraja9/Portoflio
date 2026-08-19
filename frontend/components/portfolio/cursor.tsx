'use client'

import { useEffect, useRef, useState } from 'react'

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)
  const [variant, setVariant] = useState<'default' | 'focus' | 'cta'>(
    'default',
  )

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    if (!fine) return
    setEnabled(true)

    let raf = 0
    const ring = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const target = { x: ring.x, y: ring.y }

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX
      target.y = e.clientY
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
      }
      const el = e.target as HTMLElement
      if (el.closest('[data-cursor="cta"]')) setVariant('cta')
      else if (el.closest('[data-cursor="focus"]')) setVariant('focus')
      else setVariant('default')
    }

    const loop = () => {
      ring.x += (target.x - ring.x) * 0.18
      ring.y += (target.y - ring.y) * 0.18
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0)`
      }
      raf = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  if (!enabled) return null

  const size =
    variant === 'focus' ? 56 : variant === 'cta' ? 44 : 30

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[100] hidden md:block">
      <div
        ref={dotRef}
        className="absolute -left-[3px] -top-[3px] h-1.5 w-1.5 rounded-full bg-primary transition-[width,height] duration-200"
      />
      <div
        ref={ringRef}
        className="absolute flex items-center justify-center rounded-full border border-primary/60 transition-[width,height,background-color] duration-200"
        style={{
          width: size,
          height: size,
          marginLeft: -size / 2,
          marginTop: -size / 2,
          backgroundColor:
            variant === 'default' ? 'transparent' : 'oklch(0.62 0.18 258 / 0.08)',
        }}
      >
        {variant === 'cta' && (
          <span className="font-mono text-[9px] tracking-widest text-primary">
            ↗
          </span>
        )}
      </div>
    </div>
  )
}
