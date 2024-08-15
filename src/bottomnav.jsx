
function BottomNav() {
  return (
    <div>
        <nav className="flex items-center justify-between bg-gray-300">
            <h3 className="p-8">Enter-Stream</h3>
            <ul className="flex space-x-4">
                <li><a href="/movies">MOVIES</a></li>
                <li><a href="/series">SERIES</a></li>
            </ul>
            <button className="p-8">SUBSCRIBE</button>
        </nav>
    </div>
  );
}

export default BottomNav
