import Link from 'next/link';

const menu = [
  { href: '/', label: 'About' },
  { href: '/', label: 'Procedure' },
  { href: '/promotion', label: 'Promotion' },
  { href: '/notice', label: 'Notice' },
  { href: '/', label: 'Contact' },
];

interface MenuProps {
  className?: string;
}

export default function Menu({ className }: MenuProps) {
  return (
    <>
      {menu.map((item, index) => (
        <Link key={`menu-${index}`} href={item.href} className={className}>
          {item.label}
        </Link>
      ))}
    </>
  );
}
