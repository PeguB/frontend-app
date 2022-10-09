import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(LastName, FirstName,Course, Laboratory, Presentation1, Presentation2, Presentation3) {
    return {LastName, FirstName,Course, Laboratory, Presentation1, Presentation2, Presentation3};
}

const rows = [
    createData('Popescu', "Ion","OOP", 6, 3, 4,10),
];

export default function BasicTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>FirstName</TableCell>
                        <TableCell>LastName</TableCell>
                        <TableCell>CourseName</TableCell>
                        <TableCell>Laboratory</TableCell>
                        <TableCell>Presentation1</TableCell>
                        <TableCell>Presentation2</TableCell>
                        <TableCell>Presentation3</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell>{row.FirstName}</TableCell>
                            <TableCell>{row.LastName}</TableCell>
                            <TableCell>{row.Course}</TableCell>
                            <TableCell>{row.Laboratory}</TableCell>
                            <TableCell>{row.Presentation1}</TableCell>
                            <TableCell>{row.Presentation2}</TableCell>
                            <TableCell>{row.Presentation3}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
