import React from 'react'

export default function({onConfirm, onCancel}) {
  return (
    <div className='confirm-window'>
      <div className='confirm-box'>
        <h3>Confirm Your Order</h3>
        <p>Are You Sure You WWant to Place This Order?</p>

        <div className='window-button'>
          <button className='confirm-btn' onclick={onConfirm}>Confirm</button>
          <button className='cancel-btn' onclick={onCancel}>Cancel</button>
        </div>

      </div>
    </div>
  )
}
