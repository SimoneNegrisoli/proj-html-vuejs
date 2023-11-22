<template>
    <div class="my-main-course">
        <div class="my-course-img">
            <img :src="imgCourse" :alt="courseName">
            <div>
                {{ priceCourse }}
            </div>
        </div>
        <div>
            <div>
                <div>
                    {{ teacherImg }}
                </div>
                <div>
                    {{ teacherName }}
                </div>
            </div>
            <div>
                {{ courseName }}
            </div>
            <div class="d-flex">
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
        teacherName: String,
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
}

.my-course-img {
    width: 100%;
    position: relative;

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
    }
}
</style>