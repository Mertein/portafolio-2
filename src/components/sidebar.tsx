export const Sidebar = () => {
  return (
    <ul className="absolute flex flex-col md:static space-y-7 md:space-y-16 justify-center right-0 left-0 bottom-0 top-0 m-auto md:m-0 w-[5rem] h-full items-center pl-4 text-center">
      <li id="section">
        <a href="#works" className="space-y-1.5">
          <img
            src="/assets/projects.png"
            alt="Work"
            className="h-12 w-12 m-auto"
          />
          <h2 className="text-sm text-center hover:bg-blue-900 hover:text-white">
            Works
          </h2>
        </a>
      </li>
      <li id="section">
        <a href="#skills" className="space-y-1.5">
          <img src="/assets/work.png" alt="Work" className="h-12 w-12 m-auto" />
          <h2 className="text-sm text-center hover:bg-blue-900 hover:text-white">
            Skills
          </h2>
        </a>
      </li>
      <li id="section">
        <a href="#about" className="space-y-1.5">
          <img
            src="/assets/about-w98.png"
            alt="Work"
            className="h-12 w-12 m-auto"
          />
          <h2 className="text-sm text-center hover:bg-blue-900 hover:text-white">
            About me
          </h2>
        </a>
      </li>
      <li className="section">
        <a href="#contact" className="space-y-1.5">
          <img
            src="/assets/contact-w98.png"
            alt="Work"
            className="h-12 w-12 m-auto"
          />
          <h2 className="text-sm text-center hover:bg-blue-900 hover:text-white">
            Contact
          </h2>
        </a>
      </li>
      <li className="section">
        <a href="#cv" className="space-y-1.5">
          <img src="/assets/cv-w98.png" alt="Cv" className="h-12 w-12 m-auto" />
          <h2 className="text-sm text-center hover:bg-blue-900 hover:text-white">
            CV
          </h2>
        </a>
      </li>
    </ul>
  );
};
