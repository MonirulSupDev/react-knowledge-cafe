import profile from "../../assets/images/profile.png";

const Header = () => {
  return (
    <header className="flex items-center justify-between py-8 border-b border-gray-300">
      <h1 className="text-4xl font-bold m-0">Knowledge Cafe</h1>
      <a href="#">
        <img
          className="rounded-full border border-transparent hover:border-gray-500 transition-all"
          src={profile}
          alt={`Photo of ${profile}`}
        />
      </a>
    </header>
  );
};

export default Header;
