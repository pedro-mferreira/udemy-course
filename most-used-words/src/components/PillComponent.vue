<template>
  <div class="pill" :style="{backgroundColor: ammountColor}">
    <span class="word">{{ word }}</span>
    <span class="ammount" :style="{color: ammountColor}">{{ ammount }}</span>
  </div>
</template>

<script>
export default {
    props: ["word", "ammount"],
    computed: {
      ammountColor(){
        if(this.ammount > 1000){
          return "#ff061a";
        }else if(this.ammount > 700){
          return "#ff6221"
        
        }else if(this.ammount > 500){
          return "#ff9e31"
        
        }else if(this.ammount > 250){
          return "#f2d040"
        
        }else if(this.ammount > 100){
          return "#00d13c"
        
        }else if(this.ammount > 50){
          return "#0073c3"
        
        }else{
          return "#9175a1"
        }
      }
    }

}
</script>

<style scoped>
.pill{
    margin: 10px;
    height: 55px;
    border-radius: 35px;
    color: #FFF;
    font-size: 1.3rem;
    font-weight: bold;
    display: flex;
    align-items: center;

    width: fit-content;
}

.pill .word{
    margin-left: 15px;
}

.pill .ammount{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #FFF;

    margin: 10px;
    padding: 5px;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>