import { Accordion, AccordionDetails, AccordionSummary } from "shared/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableRow } from "shared/ui/table";
import { Typography } from "shared/ui/typography";

import { ExpandMoreIcon } from "shared/ui/icons/expand-more";
import { cocomoBasicCoefficients } from "shared/config/cocomo-coefficient/basic";

export const BasicCoefficientTable = () => (
    <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
        >
            <Typography>Table of basic coefficients</Typography>
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
                        Object.keys(cocomoBasicCoefficients).map(key => (
                            <TableRow
                                key={key}
                            >
                                <TableCell component="th" scope="row">
                                    {key.charAt(0).toUpperCase() + key.slice(1)}
                                </TableCell>
                                <TableCell align="center">{cocomoBasicCoefficients[key].a}</TableCell>
                                <TableCell align="center">{cocomoBasicCoefficients[key].b}</TableCell>
                                <TableCell align="center">{cocomoBasicCoefficients[key].c}</TableCell>
                                <TableCell align="center">{cocomoBasicCoefficients[key].d}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </AccordionDetails>
    </Accordion>
)