import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Outlet } from 'react-router-dom';

function Home() {
    return (
        <>
            <div >

                {/* Stack the columns on mobile by making one full-width and the other half-width */}
                <Row>
                    <Col style={{ background: "grey", maxWidth: "250px", height: "100vh" }}>
                        
                    </Col>
                    <Col style={{ background: "skyblue", height: "100vh" }} >
                        <Outlet />
                    </Col>

                </Row>

            </div>

        </>
    )
}

export default Home