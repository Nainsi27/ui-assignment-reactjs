import React, { Component } from "react";
import { Resizable } from 'react-resizable';
import "./Layout.css"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
          componentSizes: [200, 200, 500], // Initial sizes of components
        };
    }

    onResize = (index) => (event, { size }) => {
        const { componentSizes } = this.state;
        const newComponentSizes = [...componentSizes];
        newComponentSizes[index] = size.width;
        this.setState({ componentSizes: newComponentSizes });
    };

    render() {
        const { componentSizes } = this.state;
        return (
            <div className="layout-container-fluid">
            <div className="row d-flex justify-content-center m-4">
                <div className="col-lg-4">
                    <Resizable
                        className="resizable-component"
                        width={componentSizes[0]}
                        height={300}
                        onResize={this.onResize(0)}
                        resizeHandles={['e']}
                        minConstraints={[100, 300]}
                        maxConstraints={[600, 300]}
                    >
                        <div className="component-content">
                            {/* Content for component 1 */}
                            <h3>Component 1</h3>
                           
                            <div class="sidebar bg-light">
                                <a href="#" class="nav-link">Home</a>
                                <a href="#" class="nav-link">Shop by Category</a>
                                <a href="#" class="nav-link">Deals & Offers</a>
                                <a href="#" class="nav-link">My Account</a>
                                <div class="pl-3">
                                    <a href="#" class="nav-link">Profile</a>
                                    <a href="#" class="nav-link">Settings</a>
                                </div>
                                <a href="#" class="nav-link">Help & Support</a>
                                <div class="pl-3">
                                    <a href="#" class="nav-link">FAQs</a>
                                    <a href="#" class="nav-link">Contact Us</a>
                                </div>
                                <a href="#" class="nav-link">About Us</a>
                                <a href="#" class="nav-link">Blog</a>
                                <a href="#" class="nav-link">Sign Out</a>
                            </div>
                        </div>
                    </Resizable>
                </div>
                <div className="col-lg-8">
                    <Resizable
                        className="resizable-component"
                        width={componentSizes[1]}
                        height={300}
                        onResize={this.onResize(1)}
                        resizeHandles={['e']}
                        minConstraints={[100, 300]}
                        maxConstraints={[600, 300]}
                    >
                        <div className="component-content">
                            {/* Content for component 2 */}
                            <h3>Component 2</h3>
                           
                            <h4>The Mysteries of the Cosmos</h4>
                            <p>Delve into the mysteries of dark matter and dark energy, the invisible forces shaping the universe's structure and evolution. Learn about the birth and death of stars, and the mesmerizing dance of galaxies across the cosmic stage.</p>
                            <h5>Exploring Exoplanets: Worlds Beyond Our Solar System</h5>
                            <p>Embark on a virtual journey to distant exoplanets, each with its own unique characteristics and potential for harboring life. Discover the latest breakthroughs in exoplanet research and the quest for habitable worlds beyond our own.</p>                            
                            <h5>Conclusion</h5>
                            <p>The universe is a vast and mysterious place, filled with wonders beyond imagination. Join us as we journey through the cosmos, seeking to unlock its secrets and expand the horizons of human knowledge.</p>
                      </div>
                    </Resizable>
                </div>
            </div>
        
            <div className="row d-flex justify-content-center m-4">
                <div className="col-12">
                    <Resizable
                        className="resizable-component full-width"
                        width={componentSizes[2]}
                        height={300}
                        onResize={this.onResize(2)}
                        resizeHandles={['e']}
                        minConstraints={[100, 300]}
                        maxConstraints={[600, 300]}
                    >
                        <div className="component-content bg-secondary d-flex flex-column align-items-center justify-content-center">
                            <h2 class="text-white">Component 3</h2>
                            <p class="text-white">This is the third resizable component.</p>
                            <img src={logo} class="img-fluid img-responsive" alt="Responsive image" width="200" height="200" />
                        </div>
                    </Resizable>
                </div>
            </div>

        </div>
        
        );
    }
}

export default Layout;
