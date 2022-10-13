import { useContext } from "react";

import { CocomoContext } from "shared/libs/context/cocomo";
import { CocomoCommandType } from "shared/libs/context/cocomo/types";

import { MenuItem } from "shared/ui/menu-item"
import { Select} from "shared/ui/select"
import { SelectChangeEvent } from "shared/ui/select/types";

export const ChangeCommand = () => {
    const { command, setCommand } = useContext(CocomoContext)

    const handleChange = (event: SelectChangeEvent) => {
        setCommand(event.target.value as CocomoCommandType);
    };

    return (
        <Select value={command} onChange={handleChange}>
            <MenuItem value="organic">Organic</MenuItem>
            <MenuItem value="semidetach">Semidetach</MenuItem>
            <MenuItem value="embedded">Embedded</MenuItem>
        </Select>
    )
}