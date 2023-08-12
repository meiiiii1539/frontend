import bag_img_1 from '../../../images/bag_1.jpg';
import bag_img_4 from '../../../images/bag_4.jpg';
import bag_img_5 from '../../../images/bag_5.jpg';
import './managerlist.css';
import {Figure, Col, Row, ButtonGroup, Button} from 'react-bootstrap';

function Manager_renting(){
    return(
        <div className='manager_body'>
        <Row className='manager_row'>
            <Col>
                <div className='managerlist'>
                    <Row>
                        <Figure.Image width={200} height={200} src={bag_img_1}/>
                        <Col className='manager_col'>
                            <Col className='managerlist_title'>Chanel</Col>
                            <Col>Chanel經典皮質側背包</Col>
                            <Col className='managerbutton'>
                                <ButtonGroup>
                                    <Button className='managerbuttonlist col-5'>下架商品</Button>
                                    <Button className='managerbuttonlist'>編輯商品</Button>
                                </ButtonGroup>
                            </Col>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col>
                <div className='managerlist'>
                    <Row>
                        <Figure.Image width={200} height={200} src={bag_img_5}/>
                        <Col className='manager_col'>
                            <Col className='managerlist_title'>Chanel</Col>
                            <Col>Chanel優雅信封側背包</Col>
                            <Col className='managerbutton'>
                                <ButtonGroup>
                                    <Button className='managerbuttonlist col-5'>下架商品</Button>
                                    <Button className='managerbuttonlist'>編輯商品</Button>
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
                        <Figure.Image width={200} height={200} src={bag_img_4}/>
                        <Col className='manager_col'>
                            <Col className='managerlist_title'>Chanel</Col>
                            <Col>Chanel經典皮質側背包</Col>
                            <Col className='managerbutton'>
                                <ButtonGroup>
                                    <Button className='managerbuttonlist col-5'>下架商品</Button>
                                    <Button className='managerbuttonlist'>編輯商品</Button>
                                </ButtonGroup>
                            </Col>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col></Col>
        </Row>
        </div>
    )
}
export default Manager_renting;