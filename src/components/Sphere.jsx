import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// 3D Model
import sphere from '@/assets/models/sphereV5.3.2.glb';

export default function Sphere(props) {
  // state
  // const [isDragging, setIsDragging] = useState(false);
  // const [previousMouseX, setPreviousMouseX] = useState(0);
  // const [previousMouseY, setPreviousMouseY] = useState(0);

  const containerRef = useRef(null);
  const modelRef = useRef(null);
  const mixerRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const backgroundColor = new THREE.Color('rgba(20,20,22)');

    scene.background = backgroundColor;
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 20;
    camera.position.x = 2.0;
    camera.rotation.set(0.0, -0.01, 0.1);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    const loader = new GLTFLoader();
    loader.load(sphere, (gltf) => {
      const model = gltf.scene;
      modelRef.current = model;

      // traverse if you want to visualize inside of the object 
      // ELSE comment out model.traverse (rest of code is fine)
      model.traverse((child) => {
        if (child.isMesh) {
          // display the inner side of object if desired
          child.material.side = THREE.DoubleSide;

          // Shading property
          child.material.emissive.set('rgba(20,20,22)');
        }
      });

      scene.add(model);

      const mixer = new THREE.AnimationMixer(gltf.scene);
      mixerRef.current = mixer;
      const clips = gltf.animations;
      const clip = clips[0];
      const action = mixer.clipAction(clip);
      action.play();

      const animate = () => {
        requestAnimationFrame(animate);

        if (model) {
          model.rotation.z += 0.001;
          model.rotation.y += 0.002;
          model.rotation.x += 0.001;
        }

        if (mixer) {
          mixer.update(0.006);
        }

        renderer.render(scene, camera);
      };
      animate();
    });

    const light = new THREE.DirectionalLight('fff', 5);
    light.position.set(1, 1, 1);
    scene.add(light);
    
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    
      // Update the size of the container
      containerRef.current.style.width = `${width}px`;
      containerRef.current.style.height = `${height}px`;
    };

    window.addEventListener('resize', handleResize);
    

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div className='container' ref={containerRef}></div>;
}
