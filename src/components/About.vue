<template>
  <div
    class="py-4 p-st"
    :class="{
      'bg-light': !nightMode,
      'bg-dark2': nightMode,
      'text-light': nightMode,
    }"
  >
    <div class="container">
      <div
        data-aos="fade"
        data-aos-once="true"
        data-aos-duration="1000"
      >
        <span
          class="title text-center"
          :class="{ pgray: !nightMode, 'text-light': nightMode }"
          >about me.</span
        >
        <p 
        class="about-me"
        :class="{ pgray: !nightMode, 'text-light': nightMode }">I'm a Data Engineer with an extreme passion for learning.
Since graduation, I have worked on myself via various online courses to become acquainted with the technical concepts of data science and applied them through a few end-to-end projects. Finishing a highly informative machine learning internship program at Rahnema College was a confidence boost and helped me to better understand the data science problems. Besides ML, I have developed a good set of skills in my last job experiences including system design and DevOps that suit me well for management and implementation of projects from concept to completion.</p>
<p>Technical Skills:</p>
<p>ETL, Apache Airflow, Docker, Google Cloud Platform, Neo4j, AWS</p>
      <button class="btn" @click="open('resume')" ><i class="fa fa-download"></i>
      Download CV
      </button>
      </div>
      <hr
        width="50%"
        :class="{ pgray: !nightMode, 'bg-secondary': nightMode }"
      />
      <div class="row">
        <div class="col-xl-12 col-bg-12 col-md-12 col-sm-12">
          <Timeline :data="experience" :nightMode="nightMode" />
        </div>
        <div class="col-xl-12 col-bg-12 col-md-12 col-sm-12">
          <Timeline :data="education" :nightMode="nightMode" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Timeline from "./helpers/Timeline";
import info from "../../info";

export default {
  name: "About",
  components: {
    Timeline,
  },
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      education: {
        title: "EDUCATION",
        data: info.education,
      },
      experience: {
        title: "EMPLOYMENT",
        data: info.experience,
      },
      resume: info.links.resume
    };
  },
  methods: {
    open(link) {
      switch (link) {
        case "resume":
          window.open(this.resume, "_blank");
          break;
      }
    },
  },
};
</script>

<style scoped>
.title {
  font-size: 30px;
  font-weight: 500;
}

.about-me{
    font-family: Roboto,sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
    color: #555;
    text-align: left;
}

.btn {
  background-color: #6d56c1;;
  border-radius: 22px;
  border-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  padding: 10px 15px 10px 15px;
}

.btn:hover {
  background-color: #6d56c1;
  border-color: #6d56c1;
  color: white;
}

.btn:focus {
  background-color: #6d56c1;
  border-color: #6d56c1;
  color: white;
}
</style>
