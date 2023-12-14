<script>
import ButtonAction from '@/components/ButtonAction.vue'
import TheProfileImage from '@/components/TheProfileImage.vue'

export default {
  name: 'TheHeader',

  components: {
    ButtonAction,
    TheProfileImage
  },

  data: () => ({
    company: 'Xumingo Careers',
    url: 'https://careers.google.com',
    menuItems: [
      'Times',
      'Locais',
      'Vida na Xumingo',
      'Como contratamos',
      'Estudantes',
      'Empregos'
    ],
    isLoggedIn: false
  }),

  methods: {
    loginUser() {
      this.isLoggedIn = true
    }
  }
}
</script>

<template>
  <header class="w-full text-sm">
    <div class="fixed left-0 top-0 h-16 w-full bg-white">
      <div
        class="flex h-full flex-nowrap border-b border-solid border-brand-gray-1 px-8"
      >
        <a :href="{ url }" class="flex h-full items-center text-xl">
          {{ company }}
        </a>

        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li
              v-for="item in menuItems"
              :key="item"
              class="ml-9 h-full first:ml-0"
            >
              <a href="" class="flex h-full items-center py-2.5">
                {{ item }}
              </a>
            </li>
          </ul>
        </nav>

        <div class="ml-auto flex h-full items-center">
          <TheProfileImage v-if="isLoggedIn" />
          <ButtonAction v-else @click="loginUser" />
        </div>
      </div>
    </div>
  </header>
</template>
