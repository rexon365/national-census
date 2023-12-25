import { useState } from 'react';
import styles from './App.module.scss';
import Header_module from './components/header/header.module.scss';
import Classnames from 'classnames';
import { Header } from './components/header/header';
import { Banner } from './components/banner/banner';
import { Discover } from './components/discover/discover';
import { WhyUs } from './components/why-us/why-us';
import { Testimonials } from './components/testimonials/testimonials';
import { FAQ } from './components/faq/faq';
import { Blog } from './components/blog/blog';
import { Newsletter } from './components/newsletter/newsletter';
import { Footer } from './components/footer/footer';



function App() {
    const [count, setCount] = useState(0);

    return (<div className={styles.App}>
        <div className={styles['top-div']} />
        <Header />
        <Banner />
        <Discover />
        <WhyUs />
        <br />
        <br />
        <br />
        <br />
        <Testimonials />
        <Blog />
        <br />
        <FAQ />
        <br />
        <br />
        <br />
        <Newsletter />
        <Footer />
    </div>
    );
}

export default App;
