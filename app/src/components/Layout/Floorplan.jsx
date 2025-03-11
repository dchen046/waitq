import PropTypes from "prop-types";
import { Button, Col, Row } from "react-bootstrap";

/**
 * Start:
 * Length:
 */
const getTables = (grid) => {
    console.log(grid.length);
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
            console.log(checkRow);
            console.log(col);
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


    // for (let row = 0; row < grid.length; ++row) {
    //     const rowDetails = [];
    //     for (let col = 0; col < grid[0].length; ++col) {
    //         if (visited[row][col] || !grid[row][col].used) continue;
    //         let checkRow = row + 1;
    //         let size = 1;
    //         while (grid[checkRow][col].used) {
    //             visited[checkRow][col] = true;
    //             ++size;
    //             ++checkRow;
    //         }
    //         const tableDetails = {
    //             start: [row, col],
    //             size: size
    //         };
    //         rowDetails.push(tableDetails);
    //     }
    //     tables.push(rowDetails);
    // }

    return tables;
}

const Tables = ({ size }) => {

    const tableStyle = {
        minHeight: size == 0 ? '4rem' : `${size * 4}rem`,
        visibility: size == 0 ? 'hidden' : ''
    };

    return (
        <>
            <Button
                variant="info"
                className="col-1 rounded-0 w-100"
                size="lg"
                disabled={size == 0}
                style={tableStyle}
            >
            </Button>
        </>
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
                            {/* <Button>HI</Button>
                             <Button>HI</Button>
                             <Button>HI</Button>
                            <Row>
                                <Button>HI</Button>
                            </Row>
                            <Row>
                                <Button>HI</Button>
                            </Row>
                            <Row>
                                <Button>HI</Button>
                            </Row> */}
                            {
                                col.map((tableSize, index) => {
                                    return (
                                        <div key={index}>
                                            <Tables size={tableSize} />
                                        </div>

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