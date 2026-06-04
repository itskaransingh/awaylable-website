export function calculateReadingTime(content: unknown[] | undefined | null): number {
  if (!content || !Array.isArray(content)) return 0

  let text = ''
  content.forEach((block) => {
    const typed = block as { _type?: string; children?: Array<{ text?: string }> }
    if (typed._type === 'block' && typed.children) {
      typed.children.forEach((child) => {
        if (child.text) {
          text += `${child.text} `
        }
      })
    }
  })

  const wordCount = text.trim().split(/\s+/).filter(Boolean).length
  if (wordCount === 0) return 0

  return Math.max(1, Math.ceil(wordCount / 200))
}
