/* eslint-disable max-len */
import React from 'react';
import _ from 'lodash';
import { Doughnut } from 'react-chartjs-2';

export class Analyst extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    const { profile } = this.props;
    if (!profile) return true;
    if (profile.ticker !== nextProps.profile.ticker) return true;
    return false;
  }

  render() {
    const { profile } = this.props;
    if (!profile) {
      return (
        <div className='font-12'>Not available at this time... </div>
      );
    }
    if (profile.analyst_img) {
      return (
        <img src={profile.analyst_img} style={{ width: '100%' }} />
      );
    }
    const recommendation = _.first((profile.recommendation || {}).data) || {};
    const pricetarget = _.first((profile.pricetarget || {}).data) || {};

    const data = {
      labels: [
        `Buy (${recommendation.ratingBuy})`,
        `Overweight (${recommendation.ratingOverweight})`,
        `Hold (${recommendation.ratingHold})`,
        `Underweight (${recommendation.ratingUnderweight})`,
        `Sell (${recommendation.ratingSell})`,
      ],
      datasets: [{
        data: [
          recommendation.ratingBuy,
          recommendation.ratingOverweight,
          recommendation.ratingHold,
          recommendation.ratingUnderweight,
          recommendation.ratingSell,
        ],
        backgroundColor: [
        'darkgreen',
        'green',
        'gold',
        'orange',
        'red'
        ],
      }]
    };

    return (
      <div className='row no-gutters font-12'>
        <div className='col-md-12'>
          {pricetarget.priceTargetHigh ? <div><b>Target high:</b> <b className='green'>{pricetarget.priceTargetHigh}</b></div> : null}
          {pricetarget.priceTargetLow ? <div><b>Target low:</b> <b className='green'>{pricetarget.priceTargetLow}</b></div> : null}
          {pricetarget.priceTargetAverage && (pricetarget.numberOfAnalysts) ? <div><b>Average:</b> <b className='green'>{pricetarget.priceTargetAverage}</b> based on <b className='green'>{pricetarget.numberOfAnalysts}</b> analysts as of <b>{pricetarget.updatedDate}</b></div> : null}
          <br />
        </div>
        <div className='col-md-12'>
          {recommendation ? <div>
            <Doughnut height={120} data={data} options={{ legend: { position: 'left', display: true, fontSize: 8 } }} />
          </div> : null}
        </div>
      </div>
    );
  }
}

export default Analyst;
