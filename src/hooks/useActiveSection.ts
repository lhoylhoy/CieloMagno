import { useEffect, useState } from 'react'

export function useActiveSection(ids: string[], initialId = 'top'): string {
  const [active, setActive] = useState(initialId)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-32% 0px -58% 0px', threshold: [0, 0.05, 0.2, 0.5] },
    )

    const observed = new Set<Element>()

    // Sections can arrive after the first paint (the archive hub is lazy), so
    // re-scan on DOM changes instead of only observing what existed at mount.
    const attach = () => {
      ids.forEach((id) => {
        const element = document.getElementById(id)
        if (element && !observed.has(element)) {
          observed.add(element)
          observer.observe(element)
        }
      })
    }

    attach()

    const mutations = new MutationObserver(attach)
    mutations.observe(document.body, { childList: true, subtree: true })

    return () => {
      mutations.disconnect()
      observer.disconnect()
    }
  }, [ids])

  return active
}
