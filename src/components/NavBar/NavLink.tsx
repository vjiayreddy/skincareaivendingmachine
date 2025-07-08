import { cn } from "@/utils";
import Link from "next/link";
interface ListItemProps {
  children: React.ReactNode;
  NavLink: string;
  cassName?: string;
}
const ListItem = ({ children, NavLink, cassName }: ListItemProps) => {
  return (
    <>
      <li>
        <Link
          prefetch
          href={NavLink}
          className={cn(
            `flex py-2 px-1 w-full text-base text-black xs:text-black sm:text-black md:text-white lg:text-white xl:text-white  font-medium  lg:mx-5 lg:inline-flex lg:py-6 lg:px-0 transition-colors duration-200`,
            cassName
          )}
        >
          {children}
        </Link>
      </li>
    </>
  );
};
export default ListItem;
