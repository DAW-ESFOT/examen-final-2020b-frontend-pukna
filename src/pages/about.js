import React from "react";
import { useForm } from "react-hook-form";
import { Product } from "@/lib/products";
import { mutate } from "swr";

const ArticleForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
  // const fileInputRef = useRef();
  console.log("data", data);


  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("code", data.code);
  formData.append("price",''+data.price);
  formData.append("status", data.status);





    try {
      await Product.create(FormData);
      mutate("/products");
      // console.log("file", fileInputRef.current.files[0]);
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        // alert(error.response.message);
        console.error(error.response);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.error(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error", error.message);
      }
      console.error(error.config);
    }
  };
  return (


        <>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" ref={register} />
            </div>
            <div>
              <label htmlFor="code">code</label>
              <input type="code" name="code" id="code" ref={register} />
            </div>
            <div>
              <label htmlFor="price">price</label>
              <input  name="price" id="price" ref={register} />
            </div>


            <div>
              <label htmlFor="status">status</label>
              <input name="status" id="status" ref={register} />
            </div>
            <br />
            <button type="submit">Submit</button>

          </form>
        </>


  );
};

export default ArticleForm;
