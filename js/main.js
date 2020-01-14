// var scene = new THREE.Scene();
// var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
// camera.position.set(0, 0, 15);
// var renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);


// var controls = new THREE.OrbitControls(camera, renderer.domElement);

// var cubes = [];

// for (let i = 0; i < 500; i++) {
//   let cube = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({
//     color: Math.random() * 0x777777 + 0x777777,
//     wireframe: true
//   }));
//   cube.position.set(THREE.Math.randFloatSpread(10), THREE.Math.randFloatSpread(10), THREE.Math.randFloatSpread(10));
//   scene.add(cube);
//   cubes.push(cube);
// }

// var composer = new THREE.EffectComposer(renderer);
// composer.addPass(new THREE.RenderPass(scene, camera));

// var hblur = new THREE.ShaderPass(THREE.HorizontalBlurShader);
// composer.addPass(hblur);

// var vblur = new THREE.ShaderPass(THREE.VerticalBlurShader);
// console.log(vblur);
// vblur.renderToScreen = true;
// composer.addPass(vblur);

// var mouse = new THREE.Vector2();

// window.addEventListener("mousemove", function(event) {
//   mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//   mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
// }, false)

// render();

// function render() {
//   requestAnimationFrame(render);
//   cubes.forEach((cube, index) => {
//     cube.rotation.x += 0.0001 * index;
//     cube.rotation.y += 0.0001 * index;
//     cube.rotation.z += 0.0001 * index;
//   });
//   hblur.uniforms.mouse.value.copy(mouse);
//   vblur.uniforms.mouse.value.copy(mouse);
//   composer.render(scene, camera);
// }