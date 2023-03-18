import React from "react";
import Leftsidebar from "../../component/LeftSidebar/LeftSidebar";
import RightSidebar from "../../component/RightSidebar/RightSidebar";
import TagsList from "./TagsList";
import './Tags.css';

const Tags=()=>{
    const tagsList=[{
        id:1,
        tagName:"javascript",
        tagDesc:"JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles."
    },{
        id:2,
        tagName:"HTML",
        tagDesc:"HTML is the standard markup language for Web pages."  
    },{
        id:3,
        tagName:"CSS",
        tagDesc:"Cascading Style Sheets, fondly referred to as CSS, is a simply designed language intended to simplify the process of making web pages presentable. CSS allows you to apply styles to web pages. More importantly, CSS enables you to do this independent of the HTML that makes up each web page. It describes how a webpage should look: "  
    }]

    return(
        <div className="home-container-1">
            <Leftsidebar/>
        <div className="home-container-2">
           <h1 className="tags-h1"> Tags</h1>
           <p className="tags-p">
            A tag is a keyword or label that categorizes your question with other ,similar questions.
           </p>
           <p className="tags-p">Using the right tags makes it easier for others to find and answer your question.</p>
          <div className="tags-list-container">
            {
                tagsList.map((tag)=>(
                    <TagsList tag={tag} key={tagsList.id}/>
                ))
            }

          </div>
        </div>
        </div>
    )
}
export default Tags;