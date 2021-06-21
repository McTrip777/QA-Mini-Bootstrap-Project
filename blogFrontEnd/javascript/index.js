'use strict'
const url  = "http://localhost:8080/blog"
const blogList = document.querySelector(".blogList")
// const submitButton = document.querySelector(".postButton")

const getAllBlogs = () => {
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
}

const printBlog = (blog) => {
    // Elements
    const title = document.createElement("h3")
    const textField = document.createElement("p")
    const deleteBlogbtn = document.createElement("button")
    const updateBlogbtn = document.createElement("button")
    const element = document.createElement("div")

    // Nodes
    const blogTitle = document.createTextNode(blog.title)
    const BlogTextField = document.createTextNode(`${blog.textField}`)
    const deleteVal = document.createTextNode("Delete")
    const updateVal = document.createTextNode("Update")
    
    // Appending
    title.appendChild(blogTitle)
    textField.appendChild(BlogTextField)
    deleteBlogbtn.appendChild(deleteVal)
    updateBlogbtn.appendChild(updateVal)
    updateBlogBtn.href=`singleBlog.html?id=${id}`
    console.log(deleteBlogbtn.value)
    // functionality
    // deleteBlogbtn.id = blog.id
    deleteBlogbtn.onclick = () => {
        deleteBlog(blog.id); return false;
    }
    
    element.className = "alert alert-secondary"

    // Display
    element.appendChild(title)
    element.appendChild(textField)
    element.appendChild(updateBlogbtn)
    element.appendChild(deleteBlogbtn)
    blogList.appendChild(element)
}

document.querySelector("#form_id").addEventListener("submit", stop => {
    stop.preventDefault();
    let form = document.querySelector("#form_id").elements;
    let title = form["title"].value
    let textField = form["textField"].value
    console.log(title, textField)

    postBlog(title, textField)
})

const postBlog = (title, text) => {
    console.log(title, text)
    let blogToPost = {
        "title":`${title}`,
        "textField":`${text}`
    }

    axios.post(`${url}/create`, blogToPost)
    .then((resolve) => {
        console.log(resolve)
        location.reload();
    }).catch((error) => {
        console.log(error)
    })
}

const deleteBlog = (id) => {
    axios.delete(`${url}/delete/${id}`)
    .then((resolve) => {
        location.reload()
        alert("Blog Deleted")
    }).catch((error) => {
        console.log(error)
    })
}
getAllBlogs()