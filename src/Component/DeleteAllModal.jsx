import { memo } from 'react';
import './DeleteAllModal.css';

const DeleteAllModal = ({open, onClose, onConfirm}) =>{
    if(!open) return null;

    return(
        <div className='modal-back'>
            <div className='modal-content'>
                <h2>Are you sure to <br></br> Delete all TodoList?</h2>
                <div className='modal-actions'>
                    <button className='cancel' onClick={onClose}>Keep</button>
                    <button className='confirm' onClick={onConfirm}>Delete</button>
                </div>
            </div>
        </div>
    );
}

export default memo(DeleteAllModal);