<template>
  <div class="about">
    <h1>This is an about page demonstrating the usage of Tailwind in a scoped style tag</h1>
  </div>
</template>

<style scoped>
@import "tailwindcss";
.about {
  @apply min-h-screen flex items-center
}
</style>
