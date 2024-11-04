

export default function Header(){
    return <div className="header">
        <div className="logo"><a href="/">Paydirt</a></div>
        <div className="header-menu">
            <div className="header-menu-container">
                <div className="header-menu-item">
                    <a href="/rankings">Rankings</a>
                </div>
                <div className="header-menu-item">
                    <a href="/allteams">All Teams</a>
                </div>
                {/* <div className="header-menu-item">
                    <a href="/methodology">Methodology</a>
</div>*/}
            </div>
        </div>
    </div>
}