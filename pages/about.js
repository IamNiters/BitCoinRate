import next from "next";
import Link from "next/link";
import Layout from '../components/Layout';

const About = () => (
    <Layout>
        <div>
            <h1>About BitcoinRate</h1>
            <p>This is a sample project using Next.js. It shows the BitcoinRate in real time using Bitcoin Price Api.</p>
        </div>
    </Layout>
);


export default About;