//from App

// Globals
import React, { Component } from 'react';

// Components
import CardRow from '../ecosystems/CardRow';

// Styles
import styles from './styles/Takeahike.scss';

export default class Takeahike extends Component {
  render() {
    return (
      <div className={`${styles.Takeahike}`}>
        <div className={`${styles.flexLeft}`}></div>
        <div className={`${styles.flexMiddle}`}>
            <div className={`${styles.outercabinet}`}>
                <div className={`${styles.innercabinet}`}>
                    <CardRow type="router"/>
                    <CardRow type="taskrunner" />
                    <CardRow type="frontend"/>
                    <CardRow type="auth"/>
                </div>
            </div>
            <div className={`${styles.bottomtray}`}></div>
        </div>
        <div className={`${styles.flexRight}`}></div>
      </div>
    );
  }
}