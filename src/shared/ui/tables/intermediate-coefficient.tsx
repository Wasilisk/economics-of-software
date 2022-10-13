import { Accordion, AccordionDetails, AccordionSummary } from "shared/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableRow } from "shared/ui/table";
import { Typography } from "shared/ui/typography";
import { ExpandMoreIcon } from "shared/ui/icons/expand-more";

import { cocomoIntermediateCoefficients } from "shared/config/cocomo-coefficient/intermediate";

export const IntermediateCoefficientTable = () => (
    <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
        >
            <Typography>Table of intermediate coefficients</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Table >
                <TableHead>
                    <TableRow>
                        <TableCell>Project Type</TableCell>
                        <TableCell align="center">a</TableCell>
                        <TableCell align="center" >b</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        Object.keys(cocomoIntermediateCoefficients).map(key => (
                            <TableRow
                                key={key}
                            >
                                <TableCell component="th" scope="row">
                                    {key.charAt(0).toUpperCase() + key.slice(1)}
                                </TableCell>
                                <TableCell align="center">{cocomoIntermediateCoefficients[key].a}</TableCell>
                                <TableCell align="center">{cocomoIntermediateCoefficients[key].b}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </AccordionDetails>
    </Accordion>
)