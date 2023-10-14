<template>
<TheNavigation />
<TheHeader />
<TheSection />
<TheAside />
<TheFooter />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter&family=Montserrat&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter&family=Montserrat&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* nav */

#nav_header {
    width: 1440px;
    height: 101px;
    display: grid;
    grid-template-columns: 1fr 0.4fr;
    align-items: center;
    background: #d9d9d9;
}

#nav_header h1 {
    color: #000;
    font-family: Montserrat;
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 0px 50px;
}

#nav_header nav a {
    margin: 40px 35px;
    text-decoration: none;
    color: #000;
    text-align: center;
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
}

#nav_header nav a:first-child {
    color: #f00;
}

/* header */

.main {
    width: 1440px;
    height: 441px;
    display: flex;
    background: #eee;
    padding: 50px 50px;
}

.main_header {
    margin-right: 120px;

}

.main h2 {
    font-family: "Montserrat", sans-serif;
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 20px 0 10px;
}

.main h3 {
    width: 385px;
    height: 62px;
    color: #000;
    font-family: 'Inter', sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 10px 0;
}

.main p {
    width: 568px;
    height: 70px;
    color: #000;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 10px 0 40px;
}

/* button */

button {
    display: flex;
    width: 201px;
    height: 54px;
    padding: 9px 34px 8px 34px;
    justify-content: center;
    align-items: center;
    background: #F00;
    color: #FFF;
    text-align: center;
    font-family: 'Inter', sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border-style: none;
}

/* section */
.container {
    display: flex;
}

.items {
    width: 1100px;
}

.block {
    height: 634px;
    display: flex;
}

.nav {
    width: 169px;
    height: 1462px;
    margin: 0px 40px;
    text-decoration: none;
    color: #000;
    cursor: pointer;
    transition: color 0.3s;
}

nav>a:hover {
    color: #f00;
}

.nav h1 {
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    margin: 0px 50px 30px 50px;

}

.nav a {
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    display: flex;
    text-decoration: none;
    color: #000;
    padding: 15px 50px 5px 50px;
}

.main_image {
    width: 476px;
    height: 383px;
    margin: 0 50px;
}

.text {
    width: 502px;
    height: 412px;
    margin: 0 30px;
}

.text h2 {
    color: #000;
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
}

.text h3 {
    width: 455px;
    height: 65px;
    color: #000;
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 20px 0;
}

.text p {
    color: #000;
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 145%;
    margin-bottom: 50px;
}

section>h3 {
    color: #000;
    text-align: center;
    font-family: "Montserrat", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 50px;
}

.text_2 {
    margin: 0 50px;
}

/* aside */
.aside {
    display: flex;
    position: relative;
    margin: 60px 110px;
    width: 1250px;
}

.arrow_1 {
    position: absolute;
    top: 200px;
    left: -50px;
}

.arrow_2 {
    position: absolute;
    top: 200px;
    right: -30px;
}

.text_4 {
    width: 506px;
}

.text_4 h2 {
    color: #000;
    font-family: "Montserrat", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.text_4 h3 {
    color: #000;
    font-family: "Montserrat", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: lighter;

}

.text_4 p {
    color: #000;
    font-family: "Montserrat", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.image {
    width: 577px;
    height: 486px;
    margin: 0 40px;
}

.slider {
    display: flex;
    justify-content: center;
    margin: 70px auto;
}

/* footer */

footer {
    display: block;
    width: 1440px;
    height: 99px;
    background: #D9D9D9;
    display: grid;
    grid-template-columns: 2fr 2fr 1fr;
    gap: 10px;
}

.item p {
    color: #000;
    text-align: center;
    font-family: "Montserrat", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding: 50px 100px 0;
}
</style>
