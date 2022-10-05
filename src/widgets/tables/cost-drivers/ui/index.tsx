import { SelectCostDrivers } from "features/select-cost-drivers/ui";

import { costDrivers } from "shared/config/cost-drivers";
import { CostDriveType } from "shared/config/cost-drivers/types";
import { Box } from "shared/ui/box";
import { Grid } from "shared/ui/grid";
import { Stack } from "shared/ui/stack";
import { Typography } from "shared/ui/typography";

export const CostDriversTable = () => (
    <Box>
        <Grid pl={15} py={2}
            position="sticky"
            top={0}
            bgcolor="#ffffff"
            borderBottom="1px solid rgb(232, 232, 232)"
            zIndex={2}
            container
        >
            <Grid xs={2} item>
                <Typography align="center">Very low</Typography>
            </Grid>
            <Grid xs={2} item>
                <Typography align="center">Low</Typography>
            </Grid>
            <Grid xs={2} item>
                <Typography align="center">Average</Typography>
            </Grid>
            <Grid xs={2} item>
                <Typography align="center">High</Typography>
            </Grid>
            <Grid xs={2} item>
                <Typography align="center">Very high</Typography>
            </Grid>
            <Grid xs={2} item>
                <Typography align="center">Critical</Typography>
            </Grid>
        </Grid>
        <Stack spacing={1}>
            {
                costDrivers.map((costDriver: CostDriveType) => <SelectCostDrivers key={costDriver.id} {...costDriver} />)
            }
        </Stack>
    </Box>
)