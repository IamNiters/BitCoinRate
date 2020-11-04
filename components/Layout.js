import Navbar from './Navbar';
import Head from 'next/head';

const Layout = (props) => (
<div>
    <Head>
        <title>Bitcoin Rate</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/cosmo/bootstrap.min.css" integrity="sha384-5QFXyVb+lrCzdN228VS3HmzpiE7ZVwLQtkt+0d9W43LQMzz4HBnnqvVxKg6O+04d" crossorigin="anonymous"></link>
    </Head>
    <Navbar/>
    <div className="container">
    {props.children}
    </div>
</div>

);
export default Layout;

