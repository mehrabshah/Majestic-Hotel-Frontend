import React from "react";

function JoinTeam() {
  return (
    <>
      <div
        className="text-center mt-auto mx-auto contact-info py-5 bg-cover bg-center"
        style={{ backgroundImage: "url(assets/contact-bg.jpg)" }}
      >
        <p className="g-book text-uppercase text-white mb-2">The Horizon Hotel</p>
        <h1 className="heading-fonts text-uppercase text-3xl md:text-6xl text-white mb-0">
          Join Team
        </h1>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">
          Join Our Team at The Horizon Hotel
        </h1>
        <p className="mb-6">
          Are you passionate about hospitality and dedicated to providing
          exceptional service? Join the team at The Horizon Hotel, where we're
          committed to creating memorable experiences for our guests against the
          breathtaking backdrop of the South Downs coast.
        </p>

        <h2 className="text-2xl font-bold my-4">Why Choose The Horizon Hotel?</h2>
        <p className="mb-6">
          At The Horizon Hotel, we believe our greatest asset is our team. Here
          are a few reasons why you should consider joining us:
        </p>
        <ol className="list-decimal list-inside mb-6">
          <li>
            <strong>Warm and Inclusive Culture:</strong> We foster a supportive
            and inclusive work environment where every team member is valued and
            respected. From front-of-house to back-of-house, we work together as
            a family to deliver outstanding service.
          </li>
          <li>
            <strong>Opportunities for Growth:</strong> Whether you're just
            starting your career in hospitality or looking to take the next
            step, The Horizon Hotel offers opportunities for growth and
            development. We believe in investing in our team members'
            professional development and provide training programs to help you
            succeed.
          </li>
          <li>
            <strong>Stunning Location:</strong> Imagine working just steps away
            from the beautiful Eastbourne Beach and within easy reach of iconic
            attractions like Beachy Head and Eastbourne Pier. Our seafront
            location provides the perfect backdrop for a fulfilling career in
            hospitality.
          </li>
          <li>
            <strong>Diverse Roles:</strong> From guest services to culinary
            arts, housekeeping to management, The Horizon Hotel offers a wide
            range of roles to suit different skills and interests. Whatever your
            passion, there's a place for you on our team.
          </li>
        </ol>

        <h2 className="text-2xl font-bold my-4">Opportunities:</h2>
        <ul className="list-disc list-inside mb-6">
          <li>Front Desk Receptionist</li>
          <li>Housekeeping Assistant</li>
          <li>Restaurant Server</li>
          <li>Bartender</li>
          <li>Restaurant Chef</li>
          <li>Maintenance Technician</li>
        </ul>

        <h2 className="text-2xl font-bold my-4">How to Apply:</h2>
        <p className="mb-6">
          If you're ready to embark on an exciting career journey with us, we'd
          love to hear from you! To apply for a position at The Horizon Hotel,
          please send your resume and a cover letter outlining your relevant
          experience and why you'd be a great fit for our team to{" "}
          <span className="text-blue-500">reception@baymajestic.com</span>
        </p>

        <p className="mb-6">
          Join us at The Horizon Hotel and be part of a team dedicated to
          delivering exceptional service and creating unforgettable experiences
          for our guests. We can't wait to welcome you aboard!
        </p>
      </div>
    </>
  );
}

export default JoinTeam;
