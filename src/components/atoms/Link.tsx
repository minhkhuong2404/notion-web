import Link from 'next/link'
import { ReactNode } from 'react';

interface LinkProps {
    children?: ReactNode
    href: string
    className?: string
    title?: string;
    target?: "_blank" | "_self" | "_parent" | "_top"
}

const LinkAtoms = ({ children, href, className, title, target }: LinkProps) => {
  const _target = target ?? "_self";
  const _className = className ?? "";
  return (
    <Link
        target={target}
        href={href}
        title={title}
        className={`${_className} text-transparent bg-clip-text bg-gradient-to-r dark:from-emerald-400 dark:to-violet-400  from-rose-500 to-blue-600 hover:underline ${_target === "_blank" ? "cursor-newtab" : ""}`}
    >
        {children}
    </Link>
  )
}

export default LinkAtoms