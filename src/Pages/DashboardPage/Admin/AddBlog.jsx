import { useRef, useState } from "react";
import { imageUpload } from "../../../Api/utils";
import JoditEditor from 'jodit-react';

const AddBlog = () => {
  const editor = useRef(null);
  const [content, setContent] = useState('');
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const editor = form.editor.value;
    const image = form.image.files[0]

    console.log(name, image,editor);
    console.log(editor);

    try {
      // upload image
      const imageData = await imageUpload(image);

      console.log(imageData);



    } catch (err) {
      console.log(err);
    }


  }
  return (
    <div>
      <div><h1 className="text-3xl text-center font-semibold">Create A Blog</h1></div>

      <div className='flex flex-col mt-10 max-w-2xl mx-auto p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
        <form onSubmit={handleSubmit}
          noValidate=''
          action=''
          className='space-y-6 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>


            {/* name field */}
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Title
              </label>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Title Of the Blog'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>

            {/* image field */}
            <div>
              <label htmlFor='image' className='block mb-2 text-sm'>
                Select Image:
              </label>
              <input
                required
                type='file'
                id='image'
                name='image'
                accept='image/*'
              />
            </div>
            <div>
              <label htmlFor='image' className='block mb-2 text-sm'>
                Select Image:
              </label>
              <JoditEditor
              name="editor"
                ref={editor}
                value={content}

               
                onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons

              />
            </div>






          </div>

          <div>
            <button
              type='submit'
              className='bg-rose-500 w-full rounded-md py-3 text-white'
            >
              {/* {loading ? (
            <TbFidgetSpinner className='m-auto animate-spin' size={24} />
          ) : (
            'Sign Up'
          )} */}
              Create

            </button>
          </div>
        </form>
      </div>

    </div>
  );
};

export default AddBlog;