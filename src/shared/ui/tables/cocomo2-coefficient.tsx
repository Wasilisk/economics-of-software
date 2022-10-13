import { Accordion, AccordionDetails, AccordionSummary } from "shared/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableRow } from "shared/ui/table";
import { Typography } from "shared/ui/typography";
import { ExpandMoreIcon } from "shared/ui/icons/expand-more";

import { cocomo2Coefficients } from "shared/config/cocomo2-coefficient";

export const Cocomo2CoefficientTable = () => (
    <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
        >
            <Typography>Table of coefficients of project evaluation stages</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Table >
                <TableHead>
                    <TableRow>
                        <TableCell>Project Stage</TableCell>
                        <TableCell align="center">a</TableCell>
                        <TableCell align="center" >b</TableCell>
                        <TableCell align="center">c</TableCell>
                        <TableCell align="center">d</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        Object.keys(cocomo2Coefficients).map(key => (
                            <TableRow
                                key={key}
                            >
                                <TableCell component="th" scope="row">
                                    {key
                                        .toLowerCase()
                                        .split('_')
                                        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                                        .join(' ')
                                    }
                                </TableCell>
                                <TableCell align="center">{cocomo2Coefficients[key].a}</TableCell>
                                <TableCell align="center">{cocomo2Coefficients[key].b}</TableCell>
                                <TableCell align="center">{cocomo2Coefficients[key].c}</TableCell>
                                <TableCell align="center">{cocomo2Coefficients[key].d}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </AccordionDetails>
    </Accordion>
)