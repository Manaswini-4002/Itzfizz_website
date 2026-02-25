import './style.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

document.addEventListener('DOMContentLoaded', () => {
  initHeroAnimations()
  initScrollAnimations()
  initParallaxEffects()
  initFeatureCards()
})

function initHeroAnimations() {
  const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } })

  timeline
    .to('.hero-title', {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: 0.3
    })
    .to('.hero-title .letter', {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.05,
      ease: 'back.out(1.2)'
    }, '-=0.4')
    .to('.stats-container', {
      opacity: 1,
      duration: 0.5
    }, '-=0.3')
    .to('.stat-item', {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: 'power2.out'
    }, '-=0.3')
    .to('.main-visual', {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.3')
    .to('.scroll-indicator', {
      opacity: 1,
      duration: 0.5
    }, '-=0.2')
}

function initScrollAnimations() {
  const mainVisual = document.querySelector('.main-visual')

  if (mainVisual) {
    gsap.to('.animated-shape', {
      rotation: 360,
      scale: 1.2,
      y: -100,
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5,
        ease: 'power1.inOut'
      }
    })

    gsap.to('.animated-shape circle', {
      scale: 1.5,
      opacity: 0.6,
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: 2
      }
    })

    gsap.to('.animated-shape rect', {
      rotation: 180,
      transformOrigin: 'center center',
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      }
    })
  }

  gsap.to('.hero-content', {
    opacity: 0,
    y: -50,
    scrollTrigger: {
      trigger: '.hero-section',
      start: 'top top',
      end: 'bottom top',
      scrub: 1
    }
  })

  gsap.to('.scroll-indicator', {
    opacity: 0,
    y: -20,
    scrollTrigger: {
      trigger: '.hero-section',
      start: 'top top',
      end: '20% top',
      scrub: 1
    }
  })
}

function initParallaxEffects() {
  const layers = document.querySelectorAll('.parallax-layer')

  layers.forEach((layer, index) => {
    const speed = (index + 1) * 0.5

    gsap.to(layer, {
      y: () => window.innerHeight * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: '.parallax-section',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      }
    })
  })

  gsap.from('.parallax-content h2', {
    opacity: 0,
    y: 100,
    scale: 0.8,
    scrollTrigger: {
      trigger: '.parallax-content',
      start: 'top 80%',
      end: 'top 40%',
      scrub: 1
    }
  })

  gsap.from('.parallax-content p', {
    opacity: 0,
    y: 50,
    scrollTrigger: {
      trigger: '.parallax-content',
      start: 'top 70%',
      end: 'top 40%',
      scrub: 1
    }
  })
}

function initFeatureCards() {
  const cards = document.querySelectorAll('.feature-card')

  cards.forEach((card, index) => {
    gsap.from(card, {
      opacity: 0,
      y: 80,
      scale: 0.9,
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        end: 'top 60%',
        scrub: 1
      }
    })
  })

  gsap.from('.section-title', {
    opacity: 0,
    y: 50,
    scrollTrigger: {
      trigger: '.section-title',
      start: 'top 80%',
      end: 'top 60%',
      scrub: 1
    }
  })

  gsap.from('.section-text', {
    opacity: 0,
    y: 30,
    scrollTrigger: {
      trigger: '.section-text',
      start: 'top 80%',
      end: 'top 60%',
      scrub: 1
    }
  })
}

console.log('%c✨ Premium Scroll Animation Loaded', 'color: #646cff; font-size: 16px; font-weight: bold;')
console.log('%cBuilt with GSAP & ScrollTrigger', 'color: #a0a0a0; font-size: 12px;')
