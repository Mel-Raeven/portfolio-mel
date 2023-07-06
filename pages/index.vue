<template>
  <Navbar></Navbar>
  <section class="top-header">
    <h1 class="top-name">Mel Raeven</h1>
    <img
      class="top-img"
      alt="portret photo of Mel Raeven"
      src="../assets/portfolio_profile.png"
    />
    <p class="top-intro">
      Based in the Netherlands. <br />
      I'm a full stack developer and creative technologist. <br />
      Developing innovative and creative applications that serve all kinds of
      purposes is my passion, so currently I'm living the dream!
    </p>
  </section>
  <article class="contact" id="contact">
    <h1 class="contact-h1">Get in touch with me</h1>
    <p class="contact-intro">
      Want to have a chat with me? <br />
      Contact me on my email or my socials!
    </p>
    <section class="socialmedia">
      <div class="socialmedia-1">
        <a
          class="socialmedia-link"
          href="https://www.linkedin.com/in/mel-raeven-2670ab1a4/s"
          target="_blank"
        >
          <img
            class="socialmedia-icon"
            alt="linkedin"
            src="../assets/linkedin-icon.png"
          />
          <p class="socialmedia-text">
            LinkedIn <span class="red-arrow">&rarr;</span>
          </p>
        </a>
        <a
          class="socialmedia-link"
          href="https://github.com/ScaryDemon"
          target="_blank"
        >
          <img
            class="socialmedia-icon"
            alt="github"
            src="../assets/github-icon.png"
          />
          <p class="socialmedia-text">
            GitHub <span class="red-arrow">&rarr;</span>
          </p>
        </a>
      </div>
      <div class="socialmedia-2">
        <a
          class="socialmedia-link"
          href="https://www.instagram.com/photographicdevelopment/"
          target="_blank"
        >
          <img
            class="socialmedia-icon"
            alt="instagram"
            src="../assets/instagram-icon.png"
          />
          <p class="socialmedia-text">
            Instagram <span class="red-arrow">&rarr;</span>
          </p>
        </a>
        <a
          class="socialmedia-link"
          href="mailto:mel.raeven@gmail.com"
          target="_blank"
        >
          <img
            class="socialmedia-icon"
            alt="email"
            src="../assets/email-icon.png"
          />
          <p class="socialmedia-text">
            Email <span class="red-arrow">&rarr;</span>
          </p>
        </a>
      </div>
    </section>
  </article>
</template>
<script>
import Navbar from "~/components/Navbar.vue";
export default {};
</script>
<style scoped>
@import url("https://use.typekit.net/tag4fkx.css");

:root {
  --heading-font: "reklame-script", sans-serif;
  --heading-weight: 700;
  --normal-font: "franklin-gothic-urw-cond", sans-serif;
  --normal-weight: 400;
  --dark-grey: #1a1d2e;
  --light-grey: #1f2232;
  --white: white;
  --red: #e6323f;
}

/* ------------------------------ top header  */
.top-header {
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.top-name {
  position: absolute;
  top: 45%;
  left: 20px;
  color: white;
  font-family: var(--heading-font);
  font-weight: var(--heading-weight);
  font-size: 80px;
  margin: 0;
  z-index: 99;
  animation: 0.8s ease-out slideUpFade;
}

.top-img {
  height: 100%;
  position: absolute;
  top: 20px;
  animation: 0.8s ease-out slideUpFade;
}

.top-intro {
  position: absolute;
  top: 60%;
  right: 50px;
  margin: 0;
  color: white;
  font-family: var(--normal-font);
  font-weight: var(--normal-weight);
  font-size: 18px;
  width: 30%;
  padding-bottom: 10px;
  border-bottom: 4px solid var(--red);
  animation: 0.8s ease-out slideUpFade;
}

@keyframes slideUpFade {
  0% {
    opacity: 0;
    transform: translateY(50%);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@-webkit-keyframes slideUpFade {
  0% {
    opacity: 0;
    transform: translateY(50%);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ------------------------------------------- contact section  */
.contact {
  width: 100%;
  height: 400px;
  background-color: var(--light-grey);
  position: relative;
  margin: 0;
  margin-bottom: 100px;
  -webkit-box-shadow: 0px 2px 15px 2px rgba(0, 0, 0, 0.19);
  box-shadow: 0px 2px 15px 2px rgba(0, 0, 0, 0.19);
  padding-top: 20px;
}

.contact-h1 {
  color: white;
  font-family: var(--heading-font);
  font-weight: var(--heading-weight);
  font-size: 50px;
  margin: 0;
  margin-left: 40px;
  animation: 0.8s ease-out slideUpFade;
}

@keyframes slideUpFade {
  0% {
    opacity: 0;
    transform: translateY(50%);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@-webkit-keyframes slideUpFade {
  0% {
    opacity: 0;
    transform: translateY(50%);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.contact-intro {
  margin: 0;
  color: white;
  font-family: var(--normal-font);
  font-weight: var(--normal-weight);
  font-size: 18px;
  margin-left: 40px;
  animation: 0.8s ease-out slideUpFade;
}

.socialmedia {
  width: 80%;
  margin-left: 50px;
  margin-top: 46px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  animation: 0.8s ease-out slideUpFade;
}

.socialmedia-1 {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 36px;
}

.socialmedia-link {
  text-decoration: none;
  display: flex;
  align-items: flex-end;
  gap: 20px;
  cursor: pointer;
}

.socialmedia-icon {
  height: 45px;
}

.socialmedia-text {
  margin: 0;
  color: white;
  font-family: var(--normal-font);
  font-weight: var(--normal-weight);
  font-size: 18px;
}

.red-arrow {
  color: var(--red);
}

.socialmedia-2 {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 36px;
}

/* -------------------------------------------- media queries */
@media screen and (max-width: 768px) {
  /* ------------------------------------------- heading section  */
  .top-header {
    overflow: hidden;
  }

  .top-name {
    position: absolute;
    top: 45%;
    left: 20px;
    font-size: 60px;
  }

  .top-intro {
    position: absolute;
    top: 60%;
    right: 50px;
    margin: 0;
    font-size: 16px;
    width: 50%;
    padding-bottom: 10px;
    border-bottom: 4px solid var(--red);
  }

  .top-img {
    height: 100%;
    position: absolute;
    top: 20px;
  }

  /* ------------------------------------------- contact section  */
  .contact {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .contact-h1 {
    font-size: 36px;
    margin-left: 0;
  }

  .contact-intro {
    font-size: 16px;
    margin-left: 0;
  }

  .socialmedia {
    margin-left: 0;
  }

  .socialmedia-text {
    font-size: 16px;
  }

  .socialmedia-icon {
    height: 40px;
  }
}
</style>
