import { memo } from 'react';
import './DeleteAllModal.css';

const DeleteAllModal = ({open, onClose, onConfirm}) =>{
    if(!open) return null;

    return(
        <div className='modal-box'>
            <div className='modal-content'>
                <h2>정말 모든 일정을 삭제하시겠습니까?</h2>
                <div className='modal-actions'>
                    <button className='cancel' onClick={onClose}>취소</button>
                    <button className='confirm' onClick={onConfirm}>삭제</button>
                </div>
            </div>
        </div>
    );
}

export default memo(DeleteAllModal);