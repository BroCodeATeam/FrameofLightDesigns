import { ExpandMore, ExpandLess } from "@styled-icons/material";

type ExpandIconPros = {
    isExpanded: boolean;
    handleClick: () => void;
};

export default function ExpandIcon({
                                       isExpanded,
                                       handleClick,
                                   }: ExpandIconPros) {
    return isExpanded ? (
        <ExpandLess className='flex items-center gap-1 text-white' onClick={handleClick} />
    ) : (
        <ExpandMore className='flex items-center gap-1 text-white' onClick={handleClick} />
    );
}