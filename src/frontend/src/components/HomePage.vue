<template className="bg-main h-full">
  <div class="bg-gradient-to-br from-main t-gray-900 h-full">
    <!-- Hero section -->
    <div class="relative py-16">

      <div class="mx-auto max-w-7xl px-6 lg:px-8">
      t-10 mx-auto max-w-[90%] text-center flex gap-3 flex-col justify-center items-center">
      <RouterLink v-else :to="{ name: 'admin' }"
                class="rounded-md bg-[#2A2523] px-10 py-3 text-sm font-semibold hover:text-black shadow-sm hover:bg-highlight text-highlight border border-[#8b712f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2A2523]">
                View Forms
              </RouterLink>
            <h1
              class="font-bold mx-auto w-[100%] sm:w-[80%] tracking-tight text-gray-100 xl:w-[100%] xl:text-[5rem] text-6xl">
              Secure Forms on
              <span className="text-highlight">IC</span> with end-to-end Encryption
            </h1>
            <div className="relative">
              <p class="mt-6 text-lg leading-8 text-gray-600">
                Build beautiful, accessible forms on the IC with <span className="text-highlight">End-to-End
                  Encryption</span> where it counts.
                Because protecting your data should be effortless.
              </p>
              <div
                class="absolute h-[100%] rounded-md top-3 mx-auto px-10 xl:-left-2 xl:w-[103%] w-[99%] bg-gradient-to-tr from-[#e8e9d1] to-[#f8f7ff] shadow-black shadow-xl opacity-5">
              </div>
            </div>

            <div class="mt-10 flex items-center justify-center ">
              <button v-if="!authStore.actor" type="button" @click="login"
                class="rounded-md  px-3.5 py-2.5 text-sm font-semibold text-highlight border border-[#8b712f] shadow-sm hover:bg-highlight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                Get started
              </button>

              <h1 class="p-1 mx-auto w-max px-4 rounded-3xl text-white bg-purple-500 text-[1.2rem] mt-10">Made with ❤️
          using <a class="hover:text-black border-black border-none "
            href="https://github.com/dfinity/interface-spec/pull/158">
            VetKD >
          </a>
        </h1>
        <div class="mt-2 flow-root">
          <div class="relative m
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/authStore'
import { useNotificationStore } from '@/stores/useNotificationStore'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()
const notificationStore = useNotificationStore()

const login = async (e: Event) => {
  e.preventDefault()

  try {
    await authStore.login()
    if (await authStore.isAuthenticated()) {
      notificationStore.addNotification({
        title: 'Login Success!',
        message: 'You are now logged in',
        status: 'success'
      })
      // redirect to admin page
      router.push({ name: 'admin' })
    }
  } catch (e: any) {
    // add notification to the user
    notificationStore.addNotification({
      title: 'Login Failed',
      message: e.message,
      status: 'error'
    })
  }
}
</script>
