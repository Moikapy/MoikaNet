<template>
    <!-- URL SECTION -->
    <div id="Toolbar-Url" class="tb-url d-flex col">
        <div class="bg-white d-inline p-0 m-0 h-100 no-border">
            <font-awesome-icon icon="globe" class="h-100 ml-1 mr-1"/>
        </div>
        <input 
        id="input-url" 
        type="url" 
        name="moikanetUrl" 
        class="w-100 h-100 pl-2 no-border" 
        aria-describedby="moikanetUrl" 
        placeholder="Browse The Web"
        v-model="enterurl" 
        v-on:keyup.enter="submitUrl"/>
    </div><!--/ URL SECTION END -->

</template>


<script src="./index.js"/>
<style scoped src="./toolbar-url-style.css"/>