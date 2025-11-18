<script setup lang="ts">
import * as presenter from "./LoginView.presenter";
import KTextInput from "@/components/KTextInput.vue";
import KButton from "@/components/KButton.vue";

</script>

<template>
  <form class="w-screen h-screen grid place-content-center">
    <!-- Card layout -->
    <div class="border border-gray-100 rounded-xl shadow space-y-2 py-50 px-10">
      <KTextInput
        :oninput="presenter.usernameFieldOnInput"
        label="Username"
        type="username"
        :controller="presenter.usernameField"
      />
      <KTextInput
        :oninput="presenter.passwordFieldOnInput"
        label="Password"
        type="password"
        :controller="presenter.passwordField"
      />
      <div class="pt-7">
        <KButton
          :onclick="presenter.loginButtonOnClick"
          label="Log in"
          :controller="presenter.loginButton"
        />
      </div>
    </div>
  </form>
</template>