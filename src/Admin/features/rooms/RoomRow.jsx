import {
  Copy,
  DotsThreeOutline,
  PencilLine,
  Trash,
} from '@phosphor-icons/react';
import { useDeleteRoom } from './hooks/useDeleteRoom';
import { useCreateRoom } from './hooks/useCreateRoom';
import { formatCurrency } from '../../utils/helpers';
import CreateRoomForm from './CreateRoomForm';
import Modal from '../../components/ui/Modal';
import ConfirmDelete from '../../components/ui/ConfirmDelete';
import Table from '../../components/ui/Table';
import DropdownMenu from '../../components/ui/DropdownMenu';

function RoomRow({ room }) {
  const { deleteRoom, isDeleting } = useDeleteRoom();
  const { createRoom, isCreating } = useCreateRoom();

  const {
    id: roomId,
    roomName,
    maxCapacity,
    regularPrice,
    discount,
    roomImage,
    description,
  } = room;

  function handleDuplicate() {
    createRoom({
      roomName: `Copy of ${roomName}`,
      maxCapacity,
      regularPrice,
      discount,
      roomImage,
      description,
    });
  }

  return (
    <Table.Row>
      <Table.Cell>
        <img
          src={roomImage}
          alt={`Room ${roomName}`}
          className="h-16 w-28 rounded-md object-cover"
        />
      </Table.Cell>

      <Table.Cell className="font-semibold">
        <span>{roomName}</span>
      </Table.Cell>

      <Table.Cell className="whitespace-nowrap px-6 py-2">
        <span>Fits up to {maxCapacity} guests</span>
      </Table.Cell>

      <Table.Cell className="font-semibold">
        <span>{formatCurrency(regularPrice)}</span>
      </Table.Cell>

      <Table.Cell className="whitespace-nowrap px-6 py-2">
        {discount ? (
          <span className="text-green-700">{formatCurrency(discount)}</span>
        ) : (
          <span>&mdash;</span>
        )}
      </Table.Cell>

      <Table.Cell>
        <DropdownMenu>
          <Modal>
            <DropdownMenu.Toggle toggleName={roomId}>
              <DotsThreeOutline size={20} weight="fill" />
            </DropdownMenu.Toggle>

            <DropdownMenu.Content windowName={roomId}>
              {/* Duplicate room */}
              <DropdownMenu.Item
                icon={<Copy size={20} />}
                onClick={handleDuplicate}
                disabled={isCreating}
              >
                Duplicate
              </DropdownMenu.Item>

              {/* Edit room */}
              <Modal.Toggle toggleName="edit-room">
                <DropdownMenu.Item icon={<PencilLine size={20} />}>
                  Edit
                </DropdownMenu.Item>
              </Modal.Toggle>

              {/* Delete room */}
              <Modal.Toggle toggleName="delete-room">
                <DropdownMenu.Item icon={<Trash size={20} />}>
                  Delete
                </DropdownMenu.Item>
              </Modal.Toggle>
            </DropdownMenu.Content>

            <Modal.Window windowName="edit-room">
              <CreateRoomForm editRoomProps={room} />
            </Modal.Window>

            <Modal.Window windowName="delete-room">
              <ConfirmDelete
                resourceName="room"
                disabled={isDeleting}
                onConfirm={() => deleteRoom(roomId)}
              />
            </Modal.Window>
          </Modal>
        </DropdownMenu>
      </Table.Cell>
    </Table.Row>
  );
}

export default RoomRow;
