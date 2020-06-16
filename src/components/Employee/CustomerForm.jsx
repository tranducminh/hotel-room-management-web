import React, { Component } from 'react'
import { Drawer, Form, Button, Col, Row, Input, DatePicker, Checkbox } from 'antd'
import Axios from 'axios';
import { Context } from './../../containers/Employee/Context/RoomDataDetailProvider';
import moment from 'moment' 
import "./Employee.scss";
const CheckboxGroup = Checkbox.Group;

//const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];

class CustomerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      checkedList: defaultCheckedList,
      indeterminate: true,
      checkAll: false,
      fullName: '',
      dateOfBirth: '',
      email: '',
      identificationNumber: '',
      phoneNumber: '',
      timeStart: '',
      timeEnd: '',
      plainOptions: [],
      listService: []
    };
  }
  componentDidMount = () => {
    Axios.get('http://localhost:8080/services').then(
      data => this.setState({
        plainOptions: data.data.map(service=>service.serviceName),
        listService: data.data 
      })
    )
  }
  onChange = checkedList => {
    const { plainOptions, listService} = this.state;
    this.setState({
      checkedList,
      listService: listService.map(service => 
        (checkedList.indexOf(service.serviceName) >= 0)? {...service, checked: true}: {...service, checked: false} 
      ),
      indeterminate: !!checkedList.length && checkedList.length < plainOptions.length,
      checkAll: checkedList.length === plainOptions.length,
    });
  };

  onCheckAllChange = e => {
    const { plainOptions } = this.state;

    this.setState({
      checkedList: e.target.checked ? plainOptions : [],
      indeterminate: false,
      checkAll: e.target.checked,
    });
  };


  onClose = () => {
    this.props.setFormVisible(false);
  };

  onSubmit = () => {
    const { fullName , dateOfBirth, phoneNumber, identificationNumber} = this.state;
    this.onClose();
    console.log({ fullName , dateOfBirth, phoneNumber, identificationNumber} )
    Axios.post('http://localhost:8080/customers',{
      fullName , dateOfBirth, phoneNumber, identificationNumber
    }).then(data => {
      console.log(data.data);
    });

    Axios.put(`http://localhost:8080/rooms/${this.props.room.id}/INUSE`).then(data => {
      console.log(data.data);
    });

    const { listService } = this.state; 
    console.log(listService);
    const lsServicePromise = listService.reduce((ArrRes, service) => {
      if(service.checked === true) 
        ArrRes.push(Axios.post('http://localhost:8080/booking-services',{
          roomId: this.props.room.id,
          serviceId: service.id,
        }));
        return ArrRes;
     },[]);

     Promise.all(lsServicePromise).then(lsRes => {
       console.log(lsRes);
     })

    

    // console.log(this.state)
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.visible !== prevState.visible) {
      console.log(this.props.visible)
      this.setState({
        visible: this.props.visible,
      });
    }
  }

  render() {
    const { plainOptions } = this.state;
    return (

      <Drawer
        title={`Room ${this.props.room.roomNumber}`}
        width={720}
        onClose={this.onClose}
        visible={this.props.formVisible}
        bodyStyle={{ paddingBottom: 80 }}
        footer={
          <div
            style={{
              textAlign: 'right',
            }}
          >
            <Button onClick={this.onClose} style={{ marginRight: 8 }}>
              Cancel
              </Button>
            <Button onClick={this.onSubmit} type="primary">
              Submit
              </Button>
          </div>
        }
      >
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="fullName"
                label="Full Name"
                rules={[{ required: true, message: 'Please enter full name' }]}
              >
                <Input placeholder="Please enter full name" onChange={value => this.setState({fullName: value.target.value})}/>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="gmail"
                label="Gmail"
                rules={[{ required: false, message: 'Please enter gmail' }]}
              >
                <Input
                  style={{ width: '100%' }}
                  addonAfter="@gmail.com"
                  placeholder="Please enter gmail"
                  onChange={value => this.setState({email: value.target.value})}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="phoneNumber"
                label="Phone Number"
                rules={[{ required: true, message: 'Please enter phoneNumber number' }]}
              >
                <Input placeholder="Please enter phone number" onChange={value => this.setState({phoneNumber: value.target.value})}/>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="date Time"
                label="Date Time"
                rules={[{ required: true, message: 'Please choose the dateTime' }]}
              >
                <DatePicker.RangePicker
                  style={{ width: '100%' }}
                  getPopupContainer={trigger => trigger.parentNode}
                  selected={moment()}
                  onChange={(date, dateString) => { this.setState({timeStart: dateString[0], timeEnd: dateString[1]}) }}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="identificationNumber"
                label="Identification Number"
                rules={[{ required: true, message: 'Please enter dentification number' }]}
              >
                <Input placeholder="Please enter identification number" onChange={value => this.setState({identificationNumber: value.target.value})}/>
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                name="dateTime"
                label="Date Time"
                rules={[{ required: true, message: 'Please choose the dateTime' }]}
              >
                <DatePicker
                  style={{ width: '100%' }}
                  onChange={(date, dateString) => { this.setState({dateOfBirth: dateString}) }}
                />
              </Form.Item>
            </Col>
           
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="service"
                label="Services"
                rules={[{ required: true, message: 'Please enter full name' }]}
              >
                <div className="site-checkbox-all-wrapper">
                  <Checkbox
                    indeterminate={this.state.indeterminate}
                    onChange={this.onCheckAllChange}
                    checked={this.state.checkAll}
                  >
                    Check all
                </Checkbox>
                </div>
                <br />
                <CheckboxGroup
                  options={plainOptions}
                  value={this.state.checkedList}
                  onChange={this.onChange}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="note"
                label="Note"
                rules={[
                  {
                    required: false,
                    message: 'please enter url description',
                  },
                ]}
              >
                <Input.TextArea rows={4} placeholder="please enter url description" onChange={value => this.setState({note: value.target.value})}/>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    )
  }
}
export default props => (
  <Context.Consumer>
    {({ setModalVisible, setRoom, room, setFormVisible, formVisible}) => (
      <CustomerForm setModalVisible={setModalVisible}
      setRoom={setRoom} 
      room={room}
      setFormVisible={setFormVisible}
      formVisible={formVisible}

      {...props} />
    )}
  </Context.Consumer>
);