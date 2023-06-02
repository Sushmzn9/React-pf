// Exporting menu items

export const MenuItem = ({ href, label }) => {
  return (
    <li className="nav-item">
      <a className="nav-link" aria-current="page" href={href}>
        {label}
      </a>
    </li>
  );
};

//exporting icons
export const Icons = ({ className, label }) => {
  return (
    <div>
      <i className={className}></i> {label}
    </div>
  );
};

//exporting a tag of contact
export const Acontact = ({ href, className }) => {
  return (
    <a href={href}>
      <i className={className}></i>
    </a>
  );
};

// exporting github icon
export const GitIcons = ({ href, className }) => {
  return (
    <>
      <a href={href} target="_blank">
        <i className={className}></i>
      </a>
    </>
  );
};
