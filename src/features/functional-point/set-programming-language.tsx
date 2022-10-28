import { useContext } from "react"

import { numbersOfLogicalLines } from "shared/config/multipliers"

import { FunctionalPointContext } from "shared/libs/context/functional-point"

import { MenuItem } from "shared/ui/menu-item"
import { Select } from "shared/ui/select"
import { SelectChangeEvent } from "shared/ui/select/types"
import { Stack } from "shared/ui/stack"
import { Typography } from "shared/ui/typography"

export const SetProgrammingLanguage = () => {
    const { programmingLanguage, setProgrammingLanguage } = useContext(FunctionalPointContext);

    const handleChange = (event: SelectChangeEvent) => {
        setProgrammingLanguage(parseInt(event.target.value))
    };

    return (
        <Stack direction="row" alignItems="center" justifyContent="center">
            <Typography mr={3}>Choose a programming language: </Typography>
            <Select
                sx={{ width: "30%" }}
                value={programmingLanguage.toString()}
                onChange={handleChange}
            >
                {
                    numbersOfLogicalLines.map(language => <MenuItem
                        key={language.id}
                        value={language.value}
                    >
                        {language.name}
                    </MenuItem>)
                }
            </Select>
        </Stack>
    )
}