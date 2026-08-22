'use client'

import { useState, useEffect, useRef } from 'react'

type Kind = 'center' | 'primary' | 'integration'
type Node = {
  id: string
  label: string
  x: number
  y: number
  kind: Kind
  tag?: string
}

const NODES: Node[] = [
  { id: 'core', label: 'SURAJ ALI', x: 50, y: 50, kind: 'center' },
  { id: 'react', label: 'USER INTERFACE', x: 17, y: 20, kind: 'primary', tag: 'REACT' },
  { id: 'next', label: 'WEB APP', x: 52, y: 11, kind: 'primary', tag: 'NEXT.JS' },
  { id: 'node', label: 'BACKEND API', x: 85, y: 22, kind: 'primary', tag: 'NODE.JS' },
  { id: 'express', label: 'SECURE AUTH', x: 88, y: 56, kind: 'primary', tag: 'EXPRESS' },
  { id: 'mongo', label: 'DATABASE', x: 60, y: 87, kind: 'primary', tag: 'MONGODB' },
  { id: 'aws', label: 'CLOUD HOSTING', x: 14, y: 62, kind: 'primary', tag: 'AWS' },
  { id: 'razorpay', label: 'PAYMENTS', x: 88, y: 86, kind: 'integration', tag: 'RAZORPAY' },
  { id: 'firebase', label: 'REALTIME SYNC', x: 30, y: 88, kind: 'integration', tag: 'FIREBASE' },
  { id: 'msg91', label: 'SMS ALERTS', x: 4, y: 38, kind: 'integration', tag: 'MSG91' },
  { id: 'whatsapp', label: 'MESSAGING', x: 96, y: 40, kind: 'integration', tag: 'WHATSAPP API' },
]

const EDGES: [string, string][] = [
  ['core', 'react'],
  ['core', 'next'],
  ['core', 'node'],
  ['core', 'express'],
  ['core', 'mongo'],
  ['core', 'aws'],
  ['node', 'razorpay'],
  ['node', 'msg91'],
  ['node', 'whatsapp'],
  ['react', 'firebase'],
  ['aws', 'firebase'],
  ['express', 'mongo'],
]

function neighbors(id: string) {
  const set = new Set<string>([id])
  EDGES.forEach(([a, b]) => {
    if (a === id) set.add(b)
    if (b === id) set.add(a)
  })
  return set
}

export function SystemDiagram() {
  const [active, setActive] = useState<string | null>(null)
  const [isHovering, setIsHovering] = useState(false)
  const currentIndexRef = useRef(0)

  useEffect(() => {
    if (isHovering) return

    let interval: NodeJS.Timeout
    const cyclableNodes = NODES.filter((n) => n.id !== 'core')

    const timeout = setTimeout(() => {
      setActive(cyclableNodes[currentIndexRef.current].id)
      
      interval = setInterval(() => {
        currentIndexRef.current = (currentIndexRef.current + 1) % cyclableNodes.length
        setActive(cyclableNodes[currentIndexRef.current].id)
      }, 2000)
    }, 1000)

    return () => {
      clearTimeout(timeout)
      if (interval) clearInterval(interval)
    }
  }, [isHovering])

  const activeSet = active ? neighbors(active) : null

  return (
    <div className="relative aspect-square w-full">
      {/* enclosure */}
      <div className="bg-dots absolute inset-0 rounded-xl border border-border opacity-60" />
      <div className="absolute left-4 top-4 font-mono text-[9px] tracking-[0.2em] text-muted-foreground">
        SYSTEM / 001
      </div>
      <div className="absolute right-4 top-4 font-mono text-[9px] tracking-[0.2em] text-primary/70">
        LIVE
      </div>
      <div className="absolute bottom-4 left-4 font-mono text-[9px] tracking-[0.2em] text-muted-foreground">
        BUILD → SHIP → SCALE
      </div>

      {/* connection lines */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden
      >
        {EDGES.map(([a, b], i) => {
          const na = NODES.find((n) => n.id === a)!
          const nb = NODES.find((n) => n.id === b)!
          const lit = activeSet ? activeSet.has(a) && activeSet.has(b) : false
          return (
            <line
              key={i}
              x1={na.x}
              y1={na.y}
              x2={nb.x}
              y2={nb.y}
              stroke={lit ? 'oklch(0.62 0.18 258)' : 'oklch(1 0 0 / 0.12)'}
              strokeWidth={lit ? 0.5 : 0.3}
              strokeDasharray="1.5 1.5"
              className="animate-flow"
              style={{
                transition: 'stroke 0.3s ease',
                opacity: activeSet && !lit ? 0.25 : 1,
              }}
              vectorEffect="non-scaling-stroke"
            />
          )
        })}
      </svg>

      {/* nodes */}
      {NODES.map((n) => {
        const dim = activeSet ? !activeSet.has(n.id) : false
        const lit = activeSet ? activeSet.has(n.id) : false
        const isCenter = n.kind === 'center'
        return (
          <button
            key={n.id}
            type="button"
            data-cursor="focus"
            onMouseEnter={() => {
              setIsHovering(true)
              setActive(n.id)
            }}
            onMouseLeave={() => {
              setIsHovering(false)
              setActive(null)
            }}
            onFocus={() => {
              setIsHovering(true)
              setActive(n.id)
            }}
            onBlur={() => {
              setIsHovering(false)
              setActive(null)
            }}
            className="group absolute -translate-x-1/2 -translate-y-1/2 outline-none"
            style={{ left: `${n.x}%`, top: `${n.y}%` }}
          >
            <span
              className={`flex flex-col items-center gap-1 transition-opacity duration-300 ${
                dim ? 'opacity-30' : 'opacity-100'
              }`}
            >
              <span
                className={`flex items-center gap-1.5 rounded-md border px-2 py-1 font-mono tracking-wider backdrop-blur-sm transition-colors ${
                  isCenter
                    ? 'border-primary bg-primary/15 text-[10px] text-foreground shadow-[0_0_24px_-6px_oklch(0.62_0.18_258_/_0.7)] sm:text-xs'
                    : lit
                      ? 'border-primary bg-primary/10 text-[8px] text-foreground sm:text-[10px]'
                      : n.kind === 'primary'
                        ? 'border-border-strong bg-surface/80 text-[8px] text-foreground sm:text-[10px]'
                        : 'border-border bg-surface/60 text-[7px] text-muted-foreground sm:text-[9px]'
                }`}
              >
                <span
                  className={`h-1 w-1 rounded-full ${
                    isCenter || lit ? 'bg-primary' : 'bg-muted-foreground'
                  } ${isCenter ? 'animate-pulse-node' : ''}`}
                />
                {n.label}
              </span>
              {n.tag && (
                <span
                  className={`font-mono text-[7px] tracking-[0.15em] transition-colors sm:text-[8px] ${
                    lit ? 'text-primary' : 'text-muted-foreground/60'
                  }`}
                >
                  {n.tag}
                </span>
              )}
            </span>
          </button>
        )
      })}
    </div>
  )
}
