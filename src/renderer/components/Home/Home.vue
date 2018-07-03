<template>
  <main>
    <div id="wrapper" class="d-flex flex-column bg-purple h-100">
       <!-- MOIKANET TOOLBAR -->
      <div id="moikanet-toolbar" class="d-flex justify-content-between bg-black">
        <!-- URL SECTION -->
        <div id="moikanet-url" class="m-0 p-0 col-7">
          <input id="input-url" type="url" name="moikanetUrl" class="m-0 p-0 w-100 h-100"  aria-describedby="moikanetUrl" placeholder="Browse The Web"
          v-model="enterurl" v-on:keyup.enter="submitUrl">
        </div>
        <!-- URL SECTION END -->

        <!-- MOIKANET INFO SECTION -->
        <div id="moikanet-info" class="col-3 fnt-white align-items-center m-0 p-0">
          <p>MoikaNet Info</p>
        </div>
        <div id="moikanet-menu" class="col-1"></div>
        <!-- MOIKANET INFO END -->
      </div>
      <!-- MOIKANET TOOLBAR END -->

      <!-- MOIKANET Browse -->
      <div id="moika-browse" class="h-100">
        <input class="align-middle ml-auto mr-auto d-block" type="text" name="search" placeholder="Search...">
        <!-- <Web :url="outputurl"></Web> -->
      </div>
      <!-- MOIKANET BROWSE END -->
    </div>
  </main>
</template>
<script src="./index.js"/>
<style src="./moikanetStyle.css"/>