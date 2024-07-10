import React from 'react';

const Footer = () => (
    <footer className="bg-gray-800 text-white p-4 text-center" style={{ marginTop: '2%'}}>
        <p>Contact us at: Fontainebleau@miami.com</p>
        <p>Follow us on:</p>
        <ul className="flex justify-center space-x-4">
            <li>
                <a href="https://facebook.com">
                    <img src="https://cdn.pixabay.com/photo/2021/06/15/12/51/facebook-6338507_1280.png" alt="Facebook" className="h-6 w-6" />
                </a>
            </li>
            <li>
                <a href="https://twitter.com">
                    <img src="https://img.freepik.com/vector-gratis/nuevo-diseno-icono-x-logotipo-twitter-2023_1017-45418.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1720569600&semt=ais_hybrid" alt="Twitter" className="h-6 w-6" />
                </a>
            </li>
            <li>
                <a href="https://instagram.com">
                    <img src="https://cdn.pixabay.com/photo/2018/11/13/22/01/instagram-3814080_1280.png" alt="Instagram" className="h-6 w-6" />
                </a>
            </li>
        </ul>
    </footer>
);

export default Footer;
