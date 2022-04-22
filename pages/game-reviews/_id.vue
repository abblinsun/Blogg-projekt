<template>
  <div class="w-1/2 mx-auto">
    <div class="h-24" ></div>
    <div class="w-full flex place-content-center mb-8">
      <img class="h-96" :src="post.image"/>
    </div>
    <h1 class="text-5xl mb-8">{{ post.title }}</h1>
    <nuxt-content :document="post"></nuxt-content>
    <div class="h-20"></div>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    let post = await $content("posts/post" + params.id).fetch();
    console.log(post);

    return {
      post,
    };
  },
};
</script>
