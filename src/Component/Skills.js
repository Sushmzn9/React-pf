import { Icons } from "../MenuItem";

export const Skills = () => {
  const iconsPic = [
    {
      className: "fa-brands fa-html5 text-danger",
      label: "HTML",
    },
    { className: "fa-brands fa-css3-alt text-primary", label: "CSS" },
    {
      className: "fa-brands fa-square-js text-warning",
      label: "JavaScript",
    },
    {
      className: "fa-brands fa-figma text-info",
      label: "Figma",
    },
  ];
  return (
    <div id="skills" className="container py-3 mb-5">
      <div className="row">
        <div className="col">
          {/* <!-- title --> */}
          <div className="title">
            <span>Skills</span>
          </div>

          {/* <!-- icons --> */}

          <div className="icons">
            {iconsPic.map((item) => (
              <Icons className={item.className} label={item.label} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
