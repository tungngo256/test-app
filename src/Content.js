import React from 'react';
import './content.css';

class Content extends React.Component {
    render() { 
        return (
        <div>
            <div class="content">
                <div className="logo">
                    <img src = "../public/logoNCC.png" alt="logo"/>
                </div>
                <div id="text-content">
                    <h4>Lorem ipsum dolor sit asmet?</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper turpis pellentesque a.
                    </p>  
                </div>
            </div>
            <div className="topic">
                <div className="css">
                    <h4>Lorem ipsum dolor sit amet</h4>
                    <img src="../public/css-icon.svg" alt="icon"/>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.
                    </p>
                </div>
                <div className="html">
                    <h4>Lorem ipsum dolor sit amet</h4>
                    <img src="../public/html-icon.svg" alt="icon"/>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.
                    </p>
                </div>
                <div className="url">
                    <h4>Lorem ipsum dolor sit amet</h4>
                    <img src="../public/url-icon.svg" alt="icon"/>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.
                    </p>
                </div>
            </div>
        </div>
        
        
      );
    }
}
 
export default Content;