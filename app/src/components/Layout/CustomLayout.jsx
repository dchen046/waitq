import { useRef, useState } from "react";
import { Button, Container } from "react-bootstrap";
import PropTypes from "prop-types";
import Grid from "./Grid";
import Floorplan from "./Floorplan";

const create2Darray = (size) => {
    const grid = [];
    for (let row = 0; row < size; ++row) {
        const gridRow = [];
        for (let col = 0; col < size; ++col) {
            const i = col + row * size;
            gridRow[col] = {
                row: row,
                col: col,
                used: false,
                name: '',
                number: i
            };
        }
        grid[row] = gridRow;
    }
    console.log(grid);
    return grid;
}

const Layout = ({ grid }) => {
    const [editMode, setEditMode] = useState(true);

    const toggleEditMode = () => {
        setEditMode(prev => !prev);
    }

    const handleEdit = () => {
        toggleEditMode();
    }

    const handleSave = () => {
        toggleEditMode();
        console.log(grid);
    }

    return (
        <>
            {editMode ? <Grid grid={grid} /> : <Floorplan grid={grid}/>}

            <Button
                variant="warning"
                className="m-3"
                disabled={editMode}
                onClick={handleEdit}
            >
                Edit
            </Button>


            <Button
                variant="primary"
                className="m-3"
                disabled={!editMode}
                onClick={handleSave}
            >
                Save
            </Button>
        </>

    )
}

const CustomLayout = () => {
    const grid = useRef(create2Darray(12));
    return (
        <Container className="grid-container">
            <Layout grid={grid.current} />
        </Container>
    )
}

Layout.propTypes = {
    grid: PropTypes.array.isRequired
}

export default CustomLayout;