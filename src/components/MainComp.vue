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
            <div class="container">
                <div class="row">
                    <div class="col-12 d-flex justify-content-between  text-center ">
                        <div>
                            <div class="mydata-num">1926</div>
                            <div>
                                <h6>FINISHED SESSIONS</h6>
                            </div>
                        </div>
                        <div>
                            <div class="mydata-num">3.092+</div>
                            <div>
                                <h6>ENROLLED LEARNERS</h6>
                            </div>
                        </div>
                        <div>
                            <div class="mydata-num">200</div>
                            <div>
                                <h6>ONLINE INSTRUCTORS</h6>
                            </div>
                        </div>
                        <div>
                            <div class="mydata-num">100%</div>
                            <div>
                                <h6>SATISFACTION RATE</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="courses">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center ">
                        <h6>CHOOSE WHERE YOU'D LIKE TO BEGIN</h6>
                        <h2>Latest Featured <span>Courses</span></h2>
                    </div>
                </div>
                <div class="row align-items-center  align-content-center">
                    <div class="col-12 col-md-4 mb-5" v-for="(course, index) in coursesData">
                        <CourseCard :imgCourse="course.img" :priceCourse="course.price" :teacherImg="course.teacheImg"
                            :teacherNames="course.teacher" :courseName="course.course" :lessonNum="course.lesson"
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
                        <h2>Learn At Your Own <span> Pace</span></h2>
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
                        <h2>Learn on your <span>mobile </span>anytime!</h2>
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
                <div class="row">
                    <div class="col-12 text-center ">
                        <h6>GET IN CONTACT NOW</h6>
                        <h2>Upcoming <span>Events</span></h2>
                    </div>
                </div>
                <div class="row my-ev-comp">
                    <EventsComp />
                </div>
                <div class="row">
                    <div class="col-12 text-center ">
                        <div class="d-flex align-items-center justify-content-center pt-5 ">
                            <h6>Excited about our event? </h6>
                            <a class="mx-1"> View all events <i class="fa-solid fa-long-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="carusel-comp">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center ">
                        <h6>PEOPLE ARE PRAISING MAXCOACH</h6>
                        <h2>What make they <span>love us?</span></h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 d-flex mt-5">
                        <CaruselComp />
                    </div>
                </div>
            </div>
        </section>
        <section id="cta">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center ">
                        <h6 class="p-2">Start today for getting <span>Online Certification</span> </h6>
                        <h2 class="p-2 mb-5">You can be your own guiding star with our help!</h2>
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
import EventsComp from './EventsComp.vue';
import CaruselComp from './CaruselComp.vue';
export default {
    name: 'MainComp',
    components: {
        CardComp,
        MyButton,
        AccordComp,
        CourseCard,
        EventsComp,
        CaruselComp
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
    margin-top: 80px 0;

    h2 {
        padding: 20px 0;
    }

    .row {
        padding: 40px;
    }

}

#dinamic-numbers {
    background-color: $mybeige;
    margin: 80px 0 0 0;

    .row {
        padding: 40px;
    }

    .mydata-num {
        font-size: 2rem;
        color: $mygreen;
        padding: 20px 0;
        font-weight: 800;
    }

    h6 {
        color: $mypurple;
    }
}

h6 {
    margin-bottom: 0;
    color: $mylightpurple;
}

h2 {
    color: $mypurple;
    font-weight: 600;
    font-size: 3rem;

    span {
        color: $mygreen;
        font-weight: 400;
    }
}



#carusel-comp {
    background-color: $mylightwithe;

    .row {
        padding: 60px 0;
    }
}

#courses {
    background-color: $mylightwithe;

    .row {
        padding: 40px 0;
    }
}

#learn {
    .row {
        padding: 40px 0;
    }
}

#event {
    padding: 80px;

    .row {
        padding: 40px 0;
    }

    a {
        color: $mygreen;
        text-decoration: none;
        cursor: pointer;

        &:hover {
            text-decoration: underline;
        }
    }
}

#cta {
    background-color: $mylightwithe;

    .row {
        padding: 60px 0;
    }
}
</style>