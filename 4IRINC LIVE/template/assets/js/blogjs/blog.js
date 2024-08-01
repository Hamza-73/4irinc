const blogs = [
    {
        blog_text: `Smashing: A New Content Curation App From Goodreads Co-Founder`,
        img: "../assets/images/home/blog1.png"
    },
    {
        blog_text: `Revolutionize Project Management With AI: Skyrocket ROI And Boost Productivity`,
        img: "../assets/images/home/blog2.jpg"
    },
    {
        blog_text: `Elon Musk’s AI Breakthrough: ‘Open-Sourcing’ Grok Unveils Power`,
        img: "../assets/images/home/blog3.png"
    },
];

const blog_container = document.getElementById('blog_container');

const news_container = document.querySelector('.news_container')

const showBlogsOnHomePage = () => {
    if (news_container) {
        news_container.innerHTML = '';
        blogs.forEach((blog, index) => {
            news_container.innerHTML +=
                `<div class="col-lg-4 col-md-6" onclick='setCurrentBlog(${index})'>
                    <div class="news_box">
                        <a href="/html/blog-details.html?index=${index}">
                            <img src="${blog.img}" class="img-fluid" alt="blog">
                        </a>
                        <div class="news_content">
                            <h3><a href="/html/blog-details.html?index=${index}">${blog.blog_text}</a></h3>
                            <p>Image Credits: Smashing Goodreads’ co-founder Otis Chandler has launched a new AI</p>
                            <div data-cursor="pointer" class="link-overflow"><a href="/html/blog-details.html?index=${index}">Read more <i
                                class="iconsax" data-icon="arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>`
        })
    }
}

showBlogsOnHomePage();

// Function to show blog list
const showBlogs = () => {
    if (blog_container) {
        blogs.forEach((blog, index) => {
            blog_container.innerHTML += `
                <div class="col-xl-4 col-md-6" onclick='setCurrentBlog(${index})'>
                    <div class="blog-box">
                        <div class="blog-img">
                            <a href="blog-details.html?index=${index}">
                                <img src="${blog.img}" class="img-fluid" alt="blog">
                            </a>
                            <label>Design</label>
                            <div class="hover-content">
                                <a data-cursor="pointer" href="blog-details.html?index=${index}">
                                    <i class="iconsax" data-icon="arrow-right"></i>
                                </a>
                                <h5>- Smith Warner</h5>
                            </div>
                        </div>
                        <div class="blog-content">
                            <a data-cursor="pointer" href="blog-details.html?index=${index}" class="blog_text">
                                ${blog.blog_text}
                            </a>
                            <ul>
                                <li>14 March 2023</li>
                                <li>5 min to read</li>
                            </ul>
                        </div>
                    </div>
                </div>`;
        });
    }
};

// Function to show blog details
const showBlogDetail = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const index = urlParams.get('index');

    if (index !== null) {
        const current_blog = blogs[parseInt(index)];

        if (current_blog) {
            document.getElementById('current_blog_image').src = current_blog.img;
            document.getElementById('current_blog_title').textContent = current_blog.blog_text;
        }
    }
};

// Check which page is currently loaded and execute the relevant function
window.onload = () => {
    if (document.getElementById('blog_container')) {
        showBlogs();
    } else if (document.getElementById('current_blog_image') && document.getElementById('current_blog_title')) {
        showBlogDetail();
    }
};
