import { ReactNode } from 'react'
import BackHome from 'cp/back_home'
import { usePathname } from 'next/navigation'

type TyoePage = { children: ReactNode, className?: string };

export default function Page({ children, className }: TyoePage) {
  const pathname = usePathname();

  function getPosition() {
    const leftPaths = new Set(["/about_me", "/experiences", "/projects"]);
    const rightPaths = new Set(["/studies", "/skills"]);

    if (leftPaths.has(pathname)) return "left";
    if (rightPaths.has(pathname)) return "right";

    return "right";
  }

  return (
    <div className={`rounded-border-page-radius absolute w-full h-full grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1  md:overflow-y-hidden overflow-hidden center-animate2 ${className ?? ""}`}>
      {pathname !== "/" && <BackHome position={getPosition()} />}
      {children}
    </div>
  );
}