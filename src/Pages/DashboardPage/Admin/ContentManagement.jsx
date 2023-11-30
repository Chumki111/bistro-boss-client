import { Link } from "react-router-dom";



const ContentManagement = () => {
    return (
        <div>
            <div>
                <h1 className="text-3xl font-semibold">Welcome to Content Management Page.....</h1>
               
            </div>
            <div className="mt-10">
            <Link to='/dashboard/content-management/add-blog'><button className="btn btn-outline uppercase">Add Blog</button></Link>
            </div>
        </div>
    );
};

export default ContentManagement;