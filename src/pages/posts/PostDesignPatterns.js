import TopBar from "../../components/TopBar";
import Footer from "../../components/Footer";
import styles from "../Projects.module.css";


const PostDesignPatterns = () => {


    return (
        <div>
            <TopBar id="postss" />

            <div className={styles.postcontainer}>
                <h1 className={styles.posttitle}>Design Patterns</h1>
                <p>A <i><b>design pattern</b></i> is a general, reusable solution to a commonly occurring problem within a given context in software design. It is not a finished design that can be transformed directly into source or machine code. 
                    It is a description or template for how to solve a problem that can be used in many different situations. 
                    <br></br><br></br>
                    Design patterns differ by their complexity, level of detail and scale of applicability. 
                    In addition, they can be categorized by their intent and divided into three groups : creational, structural, and behavioral. <br></br>
                    <b>Creational patterns</b> provide object creation mechanisms that increase flexibility and reuse of existing code.<br></br> <b>Structural patterns</b> explain how to assemble objects and classes into larger structures, while keeping these structures flexible and efficient.<br></br> <b>Behavioral patterns</b> take care of effective communication and the assignment of responsibilities between objects.</p>
                <br></br>
                <h2>Some history</h2>
                <p>Who invented patterns? That’s a good, but not a very accurate, question. Design patterns aren’t obscure, sophisticated concepts—quite the opposite. Patterns are typical solutions to common problems in object-oriented design. When a solution gets repeated over and over in various projects, someone eventually puts a name to it and describes the solution in detail. That’s basically how a pattern gets discovered.</p>
                <p>The concept of patterns was first described by the austrian-born british-american architect and design theorist <i>Christopher Alexander</i> in <b>A Pattern Language: Towns, Buildings, Construction</b> (1977). The book describes a “language” for designing the urban environment. The units of this language are patterns. They may describe how high windows should be, how many levels a building should have, how large green areas in a neighborhood are supposed to be, and so on.
                    The idea was picked up by four authors: <i>Erich Gamma, John Vlissides, Ralph Johnson and Richard Helm</i>. In 1994, they published <b>Design Patterns: Elements of Reusable Object-Oriented Software</b>, in which they applied the concept of design patterns to programming. The book featured 23 patterns solving various problems of object-oriented design and became a best-seller very quickly. Due to its lengthy name, people started to call it “the book by the gang of four” which was soon shortened to simply <b>“the GoF book”</b>.</p>
                <br></br>
                <h2>The Catalog of Design Patterns</h2>
                <img className={styles.imgfixxpay}   src="/design-patterns.png" alt="Design Patterns Catalog" />
                <br></br><br></br><br></br><br></br>

                <h3>Singleton</h3>
                <p>Singleton is a creational design pattern that lets you ensure that a class has only one instance, while providing a global access point to this instance. The government is an excellent example of the Singleton pattern. A country can have only one official government. Regardless of the personal identities of the individuals who form governments, the title, “The Government of X”, is a global point of access that identifies the group of people in charge.</p>
                <br></br>
                <h3>Factory Method</h3>
                <p>The Factory Method pattern is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created. The Factory Method Pattern is also known as the Virtual Constructor. A common use of the Factory Method Pattern is when a class can’t anticipate the class of objects it must create. Instead of creating objects directly, the class delegates the responsibility of object creation to its subclasses.</p>

                <br></br>
                <h3>Adapter</h3>
                <p>The Adapter Pattern is a structural design pattern that allows objects with incompatible interfaces to collaborate. The Adapter acts as a bridge between two incompatible interfaces. It wraps an existing class with a new interface so that it becomes compatible with the client’s code. An example of the Adapter Pattern is a power adapter that allows a device with a different plug type to connect to a power outlet.</p>

                <br></br>
                <h3>Decorator</h3>
                <p>The Decorator Pattern is a structural design pattern that allows behavior to be added to individual objects, either statically or dynamically, without affecting the behavior of other objects from the same class. The Decorator Pattern is often useful for adhering to the Single Responsibility Principle, as it allows functionality to be divided between classes with unique areas of concern. An example of the Decorator Pattern is adding different toppings to a pizza. Each topping can be added or removed independently, without affecting the base pizza.</p>

                <br></br>
                <h3>Observer</h3>
                <p>The Observer Pattern is a behavioral design pattern that defines a one-to-many dependency between objects, so that when one object changes state, all its dependents are notified and updated automatically. The Observer Pattern is often used in event-driven systems, where multiple components need to be notified of changes in the system. An example of the Observer Pattern is a news agency that notifies its subscribers of breaking news.</p>

                <br></br>
                <h3>Strategy</h3>
                <p>The Strategy Pattern is a behavioral design pattern that enables selecting an algorithm’s behavior at runtime. It defines a family of algorithms, encapsulates each one, and makes them interchangeable. The Strategy Pattern lets the algorithm vary independently from clients that use it. An example of the Strategy Pattern is a navigation app that allows users to choose different routes based on their preferences, such as the fastest route, the shortest route, or the most scenic route.</p>

                <br></br>
                <h3>State</h3>
                <p>The State Pattern is a behavioral design pattern that allows an object to alter its behavior when its internal state changes. The object appears to change its class. The State Pattern is often used in event-driven systems, where the behavior of an object depends on its current state. An example of the State Pattern is a traffic light that changes its behavior based on its current state (red, yellow, green).</p>

                <br></br>
                <h2>Criticism of patterns</h2>
                <p>Design patterns have been criticized for various reasons. Some critics argue that design patterns can lead to over-engineering, where developers create complex solutions to simple problems. Others argue that design patterns can lead to code bloat, where the use of patterns results in larger codebases that are harder to maintain. Additionally, some critics argue that design patterns can lead to a lack of creativity, where developers rely too heavily on established patterns instead of coming up with their own solutions.</p>
                
                <p>Patterns try to systematize approaches that are already widely used. This unification is viewed by many as a dogma, and they implement patterns “to the letter”, without adapting them to the context of their project.</p>

                <br></br>
                <h2>Personal Take</h2>
                <p>Personally, will I jump to deciphering a problem to fit a design pattern or will I solve the problem ? It depends on the problem on hands and its abstraction complexity, if the programming language lacks abstraction, then I will rely on a design pattern, but nowadays most used languages have built-in abstractions that make patterns less necessary. Let's not forget that these solutions were crafted for an age computer science wasn't this much evolved as of today. If I was to concept I will definitely foresee such problems and handle them in advance, but in reality, new use cases arise with user exeprience that may require code twists, I will try solve the problem directly on my own but I will also look for a fitting design pattern that treats the problem at hand. I will do it for the culture and for the sake of "the right thing to do". <b><i>I am a believer that things don't just exist; they exist for a reason—to solve problems I'm not the first to face.</i></b></p>
            </div>
            <Footer />
        </div>
    )
}


export default PostDesignPatterns;