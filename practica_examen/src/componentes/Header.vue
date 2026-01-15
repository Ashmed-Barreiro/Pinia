<script setup>
import { RouterLink } from 'vue-router';


</script>
<template>
    <header>
        <nav>
            <h1>NutriFit Coach</h1>
            <div>
                <RouterLink to="/">Inici</RouterLink>
                <RouterLink to="/food">Obrir Recomanador d'aliments</RouterLink>
                <RouterLink to="/training">Obrir Simulador d'entrenaments</RouterLink>
            </div>
        </nav>
    </header>
</template>
<style scoped>
nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
div{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 40% ; 
}
</style>