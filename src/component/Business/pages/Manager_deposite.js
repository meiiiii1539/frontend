import bag_img_4 from '../../../images/bag_4.jpg';
import bag_img_5 from '../../../images/bag_5.jpg';
import { Figure, Col, Row, ButtonGroup } from 'react-bootstrap';
import './managerlist.css';

function Manager_deposite() {
    return (
        <div className='manager_body'>
            <Row className='manager_row'>
                <Col>
                    <div className='managerlist'>
                        <Row>
                            <Figure.Image width={200} height={200} src={bag_img_4} />
                            <Col className='manager_col'>
                                <Col className='managerlist_title'>Chanel</Col>
                                <Col>Chanel經典皮質側背包</Col>
                                <Col className='managerbutton'>
                                    <ButtonGroup>
                                        <button className='managerbuttonlist'>下架商品</button>
                                        <button className='managerbuttonlist'>編輯商品</button>
                                    </ButtonGroup>
                                </Col>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col>
                    <div className='managerlist'>
                        <Row>
                            <Figure.Image width={200} height={200} src={bag_img_5} />
                            <Col className='manager_col'>
                                <Col className='managerlist_title'>Chanel</Col>
                                <Col>Chanel優雅信封側背包</Col>
                                <Col className='managerbutton'>
                                    <ButtonGroup>
                                        <button className='managerbuttonlist'>下架商品</button>
                                        <button className='managerbuttonlist'>編輯商品</button>
                                    </ButtonGroup>
                                </Col>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
            <Row className='manager_row'>
                <Col>
                    <div className='managerlist'>
                        <Row>
                            <Figure.Image width={200} height={200} src={bag_img_4} />
                            <Col className='manager_col'>
                                <Col className='managerlist_title'>Chanel</Col>
                                <Col>Chanel經典皮質側背包</Col>
                                <Col className='managerbutton'>
                                    <ButtonGroup>
                                        <button className='managerbuttonlist'>下架商品</button>
                                        <button className='managerbuttonlist'>編輯商品</button>
                                    </ButtonGroup>
                                </Col>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col>
                    <div className='managerlist'>
                        <Row>
                            <Figure.Image width={200} height={200} src={bag_img_5} />
                            <Col className='manager_col'>
                                <Col className='managerlist_title'>Chanel</Col>
                                <Col>Chanel優雅信封側背包</Col>
                                <Col className='managerbutton'>
                                    <ButtonGroup>
                                        <button className='managerbuttonlist'>下架商品</button>
                                        <button className='managerbuttonlist'>編輯商品</button>
                                    </ButtonGroup>
                                </Col>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
            <Row className='manager_row'>
                <Col>
                    <div className='managerlist'>
                        <Row>
                            <Figure.Image width={200} height={200} src={bag_img_4} />
                            <Col className='manager_col'>
                                <Col className='managerlist_title'>Chanel</Col>
                                <Col>Chanel經典皮質側背包</Col>
                                <Col className='managerbutton'>
                                    <ButtonGroup>
                                        <button className='managerbuttonlist '>下架商品</button>
                                        <button className='managerbuttonlist'>編輯商品</button>
                                    </ButtonGroup>
                                </Col>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col>
                    <div className='managerlist'>
                        <Row>
                            <Figure.Image width={200} height={200} src={bag_img_5} />
                            <Col className='manager_col'>
                                <Col className='managerlist_title'>Chanel</Col>
                                <Col>Chanel優雅信封側背包</Col>
                                <Col className='managerbutton'>
                                    <ButtonGroup>
                                        <button className='managerbuttonlist'>下架商品</button>
                                        <button className='managerbuttonlist'>編輯商品</button>
                                    </ButtonGroup>
                                </Col>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
export default Manager_deposite;