window.onload = () => {
    // Canvas
  const canvas = document.querySelector(".octahedron");

  class Octahedron {
    constructor(x, y, z) {
      // ジオメトリを作成
      let geometry = new THREE.OctahedronGeometry(1, 0);

      // マテリアルを作成
      let material = new THREE.MeshStandardMaterial({
        // color: 0x000000,
        roughness: 0.9,
        metalness: 0.9,
        emissive: 0x17E6E6,
        emissiveIntensity: 0.9,
        transparent: true,
        opacity: 0.9,
        wireframe: true
      });

      // メッシュを作成
      let mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(x, y, z);

      // メッシュの配列を格納するためのプロパティを追加
      this.meshes = [mesh];
    }
  }
    // シーンを作成
    let scene = new THREE.Scene();

    // カメラを作成
    let camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 1000);

    // レンダラーを作成
    let renderer = new THREE.WebGLRenderer({ canvas: canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0xffffff);

    if (window.innerWidth < 768) {
      camera.position.z = 10;
    } else {
      camera.position.z = 5;
    }

    // ライトを追加
    let light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(0, 0, 5);
    scene.add(light);

    let octahedrons = [];

    // Octahedron オブジェクトを複数作成
    for (let i = -1.5; i <= 1.5; i += 1.5) {
      let octahedron = new Octahedron(0, i, 0);
      octahedrons.push(octahedron);
      // meshes 配列の中のすべての Mesh をシーンに追加
      for (let j = 0; j < octahedron.meshes.length; j++) {
        scene.add(octahedron.meshes[j]);
      }
    }

    function animate() {
      requestAnimationFrame(animate);
      // すべての Octahedron オブジェクトに対してアニメーションを実行
      for (let i = 0; i < octahedrons.length; i++) {
        let octahedron = octahedrons[i];
        for (let j = 0; j < octahedron.meshes.length; j++)
        {
          let mesh = octahedron.meshes[j];
          // メッシュを回転
          mesh.rotation.x += 0.005;
          mesh.rotation.y += 0.01;
          // メッシュを拡大縮小
          mesh.scale.set(0.5, 0.5, 0.5);
        }
      }
      // シーンをレンダリング
      renderer.render(scene, camera);
    }

    animate();
}