export default function ContactUsInfo(){
return(
    <div className="text-center mt-auto mx-auto contact-info py-5 bg-cover bg-center" style={{ backgroundImage: 'url(assets/contact-bg.jpg)' }}>
    <p className="g-book text-uppercase text-white mb-2">Majestic Hotel</p>
      <h1 className="heading-fonts text-uppercase text-6xl text-white mb-0">Contact us</h1>
      <div className="border-b border-white w-3/4 mx-auto my-2 my-md-4"></div>
      <h4 className="text-brand-600 text-xl g-book text-uppercase mb-2 mb-md-4 mt-0">Reservations</h4>
      <div className="address hidden md:block">
        <p className="g-book text-xl text-white mb-2">
          <span className="text-brand-600"> T:</span> +123 456 7890 
          <span className="text-brand-600 ms-2"> F: </span> +987 654 3210 
        </p>
        <p className="g-book text-xl text-white mb-0">
          <span className="text-brand-600 ms-2">E:</span> info@majestichotel.com 
          <span className="text-brand-600 ms-2 mb-0">W:</span> majestichotel.com  
          <span className="text-brand-600 ms-2 mb-0">FB: </span><a href="https://www.facebook.com/majestichotel/" target="_blank" rel="noopener noreferrer" className="text-white">www.facebook.com/majestichotel</a>
          <span className="text-brand-600 ms-2 mb-0">IG: </span><a href=" https://www.instagram.com/baymajestichotel/profilecard/?igsh=MWpnZWxjNmtrbmpzaQ==" target="_blank" rel="noopener noreferrer" className="text-white">www.instagram.com/majestichotel</a>
        </p>
        <p className="g-book text-xl text-center text-white mt-0 mt-md-5 pt-1">26-34 Royal Parade, Eastbourne, BN227AN, United Kingdom</p>
      </div>
      <div className="address md:hidden text-left p-2">
        <p className="g-book text-xl text-white mb-0">
          <span className="text-brand-600">T:</span> +123 456 7890 
        </p>
        <p className="g-book text-xl text-white mb-0">
          <span className="text-brand-600">F: </span> +987 654 3210
        </p>
        <p className="g-book text-xl text-white mb-0">
          <span className="text-brand-600">E:</span> info@majestichotel.com 
        </p>
        <p className="g-book text-xl text-white mb-0">
          <span className="text-brand-600 mb-0">W:</span> majestichotel.com
        </p>
        <p className="g-book text-xl text-white mb-0">
          <span className="text-brand-600 mb-0">FB: </span>
          <a href="https://www.facebook.com/majestichotel/" target="_blank" rel="noopener noreferrer" className="text-white">www.facebook.com/majestichotel</a>
        </p>
        <p className="g-book text-xl text-left text-md-center text-white mt-0 mt-md-5 pt-1">123 Majestic Street, Majestic City, MC 12345</p>
      </div>
    </div>
)
}