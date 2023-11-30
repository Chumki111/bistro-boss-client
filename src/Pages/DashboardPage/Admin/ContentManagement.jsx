import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllBlogs } from "../../../Api/donations";
import BlogCard from "./BlogCard";



const ContentManagement = () => {
   const [blogs,setBlogs] = useState([])
    useEffect(() =>{
        getAllBlogs('/blogs')
        .then((res) => {
             console.log(res);
             setBlogs(res);
            
          })
          .catch((error) => {
            console.error('Error fetching donations:', error);
          });
    },[])
    return (
        <div>
            <div>
                <h1 className="text-3xl font-semibold">Welcome to Content Management Page.....</h1>
               
            </div>
            <div className="mt-10">
            <Link to='/dashboard/content-management/add-blog'><button className="btn btn-outline uppercase">Add Blog</button></Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                {
                    blogs?.map(blog => <BlogCard key={blog._id} blog={blog}/>)
                }
            </div>
        </div>
    );
};

export default ContentManagement;