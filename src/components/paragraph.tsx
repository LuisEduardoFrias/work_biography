
export default function Paragraph({ text }: { text: string }) {
  return (
    <p
      style={{
        textWrap: 'pretty',
        hyphens: 'auto',
        hyphenateLimitChars: '3 2',
      }}
      className="text-[12px]"
      dangerouslySetInnerHTML={{ __html: text }} />
  )
}