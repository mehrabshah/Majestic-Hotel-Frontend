// ContactUsDetail.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMoveBack } from '../../../hooks/useMoveBack';
import { useContactUsDetail } from '../hooks/useContactUsDetail';
import Spinner from '../../../components/ui/Spinner';
import ContactUsDataBox from './ContactUsDataBox';
import { ArrowLeft } from '@phosphor-icons/react';
import Modal from '../../../components/ui/Modal';
import ConfirmDelete from '../../../components/ui/ConfirmDelete';
import { useDeleteContactUs } from '../hooks/useDeleteContactUs';

function ContactUsDetail() {
  const { contactUs, isLoading } = useContactUsDetail();
  const { deleteContactUs, isDeleting } = useDeleteContactUs();
  const moveBack = useMoveBack();
  const navigate = useNavigate();

  if (isLoading) return <Spinner className="mx-auto h-6 w-6" />;

  // If there is no contactUs data to show
  if (!contactUs) return <div>No data to show at the moment.</div>;

  return (
    <>
      <div className="mb-10 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <span className="text-3xl font-semibold">Contact Us Inquiry</span>
        </div>

        <button
          onClick={moveBack}
          className="flex items-center justify-center gap-2 text-sm font-medium text-gray-600 transition-all hover:text-gray-700"
        >
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>
      </div>

      <ContactUsDataBox contactUs={contactUs} />

      <div className="mt-10 flex items-center justify-end gap-2">
        <Modal>
          <Modal.Toggle toggleName="delete-contactUs">
            <button className="rounded-md bg-red-600 px-3 py-2 text-sm font-medium text-red-100 shadow-sm transition-all hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-red-200">
              Delete Contact Us Inquiry
            </button>
          </Modal.Toggle>

          <Modal.Window windowName="delete-contactUs">
            <ConfirmDelete
              resourceName="contactUs inquiry"
              disabled={isDeleting}
              onConfirm={() => deleteContactUs(contactUs.id)}
            />
          </Modal.Window>
        </Modal>
      </div>
    </>
  );
}

export default ContactUsDetail;
