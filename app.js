const viewer = new Cesium.Viewer('globe', {
  terrainProvider: Cesium.createWorldTerrain(),
  animation: false,
  timeline: false
});

async function focusLocation(){
  const q=document.getElementById('search').value;
  if(!q) return;
  const r=await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${q}`);
  const d=await r.json();
  if(d.length>0){
    const lat=parseFloat(d[0].lat);
    const lon=parseFloat(d[0].lon);
    viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(lon,lat,1500000)
    });
  }
}
