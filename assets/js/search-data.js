// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/index.html";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-datasets",
          title: "Datasets",
          description: "实验室公开的数据集",
          section: "Navigation",
          handler: () => {
            window.location.href = "/datasets/";
          },
        },{id: "nav-people",
          title: "People",
          description: "Composition of Laboratory Personnel.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "dropdown-bookshelf",
              title: "bookshelf",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/books/";
              },
            },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
              },
            },{id: "post-digital-human-r-amp-d-platform-demonstration",
        
          title: "Digital Human R&amp;D Platform Demonstration",
        
        description: "This project demonstrates the Digital Human R&amp;D Platform",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/DigitalHuman/";
          
        },
      },{id: "post-an-eye-tracking-video-demonstration-project",
        
          title: "An Eye Tracking Video Demonstration Project",
        
        description: "This project demonstrates the experimental group eye tracking demo video",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/EyeTracking/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "projects-audio-confuse",
          title: 'Audio Confuse',
          description: "音频诱发的困惑情绪识别脑电数据集",
          section: "Projects",handler: () => {
              window.location.href = "/datasets/audio_confuse";
            },},{id: "projects-cal",
          title: 'CAL',
          description: "EEG database for Confusion Analysis in Learning",
          section: "Projects",handler: () => {
              window.location.href = "/datasets/cal";
            },},{id: "projects-ravengaze",
          title: 'RavenGaze',
          description: "Gaze Estimation Dataset Evoked by Raven Progressive Matrices (RPM) Test",
          section: "Projects",handler: () => {
              window.location.href = "/datasets/RavenGaze/index.html";
            },},{id: "projects-ruiweneeg",
          title: 'RuiwenEEG',
          description: "瑞文实验诱发的情绪识别脑电数据集",
          section: "Projects",handler: () => {
              window.location.href = "/datasets/ruiwen";
            },},{id: "projects-白玉琼",
          title: '白玉琼',
          description: "工行软开中心",
          section: "Projects",handler: () => {
              window.location.href = "/projects/baiyuqiong/";
            },},{id: "projects-曹志鹏",
          title: '曹志鹏',
          description: "华为",
          section: "Projects",handler: () => {
              window.location.href = "/projects/caozhipeng/";
            },},{id: "projects-陈骁",
          title: '陈骁',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/chenxiao/";
            },},{id: "projects-党旺",
          title: '党旺',
          description: "华为",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dangwang/";
            },},{id: "projects-邓义兴",
          title: '邓义兴',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dengyixing/";
            },},{id: "projects-范瑞龙",
          title: '范瑞龙',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/fanruilong/";
            },},{id: "projects-jia-guo",
          title: 'Jia Guo',
          description: "Associate Professor",
          section: "Projects",handler: () => {
              window.location.href = "/projects/guojia/";
            },},{id: "projects-郭忠昌",
          title: '郭忠昌',
          description: "中兴通讯",
          section: "Projects",handler: () => {
              window.location.href = "/projects/guozhongchang/";
            },},{id: "projects-bing-li",
          title: 'Bing Li',
          description: "Associate Professor",
          section: "Projects",handler: () => {
              window.location.href = "/projects/libing/";
            },},{id: "projects-李朝阳",
          title: '李朝阳',
          description: "中国空间技术研究院杭州中心",
          section: "Projects",handler: () => {
              window.location.href = "/projects/lichaoyang/";
            },},{id: "projects-李瑞强",
          title: '李瑞强',
          description: "华为",
          section: "Projects",handler: () => {
              window.location.href = "/projects/liruiqiang/";
            },},{id: "projects-刘源",
          title: '刘源',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/liuyuan/";
            },},{id: "projects-慕海洋",
          title: '慕海洋',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/muhaiyang/";
            },},{id: "projects-覃一航",
          title: '覃一航',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/qinyihang/";
            },},{id: "projects-苏萌",
          title: '苏萌',
          description: "西安热工研究院有限公司",
          section: "Projects",handler: () => {
              window.location.href = "/projects/sumeng/";
            },},{id: "projects-王佳宝",
          title: '王佳宝',
          description: "北京机电工程研究所",
          section: "Projects",handler: () => {
              window.location.href = "/projects/wangjiabao/";
            },},{id: "projects-王纪元",
          title: '王纪元',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/wangjiyuan/";
            },},{id: "projects-王旭",
          title: '王旭',
          description: "中兴通讯",
          section: "Projects",handler: () => {
              window.location.href = "/projects/wangxu/";
            },},{id: "projects-王璇",
          title: '王璇',
          description: "中国移动",
          section: "Projects",handler: () => {
              window.location.href = "/projects/wangxuan/";
            },},{id: "projects-吴波",
          title: '吴波',
          description: "迈瑞医疗",
          section: "Projects",handler: () => {
              window.location.href = "/projects/wubo/";
            },},{id: "projects-吴昭颖",
          title: '吴昭颖',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/wuzhaoying/";
            },},{id: "projects-tao-xu",
          title: 'Tao Xu',
          description: "Associate Professor",
          section: "Projects",handler: () => {
              window.location.href = "/projects/xutao/";
            },},{id: "projects-伊浩圆",
          title: '伊浩圆',
          description: "科大讯飞",
          section: "Projects",handler: () => {
              window.location.href = "/projects/yihaoyuan/";
            },},{id: "projects-尹欣玥",
          title: '尹欣玥',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/yinxinyue/";
            },},{id: "projects-张高天",
          title: '张高天',
          description: "华为",
          section: "Projects",handler: () => {
              window.location.href = "/projects/zhanggaotian/";
            },},{id: "projects-张江源",
          title: '张江源',
          description: "百度",
          section: "Projects",handler: () => {
              window.location.href = "/projects/zhangjiangyuan/";
            },},{id: "projects-张译",
          title: '张译',
          description: "美团",
          section: "Projects",handler: () => {
              window.location.href = "/projects/zhangyi/";
            },},{id: "projects-张芸萱",
          title: '张芸萱',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/zhangyunxuan/";
            },},{id: "projects-张志伟",
          title: '张志伟',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/zhangzhiwei/";
            },},{id: "projects-赵璇",
          title: '赵璇',
          description: "华为",
          section: "Projects",handler: () => {
              window.location.href = "/projects/zhaoxuan/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("//feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
