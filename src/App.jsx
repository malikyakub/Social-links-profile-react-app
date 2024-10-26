import Header from "./components/Header";
import Link from "./components/Link";

function App() {
  const links = [
    {
      key: 1,
      text: "GitHub",
      link: "https://github.com/malikyakub",
    },
    {
      key: 2,
      text: "Frontend Mentor",
      link: "https://www.frontendmentor.io/profile/malikyakub",
    },
    {
      key: 3,
      text: "LinkedIn",
      link: "https://www.linkedin.com/in/malik-yakub-75778a324/",
    },
    {
      key: 4,
      text: "Twitter",
      link: "#",
    },
    {
      key: 5,
      text: "Instagram",
      link: "#",
    },
  ];

  return (
    <div className="bg-gray-200 rounded-lg flex p-5 flex-col lg:w-[400px] sm:w-4/5">
      <Header />
      <div className="mt-4">
        {links.map((li) => (
          <Link key={li.key} text={li.text} link={li.link} />
        ))}
      </div>
    </div>
  );
}

export default App;
