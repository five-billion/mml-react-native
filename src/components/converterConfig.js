import React from 'react';

import { Input } from './Input';
import { Button } from './Button';
import { ButtonList } from './ButtonList';
import { AddToCalendar } from './AddToCalendar';
import { Scheduler } from './Scheduler';
import { Text } from './Text';
import { MD } from './MD';
import { Row } from './Row';
import { Col } from './Col';
import { Image } from './Image';
import { Icon } from './Icon';
import { Carousel } from './Carousel';
import { CarouselItem } from './CarouselItem';
import { Number } from './Number';

/**
 * The converterConfig maps MML tags to react nodes
 * Every converter is passed the MML tag as well as the children (as React nodes)
 */
export const converterConfig = {
  button: (tag) => {
    return <Button text={tag.getText()} {...tag.node.attributes} key={tag.key} />;
  },
  button_list: (tag, children) => {
    return (
      <ButtonList key={tag.key} {...tag.node.attributes}>
        {children}
      </ButtonList>
    );
  },
  input: (tag) => {
    return <Input key={tag.key} {...tag.node.attributes} />;
  },
  add_to_calendar: (tag) => {
    return <AddToCalendar key={tag.key} {...tag.node.attributes} />;
  },
  col: (tag, children) => {
    return (
      <Col key={tag.key} {...tag.node.attributes}>
        {children}
      </Col>
    );
  },
  row: (tag, children) => {
    return (
      <Row key={tag.key} {...tag.node.attributes}>
        {children}
      </Row>
    );
  },
  icon: (tag) => {
    return <Icon key={tag.key} {...tag.node.attributes} />;
  },
  image: (tag) => {
    return <Image key={tag.key} {...tag.node.attributes} />;
  },
  md: (tag) => {
    return <MD key={tag.key} text={tag.getText()} {...tag.node.attributes} />;
  },
  text: (tag) => {
    return <Text key={tag.key} text={tag.getText()} {...tag.node.attributes} />;
  },
  scheduler: (tag) => {
    return (
      <Scheduler
        key={tag.key}
        interval={tag.node.attributes.interval}
        duration={tag.node.attributes.duration}
        selected={tag.node.attributes.selected}
        full_day={tag.node.attributes.full_day}
        ical_availability={tag.node.attributes.ical_availability}
      />
    );
  },
  carousel: (tag, children) => {
    return <Carousel key={tag.key}>{children}</Carousel>;
  },
  item: (tag, children) => {
    return <CarouselItem key={tag.key}>{children}</CarouselItem>;
  },
  number: (tag) => {
    return <Number key={tag.key} {...tag.node.attributes} />;
  },
};
