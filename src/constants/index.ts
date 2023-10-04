import {
    SiLaravel,
    SiMysql,
    SiNestjs,
    SiNextdotjs,
    SiNodedotjs,
    SiPostgresql,
    SiPrisma,
    SiReact,
    SiTailwindcss,
} from 'react-icons/si'

export const TECH_LINK = [
    {
        id: 'react',
        link: [
            {
                label: 'React Documentation',
                href: 'https://react.dev/',
            },
            {
                label: 'The Beginners Guide to React',
                href: 'https://egghead.io/courses/the-beginner-s-guide-to-react',
            },
            {
                label: 'React Course - Beginners Tutorial for React JavaScript Library ',
                href: 'https://www.youtube.com/watch?v=bMknfKXIFA8',
            },
        ],
    },
    {
        id: 'next',
        link: [
            {
                label: 'Next.js Documentation',
                href: 'https://nextjs.org/',
            },
            {
                label: 'Mastering Next.js',
                href: 'https://masteringnextjs.com/',
            },
            {
                label: 'Next.js for Beginners - freeCodeCamp',
                href: 'https://youtu.be/1WmNXEVia8I',
            },
        ],
    },
    {
        id: 'tailwind',
        link: [
            {
                label: 'Tailwind CSS Documentation',
                href: 'https://tailwindcss.com/',
            },
            {
                label: 'Tailwind CSS Crash Course',
                href: 'https://www.youtube.com/watch?v=UBOj6rqRUME',
            },
            {
                label: 'Tailwind CSS Full Course for Beginners',
                href: 'https://www.youtube.com/watch?v=lCxcTsOHrjo',
            },
        ],
    },
    {
        id: 'node',
        link: [
            {
                label: 'Node.js Documentation',
                href: 'Node.js Full Course for Beginners ',
            },
            {
                label: 'Node.js Full Course for Beginners',
                href: 'https://www.youtube.com/watch?v=f2EqECiTBL8&t=8657s&pp=ygUGbm9kZWpz',
            },
        ],
    },
    {
        id: 'nest',
        link: [
            {
                label: 'NestJS Documentation',
                href: 'https://nestjs.com/',
            },
            {
                label: 'What Is Nest.js?',
                href: 'https://kinsta.com/knowledgebase/nestjs/',
            },
            {
                label: 'NestJs Course for Beginners - Create a REST API',
                href: 'https://www.youtube.com/watch?v=GHTA143_b-s&t=2847s&pp=ygUGbmVzdGpz',
            },
        ],
    },
    {
        id: 'laravel',
        link: [
            {
                label: 'Laravel Documentation',
                href: 'https://laravel.com/docs/10.x',
            },
            {
                label: 'What Is Nest.js?',
                href: 'https://kinsta.com/knowledgebase/nestjs/',
            },
            {
                label: 'Laravel PHP Framework Tutorial',
                href: 'https://www.youtube.com/watch?v=ImtZ5yENzgE&pp=ygUWZnJlZSBjb2RlIGNhbXAgbGFyYXZlbA%3D%3D',
            },
        ],
    },
    {
        id: 'mysql',
        link: [
            {
                label: 'MySQL Documentation',
                href: 'https://www.mysql.com/',
            },
            {
                label: 'MySQL for Developers',
                href: 'https://planetscale.com/courses/mysql-for-developers/introduction/course-introduction',
            },
        ],
    },
    {
        id: 'postgres',
        link: [
            {
                label: 'PostgreSQL Documentation',
                href: 'https://www.postgresql.org/',
            },
            {
                label: 'Learn PostgreSQL - Full Tutorial for Beginners',
                href: 'https://www.postgresqltutorial.com/',
            },
        ],
    },
]

export const TECH_STACK = [
    {
        id: 'react',
        icon: SiReact,
        label: 'ReactJS',
        desc: 'React is the most popular front-end JavaScript library for building user interfaces. React can also render on the server using Node and power mobile apps using React Native.',
    },
    {
        id: 'next',
        icon: SiNextdotjs,
        label: 'Next JS',
        desc: 'Next.js is an open-source development framework built on top of Node.js enabling React based web applications functionalities such as server-side rendering and generating static websites.',
    },
    {
        id: 'tailwind',
        icon: SiTailwindcss,
        label: 'Tailwind CSS',
        desc: 'Tailwind CSS: A utility-first CSS framework that streamlines design by providing reusable classes for rapid and customizable web development.',
    },
    {
        id: 'prisma',
        icon: SiPrisma,
        label: 'Prisma ORM',
        desc: 'Prisma is an open-source database toolkit that simplifies database access and management for application developers.',
    },
    {
        id: 'node',
        icon: SiNodedotjs,
        label: 'NodeJS',
        desc: 'Node.js is an open source, cross-platform runtime environment and library that is used for running web applications outside the client’s browser.',
    },
    {
        id: 'nest',
        icon: SiNestjs,
        label: 'NestJS',
        desc: 'NestJS is a progressive Node.js framework for building efficient and scalable server-side applications.',
    },
    {
        id: 'laravel',
        icon: SiLaravel,
        label: 'Laravel',
        desc: 'Laravel is a web application framework with expressive, elegant syntax. A web framework provides a structure and starting point for creating your application, allowing you to focus on creating something amazing while we sweat the details.',
    },
    {
        id: 'mysql',
        icon: SiMysql,
        label: 'MySQL',
        desc: 'MySQL is an incredibly popular open source relational database management system (RDBMS). MySQL can be used as a stand-alone client or in conjunction with other services to provide database connectivity. The M in LAMP stack stands for MySQL; that alone should provide an idea of its prevalence.',
    },
    {
        id: 'postgres',
        icon: SiPostgresql,
        label: 'PostgreSQL',
        desc: 'PostgreSQL, also known as Postgres, is a free and open-source relational database management system emphasizing extensibility and SQL compliance.',
    },
]
