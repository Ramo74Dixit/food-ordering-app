// Footer component for footer section
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By
      <i className="fa-solid fa-heart"></i>
      <a
        href="https://www.linkedin.com/in/ram-mohan-dixit-817a6a224/"
        target="_blank"
        title="Ram Mohan's Linkedin Profile"
      >
        Ram Mohan Dixit
      </a>
      <i className="fa-solid fa-copyright"></i>
        {year}
        <strong>
           KHANA-<span>KHAJANA</span>
        </strong>
    </div>
  );
};

export default Footer;
