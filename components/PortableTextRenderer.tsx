import { PortableText, PortableTextComponents } from '@portabletext/react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

interface PortableTextRendererProps {
  value: any[]
  className?: string
}

const customComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null
      const imageUrl = urlFor(value).width(1200).url()
      return (
        <figure className="portable-image-container">
          <div className="portable-image-frame">
            <Image
              src={imageUrl}
              alt={value.alt || 'Article illustration'}
              fill
              className="object-cover"
              loading="lazy"
              sizes="(max-width: 760px) 100vw, 760px"
            />
          </div>
          {value.caption && <figcaption className="portable-image-caption">{value.caption}</figcaption>}
        </figure>
      )
    },
  },
  block: {
    normal: ({ children }) => <p>{children}</p>,
    h1: ({ children }) => {
      const id = children?.toString().toLowerCase().replace(/[^a-z0-9\s]+/g, '').replace(/\s+/g, '-')
      return <h1 id={id}>{children}</h1>
    },
    h2: ({ children }) => {
      const id = children?.toString().toLowerCase().replace(/[^a-z0-9\s]+/g, '').replace(/\s+/g, '-')
      return <h2 id={id}>{children}</h2>
    },
    h3: ({ children }) => {
      const id = children?.toString().toLowerCase().replace(/[^a-z0-9\s]+/g, '').replace(/\s+/g, '-')
      return <h3 id={id}>{children}</h3>
    },
    h4: ({ children }) => {
      const id = children?.toString().toLowerCase().replace(/[^a-z0-9\s]+/g, '').replace(/\s+/g, '-')
      return <h4 id={id}>{children}</h4>
    },
    blockquote: ({ children }) => <blockquote>{children}</blockquote>,
  },
  list: {
    bullet: ({ children }) => <ul>{children}</ul>,
    number: ({ children }) => <ol>{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    code: ({ children }) => <code className="article-inline-code">{children}</code>,
    link: ({ children, value }) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
      return (
        <a href={value.href} rel={rel} className="article-inline-link">
          {children}
        </a>
      )
    },
  },
}

export default function PortableTextRenderer({ value, className = 'article-prose' }: PortableTextRendererProps) {
  if (!value || !Array.isArray(value)) return null
  return (
    <div className={className}>
      <PortableText value={value} components={customComponents} />
    </div>
  )
}
