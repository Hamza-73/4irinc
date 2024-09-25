// Function to load content into the body_content div
function loadContent(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById('body_content').innerHTML = data;
            showBlogsOnHomePage(); // Ensure blogs are displayed after content is loaded
        });
}

document.addEventListener('DOMContentLoaded', function () {
    loadContent('home.html'); // Load home.html content into body_content on page load

    // Dropdown menu functionality
    var servicesLink = document.getElementById('servicesLink');
    var servicesDropdown = document.getElementById('servicesDropdown');
    var dropdownMenu = servicesDropdown.nextElementSibling;
    var isXlScreen = window.innerWidth >= 1200;

    function toggleDropdown(event) {
        event.preventDefault();
        event.stopPropagation();
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    }

    servicesDropdown.addEventListener('click', toggleDropdown);

    servicesLink.addEventListener('click', function (event) {
        if (!isXlScreen && dropdownMenu.style.display === 'block') {
            event.preventDefault();
        }
    });

    window.addEventListener('resize', function () {
        isXlScreen = window.innerWidth >= 1200;
        if (isXlScreen) {
            dropdownMenu.style.display = '';
        }
    });
});

// Blog data
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

// Function to display blogs on the home page
const showBlogsOnHomePage = () => {
    const news_container = document.querySelector('.news_container');
    if (news_container) {
        news_container.innerHTML = '';
        blogs.forEach((blog, index) => {
            news_container.innerHTML += `
                <div class="col-lg-4 col-md-6" onclick='setCurrentBlog(${index})'>
                    <div class="news_box">
                        <a href="/html/blog-details.html?index=${index}">
                            <img src="${blog.img}" class="img-fluid" alt="blog">
                        </a>
                        <div class="news_content">
                            <h3><a href="/html/blog-details.html?index=${index}">${blog.blog_text}</a></h3>
                            <p>Image Credits: Smashing Goodreads’ co-founder Otis Chandler has launched a new AI</p>
                            <div data-cursor="pointer" class="link-overflow">
                                <a href="/html/blog-details.html?index=${index}">Read more <i class="iconsax" data-icon="arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>`;
        });
    }
};

// Function to display blog details on the blog details page
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

// Execute the relevant function based on the page content
window.onload = () => {
    if (document.getElementById('blog_container')) {
        showBlogs();
    } else if (document.getElementById('current_blog_image') && document.getElementById('current_blog_title')) {
        showBlogDetail();
    } else if (document.querySelector(".news_container")) {
        showBlogsOnHomePage();
    }
};
