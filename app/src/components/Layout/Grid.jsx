import { Container, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button'
import PropTypes from "prop-types";

const Grid = ({ grid }) => {
    return (
        <Container>
            {
                grid.map((row, rIndex) => {
                    return (
                        <Row key={rIndex} className="">
                            {
                                row.map((col) => {
                                    return <GridButton key={col.number} col={col} />
                                })
                            }
                        </Row>
                    );
                })
            }
        </Container>
        
    );
}

function GridButton({ col }) {
    const [used, setUsed] = useState(col.used);
    const handleClick = () => {
        setUsed((prev) => !prev);
    }

    useEffect(() => {
        col.used = used;
    }, [used]);

    return (
        <Button
            className="col-1 rounded-0 overflow-hidden grid-button"
            variant={used ? 'secondary' : 'outline-secondary'}
            size="lg"
            onClick={handleClick}
        >
        </Button>
    );
}

Grid.propTypes = {
    grid: PropTypes.array.isRequired
}
GridButton.propTypes = {
    col: PropTypes.object.isRequired
}

export default Grid;