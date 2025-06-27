import Link from 'next/link';

const menu = [
  { href: '/', label: 'About' },
  { href: '/', label: 'Procedure' },
  { href: '/', label: 'Promotion' },
  { href: '/', label: 'Notice' },
];

export default function Menu() {
  return (
    <>
      {menu.map((item, index) => (
        <Link
          key={`menu-${index}`}
          href={`/${item.href}`}
          className="text-foreground text-3xl font-medium"
        >
          {item.label}
        </Link>
      ))}
    </>
  );
}
