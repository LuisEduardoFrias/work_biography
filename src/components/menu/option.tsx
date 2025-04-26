import Link from "next/link";
import Loading from '@/app/loading'
import { Suspense, lazy } from 'react'
import useTranslate from 'hk/use_translate'

export type TypeOption = {
  name: string;
  href: string;
  src: string;
};

export default function Option({ name, href, src }: TypeOption) {
  const { translate } = useTranslate()
  const DynamicComponent = lazy(() => import(`../../svg/${src}.tsx`));

  return (
    <li>
      <Link href={href} aria-label={href}>
        <Suspense fallback={<Loading />}>
          <DynamicComponent />
        </Suspense>
        <p className='footer_tooltip'>{translate(name)}</p>
      </Link>
    </li>
  )
}
