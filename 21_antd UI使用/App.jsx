import React, { Component } from 'react'
import { Button, DatePicker, Space } from 'antd';
import { WechatOutlined } from "@ant-design/icons"
import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';
const { RangePicker } = DatePicker;


export default class App extends Component {

  onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  render() {
    return (
      <div>
        App...
        <button>按钮</button>
        <Button type="primary">Primary Button</Button>
        <WechatOutlined />
        <Space direction="vertical">
          <DatePicker locale={locale} onChange={this.onChange} />
          <DatePicker locale={locale} onChange={this.onChange} picker="week" />
          <DatePicker locale={locale} onChange={this.onChange} picker="month" />
          <DatePicker locale={locale} onChange={this.onChange} picker="quarter" />
          <DatePicker locale={locale} onChange={this.onChange} picker="year" />
          <RangePicker locale={locale} />
        </Space>
      </div>
    )
  }
}
