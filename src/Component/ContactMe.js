import { Acontact } from "../MenuItem";

export const ContactMe = () => {
  const contactList = [
    {
      href: "tel:0409876789",
      className: "fa-solid fa-mobile",
    },
    {
      href: "mailto:yor@email.com",
      className: "fa-solid fa-envelope",
    },
    {
      href: "",
      className: "fa-brands fa-facebook",
    },
    {
      href: "",
      className: "fa-brands fa-linkedin",
    },
    {
      href: "",
      className: "fa-brands fa-square-instagram",
    },
  ];
  return (
    <div id="contact" className="container contact rounded-5 py-2">
      <div className="title">
        <span>Contact Me</span>
      </div>
      <div className="row fa-3x">
        <div className="col d-flex justify-content-around pb-4">
          {contactList.map((item) => (
            <Acontact href={item.href} className={item.className} />
          ))}
        </div>
      </div>
    </div>
  );
};
