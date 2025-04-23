
export default function Paragraph({ text, className }: { text: string, className?: string }) {
  return (
    <p
      style={{
        textWrap: 'pretty',
        hyphens: 'auto',
        hyphenateLimitChars: '3 2',
      }}
      className={`text-[12px] ${className}`}
      dangerouslySetInnerHTML={{ __html: text }} />
  )
}