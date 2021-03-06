/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import Moment from '../src/index';

storiesOf('Moment', module)
  .addDecorator(withKnobs)
  .addWithJSX('with default props', () => {
    return (
      <Moment date={text('date', '1976-04-19T12:59-0500')} />
    );
  })
  .addWithJSX('using the format prop', () => {
    return (
      <Moment format={text('format', 'D MMM YYYY')} date={text('date', '1976-04-19T12:59-0500')} />
    );
  })
  .addWithJSX('using the fromNow prop', () => {
    return (
      <Moment fromNow date={text('date', new Date())} />
    );
  })
  .addWithJSX('using add and subtract props', () => {
    return (
      <div>
        <Moment date={text('date', new Date())} add={{ days: 1 }} fromNow />
        <br />
        <Moment date={text('date', new Date())} subtract={{ days: 1 }} fromNow />
      </div>
    );
  })
  .addWithJSX('using the unix prop', () => {
    return (
      <Moment unix date={number('unix time', 198784740)} />
    );
  })
  .addWithJSX('using filter prop', () => {
    return (
      <Moment
        date={text('date', '1976-04-19T12:59-0500')}
        filter={(d) => {
          return d.toUpperCase();
        }}
      />
    );
  })
;

