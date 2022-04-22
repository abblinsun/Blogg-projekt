<template>
  <div>
    <div
      class="position: absolute; w-full h-300 md:h-500 bg-oceanBlue flex flex-row justify-between"
    >
      <img
        src="https://w0.peakpx.com/wallpaper/652/457/HD-wallpaper-ssbu-one-year-in-nintendo-smash-smash-ultimate-super-smash-bros.jpg"
        alt
        class="md:h-450 h-56 mr-10"
      />
      <div class="w-600 h-400 z-0 mt-20 text-white">
        <h1 class="text-4xl mt-2 mb-10 font-semibold">{{ kalle.title }}</h1>
        <p class=" mr-16">{{ kalle.short }}</p>
        <div class="text-right mt-10">
          <button
            @click="goToPost(kalle.id)"
            class="transform hover:scale-105 hover:bg-white hover:text-oceanBlue px-3 py-2 rounded-3xl border mt-2"
          >
            Go to post
          </button>
        </div>
      </div>
      <div class="w-44 h-96"></div>
    </div>
    <div class="flex flex-wrap flex-row grid-cols-3 justify-center gap-4 -mt-7">
      <div
        @click="goToPost(post.id)"
        v-for="post in posts"
        :key="post.id"
        class="max-w-sm rounded overflow-hidden shadow-lg transform hover:scale-105"
      >
        <img class="w-full h-auto" :src="post.image" alt />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{{ post.title }}</div>
          <p class="text-gray-700 text-base">{{ post.description }}</p>
        </div>
      </div>
    </div>
    <div class="h-10"></div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  async asyncData({ $content }) {
    let posts = await $content("posts")
      .without(["body"])
      .sortBy("id", "desc")
      .fetch();
    let newPost = await $content("posts")
      .without(["body"])
      .sortBy("id", "desc")
      .limit(1)
      .fetch();
    let kalle = newPost[0];
    console.log(newPost[0]);
    return {
      posts,
      kalle,
    };
  },
  methods: {
    goToPost(id) {
      this.$router.push("/game-reviews/" + id);
    },
  },
};
</script>
