import React from 'react';
import Header from '../Header/Header';

const Blogs = () => {
    return (
        <div>
            <Header></Header>
            <div className='grid grid-cols-2 gap-10 m-10'>
            <div className='border-2 p-2 rounded-lg bg-slate-400'>
                <h3 className='text-3xl mb-5'>1) What is Context Api?</h3>
                <p className='text-justify text-xl'><b>Answer:</b> The Context API is a React structure that enables to exchange unique details and assists in solving prop-drilling from all levels of Application. Context provides a way to pass data through the component tree without having to pass props down manually at every level. The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.</p>
            </div>
            <div className='border-2 p-2 rounded-lg bg-slate-400'>
                <h3 className='text-3xl mb-5'>2) What is Semantic Tag?</h3>
                <p className='text-justify text-xl'><b>Answer:</b> Semantic HTML tags provide information about the contents of those tags that goes beyond just how they look on a page. Text that is enclosed in the code tag is immediately recognized by the browser as some type of coding language. Instead of trying to render that code, the browser understands that are using that text as an example of the code for the purposes of an article.</p>
            </div>

            </div>
            
        </div>
    );
};

export default Blogs;