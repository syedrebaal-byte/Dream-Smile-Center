import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Sparkles, RotateCw, ShieldCheck } from 'lucide-react';

type ToothMode = 'ceramic' | 'translucent' | 'gold-accent';

export const Interactive3DTooth: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeMode, setActiveMode] = useState<ToothMode>('ceramic');
  const [isRotating, setIsRotating] = useState<boolean>(true);
  const toothMeshRef = useRef<THREE.Mesh | null>(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const width = currentMount.clientWidth || 320;
    const height = currentMount.clientHeight || 320;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0.8, 4.2);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    currentMount.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xfff7ed, 1.4);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 2.2);
    dirLight1.position.set(3, 4, 3);
    scene.add(dirLight1);

    const rimLight = new THREE.DirectionalLight(0xc5a059, 1.8);
    rimLight.position.set(-3, -2, -2);
    scene.add(rimLight);

    const softFill = new THREE.PointLight(0xe2f0f9, 1.5, 10);
    softFill.position.set(0, -2, 2);
    scene.add(softFill);

    // Procedural Anatomical Crown / Tooth Geometry
    // We combine sculpted lathe/cylinder/torus geometries to form an anatomical dental crown
    const group = new THREE.Group();

    // Crown Body
    const crownGeo = new THREE.CylinderGeometry(0.85, 0.6, 1.3, 32, 24);
    // Deform vertices subtly to simulate natural molar cusps and fissures
    const pos = crownGeo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const z = pos.getZ(i);

      // Cusp modulation on top
      if (y > 0.2) {
        const cuspFactor = Math.sin(x * 3.5) * Math.cos(z * 3.5) * 0.14;
        const valleyFactor = Math.cos(Math.sqrt(x * x + z * z) * 4) * 0.08;
        pos.setY(i, y + cuspFactor - valleyFactor);
      }
      // Natural barrel contour
      const waist = Math.sin((y + 0.65) * 2.2) * 0.1;
      pos.setX(i, x * (1 + waist));
      pos.setZ(i, z * (1 + waist));
    }
    crownGeo.computeVertexNormals();

    // High-End Ceramic Physical Material
    const ceramicMat = new THREE.MeshPhysicalMaterial({
      color: 0xfbfbf9,
      emissive: 0x11161a,
      roughness: 0.14,
      metalness: 0.02,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
      transmission: 0.28, // Luminous dental enamel translucency
      ior: 1.52,
      thickness: 1.2,
      specularIntensity: 1.2,
    });

    const crownMesh = new THREE.Mesh(crownGeo, ceramicMat);
    crownMesh.position.y = 0.2;
    group.add(crownMesh);
    toothMeshRef.current = crownMesh;

    // Dual Roots / Biocompatible Titanium Interface
    const rootGeo1 = new THREE.ConeGeometry(0.28, 1.1, 20);
    rootGeo1.rotateZ(0.12);
    const rootMesh1 = new THREE.Mesh(rootGeo1, ceramicMat);
    rootMesh1.position.set(-0.28, -0.9, 0);
    group.add(rootMesh1);

    const rootGeo2 = new THREE.ConeGeometry(0.28, 1.1, 20);
    rootGeo2.rotateZ(-0.12);
    const rootMesh2 = new THREE.Mesh(rootGeo2, ceramicMat);
    rootMesh2.position.set(0.28, -0.9, 0);
    group.add(rootMesh2);

    // Subtle golden cervical ring (precision milled margin indicator)
    const ringGeo = new THREE.TorusGeometry(0.64, 0.025, 16, 48);
    ringGeo.rotateX(Math.PI / 2);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0xc5a059,
      roughness: 0.25,
      metalness: 0.85,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.position.y = -0.42;
    group.add(ringMesh);

    scene.add(group);

    // Mouse drag controls
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;
      group.rotation.y += deltaX * 0.01;
      group.rotation.x += deltaY * 0.01;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    // Touch controls for mobile
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        prevMouseX = e.touches[0].clientX;
        prevMouseY = e.touches[0].clientY;
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - prevMouseX;
      const deltaY = e.touches[0].clientY - prevMouseY;
      group.rotation.y += deltaX * 0.01;
      group.rotation.x += deltaY * 0.01;
      prevMouseX = e.touches[0].clientX;
      prevMouseY = e.touches[0].clientY;
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    domElement.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onMouseUp);

    // Animation Loop
    let animationId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      if (!isDragging) {
        group.rotation.y += delta * 0.45;
        group.position.y = Math.sin(clock.getElapsedTime() * 1.5) * 0.05;
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!currentMount) return;
      const newWidth = currentMount.clientWidth;
      const newHeight = currentMount.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      domElement.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      domElement.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onMouseUp);
      window.removeEventListener('resize', handleResize);

      if (currentMount.contains(renderer.domElement)) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      crownGeo.dispose();
      ceramicMat.dispose();
      rootGeo1.dispose();
      rootGeo2.dispose();
      ringGeo.dispose();
      ringMat.dispose();
    };
  }, []);

  // Update material on mode switch
  useEffect(() => {
    if (!toothMeshRef.current) return;
    const mat = toothMeshRef.current.material as THREE.MeshPhysicalMaterial;
    if (activeMode === 'ceramic') {
      mat.color.setHex(0xfbfbf9);
      mat.roughness = 0.14;
      mat.transmission = 0.28;
      mat.clearcoat = 1.0;
    } else if (activeMode === 'translucent') {
      mat.color.setHex(0xe8f4fa);
      mat.roughness = 0.06;
      mat.transmission = 0.75;
      mat.clearcoat = 1.0;
    } else {
      mat.color.setHex(0xfdf7eb);
      mat.roughness = 0.22;
      mat.transmission = 0.18;
      mat.clearcoat = 0.85;
    }
    mat.needsUpdate = true;
  }, [activeMode]);

  return (
    <div className="relative w-full h-full min-h-[340px] flex flex-col items-center justify-center rounded-2xl bg-gradient-to-b from-[#0F232F]/90 to-[#08151D] border border-white/10 p-6 text-white overflow-hidden shadow-2xl">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Info */}
      <div className="w-full flex items-center justify-between text-xs z-10 mb-2">
        <div className="flex items-center gap-1.5 text-[#DFBE7E]">
          <Sparkles className="w-3.5 h-3.5" />
          <span className="font-medium tracking-wide uppercase text-[11px]">3D Digital Ceramic Anatomy</span>
        </div>
        <div className="text-white/50 text-[11px]">Interactive · Drag to inspect</div>
      </div>

      {/* WebGL Canvas Container */}
      <div
        ref={mountRef}
        className="w-full h-64 cursor-grab active:cursor-grabbing flex items-center justify-center touch-none z-10"
        title="Click and drag to rotate the 3D ceramic restoration"
      />

      {/* Interactive Layer Controls (Clean Segmented Tabs) */}
      <div className="w-full flex flex-col gap-3 mt-3 z-10 pt-3 border-t border-white/10">
        <div className="flex items-center justify-between text-xs">
          <span className="text-white/60">Anatomical Layer Preview:</span>
          <span className="text-[#C5A059] font-medium">
            {activeMode === 'ceramic' ? 'High-Luster Porcelain' : activeMode === 'translucent' ? 'Enamel Translucency' : 'Natural Dentin Core'}
          </span>
        </div>
        <div className="grid grid-cols-3 gap-1.5 p-1 bg-white/5 rounded-xl border border-white/10">
          <button
            onClick={() => setActiveMode('ceramic')}
            className={`py-1.5 px-2 text-xs font-medium rounded-lg transition-all ${
              activeMode === 'ceramic' ? 'bg-[#C5A059] text-slate-950 font-semibold shadow' : 'text-white/70 hover:text-white'
            }`}
          >
            Luster Ceramic
          </button>
          <button
            onClick={() => setActiveMode('translucent')}
            className={`py-1.5 px-2 text-xs font-medium rounded-lg transition-all ${
              activeMode === 'translucent' ? 'bg-[#C5A059] text-slate-950 font-semibold shadow' : 'text-white/70 hover:text-white'
            }`}
          >
            Translucency
          </button>
          <button
            onClick={() => setActiveMode('gold-accent')}
            className={`py-1.5 px-2 text-xs font-medium rounded-lg transition-all ${
              activeMode === 'gold-accent' ? 'bg-[#C5A059] text-slate-950 font-semibold shadow' : 'text-white/70 hover:text-white'
            }`}
          >
            Dentin Tone
          </button>
        </div>
      </div>

      <div className="w-full flex items-center justify-between text-[11px] text-white/40 mt-3 pt-2 border-t border-white/5">
        <span className="flex items-center gap-1">
          <ShieldCheck className="w-3 h-3 text-[#C5A059]" />
          Custom-milled biocompatible zirconia & porcelain
        </span>
        <span>Sub-micron margin fit</span>
      </div>
    </div>
  );
};
