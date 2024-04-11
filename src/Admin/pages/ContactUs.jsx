import ContactUsTable from "../features/contactUs/ContactUsTable";
import ContactUsTableOperations from "../features/contactUs/ContactUsTableOperations";


function ContactUsAdmin() {
  return (
    <>
      <div className="mb-10 flex items-center justify-between">
        <span className="text-3xl font-semibold">All Contact Queries</span>

        <ContactUsTableOperations />
      </div>

      <ContactUsTable />
    </>
  );
}

export default ContactUsAdmin;
