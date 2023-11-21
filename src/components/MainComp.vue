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
                            <button class="my-button"><i class="fa-solid fa-download"></i> Download free
                                E-book</button>
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
        <section>
            build your dream qui componente card
        </section>
        <section>
            numeri dinamici
        </section>
        <section>
            latest feature qui componete card
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
export default {

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

        .my-button {
            background-color: $mygreen;
            padding: 15px 35px 15px 35px;
            border-radius: 5px;
            color: $mywithe;
            border: none;
            transition: all 0.4s;

            &:hover {
                background-color: $mypurple;
            }
        }
    }
}

h2 {
    font-size: 48px;
    color: $mypurple;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
}
</style>