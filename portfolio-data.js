// Edit this file to keep your portfolio and CV aligned. Only claim skills/experience you can explain.
// Replace these contact placeholders with details you want to publish.

const portfolioData = {
    contact: {
        phone: "+967 775887662",
        email: "maz719alhajouri@gmail.com",
        location: "Sana’a, Yemen",
        locationAr: "صنعاء، اليمن",
        linkedin: "https://www.linkedin.com/in/mazen-al-hajouri-30031839a",
        github: "https://github.com/mal221491mazen-star"
    },
    skills: [
        {
            status: "practice",
            icon: "</>",
            title: "Web Development",
            description: "Hands-on project experience building and organizing web pages and a PHP-based store.",
            tags: ["PHP", "HTML5", "CSS", "JavaScript fundamentals"],
            ar: {
                title: "تطوير الويب",
                description: "خبرة عملية في إنشاء صفحات الويب وتنظيمها وتطوير متجر باستخدام PHP.",
                tags: ["PHP", "HTML5", "CSS", "أساسيات JavaScript"]
            }
        },
        {
            status: "practice",
            icon: "▣",
            title: "Desktop Applications",
            description: "Built a personal finance management application with a Windows Forms interface and database connectivity.",
            tags: ["C#", "Windows Forms", "LINQ to SQL"],
            ar: {
                title: "تطبيقات سطح المكتب",
                description: "طوّرت تطبيقاً لإدارة المصروفات الشخصية بواجهة Windows Forms واتصال بقاعدة بيانات.",
                tags: ["C#", "Windows Forms", "LINQ to SQL"]
            }
        },
        {
            status: "practice",
            icon: "▤",
            title: "Databases",
            description: "Practical use of relational databases in application projects.",
            tags: ["SQL Server", "MySQL", "Relational data"],
            ar: {
                title: "قواعد البيانات",
                description: "استخدام عملي لقواعد البيانات العلائقية ضمن مشاريع التطبيقات.",
                tags: ["SQL Server", "MySQL", "البيانات العلائقية"]
            }
        },
        {
            status: "practice",
            icon: "⌁",
            title: "Development Tools",
            description: "Using version control and development tools to manage code and projects.",
            tags: ["Git", "GitHub", "Visual Studio"],
            ar: {
                title: "أدوات التطوير",
                description: "استخدام أدوات التحكم بالإصدارات والتطوير لإدارة الشيفرة والمشاريع.",
                tags: ["Git", "GitHub", "Visual Studio"]
            }
        },
        {
            status: "practice",
            icon: "⌘",
            title: "Networking & Systems Labs",
            description: "Hands-on lab practice with network topologies and Windows-based client/server environments.",
            tags: ["GNS3", "IPv4 & Subnetting", "OSPF concepts", "VLAN / STP concepts", "VMware"],
            ar: {
                title: "مختبرات الشبكات والأنظمة",
                description: "تدريب عملي على مختبرات طوبولوجيا الشبكات وبيئات العميل والخادم المعتمدة على Windows.",
                tags: ["GNS3", "IPv4 وتقسيم الشبكات", "مفاهيم OSPF", "مفاهيم VLAN وSTP", "VMware"]
            }
        },
        {
            status: "learning",
            icon: "↗",
            title: "Currently Developing",
            description: "Areas I am actively strengthening through study and practical exercises; these are not presented as certifications or expert-level skills.",
            tags: ["CCNA study", "Windows Server services", "Cybersecurity fundamentals", "OOP & software design", "Responsive web interfaces"],
            ar: {
                title: "مهارات أعمل على تطويرها",
                description: "مجالات أعمل على تعزيزها بالدراسة والتطبيق؛ ولا أقدّمها على أنها شهادات أو مهارات بمستوى خبير.",
                tags: ["دراسة CCNA", "خدمات Windows Server", "أساسيات الأمن السيبراني", "البرمجة كائنية التوجه وتصميم البرمجيات", "واجهات ويب متجاوبة"]
            }
        }
    ],
    projects: [
        {
            number: "01",
            type: "Collaborative Information System",
            title: "Bank of Documents",
            //image: "assets/projects/bank-of-documents.svg",
            image: "assets/projects/bank-of-documents.jfif",
            description: "Collaborative information-system project for storing, classifying, searching, viewing and sharing official documents. Contributions included requirements analysis, workflows, DFD/UML diagrams, data dictionary, WBS and Jira task planning. A dedicated public GitHub repository is not currently linked.",
            tags: ["Requirements analysis", "DFD / UML", "Documentation", "Jira", "Project Management", "WBS", "Software Development"],
            links: [],
            ar: {
                type: "نظام معلومات تعاوني",
                title: "بنك الوثائق",
                description: "مشروع نظام معلومات تعاوني لحفظ الوثائق الرسمية وتصنيفها والبحث فيها وعرضها ومشاركتها. شملت المساهمات تحليل المتطلبات، وسير العمل، ومخططات DFD وUML، وقاموس البيانات، وهيكل تقسيم العمل WBS، وتخطيط المهام عبر Jira. لا يتوفر حالياً رابط عام لمستودع GitHub مخصص للمشروع.",
                tags: ["تحليل المتطلبات", "DFD / UML", "التوثيق", "Jira", "إدارة المشاريع", "WBS", "تطوير البرمجيات"]
            }
        },
        {
            number: "02",
            type: "Web App Concept",
            title: "Aljadbi — Wedding Kousha Rental",
            //image: "assets/projects/aljadbi-app.svg", 
            image: "assets/projects/aljadbi-app.webp",
            description: "Yemeni wedding kousha rental concept with browsing, price discovery, date selection, booking requests, customer-owner chat and request receipts. A prototype is available online.",
            tags: ["TypeScript repository", "Product concept", "Mobile UX"],
            ar: {
                type: "تصور لتطبيق ويب",
                title: "الجدبي — تأجير كوش الأفراح",
                description: "تصور لخدمة يمنية لتأجير كوش الأفراح، تتيح استعراض الخيارات ومعرفة الأسعار واختيار الموعد وإرسال طلبات الحجز والتواصل بين العميل والمالك واستلام إيصالات الطلبات. يتوفر نموذج أولي عبر الإنترنت.",
                tags: ["مستودع TypeScript", "تصور منتج", "تجربة المستخدم للهواتف"],
                links: [
                    { label: "مستودع GitHub", url: "https://github.com/mal221491mazen-star/Aljadbi" },
                    { label: "النموذج الأولي المباشر", url: "https://aljadby.ai.studio/" }
                ]
            },
            links:
                [
                    { label: "GitHub repository", url: "https://github.com/mal221491mazen-star/Aljadbi" },
                    { label: "Live prototype", url: "https://aljadby.ai.studio/" }
                ]
        },
        {
            number: "03",
            type: "Web Development",
            title: "E-Commerce Website",
            //image: "assets/projects/ecommerce-website.svg",
            image: "assets/projects/ecommerce-website.jpg",
            description: "PHP-based online store project with product browsing, user login/registration, cart features and an admin product-management area. A live demo is also available.",
            tags: ["PHP", "HTML / CSS / JavaScript", "MySQL"],
            ar: {
                type: "تطوير ويب",
                title: "موقع تجارة إلكترونية",
                description: "متجر إلكتروني مطوّر باستخدام PHP، يتيح استعراض المنتجات وتسجيل الدخول وإنشاء الحسابات واستخدام سلة التسوق، ويتضمن لوحة لإدارة المنتجات. يتوفر أيضاً عرض مباشر للموقع.",
                tags: ["PHP", "HTML / CSS / JavaScript", "MySQL"],
                links: [
                    { label: "مستودع GitHub", url: "https://github.com/mal221491mazen-star/E-Commerce-website" },
                    { label: "الموقع المباشر", url: "https://ecommerce-mazen.rf.gd/index.php?i=1" }
                ]
            },
            links:
                [
                    { label: "GitHub repository", url: "https://github.com/mal221491mazen-star/E-Commerce-website" },
                    { label: "Live website", url: "https://ecommerce-mazen.rf.gd/index.php?i=1" }
                ]
        },
        {
            number: "04",
            type: "Desktop Application",
            title: "Personal Expenses Manager",
            //image: "assets/projects/personal-expenses-manager.svg",
            image: "assets/projects/personal-expenses-manager.JPG",
            description: "C# Windows Forms personal-finance management application using SQL Server and LINQ to SQL.",
            tags: ["C#", "Windows Forms", "SQL Server", "LINQ to SQL", ".NET Framework"],
            ar: {
                type: "تطبيق سطح مكتب",
                title: "مدير المصروفات الشخصية",
                description: "تطبيق لإدارة الشؤون المالية الشخصية، مطوّر باستخدام C# وWindows Forms مع SQL Server وLINQ to SQL.",
                tags: ["C#", "Windows Forms", "SQL Server", "LINQ to SQL", ".NET Framework"],
                links: [{ label: "مستودع GitHub", url: "https://github.com/mal221491mazen-star/PersonalExpensesManager" }]
            },
            links: [
                { label: "GitHub repository", url: "https://github.com/mal221491mazen-star/PersonalExpensesManager" }

            ]
        },
        {
            number: "05",
            type: "Academic Research & Penetration Testing",
            title: "Mobile Application Reverse Engineering and Defensive Architecture Analysis",
            image: "assets/projects/moble-app-security-testing.webp",
            //image: "assets/projects/ecommerce-website.svg",
            //description: "An advanced mobile security project focused on Android application package (APK) reverse engineering, malicious payload integration, and modern platform defense strategies.",
            description: "A mobile security research project exploring Android application analysis, reverse engineering concepts, and defensive strategies, including application integrity, runtime protection, and platform security.",
            ar: {
                type: "بحث أكاديمي واختبار أمني",
                title: "تحليل التطبيقات المحمولة والهندسة العكسية وبنية الحماية",
                description: "مشروع بحثي في أمن الأجهزة المحمولة يستكشف تحليل تطبيقات Android ومفاهيم الهندسة العكسية والاستراتيجيات الدفاعية، بما في ذلك سلامة التطبيقات والحماية أثناء التشغيل وأمن المنصة.",
                tags: ["أمن الأجهزة المحمولة", "الهندسة العكسية", "اختبار الاختراق", "أمن Android", "Metasploit Framework"],
                links: [{ label: "عرض التفاصيل على LinkedIn", url: "https://www.linkedin.com/in/mazen-al-hajouri-30031839a/overlay/1791905167325/single-media-viewer/?profileId=ACoAAGHvTLABQOJIT9ZDGFIHOwIhiTAwmVnQzb0&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_project%3BaRcic2%2BATgusER9XGbDk0g%3D%3D" }]
            },
            tags: [
                "Mobile Security",
                "Reverse Engineering",
                "Penetration Testing",
                "Android Security",
                "Metasploit Framework"
            ],
            links: [
                {
                    label: "View details on LinkedIn", url: "https://www.linkedin.com/in/mazen-al-hajouri-30031839a/overlay/1791905167325/single-media-viewer/?profileId=ACoAAGHvTLABQOJIT9ZDGFIHOwIhiTAwmVnQzb0&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_project%3BaRcic2%2BATgusER9XGbDk0g%3D%3D"
                },
            ]
        },
        {
            number: "06",
            type: "Front-End Practice",
            title: "Our-School Website",
            image: "assets/projects/our-school-website.svg",
            description: "School-themed website project used to practise page structure, navigation and front-end web development fundamentals.",
            tags: ["HTML", "CSS", "JavaScript assets"],
            ar: {
                type: "تدريب على الواجهات الأمامية",
                title: "موقع مدرستنا",
                description: "مشروع موقع بطابع مدرسي للتدرب على بنية الصفحات والتنقل وأساسيات تطوير واجهات الويب.",
                tags: ["HTML", "CSS", "ملفات JavaScript"],
                links: [
                    { label: "مستودع GitHub", url: "https://github.com/mal221491mazen-star/Our-School" },
                    { label: "الموقع المباشر", url: "https://mal221491mazen-star.github.io/Our-School/" }
                ]
            },
            links:
                [
                    { label: "GitHub repository", url: "https://github.com/mal221491mazen-star/Our-School" },
                    { label: "Live website", url: "https://mal221491mazen-star.github.io/Our-School/" }
                ]
        }
        /*{
            number: "",
            type: "",
            title: "",
            image: "",
            description: "",
            tage: ["", "", ""],
            links: [
                { label: "https://www.linkedin.com/in/mazen-al-hajouri-30031839a/overlay/1791905167325/single-media-viewer/?profileId=ACoAAGHvTLABQOJIT9ZDGFIHOwIhiTAwmVnQzb0&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_project%3BaRcic2%2BATgusER9XGbDk0g%3D%3D", url: "https://media.licdn.com/dms/image/v2/D4D2DAQFlxbsldoCrTg/profile-treasury-document-images_1280/B4DaE12.Z8IgAg-/1/1791904967512?e=1792627200&v=beta&t=1kXne_79IM3zM3sOigrgJAOgFykBCRlsrjjf1P_PbUQ" }
            ]
        },*/
    ],
    experience: [
        {
            date: "11–14 OCT 2025",
            title: "Volunteer — Burouj Technical Exhibition / SMART-EX",
            place: "Technical exhibition, Sana'a, Yemen",
            description: "Volunteer participation in a technology exhibition focused on computing, communications and digital transformation."
            ,ar: {
                date: "١١–١٤ أكتوبر ٢٠٢٥",
                title: "متطوع — معرض بروج التقني / SMART-EX",
                place: "معرض تقني، صنعاء، اليمن",
                description: "مشاركة تطوعية في معرض تقني ركّز على الحوسبة والاتصالات والتحول الرقمي."
            }
                //Add the exact duties performed and certificate image after the event documentation is available."
        }
    ],
    education: [
        {
            date: "CURRENT",
            title: "Bachelor’s Degree in Information Technology",
            place: "Al-Hikma University — Third Year",
            description: "Studies spanning IT, software development, databases, networking and systems.",
            ar: {
                date: "حالياً",
                title: "بكالوريوس تقنية المعلومات",
                place: "جامعة الحكمة — المستوى الثالث",
                description: "دراسة تشمل تقنية المعلومات وتطوير البرمجيات وقواعد البيانات والشبكات والأنظمة."
            }
        },
        {
            date: "COMPLETED",
            title: "High-Level Diploma",
            place: "Al-Alson International Institute",
            description: "Diploma studies completed.",
            ar: {
                date: "مكتمل",
                title: "دبلوم عالٍ",
                place: "معهد الألسن الدولي",
                description: "إتمام دراسة الدبلوم."
            }
        }
    ],
    certificates: [
        {
            icon: "✓",
            title: "TESOL Certification",
            image: "assets/certificates/e-one.png",
            issuer: "E-One Institute",
            description: "Teaching English to Speakers of Other Languages. Add the certificate image or its official verification URL to make this credential independently verifiable.",
            ar: {
                title: "شهادة تدريس الإنجليزية لغير الناطقين بها (TESOL)",
                issuer: "معهد E-One",
                description: "تدريس اللغة الإنجليزية للناطقين بلغات أخرى. أضف صورة الشهادة أو رابط التحقق الرسمي لتسهيل التحقق المستقل من الشهادة.",
                label: "عرض تفاصيل الشهادة على LinkedIn"
            },
            url: "https://www.linkedin.com/in/mazen-al-hajouri-30031839a/details/certifications/",
            label: "View certification details on LinkedIn"
        },
        {
            icon: "↗",
            title: "CCNA-focused Networking Training",
            image: "assets/certificates/introductionToNetwork.jpg",
            issuer: "G.T.I — Training / Study",
            description: "Networking training and practical study. This is training in progress, not a completed CCNA certification.",
            ar: {
                title: "تدريب في الشبكات مع التركيز على CCNA",
                issuer: "G.T.I — تدريب ودراسة",
                description: "تدريب ودراسة عملية في مجال الشبكات. هذا التدريب ما زال جارياً، ولا يمثّل شهادة CCNA مكتملة.",
                label: "عرض تفاصيل الشهادة على LinkedIn"
            },
            url: "https://www.linkedin.com/in/mazen-al-hajouri-30031839a/details/certifications/",
            label: "View certification details on LinkedIn"
        },
        {
            icon: "💼",
            title: "Business Communication",
            image: "assets/certificates/BusinessCommunications.png",
            issuer: "HP LIFE",
            description: "Focuses on the principles of effective professional communication, designing impactful business messages, and choosing the right communication channels for target audiences.",
            ar: {
                title: "التواصل في الأعمال",
                issuer: "HP LIFE",
                description: "تركّز على مبادئ التواصل المهني الفعّال، وصياغة رسائل أعمال مؤثرة، واختيار قنوات التواصل المناسبة للجمهور المستهدف.",
                label: "الرقم التسلسلي للشهادة"
            },
            url: "https://www.life-global.org/certificate/1c77969c-c74d-44ee-9186-d06792db068c",
            label: "Certificate serial number:"
        },
        {
            icon: "🛠️",
            title: "Network Addressing and Basic Troubleshooting",
            image: "assets/certificates/NetworkAddressingandBasicTrouble.jpg",
            issuer: "Cisco Networking Academy",
            description: "Focuses on designing, calculating, and applying IPv4 and IPv6 addressing schemes, alongside primary network verification and basic troubleshooting steps.",
            ar: {
                title: "عنونة الشبكات واستكشاف الأخطاء الأساسية وإصلاحها",
                issuer: "أكاديمية Cisco للشبكات",
                description: "تركّز على تصميم مخططات عنونة IPv4 وIPv6 وحسابها وتطبيقها، إلى جانب التحقق الأساسي من الشبكات وخطوات استكشاف الأخطاء وإصلاحها.",
                label: "بيانات الشهادة"
            },
            url: "https://netacad.com",
            label: "Credential"
        },
        {
            icon: "🚀",
            title: "Modern Project Management & AI Application",
            //image: "assets/certificates/tesol-certtificate.svg",
            image: "assets/certificates/learn.png.jfif",
            issuer: "Lrnrs Academy",
            description: "A 3-hour webinar exploring contemporary project management methodologies integrated with artificial intelligence tools to optimize operational workflows.",
            ar: {
                title: "إدارة المشاريع الحديثة وتطبيقات الذكاء الاصطناعي",
                issuer: "أكاديمية Lrnrs",
                description: "ندوة عبر الإنترنت مدتها ثلاث ساعات تستعرض منهجيات إدارة المشاريع الحديثة ودمجها مع أدوات الذكاء الاصطناعي لتحسين سير العمل.",
                label: "إثبات المشاركة"
            },
            url: "https://media.licdn.com/dms/image/v2/D4E2DAQHHPeH9ygmU_w/profile-treasury-image-shrink_800_800/B4EaAHDZAcI0AI-/0/1786824724791?e=1792616400&v=beta&t=0ZMPHPJc9SRqhzqzW2GRypu_TBRQe0FhOBi9_nBUL1Y",
            label: "Participation"
        }
        , {
            icon: "🛡️",
            title: "Introduction to Cybersecurity",
            image: "assets/certificates/introductionToCyberscurity.jpg",
            issuer: "Cisco Networking Academy",
            description: "Explores the cyber trend landscape, threats, vulnerabilities, and the global impact of cybercrime, alongside foundational ways to protect personal and organizational data.",
            ar: {
                title: "مقدمة في الأمن السيبراني",
                issuer: "أكاديمية Cisco للشبكات",
                description: "تستعرض اتجاهات الأمن السيبراني والتهديدات والثغرات والأثر العالمي للجرائم الإلكترونية، إلى جانب أساسيات حماية البيانات الشخصية والمؤسسية.",
                label: "بيانات الشهادة"
            },
            url: "https://www.credly.com/badges/db7cc904-29de-4945-afc2-3206e7d8b58e/public_url",
            label: "Credential"
        },
        {
            icon: "💻",
            title: "Computer Networking",
            image: "assets/certificates/computer networking certificate.png",
            issuer: "Cursa",
            description: "Covers foundational concepts of computer networks, data communication systems, topology frameworks, and network protocols.",
            ar: {
                title: "شبكات الحاسوب",
                issuer: "Cursa",
                description: "تغطي المفاهيم الأساسية لشبكات الحاسوب وأنظمة اتصالات البيانات وبنى الشبكات وبروتوكولاتها.",
                label: "بيانات الشهادة"
            },
            url: "https://cursa.app/en/my-certificate/cert783551742573d96a1d7fc3a48f52491b",
            label: "Credential"
        },
        {
            icon: "🎓",
            title: "PHP with MySQL tutorial by The Net Ninja",
            image: "assets/certificates/PHP wint MYSQL certificate.png",
            issuer: "Cursa",
            description: "A tutorial course covering backend development fundamentals using the PHP scripting language alongside MySQL databases for web development.",
            ar: {
                title: "دورة PHP مع MySQL من The Net Ninja",
                issuer: "Cursa",
                description: "دورة تعليمية تغطي أساسيات تطوير الواجهات الخلفية باستخدام لغة PHP وقواعد بيانات MySQL لتطوير الويب.",
                label: "شهادة إتمام دورة عبر الإنترنت"
            },
            url: "https://cursa.app/en/my-certificate/cert4176bd1985ae6e3bf230acc7a71940e1",
            label: "Online Course Completion Certificate"
        }
        // {
        //     icon: "",
        //     title: "",
        //     image: "",
        //     issuer: "Cursa",
        //     description: "",
        //     url: "",
        //     label: ""
        // }
    ]
};
