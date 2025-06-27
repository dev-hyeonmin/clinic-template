import Menu from '@/components/layout/menu/Menu';

export default function PCNavigation() {
  return (
    <div className="hidden md:block">
      <div className="flex">
        <Menu className="px-4 py-3 text-xl font-medium last:ml-4 last:rounded-full last:bg-black last:px-10 last:text-white" />
      </div>
    </div>
  );
}
