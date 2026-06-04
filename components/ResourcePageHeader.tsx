interface ResourcePageHeaderProps {
  title: string
  description: string
}

export default function ResourcePageHeader({ title, description }: ResourcePageHeaderProps) {
  return (
    <header className="resource-hero">
      <div className="resource-hero-inner">
        <img src="/images/motif.svg" alt="" role="presentation" className="resource-hero-motif" />
        <h1 className="resource-hero-title">{title}</h1>
        <p className="resource-hero-description">{description}</p>
      </div>
    </header>
  )
}
