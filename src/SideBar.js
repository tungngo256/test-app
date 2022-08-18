import React from 'react';
import './sidebar.css';

class SideBar extends React.Component {
    state = {  } 
    render() { 
        return (
            <div class="sidebar">
                <a href="#home">Home</a>
                <a href="#home">Services</a>
                <a class="active" href="#news">News</a>
                <a href="#home">Blog</a>
                <a href="#contact">Contact</a>
            </div>
        );
    }
}
 
export default SideBar;