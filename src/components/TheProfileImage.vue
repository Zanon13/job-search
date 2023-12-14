<script>
export default {
  name: 'TheProfileImage',

  data: () => ({
    imageLink: 'https://github.com/Zanon13.png'
  })
}
</script>

<template>
  <img
    :src="imageLink"
    alt="Imagem de perfil do usuário"
    class="h-8 w-8 rounded-3xl object-contain"
  />
</template>
