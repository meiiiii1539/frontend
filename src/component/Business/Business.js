
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Tabs, Tab } from "react-bootstrap";
import style from './Business.module.css';

import Deposite from './pages/Manager_deposite';
import Delivery from './pages/Manager_delivery';
import Renting from './pages/Manager_renting';
import Takeoff from './pages/Manager_takeoff';
import Analyze from './pages/Manager_analyze';


function business() {
    return (
        <div className={style.body}>
            <Row>
                <Col className={style.content}>
                    <Tabs defaultActiveKey="deposite" className={style.tabs} fill>
                        <Tab eventKey="deposite" title="倉庫存放中" className="manager_list"><Deposite /></Tab>
                        <Tab eventKey="delivery" title="配送中" className="manager_list"><Delivery /></Tab>
                        <Tab eventKey="renting" title="租借中" className="manager_list"><Renting /></Tab>
                        <Tab eventKey="takeoff" title="已下架商品" className="manager_list"><Takeoff /></Tab>
                        <Tab eventKey="analyze" title="數據分析排行" className="manager_list"><Analyze /></Tab>
                    </Tabs>
                </Col>

            </Row>

        </div>
    )

}
export default business;