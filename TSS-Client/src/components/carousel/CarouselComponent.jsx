import Carousel from 'react-bootstrap/Carousel';
import pic1 from '../../assets/images/carosel/mern.png';
import pic2 from '../../assets/images/carosel/java.jpg';
import pic3 from '../../assets/images/carosel/sqa.jpg';


const ExampleCarouselImage = ({ imageUrl, altText }) => {
    return (
        <img
            src={imageUrl}
            alt={altText}
            style={{ width: '100%', height: '600px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
        />
    );
};
function CarouselComponent() {
    return (
        <Carousel>
            <Carousel.Item>
                <ExampleCarouselImage

                    imageUrl={pic1}
                    altText="First slide"
                />
                <Carousel.Caption>
                    <h3>Full Stack Web Development - MERN</h3>
                    <p>During this course, almost every JavaScript topic will be covered. Basics of JavaScript, OOP concepts, Advanced JavaScript, Design Pattern, Express and Node, Mongo DB, Front End, React JS, and TypeScript is the main topics of these robust training course.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <ExampleCarouselImage
                    imageUrl={pic2}
                    altText="Second slide"
                />
                <Carousel.Caption>
                    <h3>Full Stack Web Development - Java2 EE</h3>
                    <p>During this course almost every J2EE topics will be covered. Basics of Java, OOP concepts, Advanced Java, Design Pattern, JSP and Servlet, Spring/Hibernate framework, Front End, React JS, Unit Texting are the main topics of these robust training course.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <ExampleCarouselImage
                    imageUrl={pic3}
                    altText="Third slide"
                />
                <Carousel.Caption>
                    <h3>Software Quality Assurance (SQA)</h3>
                    <p>
                        During this course, almost every topic of Manual testing will be covered such as Basics of Testing, Test Plan Preparation Test Design Techniques Test Case Writing Test Management & Control Bug Reporting and Issue Tracking, are the main topics of this robust training course
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselComponent;