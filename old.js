// :root {
//     --size-s: 15px;
//     --size-m: 30px;
//     --size-l: 60px;
//     --highlight-color-full: rgba(255, 0, 127, 1);
//     --highlight-color-40:   rgba(255, 0, 127, 0.4);
// }
//
// body {
//     margin:0;
//     padding:0;
// }
//
// #map {
//     position:absolute;
//     top:0;
//     bottom:0;
//     width:100%;
// }
//
// .mapboxgl-canvas {
//     /*opacity: 0.5;*/
// }
//
// .core {
//     background-color: rgba(0, 0, 255, 1);
//     width: 100%;
//     height: 100%;
//     border-radius: 50%;
// }
//
// .label {
//     background-color: rgba(0, 0, 255, 0.4);
//     border-radius: 50%;
//     cursor: pointer;
//     padding: 6px;
//     width: var(--size-m);
//     height: var(--size-m);
// }
//
// .marker {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     font-size: 12px;
//     line-height: 12px;
//     z-index: 1;
//     mix-blend-mode: multiply;
// }
//
// .marker-photo {
//     padding-top: 12px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     font-size: 12px;
//     line-height: 12px;
//     z-index: 999;
// }
//
// .marker-photo .label {
//     padding: 12px;
// }
//
// .amsix {
//     width: var(--size-m);
//     height: var(--size-m);
// }
//
// .marker-photo .amsix::after {
//     top: 0;
//     left: -12px;
//     width: 96px;
//     height: 96px;
// }
//
// .marker .amsix::after {
//     top: 0;
//     left: -12px;
//     width: 56px;
//     height: 56px;
// }
//
// .amsix::after {
//     content: '';
//     border: 1px solid orange;
//     background-color: transparent;
//     position: absolute;
//     border-radius: 50%;
//     mix-blend-mode: multiply;
// }
//
// .phototaken {
//     background-color: var(--highlight-color-40);
//     z-index: 999;
//     width: var(--size-l);
//     height: var(--size-l);
// }
//
// .phototaken .core {
//     background-color: var(--highlight-color-full);
// }
//
// .landingpoint {
//     font-family: Graphik, sans-serif;
//     /* background-color: red; */
//     border-radius: 50%;
//     border: 1px solid rgba(0, 127, 0, 1);
//     cursor: pointer;
//     width: var(--size-l);
//     height: var(--size-l);
//     text-align: center;
//     /* display: flex; */
//     /* align-content: center; */
//     /* align-items: center; */
//     /* vertical-align: middle; */
//     line-height: var(--size-l);
//     font-size: var(--size-m);
//     color: rgba(0, 127, 0, 1);
//     font-weight: 600;
// }
//
// .owner {
//     color: var(--highlight-color-full);
//     text-shadow: -1px -1px 0 #FFF, 1px -1px 0 #FFF, -1px 1px 0 #FFF, 1px 1px 0 #FFF;
//     font-family: Graphik, sans-serif;
//     font-weight: 400;
// }
//
// .modal {
//     position: absolute;
//     background: grey;
//     border-radius: 4px;
//     padding: 4px;
//     line-height: 1.2em;
//     /* transform: none; */
//     top: 3.5em;
// }
//
// .hide {
//     display: none;
// }

// geojson_datacenters.features.forEach((marker) => {
//     const containerEl = document.createElement('div');
//     containerEl.classList.add('marker');
//
//     const markerEl = document.createElement('div');
//     markerEl.classList.add('label');
//     markerEl.setAttribute("data-owner", marker.properties.owner[0]);
//     markerEl.innerHTML = `<div class="core"></div>`;
//
//     containerEl.append(markerEl);
//
//     if(marker.properties.amsix) markerEl.classList.add('amsix');
//
//     if(marker.properties.photo_taken) {
//         markerEl.classList.add('phototaken');
//         containerEl.classList.remove('marker');
//         containerEl.classList.add('marker-photo');
//         const ownerEl = document.createElement('div');
//         ownerEl.classList.add('owner');
//         ownerEl.innerHTML = marker.properties.owner[0];
//
//         containerEl.append(ownerEl);
//     }
//
//     const modalEl = document.createElement('div');
//     modalEl.classList.add('modal');
//     modalEl.classList.add('hide');
//     modalEl.innerHTML = marker.properties.name + ": <br /><br />" +
//         marker.properties.address.street + ", " +
//         marker.properties.address.zipcode + ", " +
//         marker.properties.address.city +
//         ". <br /><br />Source: " + marker.properties.source
//
//     containerEl.append(modalEl);
//
//     new mapboxgl.Marker(containerEl, { offset: [5,-5] })
//         .setLngLat(marker.geometry.coordinates)
//         .addTo(map);
// });
//
// geojson_landingpoints.features.forEach((marker) => {
//     const markerEl = document.createElement('div');
//     markerEl.classList.add('landingpoint');
//     markerEl.innerHTML = 'X';
//
//     new mapboxgl.Marker(markerEl, { offset: [5,-5] })
//         .setLngLat(marker.geometry.coordinates)
//         .addTo(map);
// });

// setTimeout(function(){
//     const allMarkers = document.querySelectorAll(".marker");
//     const allMarkersPhoto = document.querySelectorAll(".marker-photo");
//
//     allMarkers.forEach(function(elem, i){
//         elem.addEventListener('click', function(e){
//             const thisNode = e.currentTarget.childNodes[1];
//             thisNode.classList.toggle("hide");
//         });
//
//         elem.addEventListener('mouseleave', function(e){
//             const thisNode = e.currentTarget.childNodes[1];
//             if(!thisNode.classList.contains('hide')) thisNode.classList.toggle("hide");
//         });
//     });
//
//     allMarkersPhoto.forEach(function(elem, i){
//         elem.addEventListener('click', function(e){
//             const thisNode = e.currentTarget.childNodes[2];
//             thisNode.classList.toggle("hide");
//         });
//
//         elem.addEventListener('mouseleave', function(e){
//             const thisNode = e.currentTarget.childNodes[2];
//             if(!thisNode.classList.contains('hide')) thisNode.classList.toggle("hide");
//         });
//     });
// }, 3000);