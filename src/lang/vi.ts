import moment from "moment";

const vi = {
  lang:[
    { value: "en", label: "Eng" },
    { value: "vi", label: "Vie" },
  ],
  header: {
    open_navigation : "Open Navigation",
    close_navigation : "Close Navigation",
    theme_switcher: "Theme Switcher",
  },
  footer: {
    about_me: "Tìm hiểu về mình",
    links: [
      // // Format link in Footer
      // {
      //   title: "Example #1",
      //   link: "#",
      // },
    ],
    social_networks: [
      {
        icon: "SiGmail",
        link: "mailto:khuonglu1999@gmail.com",
      },
      {
        icon: "SiLinkedin",
				link: "https://www.linkedin.com/in/luminhkhuong/",
      },
      {
        icon: "SiGithub",
				link: "https://github.com/minhkhuong2404",
      },
      {
        icon: "SiFacebook",
				link: "https://www.facebook.com/khuong.luminh99",
      },
      
    ],
    develop_by: "Phát triển bởi ",
    build_with: "Xây dựng bằng ",
    with: " bằng ",
  },
  home: {
    intro: {
      header: "Xin chào, Mình là Khương Lữ",
      description:
        "Mình hiện tại đang là một Lập Trình Viên Fullstack. Đây là một website mình tạo ra với mong muốn được chia sẻ kiến thức của mình đến với mọi người. Cảm ơn mọi người đã ghé qua. ❤️",
			image: "/assets/images/yos-colorful.png",
      links: [
        {
          icon: "HiOutlineNewspaper",
          title: "Resume",
          link: "https://github.com/minhkhuong2404/my-cv/blob/main/pdf/cv_en_vi_howznguyen.pdf",
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
		featured_posts: "Bài Viết Đặc Sắc 🚀",
    read_more: "Xem thêm",
    categories: [
      {
        name: "Kiến thức 🎓",
        description:
          "Các bài viết liên quan về kiến thức lập trình và thuật toán.",
        value: ["code", "algorithm"],
      },
      {
        name: "Tutorial & Tips 💡",
        description:
          "Các bài viết hướng dẫn hoặc mẹo về lập trình và công nghệ.",
        value: ["tutorial", "tip"],
      },
      {
        name: "Notion 📚",
        description:
          "Các bài viết có nội dung về Notion và các tiện ích xung quanh Notion.",
        value: ["notion"],
      },
      {
        name: "Khác",
        description: "Các bài viết không thuộc chủ đề công nghệ.",
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
      return `Được đăng vào ${_datetime} bởi ${author}.`;
    },
    reading_time: (min: any) => {
      return `${min} phút đọc`;
    },
    views: (views: any) => {
      return `${views} lượt xem`;
    },
    tags: "Tags",
    relate_post: "Những Bài Viết Liên Quan:",
    table_of_contents: "Mục Lục",
  },
  blog: {
    blog: "Blog",
    intro: "Ở đây bạn có thể tìm thấy tất cả các bài viết của mình",
    find_posts: "Tìm kiếm bài viết...",
    not_found_post: "Không có bài viết nào",
  },
  tag: {
    tag: "Tag",
    tags: "Tags",
    intro: "Bạn có thể tìm các bài viết theo các tags dưới đây:",
    not_found_post: "Không có bài viết nào",
    post_by_tag: "Các bài viết của tag:",
  },
  error_page: {
    404 : {
      title: "Trang Không Tồn Tại",
      head: "Xin lỗi, mình không thể tìm thấy trang này.",
      desc: "Nhưng đừng lo, bạn có thể tìm thấy nhiều thứ khác trên trang chủ của mình.",
      home_button: "Trang Chủ"
    }
  },
  common: {
    error: "Lỗi",
    is_loading: "Đang tải...",
    process_take_few_second: "Quá trình này có thể mất vài giây, vui lòng không đóng trang này.",
  }
};

export default vi;