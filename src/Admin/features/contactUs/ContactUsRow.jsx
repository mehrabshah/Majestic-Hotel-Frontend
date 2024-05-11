import React from 'react';
import Table from '../../components/ui/Table';
import Badge from '../../components/ui/Badge';
import DropdownMenu from '../../components/ui/DropdownMenu';
import Modal from '../../components/ui/Modal';
import { Eye, Trash,DotsThreeOutline } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';
import ConfirmDelete from '../../components/ui/ConfirmDelete';
import { useDeleteContactUs } from './hooks/useDeleteContactUs';
import { formatCurrency, formatDistanceToNow } from '../../utils/helpers';

function ContactUsRow({ contactUs }) {
  const navigate = useNavigate();
  const { deleteContactUs, isDeleting } = useDeleteContactUs();

  const { id, name, email, telephone, subject, comments } = contactUs;
  const truncatedSubject = subject.length > 20 ? `${subject.substring(0, 20)}...` : subject;
  return (
    <Table.Row>
      <Table.Cell>
        <span>{name}</span>
      </Table.Cell>

      <Table.Cell>
        <span>{email}</span>
      </Table.Cell>

      <Table.Cell>
        <span>{telephone}</span>
      </Table.Cell>

      <Table.Cell>
        <span>{truncatedSubject}</span>
      </Table.Cell>

      <Table.Cell>
      <DropdownMenu>
          <Modal>
            <DropdownMenu.Toggle toggleName={id}>
              <DotsThreeOutline size={20} weight="fill" />
            </DropdownMenu.Toggle>

            <DropdownMenu.Content windowName={id}>
              {/* See details */}
              <DropdownMenu.Item
                icon={<Eye size={20} />}
                onClick={() => navigate(`/contactUs/${id}`)}
              >
                See details 
              </DropdownMenu.Item>

              {/* Delete contactUs */}
              {/* <Modal.Toggle toggleName="delete-contactUs">
                <DropdownMenu.Item icon={<Trash size={20} />}>
                  Delete contactUs
                </DropdownMenu.Item>
              </Modal.Toggle> */}
            </DropdownMenu.Content>

            <Modal.Window windowName="delete-contactUs">
              <ConfirmDelete
                resourceName="contactUs"
                disabled={isDeleting}
                onConfirm={() => deleteContactUs(id)}
              />
            </Modal.Window>
          </Modal>
        </DropdownMenu>
      </Table.Cell>
    </Table.Row>
  );
}

export default ContactUsRow;
