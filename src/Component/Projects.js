import { GitIcons } from "../MenuItem";

export const Projects = () => {
  const gitIcon = [
    {
      href: "",
      className: "fa-brands fa-square-github",
    },
    {
      href: "",
      className: "fa-brands fa-chrome",
    },
  ];
  return (
    <div id="projects" className="projects py-5">
      <div className="container">
        <div className="title">
          <span>Projects</span>
        </div>
        <div className="row mb-5">
          <div className="col-md mb-3">
            <img src="assets/aa.png" alt="project a" width="100%" />
          </div>
          <div className="col-md">
            <div>
              <h2>Portfolio Website</h2>
              <div>
                {gitIcon.map((item) => (
                  <GitIcons href={item.href} className={item.className} />
                ))}
              </div>
              <p className="mt-2">Tech used: HTML5, CSS3</p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Deleniti enim, corporis repellat tenetur voluptate dolorum eius
                id, temporibus maiores dolorem esse natus nobis sunt. Dolorem
                vitae ipsa repudiandae quasi temporibus.
              </p>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md mb-3 order-md-2">
            <img src="assets/aa.png" alt="project a" width="100%" />
          </div>
          <div className="col-md">
            <div>
              <h2>Portfolio Website</h2>
              <div>
                {gitIcon.map((item) => (
                  <GitIcons href={item.href} className={item.className} />
                ))}
              </div>
              <p className="mt-2">Tech used: HTML5, CSS3</p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Deleniti enim, corporis repellat tenetur voluptate dolorum eius
                id, temporibus maiores dolorem esse natus nobis sunt. Dolorem
                vitae ipsa repudiandae quasi temporibus.
              </p>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md mb-3">
            <img src="assets/aa.png" alt="project a" width="100%" />
          </div>
          <div className="col-md">
            <div>
              <h2>Portfolio Website</h2>
              <div>
                {gitIcon.map((item) => (
                  <GitIcons href={item.href} className={item.className} />
                ))}
              </div>
              <p className="mt-2">Tech used: HTML5, CSS3</p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Deleniti enim, corporis repellat tenetur voluptate dolorum eius
                id, temporibus maiores dolorem esse natus nobis sunt. Dolorem
                vitae ipsa repudiandae quasi temporibus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
