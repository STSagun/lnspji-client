import React, { Component } from 'react';
import { Slider } from '../../Component/Slider/index';
import { PUBLIC_IMAGE_FOLDER } from '../../config/constant';
import Content from '../../Component/Content/Content'


const banner = [
  `${PUBLIC_IMAGE_FOLDER}default.png`,
  `${PUBLIC_IMAGE_FOLDER}cloud.jpg`,
  `${PUBLIC_IMAGE_FOLDER}dns-server.png`,
  `${PUBLIC_IMAGE_FOLDER}full-stack-web-development.jpg`,
  `${PUBLIC_IMAGE_FOLDER}js.jpg`,
  `${PUBLIC_IMAGE_FOLDER}load-balancer.png`,
];
class Main extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <>
        <Slider banners={banner} random />
        <Content />

      </>
    );
  }
}

export default Main;
