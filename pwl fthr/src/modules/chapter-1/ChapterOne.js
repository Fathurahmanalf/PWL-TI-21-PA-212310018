import React, { Component } from 'react'
import MessegersUI from './Widgets/Messagers/MessagersUI'



export default class ChapterOne extends Component {
  render() {
    return (
      <div>
        <h1 className='text-white mb-5 mx-3'>
        Chapter one: The messengers
        </h1>
      <MessegersUI />
      </div>
    )
  }
}
