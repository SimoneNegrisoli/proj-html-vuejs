<template>
    <main>
        <section id="jumbo">
            <div class="container">
                <div class="row align-items-center ">
                    <div class="col-12 col-md-6 ">
                        <div class="mt-5 mb-5 mytext">
                            <h2>Complete Your Dreams in JavaS Programming</h2>
                            <p class="pt-5">
                                Learn any coding program in distance and for a reasonable fee. You don't have to struggle
                                alone, you've got our assistance and help.
                            </p>
                            <MyButton><i class="fa-solid fa-download"></i> Download free
                                E-book</MyButton>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 ">
                        <div class="mt-5 mb-5">
                            <img src="../assets/img/home-5-hero-image.png" alt="work computer">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="start-code">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center ">
                        <h6>START LEARNING CODING LANGUAGES</h6>
                        <h2>Build Your Dream <span>TODAY</span></h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-md-3" v-for="(card, index) in cardsData">
                        <CardComp :imgPath="card.url" :imgTitle="card.title" :textCard="card.text" />
                    </div>
                </div>
                <div class="row my-5  align-items-start ">
                    <div class="col-12 col-md-6">
                        <img src="../assets/img/about-us-03-image-01.png" alt="about us">
                    </div>
                    <div class="col-12 col-md-6">
                        <h6>DREAM WITH <strong>MAXCOACH</strong> </h6>
                        <h2>Construct A <span>Stunning</span> Career Perspective</h2>
                        <AccordComp />
                    </div>
                </div>
            </div>
        </section>
        <section id="dinamic-numbers">
            numeri dinamici
        </section>
        <section id="courses">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center ">
                        <h6>CHOOSE WHERE YOU'D LIKE TO BEGIN</h6>
                        <h2>Latest Featured Courses</h2>
                    </div>
                </div>
                <div class="row align-items-center  align-content-center">
                    <div class="col-12 col-md-4 p-4" v-for="(course, index) in coursesData">
                        <CourseCard :imgCourse="course.img" :priceCourse="course.price" :teacherImg="course.teacher"
                            :teacherName="course.teacherName" :courseName="course.course" :lessonNum="course.lesson"
                            :studentNum="course.student" />
                    </div>
                </div>
            </div>

        </section>
        <section>
            learn
        </section>
        <section>
            event
        </section>
        <section>
            carosello
        </section>
        <section>
            CTA
        </section>


    </main>
</template>

<script>
import { cardsData, coursesData } from '../data/store.js';
import CardComp from './CardComp.vue';
import MyButton from './MyButton.vue';
import AccordComp from './AccordComp.vue';
import CourseCard from './CourseCard.vue';
export default {
    name: 'MainComp',
    components: {
        CardComp,
        MyButton,
        AccordComp,
        CourseCard
    },
    data() {
        return {
            cardsData: cardsData,
            coursesData: coursesData
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables.scss' as *;

main {
    padding-top: 100px;
}

#jumbo {
    background-color: $mybeige;
    background-image: url('../assets/img/jumbo-overlay.svg');

    img {
        width: 560px;
    }

    .mytext {
        width: 70%;

        p {
            line-height: 2rem;
            font-size: 1.2rem;
            font-weight: 400;
            color: $mylightpurple;
        }
    }

    h2 {
        font-size: 48px;
        color: $mypurple;
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
    }
}

#start-code {
    background-color: $mywithe;
}

#dinamic-numbers {
    background-color: $mybeige;
}
</style>