<template>
  <div class="card">
    <div class="title"><strong>Paracetamol</strong></div>
    <div class="description">
      <p>Used to treat fevers and headaches and various other things</p>
    </div>
    <div class="rating">Rating: 4</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drug: {
        id: 1,
        name: "Paracetamol",
        description: "Used to treat fever",
        rating: "5",
      },
    };
  },
};
</script>

<style scoped>
.card {
  width: 60%;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background: yellow;
}

.title {
  padding: 10px;
}
.description {
  padding: 10px;
}
.rating {
  padding: 10px;
}
</style>
