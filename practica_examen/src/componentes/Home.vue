<script setup>

</script>
<template>
    <div>
        <h1>Benvingut al recomanador d'aliment</h1>
        <h4>TEXT</h4>
        <div class="homeLink">
            <RouterLink to="/food">Recomanador d'aliments</RouterLink>
            <RouterLink to="/training">Simulador d'entrenaments</RouterLink>
        </div>
    </div>
</template>
<style scoped>
    .homeLink{
        
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 50% ; 
}
    
</style>