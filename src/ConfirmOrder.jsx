import React from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function({onConfirm, onCancel}) {
  const navigate = useNavigate();
   const dispatch = useDispatch();

  return (
    <div className='confirm-window'>
      <div className='confirm-box'>
        <h3>Confirm Your Order</h3>
        <p>Are You Sure You WWant to Place This Order?</p>

        <div className='window-button'>
          <button className='confirm-btn' onClick={onConfirm=() => {navigate("/order-placed")}}>Confirm</button>
          <button className='cancel-btn' onClick={()=> navigate("/cart")}>Cancel</button>
        </div>

      </div>
    </div>
  )
}
