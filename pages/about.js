import next from "next";
import Link from "next/link";
import Navbar from '../components/Navbar';

const About = () => (
    <div>
        <Navbar/>
        <h1>About BitcoinRate</h1>
        <p>This is a sample project using Next.js. It shows the BitcoinRate in real time using Bitcoin Price Api.</p>
    </div>
);


export default About;