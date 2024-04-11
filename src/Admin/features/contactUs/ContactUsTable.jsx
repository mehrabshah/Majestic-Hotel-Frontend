import React from 'react';
import Spinner from '../../components/ui/Spinner';
import Table from '../../components/ui/Table';
import Pagination from '../../components/ui/Pagination';
import { useContactUs } from './hooks/useContactUs';
import ContactUsRow from './ContactUsRow';

function ContactUsTable() {
  const { contactUsEntries, isLoading } = useContactUs();

  if (isLoading) return <Spinner />;

  if (!contactUsEntries.length) return <div>No contact us entries to display</div>;

  return (
    <>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.Head>Name</Table.Head>
            <Table.Head>Email</Table.Head>
            <Table.Head>Telephone</Table.Head>
            <Table.Head>Subject</Table.Head>
            <Table.Head />
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {contactUsEntries.map(contactUs => (
            <ContactUsRow key={contactUs.id} contactUs={contactUs} />
          ))}
        </Table.Body>
      </Table>

      {/* Pagination component can be added here if needed */}
    </>
  );
}

export default ContactUsTable;
