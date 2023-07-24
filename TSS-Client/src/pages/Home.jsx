import React from 'react';
import Header from "../layouts/Header.jsx";
import CarouselComponent from "../components/carousel/CarouselComponent.jsx";
import Blog from "../components/Blog/Blog.jsx";
import Footer from '../layouts/Footer/Footer';
import ViewCircular from '../views/ui/ViewCircular.jsx';

const Home = () => {
    return (
        <div>
            <CarouselComponent></CarouselComponent>
            <ViewCircular></ViewCircular>
            <Blog></Blog>
        </div>
    );
};

export default Home;