import { onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useFadeUp(selector: string, delay = 0) {
  onMounted(() => {
    gsap.fromTo(
      selector,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: selector,
          start: 'top 85%',
          once: true,
        },
      }
    )
  })

  onUnmounted(() => {
    ScrollTrigger.getAll().forEach((t) => t.kill())
  })
}

export function useFadeIn(selector: string, delay = 0) {
  onMounted(() => {
    gsap.fromTo(
      selector,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.5,
        delay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: selector,
          start: 'top 85%',
          once: true,
        },
      }
    )
  })

  onUnmounted(() => {
    ScrollTrigger.getAll().forEach((t) => t.kill())
  })
}

export function useSlideIn(
  selector: string,
  direction: 'left' | 'right' = 'left',
  delay = 0
) {
  const x = direction === 'left' ? -60 : 60

  onMounted(() => {
    gsap.fromTo(
      selector,
      { opacity: 0, x },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: selector,
          start: 'top 85%',
          once: true,
        },
      }
    )
  })

  onUnmounted(() => {
    ScrollTrigger.getAll().forEach((t) => t.kill())
  })
}

export function useHeroReveal(selectors: {
  top: string
  bottom: string
  center: string
  cta: string
}) {
  onMounted(() => {
    gsap.set(
      [selectors.top, selectors.bottom, selectors.center, selectors.cta],
      { willChange: 'transform, opacity' }
    )

    const tl = gsap.timeline({ delay: 0.3 })

    tl.fromTo(
      selectors.top,
      { opacity: 0, y: -40 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
    )
      .fromTo(
        selectors.bottom,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' },
        '-=1'
      )
      .fromTo(
        selectors.center,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
        '-=0.8'
      )
      .fromTo(
        selectors.cta,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
        '-=0.4'
      )
  })
}
