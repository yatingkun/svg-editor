<template>
    <div >图形</div>
</template>
<script>
export default {
    name:"Graphics",
    data(){
        return {

        }
    },
    props:{
        infos:{
            type:Array,
            default:()=>{[]}
        }
    },
    mounted(){
        console.log(this.infos);
    }
}
</script>
<style scoped>

</style>