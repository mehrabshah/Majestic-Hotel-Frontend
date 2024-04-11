// ContactUsDataBox.jsx
import React from 'react';
import { format, parseISO, isToday } from 'date-fns';
import { formatCurrency } from '../../../utils/helpers';
import { ChatDots, CheckCircle, BookmarkSimple ,CurrencyCircleDollar } from '@phosphor-icons/react';

function ContactUsDataBox({ contactUs }) {
  const { createdAt, name,telephone, email, subject,comments } = contactUs;

  return (
    <div className="flex min-w-full flex-col overflow-hidden rounded-md bg-gray-0 shadow-sm">
      <div className="flex items-center justify-between bg-brand-500 px-10 py-5 text-xl font-medium text-brand-50">
        <div className="flex items-center gap-2">
          <ChatDots size={32} />
          <span>{name} </span>
        </div>

        <span>{format(parseISO(createdAt), 'EEE, MMM dd yyyy, p')}</span>
      </div>

      <div className="flex flex-col rounded-md rounded-t-none border border-t-0 border-gray-200">
        <div className="flex flex-col px-10 pb-3 pt-8">
          <div className="mb-6 flex items-center gap-4 text-gray-500">
            <span className="font-medium">{telephone}</span>
            <span>&bull;</span>
            <span className="lowercase">{email}</span>
          </div>

          <div className="mb-6 flex items-center gap-4">
            <span className="flex items-center gap-2 text-base font-medium">
              <BookmarkSimple  size={24} className="text-brand-600" />
              Subject
            </span>
            <span className='font-bold'>{subject}</span>
          </div>
          <div className="mb-6 flex items-center gap-4">
            <span className="flex items-center gap-2 text-base font-medium">
              <ChatDots size={24} className="text-brand-600" />
              Query
            </span>
            <span>{comments}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsDataBox;
