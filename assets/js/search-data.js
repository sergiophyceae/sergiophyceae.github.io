// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-research",
          title: "Research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-people",
          title: "People",
          description: "A list of current and past members of the ECSO Lab.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-opportunities",
          title: "Opportunities",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/opportunities/";
          },
        },{id: "nav-data",
          title: "Data",
          description: "Here you can find data associated ith some of our published articles.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/data/";
          },
        },{id: "nav-contact",
          title: "Contact",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact/";
          },
        },{id: "nav-photos",
          title: "Photos",
          description: "ECSO Lab pictures",
          section: "Navigation",
          handler: () => {
            window.location.href = "/photos/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-the-manuscript-the-role-of-mitochondrial-energetics-in-the-origin-and-diversification-of-eukaryotes-co-authored-with-paul-e-schavemaker-is-now-published-in-nature-ecology-and-evolution-read-here",
          title: 'The manuscript “The role of mitochondrial energetics in the origin and diversification of...',
          description: "",
          section: "News",},{id: "news-the-ecso-lab-at-purdue-university-has-opened-its-doors-sparkles",
          title: 'The ECSO Lab at Purdue University has opened its doors! :sparkles:',
          description: "",
          section: "News",},{id: "news-the-lab-s-first-manuscript-energetics-and-evolution-of-anaerobic-microbial-eukaryotes-is-out-in-nature-microbiology-read-here",
          title: 'The lab’s first manuscript “Energetics and evolution of anaerobic microbial eukaryotes” is out...',
          description: "",
          section: "News",},{id: "news-dr-shahed-shazib-has-officially-joined-the-ecso-lab-as-a-postdoctoral-researcher-welcome-shahed",
          title: 'Dr. Shahed Shazib has officially joined the ECSO Lab as a Postdoctoral Researcher....',
          description: "",
          section: "News",},{id: "news-our-quick-guide-on-purple-photosymbioses-is-out-in-current-biology-check-it-out-here",
          title: 'Our Quick Guide on Purple photosymbioses is out in Current Biology! Check it...',
          description: "",
          section: "News",},{id: "news-our-manuscript-intracytoplasmic-membrane-development-in-alphaproteobacteria-involves-the-homolog-of-the-mitochondrial-crista-developing-protein-mic60-is-out-in-current-biology-check-it-out-here",
          title: 'Our manuscript “Intracytoplasmic-membrane development in alphaproteobacteria involves the homolog of the mitochondrial crista-developing...',
          description: "",
          section: "News",},{id: "news-the-manuscript-single-cell-genomics-reveals-the-divergent-mitochondrial-genomes-of-retaria-foraminifera-and-radiolaria-in-collaboration-with-colleagues-at-asu-is-out-in-mbio-check-it-out-here",
          title: 'The manuscript “Single-Cell Genomics Reveals the Divergent Mitochondrial Genomes of Retaria (Foraminifera and...',
          description: "",
          section: "News",},{id: "news-dr-muñoz-gómez-was-featured-in-a-piece-in-live-science-that-discusses-a-recent-study-by-geiger-et-al-in-science-advances-read-here",
          title: 'Dr. Muñoz-Gómez was featured in a piece in Live Science that discusses a...',
          description: "",
          section: "News",},{id: "news-we-welcome-dr-dongseok-kim-to-the-ecso-lab-dr-kim-recently-obtained-his-phd-from-the-laboratory-of-dr-hwan-su-yoon-at-sungkyunkwan-university-in-south-korea-learn-more-about-dongseok-here",
          title: 'We welcome Dr. Dongseok Kim to the ECSO Lab! Dr. Kim recently obtained...',
          description: "",
          section: "News",},{id: "news-together-with-the-friedman-lab-at-ut-southwestern-we-have-released-a-new-preprint-that-reports-a-new-interactor-of-the-crista-developing-micos-complex-in-fungi-check-it-out-here",
          title: 'Together with the Friedman lab at UT Southwestern, we have released a new...',
          description: "",
          section: "News",},{id: "news-we-welcome-research-assistants-penelope-vu-msc-and-konrad-schwartz-bsc-to-the-ecso-lab",
          title: 'We welcome Research Assistants Penelope Vu, MSc and Konrad Schwartz, BSc to the...',
          description: "",
          section: "News",},{id: "news-the-article-the-energetic-costs-of-cellular-complexity-in-evolution-is-out-today-in-trends-in-microbiology-it-explores-the-micro-and-macroevolutionary-costs-of-increases-in-cellular-complexity-follow-this-link-for-a-50-day-free-access-to-the-article",
          title: 'The article “The energetic costs of cellular complexity in evolution” is out today...',
          description: "",
          section: "News",},{id: "news-matheus-sanita-lima-is-visiting-us-from-the-smith-lab-in-western-university-for-six-months-welcome-matheus",
          title: 'Matheus Sanita Lima is visiting us from the Smith Lab in Western University...',
          description: "",
          section: "News",},{id: "news-ella-stone-has-joined-the-ecso-lab-as-a-pulse-phd-student-welcome-ella",
          title: 'Ella Stone has joined the ECSO Lab as a PULSe PhD student. Welcome,...',
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
            },},{
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
