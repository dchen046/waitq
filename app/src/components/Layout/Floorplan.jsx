import PropTypes from "prop-types";
import { useState } from "react";
import { Button, Row } from "react-bootstrap";

const getTables = (grid) => {
    const visited = [];
    for (let row = 0; row < grid.length; ++row) {
        const newRow = []
        for (let col = 0; col < grid[0].length; ++col) {
            newRow[col] = false;
        }
        visited[row] = newRow;
    }

    const tables = [];
    for (let col = 0; col < grid[0].length; ++col) {
        const colDetails = [];
        for (let row = 0; row < grid.length; ++row) {
            if (visited[row][col] || !grid[row][col].used) {
                colDetails.push(0);
                continue;
            };
            let checkRow = row + 1;
            let size = 0;
            while (checkRow < grid.length && grid[checkRow][col].used) {
                visited[checkRow][col] = true;
                ++size;
                ++checkRow;
            }
            row += size;
            colDetails.push(size + 1);
        }
        tables.push(colDetails);
    }

    return tables;
}

const Tables = ({ size }) => {
    const tableStyle = {
        minHeight: size == 0 ? '4rem' : `${size * 4}rem`,
        visibility: size == 0 ? 'hidden' : ''
    };

    const [occupied, setOccupied] = useState(false);

    const handleClick = () => {
        setOccupied(prev => !prev);
    }

    return (
        <Button
            variant={occupied ? 'danger' : 'info'}
            className="rounded-0 w-100"
            size="lg"
            disabled={size == 0}
            style={tableStyle}
            onClick={handleClick}
        >
        </Button>
    )
}

const Floorplan = ({ grid }) => {
    const tables = getTables(grid);

    return (
        <Row>
            {
                tables.map((col, rIndex) => {
                    return (
                        <div key={rIndex} className="col-1">
                            {
                                col.map((tableSize, index) => {
                                    return (
                                        <Tables key={index} size={tableSize} />
                                    )
                                })
                            }
                        </div>

                    );
                })
            }
        </Row>

    );
}



Floorplan.propTypes = {
    grid: PropTypes.array.isRequired
}
Tables.propTypes = {
    size: PropTypes.number.isRequired
}

export default Floorplan;