<script>
export default {
    methods: {
        scrollToItem(targetId) {
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center', // або 'center', 'end' для точного позиціювання
                });
            }
        },
    },
};
</script>

<template>

  <!-- <div>
    <ul>
      <li v-for="block in contentData.blocks" :key="block.id">{{ block.title }}</li>
    </ul>
  </div> -->


<section>
    <h3>section Title</h3>
    <div class="container">

        <div class="nav">
            <h1>NAV</h1>
            <nav>
                <a @click="scrollToItem('#block_1')">item 1</a>
                <a @click="scrollToItem('#block_2')">item 2</a>
                <a @click="scrollToItem('#block_3')">item 3</a>
            </nav>
        </div>

        <div class="items">
            <article>
                <div class="block" id="block_1">
                    <div class="main_image">
                        <svg xmlns="http://www.w3.org/2000/svg" width="476" height="383" viewBox="0 0 476 383" fill="none">
                            <path d="M0 0H476V383H0V0Z" fill="#808080" />
                        </svg>
                    </div>

                    <div class="text_1 text">
                        <h2>Item 1</h2>
                        <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has
                            been
                            the
                            i </h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has
                            been
                            the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley
                            of
                            type
                            and scrambled it to make a type specimen book. It has survived not only five centuries,
                            but
                            also
                            the
                            leap into electronic typesetting, remaining essentially unchanged. It was popularised in
                            the
                            1960s
                            with the release of Letraset sheets</p>

                        <button>Read More</button>
                    </div>
                </div>

            </article>

            <article>
                <div class="block" id="block_2">
                    <div class="text_2 text">
                        <h2>Item 2</h2>
                        <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has
                            been
                            the
                            i</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has
                            been
                            the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley
                            of
                            type
                            and scrambled it to make a type specimen book. It has survived not only five centuries,
                            but
                            also
                            the
                            leap into electronic typesetting, remaining essentially unchanged. It was popularised in
                            the
                            1960s
                            with the release of Letraset sheets</p>
                        <button>Read More</button>
                    </div>

                    <div class="main_image">
                        <svg xmlns="http://www.w3.org/2000/svg" width="476" height="383" viewBox="0 0 476 383" fill="none">
                            <path d="M0 0H476V383H0V0Z" fill="#808080" />
                        </svg>
                    </div>
                </div>

            </article>

            <article>
                <div class="block" id="block_3">
                    <div class="main_image">
                        <svg xmlns="http://www.w3.org/2000/svg" width="476" height="383" viewBox="0 0 476 383" fill="none">
                            <path d="M0 0H476V383H0V0Z" fill="#808080" />
                        </svg>
                    </div>
                    <div class="text_3 text">
                        <h2>Item 3</h2>
                        <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has
                            been
                            the
                            i</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has
                            been
                            the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley
                            of
                            type
                            and scrambled it to make a type specimen book. It has survived not only five centuries,
                            but
                            also
                            the
                            leap into electronic typesetting, remaining essentially unchanged. It was popularised in
                            the
                            1960s
                            with the release of Letraset sheets</p>
                        <button>Read More</button>
                    </div>
                </div>
            </article>
        </div>

    </div>
</section>
</template>
