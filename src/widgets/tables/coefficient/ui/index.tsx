import { cocomoCoefficients } from "shared/config/cocomo-coefficient";
import { Accordion, AccordionDetails, AccordionSummary } from "shared/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableRow } from "shared/ui/table";
import { Typography } from "shared/ui/typography";

import { ExpandMoreIcon } from "shared/ui/icons/expand-more";

export const CoefficientTable = () => (
    <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
        >
            <Typography>Table of coefficient</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Table >
                <TableHead>
                    <TableRow>
                        <TableCell>Project Type</TableCell>
                        <TableCell align="center">a</TableCell>
                        <TableCell align="center" >b</TableCell>
                        <TableCell align="center">c</TableCell>
                        <TableCell align="center">d</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        Object.keys(cocomoCoefficients).map(key => (
                            <TableRow
                                key={key}
                            >
                                <TableCell component="th" scope="row">
                                    {key.charAt(0).toUpperCase() + key.slice(1)}
                                </TableCell>
                                <TableCell align="center">{cocomoCoefficients[key].a}</TableCell>
                                <TableCell align="center">{cocomoCoefficients[key].b}</TableCell>
                                <TableCell align="center">{cocomoCoefficients[key].c}</TableCell>
                                <TableCell align="center">{cocomoCoefficients[key].d}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </AccordionDetails>
    </Accordion>
)