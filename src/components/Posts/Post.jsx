import React from "react"
import './post.scss'

export const Posts = () => {
    return (
        <div className="post">
            
            <div className="post_div">
                <h4>
                   From the firehose
                </h4>
                <h2>
                    Sample blog post
                </h2>
                <h5>
                    April 1, 2020 by 
                    <a href="#">
                        Olivier
                    </a>
                </h5>
                <p>
                    This blog post shows a few different types of content that are supported and styled with Material styles. Basic typography, images, and code are all supported. You can extend these by modifying Markdown.js. <br /> <br />
                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum. <br /> <br />
                    Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit. <br /> <br />
                    Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.            
                </p>
                <h4>
                    Heading
                </h4>
    
                <p>
                    Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. <br /> <br />
                    Sub-heading 1 <br />
                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. <br /> <br />     
                    Sub-heading 2 <br />
                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. <br /> <br />  
                    • Praesent commodo cursus magna, vel scelerisque nisl consectetur et. <br />
                    • Donec id elit non mi porta gravida at eget metus. <br />
                    • Nulla vitae elit libero, a pharetra augue. <br /> <br />
                    Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue. <br /> <br />
                    1. Vestibulum id ligula porta felis euismod semper. <br />
                    2. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. <br />
                    3. Maecenas sed diam eget risus varius blandit sit amet non magna. <br /> <br /> 
                    Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.
                </p>
    
    
                <h2>
                    Another blog post
                </h2>
    
                <h5>
                    March 23, 2020 by 
                    <a href="#">
                        Matt
                    </a>
                </h5>
    
                <p>
                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum. <br /> <br />
                    Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit. <br /> <br />
                    Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur. <br /> <br />
                    Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. <br /> <br />
                </p>
    
                <h2>
                    New Feature
                </h2>
    
                <h5>
                    March 14, 2020 by
                    <a href="#">
                        Tom    
                    </a> 
                </h5>
    
                <p>
                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. <br /> <br />  
                    • Praesent commodo cursus magna, vel scelerisque nisl consectetur et. <br />
                    • Donec id elit non mi porta gravida at eget metus. <br />
                    • Nulla vitae elit libero, a pharetra augue. <br /> <br />
                    Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue. <br /> <br />
                </p>
            </div>


            <div className="left_post">
                <div className="post_card">
                    <h4>
                        About
                    </h4>
                    Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
                </div>

                <ul>
                    <li>
                        <a href="#">March 2020</a>
                    </li>
                    <li>
                        <a href="#">February 2020</a>
                    </li>
                    <li>
                        <a href="#">January 2020</a>
                    </li>
                    <li>
                        <a href="#">November 1999</a>
                    </li>
                    <li>
                        <a href="#">October 1999</a>
                    </li>
                    <li>
                        <a href="#">September 1999</a>
                    </li>
                    <li>
                        <a href="#">August 1999</a>
                    </li>
                    <li>
                        <a href="#">July 1999</a>
                    </li>
                    <li>
                        <a href="#">June 1999</a>
                    </li>
                    <li>
                        <a href="#">May 1999</a>
                    </li>
                    <li>
                        <a href="#">April 1999</a>
                    </li>
                </ul>

                <h4>
                    Social
                </h4>
                <ul>
                    <li>
                        <a href="#">Github</a>
                    </li>
                    <li>
                        <a href="#">Twitter</a>
                    </li>
                    <li>
                        <a href="#">Facebook</a>
                    </li>
                </ul>
            </div>

        </div>
    )
}