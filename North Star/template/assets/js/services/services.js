const services = [
    {
        title: `Fire Alarm Permit Drawings & Submittal Packages`,
        description: `Navigating the approval process is seamless with our expertly crafted permit drawings and submittal packages. We handle all documentation with precision, ensuring that your project receives the necessary approvals from Authorities Having Jurisdiction (AHJs).`,
        points: [
            {
                p_title: `Permit Drawings, Data & Listing Sheets`,
                p_exp: `: We prepare thorough documentation that addresses all regulatory requirements, facilitating smooth interactions with AHJs.`
            },
            {
                p_title: `Efficient Approvals`,
                p_exp: `Our attention to detail ensures that your submittal packages are complete and accurate, reducing the likelihood of delays in the approval process`
            }
        ],
        service_img : '/assets/images/fire/FIRE 5.png'
    },
    {
        title: `Consultation & Technical Guidance`,
        description: `Our consultation services provide you with the expertise and support needed to tackle complex technical challenges. We offer guidance on best practices, code compliance, and project management, helping you design and implement systems with confidence.`,
        points: [
            {
                p_title: `Expert Advice`,
                p_exp: `Benefit from our extensive industry knowledge and experience, ensuring that your projects are executed with precision and efficiency.`
            },
            {
                p_title: `Problem-Solving`,
                p_exp: `We assist in identifying and resolving potential issues before they become obstacles, ensuring smooth and successful project execution.`
            }
        ],
        service_img : '/assets/images/systems/CAMERA SYSTEM.png'
    },
    {
        title: `Bid Takeoff/Scope of Work Preparation`,
        description: `Our bid takeoff and scope of work preparation services ensure that your project estimates are comprehensive and accurate, helping you secure competitive bids.`,
        points: [
            {
                p_title: `Accurate Bid Takeoffs`,
                p_exp: `We provide detailed bid takeoffs that cover every aspect of your project, ensuring nothing is overlooked.`
            },
            {
                p_title: `Detailed Scope of Work`,
                p_exp: `We prepare thorough scopes of work that align with project requirements and support successful project completion.`
            }
        ],
        service_img: "/assets/images/systems/CAMERA SYSTEM 2.png"
    },
    {
        title: `Low-Voltage System Drafting`,
        description: `Our drafting services cover a wide range of low-voltage systems, including surveillance, access control, and more. We create detailed and accurate drafts that serve as the foundation for successful installations.`,
        points: [
            {
                p_title: `Detailed Drafting`,
                p_exp: `We provide comprehensive drafts that detail every component of your low-voltage system, ensuring clarity and precision in implementation.`
            },
            {
                p_title: `Custom Solutions`,
                p_exp: `Our team works closely with you to develop tailored solutions that meet the unique needs of your project, ensuring optimal performance and reliability.`
            }
        ],
        service_img : '/assets/images/fire/FIRE 4.png'
    },
    {
        title: `Fire Alarm System Configuration & Device Placement`,
        description: `Our fire alarm system configuration and device placement services are designed to transform your initial design into fully realized, code-compliant solutions. With a focus on safety and reliability, we ensure that every aspect of your system is meticulously configured and placed to meet the highest standards and regulatory requirements.`,
        points: [
            {
                p_title: `Code Compliance`,
                p_exp: `We ensure that all plans adhere to the latest fire safety codes and standards, minimizing the risk of issues during plan check and final approval.`
            },
            {
                p_title: `Value Engineering`,
                p_exp: `Our expertise allows us to optimize your system configuration and device placement for both code compliance and cost-effective solutions.`
            },
        ],
        service_img : '/assets/images/fire/FIRE 7.png'
    },
]

const showServiceDetail = ()=> {
    const urlParams = new URLSearchParams(window.location.search);
    const index = urlParams.get('index') || 0;

    if(index !== null){
        const current_service = services[parseInt(index)];
        console.log("index is", index)
        console.log("service is", current_service)
        console.log(document.getElementsByClassName('service-title'))
        console.log(document.getElementsByClassName('service-img'))
        console.log(document.getElementsByClassName('service-img')[0].src)

        if (current_service) {
            // Use [0] to target the first element in the list returned by getElementsByClassName
            document.getElementsByClassName('service-title')[0].textContent = current_service.title;
            document.getElementsByClassName('service-title')[1].textContent = current_service.title;
            document.getElementsByClassName('service-desc')[0].textContent = current_service.description;
            document.getElementsByClassName('service-point-1-heading')[0].textContent = current_service.points[0].p_title;
            document.getElementsByClassName('service-point-1-desc')[0].textContent = current_service.points[0].p_exp;
            document.getElementsByClassName('service-point-2-heading')[0].textContent = current_service.points[1].p_title;
            document.getElementsByClassName('service-point-2-desc')[0].textContent = current_service.points[1].p_exp;
            document.getElementsByClassName('service-img')[0].src = current_service.service_img;
        }
    }
}

showServiceDetail();

