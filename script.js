const Home = {
  template: `
    <section class="hero">
      <div class="container">

        <div class="search-bar">
          <input type="text" placeholder="Search...">
        </div>

        <h1>
          <span class="light">ASANDA</span>
          <span class="bold">KUMBACA</span>
        </h1>

        <p>
          Inspired by <span>changes</span>, <span>pressure</span>, new 
          <span>challenge</span> and always trying to find ways to 
          <span>work smarter</span>
        </p>

        <router-link to="/portfolio" class="btn-primary">
          VIEW MY PORTFOLIO
        </router-link>

      </div>
    </section>
  `
};

const Services = {
  template: `
    <section class="services">
      <div class="container">

        <h2 class="services-title">SERVICES</h2>

        <div class="services-grid">
          <div class="service-card"></div>
          <div class="service-card"></div>
          <div class="service-card"></div>
          <div class="service-card"></div>
          <div class="service-card"></div>
          <div class="service-card"></div>
        </div>

        <a href="https://web.whatsapp.com/" target="_blank" class="btn-primary">
          WHATSAPP ME
        </a>

      </div>
    </section>
  `
};

const Portfolio = {
  template: `
    <section class="portfolio">

      <h2 class="portfolio-title">
        <span class="tag">&lt;</span>
        <span class="text">PORTFOLIO</span>
        <span class="tag">/&gt;</span>
      </h2>

      <p class="portfolio-subtitle">
        This is a body of work/skills I have learn through my career...
      </p>

      <div class="portfolio-grid">
        <div class="portfolio-item"><img src="./Assets/images/Social-1.png"></div>
        <div class="portfolio-item"><img src="./Assets/images/Social-2.jpg"></div>
        <div class="portfolio-item"><img src="./Assets/images/Social-3.png"></div>
      </div>

    </section>
  `
};

const Brief = {
  data() {
    return {
      form: {
        email: "",
        projectName: "",
        oneLineBrief: "",
        fullBrief: "",
        creativeDirection: "",
        designGuidelines: "",
        references: "",
        targetMarket: "",
        deliverables: "",
        budget: "",
        materialDeadline: "",
        liveDate: "",
        endDate: ""
       },
      errors: {},
      showModal: false
    };
  },

  methods: {
    submitForm() {
      this.errors = {};

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!this.form.email) {
        this.errors.email = "Email is required";
      } else if (!emailPattern.test(this.form.email)) {
        this.errors.email = "Enter a valid email address";
      }

      if (!this.form.projectName) {
        this.errors.projectName = "Project name is required";
      }

      if (Object.keys(this.errors).length === 0) {
        this.showModal = true;
      }
    },

    resetForm() {
      this.form.email = "";
      this.form.projectName = "";
      this.errors = {};
    }
  },
  template: `
    <section class="brief">
      <div class="container">

        <h2>BRIEF</h2>

        <form class="brief-form" @submit.prevent="submitForm">

          <input v-model="form.projectName" placeholder="Project Name">
          <div v-if="errors.projectName" class="error">{{ errors.projectName }}</div>

          <input v-model="form.oneLineBrief" placeholder="One Line Brief">
          <textarea v-model="form.fullBrief" placeholder="Full Brief"></textarea>

          <input v-model="form.creativeDirection" placeholder="Creative Direction">
          <input v-model="form.designGuidelines" placeholder="Design Guidelines">
          <input v-model="form.references" placeholder="References">
          <input v-model="form.targetMarket" placeholder="Target Market">
          <input v-model="form.deliverables" placeholder="Deliverables">
          <input v-model="form.budget" placeholder="Budget">
          <input v-model="form.materialDeadline" placeholder="Material Deadline">
          <input v-model="form.liveDate" placeholder="Live Date">
          <input v-model="form.endDate" placeholder="End Date">

          <input v-model="form.email" placeholder="Email">
          <div v-if="errors.email" class="error">{{ errors.email }}</div>

          <button type="submit" class="btn-secondary">Save Brief</button>
          <button type="button" @click="resetForm" class="btn-secondary">Cancel</button>

          <div v-if="showModal" class="modal-overlay">
            <div class="modal-box">
              <p>Thank you for submitting your brief!</p>
              <button @click="showModal = false">Close</button>
            </div>
          </div>

        </form>

      </div>
    </section>
  `
};

/* ROUTES */
const routes = [
  { path: '/', component: Home },
  { path: '/services', component: Services },
  { path: '/portfolio', component: Portfolio },
  { path: '/brief', component: Brief }
];

/* ROUTER */
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
});

/* APP */
const app = Vue.createApp({});
app.use(router);
app.mount('#app');