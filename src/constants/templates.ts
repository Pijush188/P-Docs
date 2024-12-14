export const templates = [
    { 
        id: "blank", 
        label: "Blank Document", 
        imageUrl: "/blank-document.svg",
        initialContent: "",
    },
    { 
        id: "software-proposal", 
        label: "Software development proposal",  
        imageUrl: "/software-proposal.svg",
        initialContent: `
            <h1>Software Development Proposal</h1>

            <h2>1. Introduction</h2>
            <p>We are pleased to present this proposal for software development services. This document outlines our understanding of your requirements, proposed solutions, and project details.</p>

            <h2>2. Project Overview</h2>
            <p>The purpose of this project is to provide a software solution that meets the following objectives:</p>
            <ul>
                <li>Objective 1</li>
                <li>Objective 2</li>
                <li>Objective 3</li>
            </ul>

            <h2>3. Scope of Work</h2>
            <p>The scope of this project includes:</p>
            <ul>
                <li>Requirement Analysis</li>
                <li>Design and Prototyping</li>
                <li>Development and Testing</li>
                <li>Deployment and Support</li>
            </ul>
            <h2>6. Conclusion</h2>
            <p>We are confident that this proposal meets your requirements and look forward to collaborating on this project.</p>

            <p>Thank you for considering our services.</p>

            <p>Best Regards,</p>
            <p>[Your Company Name]</p>
    `
    },
    { 
        id: "project-proposal",  
        label: "Project proposal",  
        imageUrl: "/project-proposal.svg",
        initialContent: `
                <h1>Project Proposal</h1>

                <h2>1. Introduction</h2>
                <p>We are pleased to present this proposal for the [Project Name]. This document provides an overview of the project objectives, scope, timeline, and budget.</p>

                <h2>2. Project Objectives</h2>
                <p>The main objectives of the project are:</p>
                <ul>
                    <li>Objective 1</li>
                    <li>Objective 2</li>
                    <li>Objective 3</li>
                </ul>

                <h2>3. Scope of Work</h2>
                <p>The project scope includes the following tasks:</p>
                <ul>
                    <li>Task 1</li>
                    <li>Task 2</li>
                    <li>Task 3</li>
                </ul>

                <h2>6. Conclusion</h2>
                <p>We believe this proposal aligns with your expectations and project goals. We look forward to your feedback and the opportunity to work together.</p>

                <p>Thank you for considering our proposal.</p>

                <p>Best Regards,</p>
                <p>[Your Name/Company Name]</p>
    `
    },
    { 
        id: "business-letter", 
        label: "Business letter",  
        imageUrl: "/business-letter.svg",
        initialContent: `
            <h1>Business Letter</h1>

            <p>[Your Name]</p>
            <p>[Your Position]</p>
            <p>[Your Company Name]</p>
            <p>[Your Address]</p>
            <p>[City, State, ZIP Code]</p>
            <p>[Your Email Address]</p>
            <p>[Your Phone Number]</p>

            <p>[Date]</p>

            <p>[Recipient's Name]</p>
            <p>[Recipient's Position]</p>
            <p>[Recipient's Company Name]</p>
            <p>[Recipient's Address]</p>
            <p>[City, State, ZIP Code]</p>

            <p>Dear [Recipient's Name],</p>

            <p>I am writing to [state the purpose of the letter, e.g., "discuss a business opportunity," "follow up on our previous conversation," etc.].</p>

            <p>[Provide details about the subject, including any necessary background information or context. Clearly articulate your points and purpose.]</p>

            <p>[Include any specific actions you would like the recipient to take or information you need from them. Be polite and professional in your tone.]</p>

            <p>Thank you for your time and consideration. I look forward to your response. Please feel free to contact me at [your phone number] or [your email address] if you have any questions or need further information.</p>

            <p>Sincerely,</p>

            <p>[Your Name]</p>
            <p>[Your Position]</p>
            <p>[Your Company Name]</p>
    `
    },
    { 
        id: "resume", 
        label: "Resume", 
        imageUrl: "/resume.svg",
        initialContent: `
            <h1>[Your Full Name]</h1>
            <p>[Your Address]</p>
            <p>[City, State, ZIP Code]</p>
            <p>[Your Phone Number]</p>
            <p>[Your Email Address]</p>

            <h2>Objective</h2>
            <p>[Write a brief statement about your career goals and what you aim to achieve in the position you are applying for.]</p>

            <h2>Education</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Degree</th>
                        <th>Institution</th>
                        <th>Year of Graduation</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>[Degree Name]</td>
                        <td>[Institution Name]</td>
                        <td>[Year]</td>
                    </tr>
                    <tr>
                        <td>[Degree Name]</td>
                        <td>[Institution Name]</td>
                        <td>[Year]</td>
                    </tr>
                </tbody>
            </table>

            <h2>Experience</h2>
            <ul>
                <li><strong>[Job Title]</strong>, [Company Name] ([Start Year] - [End Year/Present])
                    <p>[Brief description of your responsibilities and accomplishments.]</p>
                </li>
                <li><strong>[Job Title]</strong>, [Company Name] ([Start Year] - [End Year/Present])
                    <p>[Brief description of your responsibilities and accomplishments.]</p>
                </li>
            </ul>

            <h2>Skills</h2>
            <ul>
                <li>[Skill 1]</li>
                <li>[Skill 2]</li>
                <li>[Skill 3]</li>
                <li>[Skill 4]</li>
            </ul>

            <h2>Certifications</h2>
            <ul>
                <li>[Certification Name], [Issuing Organization] ([Year])</li>
                <li>[Certification Name], [Issuing Organization] ([Year])</li>
            </ul>

            <h2>References</h2>
            <p>Available upon request.</p>
    `
    },
    { 
        id: "covery-letter",  
        label: "Cover letter", 
        imageUrl: "/cover-letter.svg",
        initialContent: `
            <p>[Your Name]</p>
            <p>[Your Address]</p>
            <p>[City, State, ZIP Code]</p>
            <p>[Your Email Address]</p>
            <p>[Your Phone Number]</p>

            <p>[Date]</p>

            <p>[Recipient's Name]</p>
            <p>[Recipient's Position]</p>
            <p>[Company Name]</p>
            <p>[Company Address]</p>
            <p>[City, State, ZIP Code]</p>

            <p>Dear [Recipient's Name],</p>

            <p>I am writing to express my interest in the [Job Title] position at [Company Name], as advertised on [Job Board/Company Website]. With my [number of years] years of experience in [your field/industry], I am confident in my ability to contribute effectively to your team.</p>

            <p>In my previous role at [Previous Company], I [describe a key achievement or responsibility relevant to the job]. This experience has equipped me with [mention specific skills or knowledge] that align with the requirements of the [Job Title] role.</p>

            <p>Beyond my technical skills, I bring a strong commitment to [specific value or goal, e.g., "collaboration and innovation"] that I believe will be an asset to [Company Name]. I am particularly impressed by [specific aspect of the company or its projects] and am eager to contribute to [specific goal or project].</p>

            <p>Thank you for considering my application. I would welcome the opportunity to discuss how my skills and experiences align with the needs of your team. Please feel free to contact me at [your phone number] or [your email address] to arrange a conversation.</p>

            <p>Sincerely,</p>
            <p>[Your Name]</p>
    `
    },
    { 
        id: "letter", 
        label: "Letter", 
        imageUrl: "/letter.svg",
        initialContent: `
            <p>[Your Name]</p>
            <p>[Your Address]</p>
            <p>[City, State, ZIP Code]</p>
            <p>[Your Email Address]</p>
            <p>[Your Phone Number]</p>

            <p>[Date]</p>

            <p>[Recipient's Name]</p>
            <p>[Recipient's Address]</p>
            <p>[City, State, ZIP Code]</p>

            <p>Dear [Recipient's Name],</p>

            <p>I hope this letter finds you well. I am writing to [briefly state the purpose of the letter, e.g., "inform you about..." or "request your assistance with..."].</p>

            <p>[Provide additional details or context regarding the purpose of the letter. Ensure clarity and keep it concise.]</p>

            <p>[Include any specific requests, actions needed, or information you would like to share. Be polite and professional.]</p>

            <p>Thank you for your time and attention. Please feel free to contact me at [your phone number] or [your email address] if you have any questions or need further clarification.</p>

            <p>Sincerely,</p>

            <p>[Your Name]</p>
    `
    },
]