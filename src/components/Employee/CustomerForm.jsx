import React, { Component } from 'react'
import { Drawer, Form, Button, Col, Row, Input, DatePicker, Checkbox } from 'antd'
import "./Employee.scss";
const CheckboxGroup = Checkbox.Group;
const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];

export default class CustomerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      checkedList: defaultCheckedList,
      indeterminate: true,
      checkAll: false,
      fullName: '',
      email: '',
      phone: '',
      timeStart: '',
      timeEnd: '',
    };
  }

  onChange = checkedList => {
    this.setState({
      checkedList,
      indeterminate: !!checkedList.length && checkedList.length < plainOptions.length,
      checkAll: checkedList.length === plainOptions.length,
    });
  };

  onCheckAllChange = e => {
    this.setState({
      checkedList: e.target.checked ? plainOptions : [],
      indeterminate: false,
      checkAll: e.target.checked,
    });
  };


  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  onSubmit = () => {
    this.onClose();
    console.log(this.state)
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
    return (
      <Drawer
        title="Room 1"
        width={720}
        onClose={this.onClose}
        visible={this.state.visible}
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
                rules={[{ required: true, message: 'Please enter phone number' }]}
              >
                <Input placeholder="Please enter phone number" onChange={value => this.setState({phone: value.target.value})}/>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="dateTime"
                label="DateTime"
                rules={[{ required: true, message: 'Please choose the dateTime' }]}
              >
                <DatePicker.RangePicker
                  style={{ width: '100%' }}
                  getPopupContainer={trigger => trigger.parentNode}
                  onChange={(date, dateString) => { this.setState({timeStart: dateString[0], timeEnd: dateString[1]}) }}
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
