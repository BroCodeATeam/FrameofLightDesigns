import { MenuItem as MenuItemType } from "../../constants/menu-items";
import MenuItem from "./MenuItem";

type MenuItemsListProps = {
    options: MenuItemType[];
};

export default function MenuItemsList({ options }: MenuItemsListProps) {
    return (
        <div className='hidden flex gap-[40px] md:inline-flex items-center space-x-5'>
            {options.map((option) => (
                <MenuItem menuItem={option} key={option.id} />
            ))}
        </div>
    );
}