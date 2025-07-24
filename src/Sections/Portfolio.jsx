import "../components/portfolio.scss"
import {motion, useScroll, useSpring, useTransform} from "framer-motion";
import { desc } from "motion/react-client";
import {useRef} from "react";

const items = [
    {
        id: 1,
        title: "Day 1 (May 28, 2025)",
        subtitle: "Taking On My Very First Task",
        img: "assets/projects/1.png",
        desc: "My OJT journey officially started when my mentor, Mr. Kenneth Orlando, introduced me to the team and the CEO, Vanrick Sangario. Since I'm working remotely, he also walked me through how things work on Discord—like where to log my time in and time out. After a quick demo of the task, I got started on doing QA for SVG file uploads. To help me work more efficiently, I made my own QA template that fits the type of testing I’m doing. I’m also still exploring the global website to get a better understanding of how everything’s structured.",
    },
    {
        id: 2,
        title: "Day 2 (June 2, 2025)",
        subtitle: "Getting the Hang of It",
        img: "assets/projects/2.png",
        desc: "I continued working on the task and found several errors along the way. I reported them directly to my mentor, and I was honestly surprised at how fast they got resolved—it was impressive. During my interview, my mentor asked if I was familiar with React, so in my free time, I’ve been practicing and exploring it more. I want to be prepared and catch up in case I’m given an actual coding task soon.",
    },
    {
        id: 3,
        title: "Day 3 (June 3, 2025)",
        subtitle: "Deep Dive into QA and Bug Tracking",
        img: "assets/projects/3.png",
        desc: "I continued testing multiple CSV files uploaded to the system. I documented all findings in detail, carefully noting any bugs, misalignments, or processing issues I encountered. Some of the key problems included misaligned fields, missing interface buttons during single file uploads, and a few uploads that failed without a clear reason. I compiled everything into a concise Issues Report that highlights the specific bugs found during testing. I also re-tested previously failed data and confirmed that some issues had already been resolved. Overall, I’m becoming more familiar with the testing workflow and learning to spot inconsistencies more efficiently.",
    },
    {
        id: 4,
        title: "Day 4 (June 4, 2025)",
        subtitle: "Another Day, Another Round of Testing",
        img: "assets/projects/5.png",
        desc: "I focused on troubleshooting CSV upload and processing issues. I found strange characters in some values, possibly from hidden or unsupported symbols. I reviewed multiple folders to ensure proper field alignment and confirmed that several files processed correctly across different data sources. I also noticed that files left unprocessed too long trigger a “Retry Processing” button instead of “Process File.” Additionally, I encountered a console error after one file initially uploaded but failed on continue. I rechecked previous folders and confirmed that earlier bugs had been fixed.",
    },
    {
        id: 5,
        title: "Day 5 (June 5, 2025)",
        subtitle: "Validating Clean Uploads and Handling Name Field Issues",
        img: "assets/projects/6.png",
        desc: "I continued verifying the uploads and processing of CSV files across multiple folders. I confirmed that all files processed correctly and no bugs were found. I also started working on separating full names into first and last name columns for entries that only had a combined name field. However, I encountered issues where processing failed after manually mapping full names that weren’t properly separated. Despite the attempts, I wasn’t able to proceed with the “Process Data” step for those cases.",
    },
    {
        id: 6,
        title: "Day 6 (June 9, 2025)",
        subtitle: "Name Formatting and ZIP Code Checks",
        img: "assets/projects/7.png",
        desc: "I continued verifying CSV uploads and confirmed that no bugs were present across several folders. I also made progress in splitting full names into first and last name columns. Additionally, I noted a few entries with ZIP code formatting issues due to extra zeroes.",
    },
    {
        id: 7,
        title: "Day 7 (June 10  , 2025)",
        subtitle: "Assigned to Global QA",
        img: "assets/projects/9.png",
        desc: "I joined a meeting with the Global team led by Mr. Angelo, where I was officially assigned to do QA testing for the entire Global site. My task focused on checking UI components for alignment, visibility, and responsiveness. I recorded visual issues such as inconsistently aligned icons and inactive hover effects. I also began researching proper QA documentation methods, including how to structure bug reports with clear IDs. In preparation for potential coding tasks, I continued exploring React and Vite to better understand how the frontend is built and rendered, which helps me identify the possible causes of UI issues more effectively. I was also informed that I might be given coding responsibilities soon.",
    },

    {
        id: 8,
        title: "Day 8 (June 11, 2025)",
        subtitle: "More UI Testing",
        img: "assets/projects/26.png",
        desc: "I continued my UI QA testing for Global, logging layout issues and responsiveness problems with screenshots. Later, CEO Vanrick Sangario asked me to do a full QA review of the Luca Taxes homepage to test my skills for a possible allowance. I checked the site on both desktop and mobile (Samsung S8) and found several issues—like a large logo affecting the header, broken hover effects, messy section layouts, and spacing problems. After finishing the review, I had a meeting with Mr. Ryan Antig to share my findings. Everything’s documented for their review.",
    },

    {
        id: 9,
        title: "Day 9 (June 12, 2025)",
        subtitle: "Full Retest and New Bug Discoveries",
        img: "assets/projects/10.png",
        desc: "I did a full retest of the Global Data V2 app to check if the previous bugs were fixed and to spot any new ones I might’ve missed. I made sure all the main features were working as expected, especially on mobile (I tested using a Samsung S8+).While testing the Chat with Data feature, I found two new frontend issues—one where the tags were overlapping and another where the input field wasn’t responding properly. I also went through all twelve previously logged bugs to double-check everything.",
    },
    {
        id: 10,
        title: "Day 10 (June 13, 2025)",
        subtitle: "UI Fix Suggestions",
        img: "assets/projects/27.png",
        desc: "I started the day doing a full QA review of the Lucas Taxes site. I went through every page, checking layouts and functionality across all sections. I found several bugs—like inconsistent padding on input fields, missing form validation, and hover effects that could be improved. Some text looked either too big or too light to read properly, and there were spacing issues between sections. Even elements like the CAPTCHA weren’t aligned right. I documented everything for review and included all the bugs I spotted.",
    },
    {
        id: 11,
        title: "Day 11 & 12 (June 16 - 17, 2025)",
        subtitle: "Waiting for Updates",
        img: "assets/projects/12.png",
        desc: "While waiting for updates or new tasks from my mentor, Mr. Kenneth Orlando, I used the time to keep building my frontend skills. I explored more React features—testing different components and interactions to better understand how user experience works. I also spent some time improving my personal portfolio by adding 3D elements to make it more engaging and interactive. It felt like a good way to make the most of my paid hours while still learning and being productive.",
    },
    {
        id: 12,
        title: "Day 13 (June 18, 2025)",
        subtitle: "First WordPress Experience & New Mentor",
        img: "assets/projects/13.png",
        desc: "Today was a big shift for me—I officially got transferred to Mr. Ryan Antig as my new mentor after Mr. Kenneth resigned. It was also my first time working with WordPress, and honestly, I was amazed by how common and useful it is in web development. I was really excited to finally get hands-on experience navigating the platform. Mr. Ryan gave me access to the Luca Taxes website so I could start fixing the bugs I found during my QA sessions. I worked through the reported issues one by one and made sure to double-check everything after applying the fixes to confirm they were working properly. After finishing up those tasks, I moved on to the remaining bugs and reported my progress.",
    },
    {
        id: 13,
        title: "Day 14 (June 19, 2025)",
        subtitle: "Exploring Wearcon and Updating Files",
        img: "assets/projects/16.png",
        desc: "Mr. Ryan gave me access to the Wearcon website and asked me to follow the client’s instructions, which mainly involved replacing old files with new ones. At first, I spent some time exploring the site to understand how everything was set up before making any changes. Later, I worked on the Ceramics & Adhesives section, replacing the old documents with the updated ones from the client. I double-checked everything after the updates to make sure it all looked good and worked properly. Once I was done, I let Mr. Ryan know the changes were complete.",
    },
    {
        id: 14,
        title: "Day 15 (June 20, 2025)",
        subtitle: "Organizing and Updating Wearcon Product Files",
        img: "assets/projects/15.png",
        desc: "Today, I updated the Wearcon website by organizing and replacing old documents for different product lines like ceramics, adhesives, hammers, castings, panels, pipes, and elbows. I started by sorting the files provided into two groups—those to keep and those to remove. I uploaded new brochures, flyers, pictorials, and success stories, and removed outdated ones that are no longer in use. Everything is now updated and aligned with the client’s latest materials.",
    },
    {
        id: 15,
        title: "Day 16 (June 23, 2025)",
        subtitle: "More Flyer Updates and Resource Cleanup",
        img: "assets/projects/16.png",
        desc: "I continued updating the Wearcon website by going through more flyers and resources that needed organizing. I focused on materials under Ceramics and ITW Densit, checking what needed updates and what stayed the same. I also noted that some product lines didn’t have new or individual flyers. Aside from that, I worked on files from other sections like Panels & Pads, Pipes & Elbows, Rampart, and Wear Plates. Everything was reviewed and sorted to match the updated content.",
    },
    {
        id: 16,
        title: "Day 17 (June 24, 2025)",
        subtitle: "Resource Updates and New Videos Added",
        img: "assets/projects/18.png",
        desc: "Today, I updated the Resources section of the Wearcon website based on a client request passed on by Sir Ryan. I added two new how-to videos to the Videos section and uploaded a new file under Success Stories. After completing the updates, I let Mr. Ryan know, and now I’m just waiting for feedback or client review.",
    },
    {
        id: 17,
        title: "Day 18 (June 25, 2025)",
        subtitle: "Resource Updates and New Videos Added",
        img: "assets/projects/17.png",
        desc: "Today, I worked on updating and reorganizing several parts of the Wearcon website based on new client files and instructions. I added a new section under Resources for Chrome Carbide Overlay Plate and moved the updated files there. I also replaced and updated pictorials, flyers, and removed outdated ones across sections like Wear Plates, Silo Repair, and Densit. Later on, I got added to the Google chat so we i can communicate with the client Kevin. After finishing all the changes, I updated Mr. Ryan and Mr. Kevin am now waiting for feedback.",
    },
    {
        id: 18,
        title: "Day 19 (June 26, 2025)",
        subtitle: "Accessing It’s Hotdog Time",
        img: "assets/projects/19.png",
        desc: "Sir Van asked me to continue working on the It’s Hotdog Time website. I mainly focused on improving the image quality since most of the client’s files were low-res. I also went through the site to tweak layouts, fix some text, and improve the overall user experience. The site’s almost done—just a few more content updates and price changes left to finish by tomorrow.",
    },
    {
        id: 19,
        title: "Day 20 (June 27, 2025)",
        subtitle: "Before the Client Review",
        img: "assets/projects/28.png",
        desc: "I continued wrapping up the It’s Hotdog Time website today. I worked on layout fixes, adjusted image placements, and made sure each section matched the brand’s look and feel. I finished the Drinks section and made some small text edits across the site. It’s almost ready—just needs a bit more content, pricing updates, and a quick user experience check before final review.",
    },
    {
        id: 20,
        title: "Day 21 (June 30, 2025)",
        subtitle: "Client Review for It’s Hotdog Time",
        img: "assets/projects/20.png",
        desc: "Sir Van asked me to send an update to the client for It’s Hotdog Time. The client replied with a few changes—adding more menu items, updating the hero image, and including a video. I handled all of those updates and made sure everything looked good on both desktop and mobile. I also worked on improving the site’s responsiveness. Everything’s done now, just waiting on the client’s feedback.",
    },
    {
        id: 21,
        title: "Day 22 (July 1, 2025)",
        subtitle: "Westix Updates and Putting It’s Hotdog Time on Hold",
        img: "assets/projects/21.png",
        desc: "Today, Mr. Ryan and Sir Van had me update the Westix website. I made all the requested edits—fixed product descriptions, updated watt info, repositioned some items, replaced a few images, and added a home link to the Bulk Hot Melt section. I also swapped out outdated contact details. Later, I installed a maintenance mode plugin on the It’s Hotdog Time site and applied a custom maintenance design with the logo centered at around 75%, just like Mr. Ryan requested in his email.",
    },
    {
        id: 22,
        title: "Day 23 (July 2, 2025)",
        subtitle: "Scheduling Fixes for brookside and Wearcon Update",
        img: "assets/projects/22.png",
        desc: "Sir Van asked me to add 30-minute time slots to the Westix site based on a client request. I updated the Brookside scheduling system to show accurate, non-overlapping time slots in 24-hour format. After that, I worked on improving the WC700Plus™ product page. I suggested adding a “More Information” button and placed it right below the Properties table, where users would naturally look for extra details or downloads. The button can later link to the pillar page or resource center.",
    },
    {
        id: 23,
        title: "Day 24 (July 3, 2025)",
        subtitle: "Building Out the CCO Pillar Page and Download Center",
        img: "assets/projects/23.png",
        desc: "Today, I continued my task for the Wearcon website, working on the Chrome Carbide Overlay pillar page. I added all the needed sections, including the At-a-Glance Comparison and Product Family Table with specs for each WC700Plus™ variant. I also built a Download Center section and uploaded key PDFs like the tech data sheet, SDS, weld guide, and case studies—all placed in the /resources/ folder so they can be tracked in GA4.",
    },
    {
        id: 24,
        title: "Day 25 (July 4, 2025)",
        subtitle: "Masahista Site Support",
        img: "assets/projects/24.png",
        desc: "Today, I improved the layout of the Drinks page on the It’s Hotdog Time website by replacing the repeated “Drinks” label with a cleaner, more functional section title to enhance the overall look and flow. I also officially got access to the Masahista Healing Hands website to take over tasks previously handled by Sir Kenneth Orlando. After getting access, I followed up with Ma’am Mary about a section she had concerns with and checked what updates were needed based on her previous discussion with Sir Kenneth.",
    },
    {
        id: 25,
        title: "Day 26 (July 7, 2025)",
        subtitle: "Logo Fixes for Masahista and More Hotdog Time Updates",
        img: "assets/projects/25.png",
        desc: "I messaged the Masahista client to request individual images for each insurance logo so I could move forward with the task. Later, I updated the Direct Billing page by organizing the logos into a cleaner grid layout (3–5 per row) based on the audit report’s suggestions. I also spent some time continuing work on the It’s Hotdog Time website",
    },
    {
        id: 26,
        title: "Day 27 (July 8, 2025)",
        subtitle: "Website Updates and WordPress Blog Management",
        img: "assets/projects/29.png",
        desc: "Today, I was tasked by Mr. Ryan to focus on updates for the Luca Taxes and Bookkeeping website. I reviewed the client's feedback and updated Angie’s headshot and added a new headshot and title for Lora Florenz Benito as “Staff Accountant.” I also reviewed the calculator section based on a Loom video and clarified that the blog posts provided were meant for the blog page, not the calculator section. Lastly, I explored how blog posts are created and categorized in WordPress.",
    },
    {
        id: 27,
        title: "Day 28 (July 9, 2025)",
        subtitle: "Site Review and UX Enhancements",
        img: "assets/projects/30.png",
        desc: "Today, I revisited the It’s Hotdog Time website to check for any pending tasks or necessary updates. I focused on improving the overall user experience (UX), making the site more polished and mobile-friendly.",
    },
 
    {
        id: 28,
        title: "Day 29 (July 10, 2025)",
        subtitle: "API Integration Planning for Masahista Website",
        img: "assets/projects/31.png",
        desc: "Today, I checked Ma’am Mary’s message via Hostinger about integrating Juvonno’s API into the Masahista website. After Sir Van asked if I could handle it, I began exploring how to connect the WordPress lead form with the external API. I reviewed the documentation and started testing possible integration methods, but the implementation is still in progress.",
    },
 
    {
        id: 29,
        title: "Day 30 - 35 (July 11-18, 2025)",
        subtitle: "Finalizing Website Design & QA Tasks",
        img: "assets/projects/32.png",
        desc: "Throughout these sessions, I was mostly focused on finalizing the It’s Hotdog Time website for portfolio inclusion. I improved the UX by styling the sticky header, adjusting logo size, adding hover effects, and enhancing mobile responsiveness. I also organized menu items using Kadence Blocks, refined the layout of food and drinks sections, and moved owner info to the About Us page for a cleaner structure. The Menu page was finalized by merging and aligning content properly. Additionally, I started doing QA for the Screen Warehouse website. I reviewed client requests, clarified task requirements, and explored the page builder. I manually added autoplay functionality to address a module limitation and began getting familiar with the platform.",
    },
];          

const Single = ({item}) => {
    const ref = useRef();

const { scrollYProgress } = useScroll({ target: ref, 
    //offset:["start start", "end start"] 
    });
    const y = useTransform(scrollYProgress, [0,1], [-300,300]);
    return(
    <section ref={ref}>
    <div className="container">
    <div className="wrapper">
    <div className="imageContainer" ref={ref}>
    <img src={item.img} alt="" />
    </div>
    <motion.div className="textContainer" style={{y}}>
    <h2>{item.title}</h2>
    <h3>{item.subtitle}</h3>
    <p>{item.desc}</p>
    {/* <button>See Demo</button> */}
    </motion.div>
    </div>
    </div>
    </section>    
);
};  
const Portfolio = () => {
  const ref = useRef();

  const {scrollYProgress} = useScroll({target: ref, 
offset:["end end", "start start"]
  });
  const scaleX = useSpring(scrollYProgress, {
  stiffness: 100,
  damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
    <div className="progress">
    <h1>OJT JOURNEY</h1>
    <motion.div style={{scaleX}} className="progressBar"></motion.div>
    </div>
    
    {items.map((item) => (
        <Single item={item} key={item.id} />    
    ))}
    </div>
  )
}

export default Portfolio