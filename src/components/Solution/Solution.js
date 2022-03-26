import React from 'react';
import './Solution.css';

const Solution = () => {
    return (
        <div className="solution">
            <h2>How React Works?</h2>
            <p>
                React is a JavaScript library for creating interactive and fast user interfaces for web and mobile apps. It is a component-based open-source front-end library that is solely responsible for the application's view layer, which is responsible for how the app looks and feels in the Model View Controller MVC architecture. One of the biggest advantages of using React is that we can infuse HTML code with JavaScript. To render content, React components do not necessarily require the execution of steps. Therefore, React components rely heavily on JSX. The XML-style syntax makes it easy to describe what the user interface should look like.
            </p>

            <h2>Difference Between Props & State</h2>
            <p>
                state - It is a special mutable property that hold a Component data. it has default value when Component mounts. props - It is a special property which is immutable by nature and used in case of pass by value from parent to child. props are just a communication channel between Components, always moving from top (parent) to bottom(child).The key difference between props and state is that state is internal and controlled by the component itself while props are external and controlled by whatever renders the component.
            </p>
        </div>
    );
};

export default Solution;