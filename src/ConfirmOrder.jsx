import React from 'react'
import { useNavigate } from "react-router-dom";

export default function({onConfirm, onCancel}) {
  const navigate = useNavigate();

  return (
    <div className='confirm-window'>
      <div className='confirm-box'>
        <h3>Confirm Your Order</h3>
        <p>Are You Sure You WWant to Place This Order?</p>

        <div className='window-button'>
          <button className='confirm-btn' onclick={onConfirm=() => {navigate("order-placed")}}>Confirm</button>
          <button className='cancel-btn' onclick={()=> navigate("/cart")}>Cancel</button>
        </div>

      </div>
    </div>
  )
}
