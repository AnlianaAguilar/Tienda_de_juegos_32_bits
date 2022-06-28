<template>
    <div>
        <h1>Tienda 32 Bits</h1>
        <game-list></game-list>
    </div>    
</template>

<script>
import GameList from '@/components/GameList.vue'
export default {
    name: 'games-component',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    //methods: {},
    // watch: {},
    components: {
        'game-list':GameList
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>