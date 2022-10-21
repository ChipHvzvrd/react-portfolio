import React from "react";

function Nav() {
    const portfolio = [
        {
            name: "Note-Taker",
            description: "Application to take notes on",
        },
        {
            name: "READ_ME Generator",
            description: "An Application that generates a REAME.md based on user input",
        },
    ];
    return(
        <header>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="/">Home</a>
                    </li>
                    <li className="mx-2">
                        <a href="#about">About</a>
                    </li>
                    <li className="mx-2">
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    {portfolio.map((portfolio) => (
                        <li className="mx-1" key={portfolio.name}>
                            <span>{portfolio.name}</span>
                        </li>
                    ))}
                    <li className="mx-2">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;