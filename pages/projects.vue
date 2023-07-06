<template>
    <Head>
        <Title>Mel's projects</Title>
        <Meta name="description" content="This is a list of all projects made by Mel Raeven"/>
    </Head>
    <Navbar></Navbar>
    <section class="projects">
        <h1 class="projects-h1"> Projects </h1>
        <div class="project-list">
            <ProjectCard v-for="p in projectList" :key="p.id" :ProjectName="p.name" :IMG="p.img" :ProjectIntro="p.intro"
                :projectcolor="p.color" :sluglink="p.slug">
            </ProjectCard>
        </div>
    </section>
</template>
<script>
import Navbar from '~/components/Navbar.vue';
import ProjectCard from '~/components/ProjectCard.vue';

export default {
    data() {
        return {
            projectList: []
        }
    },
    methods: {
        async getData() {
            const JsonFile = await import('~/src/projects.json');

            this.projectList = JsonFile.projects;
        }
    },
    mounted() {
        this.getData()
    }

}
</script>
<style scoped>
:root {
    --heading-font: "reklame-script", sans-serif;
    --heading-weight: 700;
    --normal-font: "franklin-gothic-urw-cond", sans-serif;
    --normal-weight: 400;
    --dark-grey: #1A1D2E;
    --light-grey: #1F2232;
    --white: white;
    --red: #E6323F;
    --green: #56FC9A;
    --projectcolor: white;
}

.projects {
    width: 100%;
    margin: 0;
    margin-top: 20px;
}

.projects-h1 {
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

.project-list {
    margin-left: 40px;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-bottom: 40px;
}

/* -------------------------------------------- media queries */
@media screen and (max-width: 768px) {
    .projects-h1 {
        font-size: 36px;
    }

    .project-list {
        margin-left: 0;
        margin-top: 30px;
        display: flex;
        gap: 38px;
        margin-bottom: 40px;
        flex-wrap: wrap;
        justify-content: center;
        flex-direction: row;
    }
}
</style>