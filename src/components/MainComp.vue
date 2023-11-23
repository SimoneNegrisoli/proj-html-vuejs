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
        <section id="learn">
            <div class="container">
                <div class="row align-items-center ">
                    <div class="col-12 col-md-6">
                        <h6>WHY HESITATE TO REGISTER?</h6>
                        <h2>Learn At Your Own <span>Pace</span></h2>
                        <ul>
                            <li>
                                Select & customize courses to your preferences
                            </li>
                            <li>
                                Change the tutor and make arrangements
                            </li>
                            <li>
                                Participate in events to join others
                            </li>
                            <li>
                                Get the desired certificate delivered at house
                            </li>
                        </ul>
                        <MyButton>Get started for free</MyButton>
                    </div>
                    <div class="col-12 col-md-6">
                        <div>
                            <img src="src/assets/img/home-5-image-01.png" alt="home">
                        </div>
                    </div>
                </div>
                <div class="row align-items-center ">
                    <div class="col-12 col-md-6">
                        <div>
                            <img src="src/assets/img/home-5-image-02.png" alt="home">
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                        <h6>WHY HESITATE TO REGISTER?</h6>
                        <h2>Learn on your <span>mobile</span>anytime!</h2>
                        <p>
                            Save lessons for later and revise or write notes at any time and on multiple devices on your
                            way. Never interfere with activities of enjoyment or other precious moments.
                        </p>
                        <MyButton>Get started for free</MyButton>
                    </div>
                </div>
            </div>
        </section>
        <section id="event">
            <div class="container">
                <div class="row my-ev-comp">
                    <EventsComp />
                </div>
                <div class="row">
                    <div class="col-12 text-center ">
                        <div class="d-flex align-items-center justify-content-center pt-5 ">
                            <h6>Excited about our event?</h6>
                            <a>View all events <i class="fa-solid fa-long-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            carosello
        </section>
        <section id="cta">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center ">
                        <h3>Start today for getting <span>Online Certification</span> </h3>
                        <h2>You can be your own guiding star with our help!</h2>
                        <MyButton>Get started now</MyButton>
                    </div>
                </div>
            </div>
        </section>


    </main>
</template>

<script>
import { cardsData, coursesData } from '../data/store.js';
import CardComp from './CardComp.vue';
import MyButton from './MyButton.vue';
import AccordComp from './AccordComp.vue';
import CourseCard from './CourseCard.vue';
import EventsComp from './EventsComp.vue'
export default {
    name: 'MainComp',
    components: {
        CardComp,
        MyButton,
        AccordComp,
        CourseCard,
        EventsComp
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

#event {
    .EventsComp:hover {
        background-color: rgb(248, 248, 248);
    }

    h6 {
        margin-bottom: 0;
    }
}
</style>