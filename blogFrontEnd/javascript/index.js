'use strict'
const url  = "http://localhost:8080/blog"
const blogList = document.querySelector(".blogList")
const inputTitle = document.querySelector("#title")
const inputTextField = document.querySelector("#textField")
const submitButton = document.querySelector(".postButton")

axios.get(`http://localhost:8080/blog/all`,{headers: { 
    'Access-Control-Allow-Origin' : '*',
    "Content-Type":"application/json"
  }})
.then((resolve) => {
    console.log(resolve.data)
    resolve.data.map(element => {
        printBlog(element)
    })
}).catch((error) => {
    console.log(error)
})

const printBlog = (blog) => {
    // Elements
    const title = document.createElement("h3")
    const textField = document.createElement("p")
    const deleteBlogbtn = document.createElement("button")

    // Nodes
    const blogTitle = document.createTextNode(blog.title)
    const BlogTextField = document.createTextNode(`${blog.textField}`)
    const deleteVal = document.createTextNode("Delete")
    
    // Appending
    title.appendChild(blogTitle)
    textField.appendChild(BlogTextField)
    deleteBlogbtn.appendChild(deleteVal)
    
    // functionality
    deleteBlogbtn.id = blog.id
    
    // Display
    blogList.appendChild(title)
    blogList.appendChild(textField)
    blogList.appendChild(deleteBlogbtn)
}

const postBlog = () => {
    axios.post(`${url}/`, {
            "title":`${inputTitle.value}`,
            "textField":`${inputTextField.value}`
    },{headers: { 
        'Access-Control-Allow-Origin' : '*',
        "Content-Type":"application/json"
      }}
      ).then((resolve) => {
        console.log(resolve)
        const newBlog = document.createElement("h2")
        const node = document.createTextNode("New Blog")
        newBlog.appendChild(node)
        blogList.appendChild(newBlog)
    }).catch((error) => {
        console.log(error)
    })
}

const deleteBlog = (id) => {
    axios.post(`${url}/${id}`
      ,{headers: { 
        'Access-Control-Allow-Origin' : '*',
        "Content-Type":"application/json"
      }}
      ).then((resolve) => {
        console.log("Blog Deleted", resolve)
    }).catch((error) => {
        console.log(error)
    })
}
