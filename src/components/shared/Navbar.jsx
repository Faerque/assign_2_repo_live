import Icon from './Icon';


function Navbar() {
    return (
        <nav className="bg-navbg rounded-full mt-4 px-8 py-3 flex justify-between items-center">

            <div className="flex items-center">
                <div className="text-primary mr-2">
                    <Icon name={"brandLogo"} />
                </div>
                <h1 className="text-2xl font-bold">
                    <span className="text-primary">Dine</span>Out
                </h1>
            </div>

            <div className="flex items-center">
                <Icon name={"userLogo"} />
            </div>
        </nav>
    );
}

export default Navbar;
