import { useContext } from "react";

import { Cocomo2Context } from "shared/libs/context/cocomo2";
import { Cocomo2StageType } from "shared/libs/context/cocomo2/types";

import { MenuItem } from "shared/ui/menu-item"
import { Select} from "shared/ui/select"
import { SelectChangeEvent } from "shared/ui/select/types";

export const ChangeStage = () => {
    const { projectStage, setProjectStage } = useContext(Cocomo2Context)

    const handleChange = (event: SelectChangeEvent) => {
        setProjectStage(event.target.value as Cocomo2StageType);
    };

    return (
        <Select value={projectStage} onChange={handleChange}>
            <MenuItem value="early_design">Early Design</MenuItem>
            <MenuItem value="post_architecture">Post Architecture</MenuItem>
        </Select>
    )
}