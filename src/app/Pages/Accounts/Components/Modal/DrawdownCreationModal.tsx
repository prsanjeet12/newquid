import React from 'react';
import Modal from '../../../../../Components/Modal';

const DrawdownCreationModal: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => (
  <Modal open={open} onClose={onClose} title="Drawdown Creation" >

<h1>hello</h1>
    </Modal>
);

export default DrawdownCreationModal;
