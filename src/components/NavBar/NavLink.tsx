import Link from "next/link";

interface ListItemProps {
    children: React.ReactNode;
    NavLink: string;
}
const ListItem = ({ children, NavLink }: ListItemProps) => {
    return (
      <>
        <li>
          <Link
            prefetch
            href={NavLink}
            className="flex py-2 text-base font-medium text-dark hover:text-primary dark:text-white lg:mx-5 lg:inline-flex lg:py-6"
          >
            {children}
          </Link>
        </li>
      </>
    );
  };
  export default ListItem;