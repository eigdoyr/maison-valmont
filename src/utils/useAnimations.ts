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
