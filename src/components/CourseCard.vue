<template>
    <div class="my-main-course">
        <div class="my-course-img">
            <img :src="imgCourse" :alt="courseName">
            <div>
                {{ priceCourse }}
            </div>
        </div>
        <div class="p-4">
            <div class="d-flex align-items-center mt-3">
                <div class="teachr-img">
                    <img :src="teacherImg" :alt="teacherNames">
                </div>
                <div class="mx-2">
                    {{ teacherNames }}
                </div>
            </div>
            <div class="mt-2">
                <h4>{{ courseName }}</h4>
            </div>
            <div class="d-flex mt-2">
                <div>
                    <i class="fa-solid fa-file"></i> <span> {{ lessonNum }}</span>
                </div>
                <div class="mx-3">
                    <i class="fa-solid fa-user"></i> <span>{{ studentNum }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CourseCard',
    props: {
        imgCourse: String,
        priceCourse: String,
        teacherImg: String,
        teacherNames: String,
        courseName: String,
        lessonNum: String,
        studentNum: String
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables.scss' as *;

.my-main-course {
    border-radius: 10px;
    color: $mypurple;
    border-radius: 5px;
    overflow: hidden;

    &:hover {
        background-color: $mywithe;
        box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.147);
    }
}

.my-course-img {
    width: 100%;
    position: relative;
    overflow: hidden;

    div {
        position: absolute;
        top: 0;
        right: 0;
        background-color: $mygreen;
        padding: 5px 15px;
        color: $mywithe;
    }

    img {
        width: 100%;
        height: 100%;
        transition: transform 0.3s ease;
        cursor: pointer;


        &:hover {
            transform: scale(1.1);
        }
    }
}

.teachr-img {
    width: 40px;
    height: 40px;



    img {
        width: 100%;
        overflow: hidden;
        border-radius: 50%;
    }
}
</style>
