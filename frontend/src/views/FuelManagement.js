import React from 'react';
import CanvasJSReact from '../assets/canvasJs/canvasjs.react';

import {
    Badge,
    Button,
    Card,
    Navbar,
    Nav,
    Table,
    Container,
    Row,
    Col,
    Form,
    OverlayTrigger,
    Tooltip,
} from "react-bootstrap";
import {useDispatch} from "react-redux";

const FuelManagement = () => {

    let CanvasJS = CanvasJSReact.CanvasJS;
    let CanvasJSChart = CanvasJSReact.CanvasJSChart;
    const dispatch= useDispatch()

    const options = {
        theme: "light1",
        animationEnabled: true,
        exportEnabled: true,
        title: {
            text: "Fuel Comparison"
        },
        axisY: {
            title: "Fuel (in litres)"
        },
        toolTip: {
            shared: true
        },
        legend: {
            verticalAlign: "center",
            horizontalAlign: "right",
            reversed: true,
            cursor: "pointer",
        },
        data: [{
            type: "spline",
            name: "Bus 1",
            showInLegend: true,
            dataPoints: [
                { y: 155, label: "Jan" },
                { y: 150, label: "Feb" },
                { y: 152, label: "Mar" },
                { y: 148, label: "Apr" },
                { y: 142, label: "May" },
                { y: 150, label: "Jun" },
                { y: 146, label: "Jul" },
                { y: 149, label: "Aug" },
                { y: 153, label: "Sept" },
                { y: 158, label: "Oct" },
                { y: 154, label: "Nov" },
                { y: 150, label: "Dec" }
            ]
        },
            {
                type: "spline",
                name: "Bus 2",
                showInLegend: true,
                dataPoints: [
                    { y: 172, label: "Jan" },
                    { y: 173, label: "Feb" },
                    { y: 175, label: "Mar" },
                    { y: 172, label: "Apr" },
                    { y: 162, label: "May" },
                    { y: 165, label: "Jun" },
                    { y: 172, label: "Jul" },
                    { y: 168, label: "Aug" },
                    { y: 175, label: "Sept" },
                    { y: 170, label: "Oct" },
                    { y: 165, label: "Nov" },
                    { y: 169, label: "Dec" }
                ]
            }]
    }
    return (
        <Container fluid>
            <Row>
                <Col xs={12}>
                    <CanvasJSChart options={options}/>

                </Col>
            </Row>

        </Container>
    );
};

export default FuelManagement;
