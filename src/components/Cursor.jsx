import { useEffect, useRef } from 'react'

export default function Cursor() {
  const ref     = useRef(null)
  const pos     = useRef({ x: -40, y: -40 })
  const frameRef = useRef(null)

  useEffect(() => {
    // Store raw mouse position — rAF loop writes it to DOM each frame
    const onMove = (e) => { pos.current = { x: e.clientX, y: e.clientY } }

    const tick = () => {
      if (ref.current) {
        ref.current.style.left = `${pos.current.x}px`
        ref.current.style.top  = `${pos.current.y}px`
      }
      frameRef.current = requestAnimationFrame(tick)
    }
    frameRef.current = requestAnimationFrame(tick)
    window.addEventListener('mousemove', onMove)

    // Hover detection — <a>, <button>, or anything with data-cursor-hover
    const INTERACTIVE = 'a, button, [role="button"], input, textarea, select, label, [data-cursor-hover]'
    const onOver = (e) => { if (e.target.closest(INTERACTIVE)) ref.current?.setAttribute('data-hovered', '') }
    const onOut  = (e) => { if (e.target.closest(INTERACTIVE)) ref.current?.removeAttribute('data-hovered') }
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout',  onOut)

    // Fade out when mouse leaves the window, fade back on return
    const hide = () => { if (ref.current) ref.current.style.opacity = '0' }
    const show = () => { if (ref.current) ref.current.style.opacity = '1' }
    document.addEventListener('mouseleave', hide)
    document.addEventListener('mouseenter', show)

    return () => {
      cancelAnimationFrame(frameRef.current)
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout',  onOut)
      document.removeEventListener('mouseleave', hide)
      document.removeEventListener('mouseenter', show)
    }
  }, [])

  return (
    <div
      ref={ref}
      className="custom-cursor"
      aria-hidden="true"
      style={{ willChange: 'transform', transition: 'opacity 0.3s ease, transform 0.18s ease' }}
    >
      {/* ── TERMINAL ── amber gap crosshair + tick ends */}
      <svg className="cur cur-terminal" width="19" height="19" viewBox="0 0 32 32" fill="none">
        <line x1="16" y1="2"  x2="16" y2="11" stroke="#d97706" strokeWidth="1.5"/>
        <line x1="16" y1="21" x2="16" y2="30" stroke="#d97706" strokeWidth="1.5"/>
        <line x1="2"  y1="16" x2="11" y2="16" stroke="#d97706" strokeWidth="1.5"/>
        <line x1="21" y1="16" x2="30" y2="16" stroke="#d97706" strokeWidth="1.5"/>
        <line x1="13" y1="2"  x2="19" y2="2"  stroke="#d97706" strokeWidth="1.5"/>
        <line x1="13" y1="30" x2="19" y2="30" stroke="#d97706" strokeWidth="1.5"/>
        <line x1="2"  y1="13" x2="2"  y2="19" stroke="#d97706" strokeWidth="1.5"/>
        <line x1="30" y1="13" x2="30" y2="19" stroke="#d97706" strokeWidth="1.5"/>
        <rect x="14" y="14" width="4" height="4" fill="#d97706" opacity="0.2"/>
        <rect className="cur-lock" x="10" y="10" width="12" height="12" stroke="#d97706" strokeWidth="1" fill="none"/>
      </svg>

      {/* ── WARM & EDITORIAL ── pen nib, tip at top-left (3,3) */}
      <svg className="cur cur-warm" width="17" height="17" viewBox="0 0 28 28" fill="none">
        <path d="M3 3 L25 10 L18 25 L10 18 Z"
          stroke="#78716c" strokeWidth="1.5" strokeLinejoin="round"
          fill="rgba(120,113,108,0.06)"/>
        <line x1="3" y1="3" x2="18" y2="25" stroke="#78716c" strokeWidth="0.75"/>
        <circle cx="3" cy="3" r="2.5" fill="#78716c"/>
      </svg>

      {/* ── MINIMAL & ARCHITECTURAL ── corner brackets + center dot */}
      <svg className="cur cur-minimal" width="19" height="19" viewBox="0 0 32 32" fill="none">
        <path d="M3 10 L3 3 L10 3"    stroke="#111" strokeWidth="1.5" strokeLinecap="square"/>
        <path d="M22 3 L29 3 L29 10"  stroke="#111" strokeWidth="1.5" strokeLinecap="square"/>
        <path d="M3 22 L3 29 L10 29"  stroke="#111" strokeWidth="1.5" strokeLinecap="square"/>
        <path d="M29 22 L29 29 L22 29" stroke="#111" strokeWidth="1.5" strokeLinecap="square"/>
        <circle cx="16" cy="16" r="1.5" fill="#111"/>
      </svg>
    </div>
  )
}
