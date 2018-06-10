<template>
  <main>
    <div id="wrapper" class="d-flex">
      <div id="moikanetUrl" class="">
        <input id="inputUrl" type="url" name="moikanetUrl" class="m-0 p-3 w-100"  aria-describedby="moikanetUrl" placeholder="Browse The Web"
        v-model="enterurl" v-on:keyup.enter="submitUrl">
      </div>
      <div id="moikaBrowse">
        <Web :url="outputurl"></Web>
      </div>
    </div>
  </main>
</template>
<script src="./index.js"/>
<style src="./moikanetStyle.css"/>