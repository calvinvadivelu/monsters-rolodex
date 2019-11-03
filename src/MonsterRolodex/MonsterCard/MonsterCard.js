import React, { Component } from 'react';
import './MonsterCard.scss';
class MonsterCard extends Component {
  render() {
    return (
      <div className="monster">
        <div className="monster-name">{this.props.monster.name}</div>
      </div>
    );
  }
}

export default MonsterCard;