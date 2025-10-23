document.addEventListener('DOMContentLoaded', () => {
    const chatContainer = document.getElementById('chat-container');

    const messages = [
        {
            type: 'bot',
            content: `
                <h1>B Dhanush</h1>
                <p>A Software Engineer specializing in building and deploying enterprise-grade Generative and Conversational AI solutions.</p>
                <p> &#128236; DhanushBattepati@gmail.com</p>
                <p>&#x1F4DE; +91 807 316 0196</p>
            `
        },
        {
            type: 'bot',
            content: `
                <h2>About Me</h2>
                <p>A software engineer with a proven track record of building and deploying AI-powered solutions. My expertise lies in developing sophisticated AI agents using Python, LangChain, and Azure OpenAI, as well as creating conversational AI for enterprise contact centers with Node.js and Microsoft Bot Framework. I have hands-on experience in fine-tuning large language models like Llama 2 and creating high-impact technical Proofs of Concept that drive business development. With a strong foundation in data engineering and cloud platforms like GCP and Azure, I am passionate about leveraging AI to solve complex business problems.</p>
            `
        },
        {
            type: 'bot',
            content: `
                <h2>Skills & Experience</h2>
                <ul>
                    <li>
                        <strong>AI & Machine Learning</strong>
                        <ul>
                            <li>LLM Frameworks: LangChain, CrewAI, LangGraph</li>
                            <li>Generative AI: Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), Prompt Engineering, AI Agent Context Modeling/Protocol, AI Agents</li>
                            <li>Model Specialization: LLM Fine-tuning, LoRA, Llama 2, FLUX (Image Generation), Media-Pipe</li>
                            <li>Conversational AI: Microsoft Bot Framework, Azure CLU, Amazon Lex, Amazon Connect</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Cloud Platforms & Services</strong>
                        <ul>
                            <li>Microsoft Azure: Azure Open-AI Services, Azure Cognitive Services, Azure App Services</li>
                            <li>Amazon Web Services (AWS): AWS Lex, Amazon Connect, AWS Lambda</li>
                            <li>Google Cloud (GCP): Core Platform Services</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Programming & Development</strong>
                        <ul>
                            <li>Languages: Python, Node.js</li>
                            <li>Dev Tools & CI/CD: Git, GitHub, Azure DevOps, REST APIs</li>
                            <li>Databases: Azure SQL (and other relational/NoSQL databases)</li>
                        </ul>
                    </li>
                </ul>
            `
        },
        {
            type: 'bot',
            content: `
                <h2>Work History</h2>
                <div class="card--work-history">
                    <strong>AI/ML ENGINEER (OFFICIAL TITLE: TRAINEE ENGINEER) | LTIMINDTREE, Bangalore</strong>
                    <p>Feb 2023 - Present</p>
                    <ul>
                        <li>Spearheaded the development of a new AI Agent platform for marketers, leading a team of 6 engineers from initial ideation and architecture through to final deployment. This agent is designed to automate the entire content lifecycle from brief creation to performance monitoring by leveraging LangChain, LangGraph and Azure OpenAI Models.</li>
                        <li>Engineered and deployed custom Generative AI models by fine-tuning open-source foundations. This includes:
                            <ul>
                                <li>Fine-tuning the FLUX image generation model with LoRA to create specialized promotional content.</li>
                                <li>Deploying a fine-tuned Llama 2 model on a local server, creating an internal chatbot that increased team productivity by automating content generation. Worked on create a Smart Agent Dashboard, where we can leverage AI capabilities in Contact Center.</li>
                            </ul>
                        </li>
                        <li>Drove client solutioning by developing multiple high-impact Proofs of Concept (POCs) and technical demos, directly contributing to RFPs and business development efforts. Key projects include:
                            <ul>
                                <li>Architected a client-specific POC for a Learning Management System (LMS) using a RAG (Retrieval-Augmented Generation) framework to provide hyper-personalized content to users.</li>
                                <li>Built a Gaze Point detection system with Python and Media-Pipe to analyze UI/UX effectiveness by creating heatmap patterns of user attention.</li>
                                <li>Developed and delivered custom AI-powered demos leveraging Azure Open-AI Services to showcase capabilities in dynamic product description generation, context aware language translation automated meta-tagging, and persona-based marketing content.</li>
                                <li>Enhanced enterprise contact center capabilities by integrating new features into a client's Microsoft Bot Framework IVR solution and building corresponding Conversational Language Understanding (CLU) models in Azure.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="card--work-history">
                    <strong>Selected Project Experience</strong>
                    <p>IVR and Chatbot on Node.js and Microsoft Bot Framework.</p>
                    <ul>
                        <li>Introduced 2 new feature in the existing Contact Center built on Microsoft Bot Framework using Node.js</li>
                        <li>Created a new CLU model in Azure Language Studio, by validating F1 Scores and Performance Matrix. </li>
                        <li>Integrated the new RESTful APIs of Service Now with respect to the new features and deployed in Azure App Services.</li>
                        <li>Written an In-House Python script to restore the data for Database from Logs when the Database was down for 5 days.</li>
                    </ul>
                </div>
                <div class="card--work-history">
                    <strong>Apprentice | MINDTREE, Bangalore</strong>
                    <p>Jan 2022 - Jan 2023</p>
                    <ul>
                        <li>Working as a Content Partner for internal LMS by creating and curating 250 courses on data.</li>
                        <li>Internal SME for GCP and drove 4 Certification sessions and multiple calendar sessions for upskilling the corporate employees.</li>
                        <li>Introduced more than 40 courses in LMS on GenAI by curating them and creating the assessments for learning validation for the learners.</li>
                        <li>Worked as Technical SME and Technical Co-Ordinator for Internal Hackathon as a learning behavior for internal associates.</li>
                    </ul>
                </div>
            `
        },
        {
            type: 'bot',
            content: `
                <h2>Projects & Accomplishments</h2>
                <div class="card--project" data-modal="project1-modal">
                    <a><span>🎯 </span>Worked on Client Project Implementing Voice Conversation IVR for one of the UseCase</a>
                </div>
                <div class="card--project" data-modal="project2-modal">
                    <a><span>🎯 </span>As a Content Partner brought 250+ Data and GenAI courses on LMS</a>
                </div>
                <div class="card--project" data-modal="project3-modal">
                    <a><span>🎯 </span>Trained more than 300+ Engineers on Google Cloud and Snowflake for cracking the Certification</a>
                </div>
            `
        },
        {
            type: 'bot',
            content: `
                <h2>Educational Qualifications</h2>
                <ul id="qualifications--list" class="custom-list-2">
                    <li class="qualification-item">
                        <strong>10th Grade: Secondary School Leaving Certificate</strong>
                        <ul class="details-list">
                            <li>Percentage: 78.56%</li>
                            <li>Year of Completion: 2016</li>
                            <li>School Name: Nivedita School</li>
                        </ul>
                    </li>
                    <li class="qualification-item">
                        <strong>12th Grade: Pre University Education (Computer Science Stream)</strong>
                        <ul class="details-list">
                            <li>Percentage: 70.82%</li>
                            <li>Year of Completion: 2018</li>
                            <li>School Name: Independent PU College</li>
                        </ul>
                    </li>
                    <li class="qualification-item">
                        <strong>Bachelor's Degree: Bachelor of Computer Application</strong>
                        <ul class="details-list">
                            <li>Percentage: 8.82 C.G.P.A</li>
                            <li>Year of Completion: 2021</li>
                            <li>College/University Name: Vijayanagara Srikrishnadevaraya University, Bellary</li>
                        </ul>
                    </li>
                </ul>
            `
        },
        {
            type: 'bot',
            content: `
                <h2>Training and Certifications</h2>
                <div class="card--project">
                    <a href="https://www.credential.net/8ce04015-c4f5-438f-8fb2-926093792478?key=73790c2d0a9ad40a7065c43f235b8a411cd896fab2d79843900e4d368dd25fd6"
                        , target="_blank"><span>🎓</span>Google Certified: Associate Cloud Engineer</a>
                </div>
                <div class="card--project">
                    <a href="https://google.accredible.com/dd1b062d-147b-4d9e-82cd-ade91721a9d8" ,
                        target="_blank"><span>🎓</span>Google Certified: Professional Cloud Architect</a>
                </div>
                <div class="card--project">
                    <a href="https://achieve.snowflake.com/9de04501-7712-4a85-82eb-a2447912823e" ,
                        target="_blank"><span>🎓</span>Snowflake Certified: SnowPro Core</a>
                </div>
                <div class="card--project">
                    <a href="https://learn.microsoft.com/en-us/users/bdhanush-7900/credentials/785e70180df096b7" ,
                        target="_blank"><span>🎓</span>Microsoft Azure AI : 900</a>
                </div>
                <div class="card--project">
                    <a href="https://learn.microsoft.com/en-us/users/bdhanush-7900/credentials/db88be84e2fafadb" ,
                        target="_blank"><span>🎓</span>Microsoft Azure AZ : 900</a>
                </div>
            `
        },
        {
            type: 'bot',
            content: `
                <h2>Rewards and Recognitions</h2>
                <div class="scroll-container">
                    <!-- Tile 1 -->
                    <div class="tile outlier">
                        <div class="tile-img">
                            <img src="assets/images/Hi_fi.png" alt="Employee of the Year 2023">
                        </div>
                        <div class="tile-text">
                            <p>🏆 HI-FI Badge for Problem Solving</p>
                        </div>
                    </div>
                    <!-- Tile 2 -->
                    <div class="tile">
                        <div class="tile-img">
                            <img src="assets/images/Coach.png" alt="Innovator's Award for AI Development">
                        </div>
                        <div class="tile-text">
                            <p>🏆 Received Coach in guiding</p>
                        </div>
                    </div>
                    <!-- Tile 3 -->
                    <div class="tile">
                        <div class="tile-img">
                            <img src="assets/images/Team Player.png" alt="Innovator's Award for AI Development">
                        </div>
                        <div class="tile-text">
                            <p>🏆 3X Team Player</p>
                        </div>
                    </div>
                </div>
            `
        }
    ];

    let messageIndex = 0;
    function showMessage() {
        if (messageIndex < messages.length) {
            const message = messages[messageIndex];
            const messageElement = document.createElement('div');
            messageElement.classList.add('chat-message', message.type);
            messageElement.innerHTML = message.content;
            chatContainer.appendChild(messageElement);

            setTimeout(() => {
                messageElement.style.opacity = 1;
                messageElement.style.transform = 'translateY(0)';
            }, 100);

            messageIndex++;
        }
    }

    // Show the first message initially
    showMessage();

    window.addEventListener('scroll', () => {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
            showMessage();
        }
    });

    // Modal functionality
    chatContainer.addEventListener('click', (event) => {
        const card = event.target.closest('.card--project');
        if (card) {
            const modalId = card.getAttribute('data-modal');
            if (modalId) {
                document.getElementById(modalId).style.display = 'block';
            }
        }
    });

    document.querySelectorAll('.close-button').forEach(button => {
        button.addEventListener('click', () => {
            button.closest('.modal').style.display = 'none';
        });
    });

    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });
});
