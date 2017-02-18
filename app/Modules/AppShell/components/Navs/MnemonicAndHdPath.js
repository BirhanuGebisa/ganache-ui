import React, { Component } from 'react'

import Styles from './MnemonicAndHdPath.css'

export default class MnemonicAndHdPath extends Component {
  render () {
    return (
      <section className={Styles.MnemonicAndHdPath}>
        <div>
          <h4>MNEMONIC</h4>
          <span>{this.props.mnemonic}</span>
        </div>
        <div>
          <h4>HD PATH</h4>
          <span>{this.props.hdPath}account_index</span>
        </div>
        <div>
          <h4>CURRENT BLOCK NUMBER</h4>
          <span>{this.props.blockNumber}</span>
        </div>
        <div>
          <h4>BLOCK INTERVAL TIME</h4>
          <span>{this.props.blockTime} (SEC)</span>
        </div>
      </section>
    )
  }
}
