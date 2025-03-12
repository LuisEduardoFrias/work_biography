import Image from 'next/image'
import './box_skill.css'

export default function Skill({ href, alt, name }: { href: string, alt: string, name: string }) {
	return (
		<div>
			<Image src={href} width={70} height={70} alt={alt} />
			<span>{name}</span>
		</div >
	)
}