const users = [
  {
    name: "Batman",
    title: "Superhero",
    type: "Freelancer",
    price: "free",
    skills: ["tech", "IT", "martial arts", "+4"],
    description: "I’m Batman!",
    profileImage:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Georgiana Suclea",
    title: "Mobile Designer",
    type: "Freelancer",
    price: "$39/hr",
    skills: ["PHP", "android", "iOS", "+2"],
    description:
      "Georgiana is an android & iOS developer who worked for 6 years.",
    profileImage:
      "https://plus.unsplash.com/premium_photo-1661775820832-f971657b13f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Gregory Johnes",
    title: "UI/UX Designer",
    type: "Epic Coders",
    price: "$45/hr",
    skills: ["UI", "UX", "photoshop", "+4"],
    description:
      "Gregory is a 32 year old UI/UX designer, with an impressive portfolio behind him.",
    profileImage:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Samantha Lee",
    title: "Frontend Developer",
    type: "Freelancer",
    price: "$30/hr",
    skills: ["React", "CSS", "JavaScript", "+3"],
    description: "Samantha creates stunning and responsive web interfaces.",
    profileImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vZGVsfGVufDB8fDB8fHww",
  },
  {
    name: "Ethan Chen",
    title: "Full Stack Developer",
    type: "Freelancer",
    price: "$50/hr",
    skills: ["Node.js", "MongoDB", "React", "+2"],
    description: "Ethan builds scalable full-stack apps with modern tech.",
    profileImage:
      "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vZGVsfGVufDB8fDB8fHww",
  },
  {
    name: "Ava Brown",
    title: "Graphic Designer",
    type: "Creative Minds",
    price: "$40/hr",
    skills: ["Illustrator", "Photoshop", "Figma", "+3"],
    description: "Ava specializes in creative visuals and branding.",
    profileImage:
      "https://plus.unsplash.com/premium_photo-1664464229692-44046bfd6b7d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vZGVsfGVufDB8fDB8fHww",
  },
  {
    name: "Liam Patel",
    title: "Data Analyst",
    type: "Freelancer",
    price: "$35/hr",
    skills: ["Python", "SQL", "Power BI", "+3"],
    description: "Liam turns data into insights with clean dashboards.",
    profileImage:
      "https://images.unsplash.com/photo-1562572159-4efc207f5aff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vZGVsfGVufDB8fDB8fHww",
  },
  {
    name: "Maya Kapoor",
    title: "WordPress Developer",
    type: "Freelancer",
    price: "$28/hr",
    skills: ["WordPress", "WooCommerce", "SEO", "+2"],
    description: "Maya builds beautiful and fast WordPress sites.",
    profileImage:
      "https://plus.unsplash.com/premium_photo-1675107359685-f268487a3a46?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fG1vZGVsfGVufDB8fDB8fHww",
  },
  {
    name: "James Wilson",
    title: "Backend Engineer",
    type: "Code Factory",
    price: "$55/hr",
    skills: ["Django", "REST API", "PostgreSQL", "+3"],
    description: "James focuses on robust server-side architecture.",
    profileImage:
      "https://images.unsplash.com/photo-1526510747491-58f928ec870f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fG1vZGVsfGVufDB8fDB8fHww",
  },
  {
    name: "Emma Martinez",
    title: "App Developer",
    type: "Freelancer",
    price: "$42/hr",
    skills: ["Flutter", "Firebase", "UI Design", "+2"],
    description: "Emma builds cross-platform apps with Flutter and Firebase.",
    profileImage:
      "https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG1vZGVsfGVufDB8fDB8fHww",
  },
];

var sum = "";
users.forEach(function (elem) {
  sum =
    sum +
    `<div className="flex flex-nowrap overflow-x-auto gap-2 mt-4 text-sm">

        <!-- Start of Card Loop -->
        <!-- Each card below will repeat for your array -->
        <div
          class="bg-white w-full sm:w-[300px] rounded-xl shadow-lg p-6 text-center relative"
        >
          <!-- Status & Rate -->
          <div class="flex justify-between items-center mb-4">
            <span
              class="bg-green-100 text-green-600 text-xs font-semibold px-3 py-1 rounded-full"
            >
              available
            </span>
            <span class="text-gray-700 font-semibold text-sm"
              >${elem.price}<span class="text-xs"></span></span
            >
          </div>

          <!-- Avatar -->
          <img
            src="${elem.profileImage}"
            alt="Wade Wilson"
            class="w-30 h-30 rounded-full mx-auto object-cover shadow mb-4"
          />

          <!-- Name & Role -->
          <h2 class="text-lg font-semibold text-gray-800">${elem.name}</h2>
          <p class="text-sm text-gray-500">${elem.title}</p>

          <!-- Company -->
          <a
            href="#"
            class="text-blue-500 text-sm font-medium inline-flex items-center mt-1 hover:underline"
          >
            <svg
              class="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 10h11M9 21V3m12 6h-4m0 0v12"
              ></path>
            </svg>
            ${elem.type}
          </a>

          <!-- Skills -->
          <div class="flex flex-wrap justify-center gap-2 mt-4 text-sm">
            <span class="px-3 py-1 bg-gray-100 rounded-full">UI</span>
            <span class="px-3 py-1 bg-gray-100 rounded-full">UX</span>
            <span class="px-3 py-1 bg-gray-100 rounded-full">Photoshop</span>
            <span class="px-3 py-1 bg-blue-500 text-white rounded-full"
              >+4</span
            >
          </div>

          <!-- Bio -->
          <p class="text-gray-500 text-sm mt-4 leading-relaxed">
            ${elem.description}
          </p>

          <!-- CTA -->
          <hr class="my-4 border-gray-200" />
          <button class="text-sm text-blue-600 font-bold hover:underline">
            VIEW PROFILE
          </button>
        </div>
        <!-- End of Card -->
      </div>`;
});

document.querySelector("body").innerHTML = sum;
