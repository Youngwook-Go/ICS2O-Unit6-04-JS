// Copyright (c) 2022 Youngwook All rights reserved
//
// Created by: Youngwook
// Created on: OCT 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */

if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit6-04-JS-1/sw.js", {
    scope: "/ICS2O-Unit6-04-JS-1/",
  })
}

// function description
function pageLoad() {
  const params = new URLSearchParams(document.location.search)

  const sphereRadius = params.get("r")
  console.log(sphereRadius)

  const sphereVolume = (4 / 3) * sphereRadius ** 3 * Math.PI
  console.log(sphereVolume.toFixed(2))

  document.getElementById("answer").innerHTML =
    "The radius is : " +
    sphereRadius +
    " cm<br>The volume is : " +
    sphereVolume.toFixed(2) +
    " cm³"
}
