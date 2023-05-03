import moment from "moment";

const en = {
  lang:[
    { value: "en", label: "Eng" },
    { value: "vi", label: "Vie" },
  ],
	images: {
		description: "For more images like these, check out my website:\n"
	},
  header: {
    open_navigation : "Open Navigation",
    close_navigation : "Close Navigation",
    theme_switcher: "Theme Switcher",
  },
  footer: {
    about_me: "About me",
    links: [
      // // Format link in Footer
      // {
      //   title: "Example #1",
      //   link: "#",
      // },
    ],
    social_networks: [
      {
        title: "Mail",
        icon: "SiGmail",
        link: "mailto:khuonglu1999@gmail.com",
      },
      {
        title: "Linkedin",
        icon: "SiLinkedin",
        link: "https://www.linkedin.com/in/luminhkhuong/",
      },
      {
        title: "Github",
        icon: "SiGithub",
        link: "https://github.com/minhkhuong2404",
      },
      {
        title: "Facebook",
        icon: "SiFacebook",
        link: "https://www.facebook.com/khuong.luminh99/",
      },
      
    ],
    develop_by: "Developed by ",
    build_with: "Built with ",
    with: " with ",
  },
  home: {
    intro: {
      header: "Hi, I'm Khuong Lu",
      description:
        "I am currently a Fullstack Programmer. This is a website that I created with the desire to share my knowledge with everyone, not just limited to the programming field. Thank you for visiting. ❤️",
      image: "/assets/images/yos-colorful.png",
      links: [
        {
          icon: "FaLinkedin",
          title: "Lu Minh Khuong",
					link: "https://www.linkedin.com/in/luminhkhuong/",
        },
        {
          icon: "FaFacebook",
          title: "Lu Minh Khuong",
          link: "https://facebook.com/khuong.luminh99/",
        },
        {
          icon: "FaGithub",
          title: "minhkhuong2404",
          link: "https://github.com/minhkhuong2404",
        },
      ],
    },
    featured_posts: "Featured Posts 🚀",
    read_more: "Read more",
		categories: [
			{
				name: "Knowledge 🎓",
				description:
					"Articles related to programming knowledge and algorithms.",
				value: ["code", "algorithm"],
			},
			{
				name: "Tutorial & Tips 💡",
				description:
					"Articles providing guidance or tips on programming and technology.",
				value: ["tutorial", "tip"],
			},
			{
				name: "Java Basics",
				description: "Articles about Java fundamentals.",
				value: ["java", "basic", "middle", "advanced"],
			},
			{
				name: "Spring Boot",
				description: "Articles about Spring Boot.",
				value: ["java", "spring-boot"],
			},
			{
				name: "Notion 📚",
				description:
					"Articles with content related to Notion and its surrounding utilities.",
				value: ["notion"],
			},
			{
				name: "Others",
				description: "Articles not related to technology topics.",
				value: ["other"],
			},
		],
  },
  post: {
    published_at_by: (datetime: any, author: any, locale: string) => {
      moment.locale(locale);
      const days = 5;
      let raw = moment(datetime);
      let duration = moment.duration(moment().diff(datetime));
      const _datetime = (duration.asHours() > 24 * days) ? raw.format('DD/MM/YYYY HH:mm') : raw.fromNow();
      return `Published at ${_datetime} by ${author}.`;
    },
    reading_time: (min: any) => {
      return `${min} min read`;
    },
    views: (views: any) => {
      return `${views} views`;
    },
    tags: "Tags",
    relate_post: "Related Posts:",
    table_of_contents: "Table of Contents"
  },
  blog: {
    blog: "Blog",
    description: "Here you can find all my posts",
    intro: "Here you can find all my posts",
    find_posts: "Posts search...",
    not_found_post: "There are no posts yet",
  },
  tag: {
    tag: "Tag",
    tags: "Tags",
    intro: "You can find articles under the tags below:",
    not_found_post: "There are no posts yet",
    post_by_tag: "Posts by tag:",
  },
  error_page: {
    404 : {
      title: "Page Not Found",
      head: "Sorry, I can't find this page.",
      desc: "But don't worry, you can find many more on your homepage.",
      home_button: "Home"
    }
  },
  common: {
    error: "Error",
    is_loading: "Loading...",
    process_take_few_second: "This process may take a few seconds, please do not close this page.",
  }
};

export default en;