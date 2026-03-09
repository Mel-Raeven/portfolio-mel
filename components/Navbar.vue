<template>
    <nav class="navbar">
        <NuxtLink to="/" class="nav-name">Mel Raeven</NuxtLink>
        <ul class="nav-list">
            <li class="nav-item">
                <NuxtLink to="https://blog.melraeven.nl" class="nav-text">Blog</NuxtLink>
            </li>
            <li class="nav-item">
                <NuxtLink to="/#contact" class="nav-text">Contact</NuxtLink>
            </li>
        </ul>
        <button class="hamburgermenu" @click="hamburgerMenu">
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
        </button>
    </nav>
</template>
<script>
export default {
    name: "Navbar",
    setup() {
        const route = useRoute()
    },
    data() {
        return {
            hamburgerOpen: false,
        }
    },
    methods: {
        hamburgerMenu() {
            const navBar = document.querySelector('.navbar');
            const navList = document.querySelector('.nav-list');
            const hamburger = document.querySelector('.hamburgermenu');

            if (this.hamburgerOpen == false) {
                // open the hamburger
                navBar.classList.toggle("active");
                navList.classList.toggle("active");
                hamburger.classList.toggle("active");
                return this.hamburgerOpen = true;

            } else if (this.hamburgerOpen == true) {
                // close hamburger
                navBar.classList.remove("active");
                navList.classList.remove("active");
                hamburger.classList.remove("active");
                return this.hamburgerOpen = false;
            }
        }
    }

}
</script>
<style scoped>
@import url("https://use.typekit.net/tag4fkx.css");

:root {
    --heading-font: "reklame-script", sans-serif;
    --heading-weight: 700;
    --normal-font: "franklin-gothic-urw-cond", sans-serif;
    --normal-weight: 400;
    --dark-grey: #1A1D2E;
    --light-grey: #1F2232;
    --white: white;
    --red: #E6323F;
}

.navbar {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
}

.nav-name {
    color: var(--white);
    font-family: var(--normal-font);
    font-weight: var(--normal-weight);
    font-size: 28px;
    text-decoration: none;
    margin-left: 30px;
    margin-top: 5px;
}

.nav-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    gap: 50px;
    margin-right: 30px;
    margin-top: 5px;
}

.nav-item {}

.nav-text {
    color: var(--white);
    font-family: var(--normal-font);
    font-weight: var(--normal-weight);
    font-size: 24px;
    text-decoration: none;
    position: relative;
}

.hamburgermenu {
    background-color: none;
    outline: none;
    border: none;
    background: none;
    display: none;
}

.line {
    width: 30px;
    height: 2px;
    background-color: var(--white);
    margin: 6px auto;
    display: block;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}


.nav-text:after {
    content: '';
    width: 0px;
    height: 1px;
    position: absolute;
    top: 100%;
    left: 0;
    background: var(--red);
    transition: 200ms;
}

.nav-text:hover:after {
    width: 100%;
}

.nav-text:not(:hover):after {
    right: 0;
    left: auto;
}

/* -------------------------------------------- media queries */
@media screen and (max-width: 768px) {
    .nav-list {
        list-style: none;
        margin: 0;
        padding: 0;
        display: none;
        flex-direction: column;
        align-items: flex-end;
        justify-content: space-evenly;
        right: 0;
        top: 40px;
        z-index: 99;
        position: fixed;
        gap: 10px;
        margin-right: 10px;
    }

    .nav-list.active {
        display: flex;
        justify-content: flex-start;
    }

    .hamburgermenu {
        display: block;
    }


    .hamburgermenu.active .line:nth-child(2) {
        opacity: 0;
    }

    .hamburgermenu.active .line:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
    }

    .hamburgermenu.active .line:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
    }

}
</style>
