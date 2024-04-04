import { Plus } from '@phosphor-icons/react';
import Modal from '../../../components/ui/Modal';
import CreateRoomForm from '../CreateRoomForm';

function AddRoom() {
  return (
    <div>
      <Modal>
        <Modal.Toggle toggleName="create-room">
          <button className="flex items-center justify-center gap-2 rounded-md bg-brand-600 px-3 py-2 text-sm font-medium text-brand-50 shadow-sm transition-all hover:bg-brand-700">
            <Plus size={20} />
            <span>Add new room</span>
          </button>
        </Modal.Toggle>
        <Modal.Window windowName="create-room">
          <CreateRoomForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddRoom;
