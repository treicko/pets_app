import { Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import { connect, useDispatch } from "react-redux";
import { GetAllPets } from "../Redux/ActionCreater";
import { useEffect, useState } from "react";

const Pets = (props) => {

    const [page, setPage] = useState(0);
    const [rowperpage, setRowperpage] = useState(5);

    const columns = [
        { id: 'id', name: 'Id' },
        { id: 'image', name: 'Image' },
        { id: 'name', name: 'name' },
    ];

    const dispatch = useDispatch();

    const handlepagechange = (event, newpage) => {
        setPage(newpage);
    }

    const handlerowperpagechange = (event) => {
        setRowperpage(event.target.value);
        setPage(0);
    }

    useEffect(() => {
        props.loadPets();
    }, []);

    return (
        <>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow style={{ backgroundColor: 'midnightblue' }}>
                            { columns.map((column) => <TableCell key={column.id} style={{ color: 'white' }}> {column.name} </TableCell>) }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { props.petsState.petList &&
                            props.petsState.petList
                                .slice(page * rowperpage, page * rowperpage + rowperpage)
                                .map((row, i) => {
                                    return (
                                        <TableRow key={i}>
                                            <TableCell>{row.id}</TableCell>
                                            <TableCell>{row.image}</TableCell>
                                            <TableCell>{row.name}</TableCell>
                                        </TableRow>
                                    );
                                })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPAgeOptions={[2, 5, 10, 20]}
                rowsPerPage={rowperpage}
                page={page}
                count={props.petsState.petList.length}
                component={'div'}
                onPageChange={handlepagechange}
                onRowsPerPageChange={handlerowperpagechange}
                >
            </TablePagination>
        </>
    );
}

const mapStateProps = (state) => {
    return {
        petsState: state.pet
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadPets: () => dispatch(GetAllPets())
    };
}

export default connect(mapStateProps, mapDispatchToProps)(Pets);